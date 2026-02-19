"use client";

import { FileUpload, toast } from "@unimart/ui";
import { Upload } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function FileUploadSection() {
  const handleFilesSelected = (files: File[]) => {
    console.log("Files selected:", files);
    toast.success(`${files.length} file(s) selected`);
  };

  return (
    <section id="file-upload" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Upload className="size-3.5" />
          Component: File Upload
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">File Upload</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A robust drag and drop file upload component with micro-interactions and validation.
        </p>
      </div>

      <ComponentPreview
        title="Dropzone Uploader"
        description="A file upload area that accepts drag and drop."
        code={`import { FileUpload, toast } from "@unimart/ui";

const handleFilesSelected = (files: File[]) => {
  toast.success(\`\${files.length} file(s) selected\`);
};

<div className="max-w-md mx-auto w-full">
  <FileUpload
    onFilesSelected={handleFilesSelected}
    onUploadError={(error) => toast.error(error.message)}
    maxFiles={3}
    accept="image/*"
    maxSize={1024 * 1024 * 2} // 2MB
  />
</div>`}
      >
        <div className="flex justify-center">
          <div className="max-w-md mx-auto w-full">
            <FileUpload
              onFilesSelected={handleFilesSelected}
              onUploadError={(error) => toast.error(error.message)}
              maxFiles={3}
              accept="image/*"
              maxSize={1024 * 1024 * 2} // 2MB
            />
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
