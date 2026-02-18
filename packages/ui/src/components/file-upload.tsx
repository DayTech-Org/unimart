"use client";

import * as React from "react";
import { CloudUpload, File as FileIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./button";

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  accept?: string; // simple string check for now, can be array of mime types
  maxSize?: number; // bytes
  className?: string;
  onUploadError?: (error: Error) => void;
}

export function FileUpload({
  onFilesSelected,
  maxFiles = 1,
  accept,
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  onUploadError,
}: FileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      // Size check
      if (file.size > maxSize) {
        onUploadError?.(new Error(`File ${file.name} is too large`));
        return false;
      }

      // Type check (basic implementation)
      if (accept) {
        // e.g. "image/*" or ".pdf,.png"
        // This is a simplified check. For robust check we'd need more logic.
        // For now relying on input accept too.
        // If accept has wildcard like image/*
        if (accept.endsWith("/*")) {
          const type = accept.split("/")[0];
          if (!file.type.startsWith(type)) {
            onUploadError?.(new Error(`File ${file.name} has invalid type`));
            return false;
          }
        } else if (
          !accept.includes(file.type) &&
          !accept.includes(`.${file.name.split(".").pop()}`)
        ) {
          onUploadError?.(new Error(`File ${file.name} has invalid type`));
          return false;
        }
      }
      return true;
    });
    return validFiles;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      const validFiles = validateFiles(droppedFiles);

      // Handle max files
      const totalFiles = [...files, ...validFiles];
      if (totalFiles.length > maxFiles) {
        // Take only the allowed amount
        const slice = totalFiles.slice(0, maxFiles);
        setFiles(slice);
        onFilesSelected(slice);
      } else {
        setFiles(totalFiles);
        onFilesSelected(totalFiles);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = validateFiles(selectedFiles);

      const totalFiles = [...files, ...validFiles];
      if (totalFiles.length > maxFiles) {
        const slice = totalFiles.slice(0, maxFiles);
        setFiles(slice);
        onFilesSelected(slice);
      } else {
        setFiles(totalFiles);
        onFilesSelected(totalFiles);
      }
    }
  };

  const removeFile = (indexToRemove: number) => {
    const newFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(newFiles);
    onFilesSelected(newFiles);
    // Reset input value to allow selecting same file again if needed
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      <motion.div
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl transition-colors cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          dragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/25",
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={maxFiles > 1}
          onChange={handleChange}
          accept={accept}
        />

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="p-4 rounded-full bg-background shadow-sm border border-border">
            <CloudUpload className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              <span className="text-primary cursor-pointer hover:underline">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-muted-foreground uppercase">
              SVF, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>

        {dragActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/10 flex items-center justify-center backdrop-blur-[1px]"
          >
            <p className="text-lg font-semibold text-primary">
              Drop files here
            </p>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-2">
              <span>
                {files.length} file{files.length > 1 ? "s" : ""} selected
              </span>
              <span>
                Total size:{" "}
                {(
                  files.reduce((acc, f) => acc + f.size, 0) /
                  1024 /
                  1024
                ).toFixed(2)}{" "}
                MB
              </span>
            </div>
            {files.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-background group"
              >
                <div className="flex flex-1 items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-md bg-muted flex-shrink-0">
                    <FileIcon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium truncate">
                      {file.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors ml-2 shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Removing file at index:", index);
                    // Create a new array excluding the file at the specified index
                    const newFiles = [...files];
                    newFiles.splice(index, 1);
                    setFiles(newFiles);
                    onFilesSelected(newFiles);
                    // Reset input value to allow selecting same file again if needed
                    if (inputRef.current) {
                      inputRef.current.value = "";
                    }
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
