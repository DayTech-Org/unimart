"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { Search } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  placeholder?: string;
  className?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  placeholder = "Search...",
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className={cn("space-y-4", className)}>
      {searchKey && (
        <div className="flex items-center relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />

          <Input
            placeholder={placeholder}
            value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
            className="h-9 w-64 rounded-xl bg-surface/50 border-border pl-9 pr-3 text-xs focus-visible:ring-primary/20"
          />
        </div>
      )}
      <div className="rounded-xl border border-border/40 bg-surface/5 overflow-hidden">
        <Table>
          <TableHeader className="bg-surface/10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent border-border/20">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="py-4 px-6 text-[10px] uppercase text-muted-foreground/60"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-border/10 hover:bg-surface/10 transition-colors group"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4 px-6">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground/40 text-xs font-medium"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border-border/40 bg-surface/10 hover:bg-surface/20 hover:text-foreground text-muted-foreground/50 transition-all  text-xs  px-4"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border-border/40 bg-surface/10 hover:bg-surface/20 hover:text-foreground text-muted-foreground/50 transition-all  text-xs  px-4"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
