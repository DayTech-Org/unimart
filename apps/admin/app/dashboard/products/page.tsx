"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  cn,
  DataTable,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@unimart/ui";
import { type Product, ProductCard, ProductDetailsSheet } from "@unimart/ui-patterns";
import {
  ArrowUpDown,
  Edit,
  Eye,
  Filter,
  LayoutGrid,
  List,
  MoreVertical,
  Package,
  Plus,
  Search,
  Table as TableIcon,
  Trash2,
} from "lucide-react";
import React from "react";
import DashboardContentLayout from "@/components/layouts/dashboard-content";

const PRODUCTS_DATA: Product[] = [
  {
    id: "PRD-001",
    name: "MacBook Pro M3",
    category: "Electronics",
    price: 245000,
    stock: 12,
    status: "active",
    vendor: "Gizmo Tech",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop",
    description:
      "The latest MacBook Pro with the powerful M3 chip. Features a stunning Liquid Retina XDR display, pro ports, and incredible battery life. Perfect for campus developers and design students.",
  },
  {
    id: "PRD-002",
    name: "Nike Air Max 270",
    category: "Fashion",
    price: 18500,
    stock: 0,
    status: "out_of_stock",
    vendor: "Urban Soles",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
    description:
      "Engineered for style and comfort. The Nike Air Max 270 features Nike's first lifestyle Air unit, with a sleek, clean design that transitions perfectly from class to the field.",
  },
  {
    id: "PRD-003",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 8500,
    stock: 3,
    status: "low_stock",
    vendor: "Gizmo Tech",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&auto=format&fit=crop",
    description:
      "Ultra-responsive mechanical keyboard with premium switches. Customizable RGB lighting and high-quality keycaps for the ultimate typing and gaming experience on campus.",
  },
  {
    id: "PRD-004",
    name: "Leather Journal",
    category: "Stationery",
    price: 2500,
    stock: 45,
    status: "active",
    vendor: "The Script",
    image:
      "https://images.unsplash.com/photo-1544816153-12ad5d7133a2?q=80&w=400&auto=format&fit=crop",
    description:
      "Handcrafted genuine leather journal with premium off-white paper. Ideal for journaling, sketching, or capturing lecture notes. A timeless companion for Daystar students.",
  },
];

export default function ProductCatalogPage() {
  const [viewMode, setViewMode] = React.useState<"grid" | "list" | "table">("grid");
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSheetOpen(true);
  };

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60"
        >
          Product <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar className="size-10 rounded-xl border border-border/10">
            <AvatarImage src={row.original.image} />
            <AvatarFallback>
              <Package className="size-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-black text-foreground">{row.original.name}</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground/40 tracking-wider font-lexend">
              {row.original.id}
            </span>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <Badge variant="outline" className="bg-surface/50 font-bold border-border/10">
          {row.original.category}
        </Badge>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <span className="font-lexend font-black text-foreground">
          Ksh {row.original.price.toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold">{row.original.stock}</span>
          <div className="w-16 h-1 rounded-full bg-border/20 overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                row.original.stock > 10
                  ? "bg-emerald-500 w-full"
                  : row.original.stock > 0
                    ? "bg-amber-500 w-1/3"
                    : "bg-rose-500 w-0"
              )}
            />
          </div>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <Badge
            className={cn(
              "uppercase text-[10px] font-black tracking-widest",
              status === "active" && "bg-emerald-500/10 text-emerald-600 border-none",
              status === "low_stock" && "bg-amber-500/10 text-amber-600 border-none",
              status === "out_of_stock" && "bg-rose-500/10 text-rose-600 border-none"
            )}
          >
            {status.replace("_", " ")}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-surface">
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="gap-2" onClick={() => handleProductClick(row.original)}>
                <Eye className="size-3.5" /> View Details
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-amber-600">
                <Edit className="size-3.5" /> Edit Product
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-rose-600">
                <Trash2 className="size-3.5" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <DashboardContentLayout
      title="Product Catalog"
      description="Manage and track institutional marketplace inventory."
      breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Products" }]}
      actions={
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter className="h-4 w-4" /> Filters
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4" /> Add Product
          </Button>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface/30 p-4 rounded-xl border border-border/5 backdrop-blur-xl">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/40" />
            <Input
              placeholder="Search catalog by name or SKU..."
              className="pl-10 h-10 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)} className="w-fit">
            <TabsList className="bg-background/50 border border-border/10 p-1 rounded-xl">
              <TabsTrigger
                value="grid"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <LayoutGrid className="size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <List className="size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="table"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <TableIcon className="size-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Dynamic Display */}
        {viewMode === "table" ? (
          <div className="bg-surface/30 backdrop-blur-xl border border-border/10 rounded-3xl overflow-hidden">
            <DataTable
              columns={columns}
              data={PRODUCTS_DATA}
              searchKey="name"
              placeholder="Filter products..."
            />
          </div>
        ) : (
          <div
            className={cn(
              "grid gap-6",
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            )}
          >
            {PRODUCTS_DATA.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant={viewMode}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        )}

        <ProductDetailsSheet
          product={selectedProduct}
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          actions={
            <>
              <Button className="flex-1 bg-primary font-black uppercase tracking-widest text-[10px] h-10 rounded-xl">
                Edit Product
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-rose-500/20 text-rose-500 hover:bg-rose-500/5 font-black uppercase tracking-widest text-[10px] h-10 rounded-xl"
              >
                Unpublish
              </Button>
            </>
          }
        />
      </div>
    </DashboardContentLayout>
  );
}
