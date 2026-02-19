"use client";

import {
  AlertCircle,
  Bell,
  Calendar,
  CaseSensitive,
  CheckSquare,
  ChevronRight,
  Command,
  Copy,
  FileText,
  Ghost,
  Info,
  Layers,
  Layout,
  List,
  Loader2,
  Menu,
  MessageSquare,
  MousePointer2,
  PaintBucket,
  Palette,
  PanelBottom,
  PanelRight,
  PenTool,
  QrCode,
  Store,
  Table,
  Tag,
  TextSelect,
  ToggleLeft,
  ToggleRight,
  Type,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AccordionSection } from "./components/accordion-section";
import { AlertSection } from "./components/alert-section";
import { AvatarSection } from "./components/avatar-section";
import { BadgeSection } from "./components/badge-section";
import { BreadcrumbSection } from "./components/breadcrumb-section";
import { ButtonsSection } from "./components/buttons-section";
import { CardsSection } from "./components/cards-section";
import { CarouselSection } from "./components/carousel-section";
import { CheckboxSection } from "./components/checkbox-section";
import { ColorsSection } from "./components/colors-section";
import { ComboboxSection } from "./components/combobox-section";
import { CommandMenu } from "./components/command-menu";
import { CopywritingSection } from "./components/copywriting-section";
import { DatePickerSection } from "./components/date-picker-section";
import { DialogSection } from "./components/dialog-section";
import { DrawerSection } from "./components/drawer-section";
import { DropdownMenuSection } from "./components/dropdown-menu-section";
import { EmptyStateSection } from "./components/empty-state-section";
import { ExpandingTextareaSection } from "./components/expanding-textarea-section";
import { FileUploadSection } from "./components/file-upload-section";
import { FormSection } from "./components/form-section";
import { HandshakeSection } from "./components/handshake-section";
import { HeroSection } from "./components/hero-section";
import { InputSection } from "./components/input-section";
import { LabelSection } from "./components/label-section";
import { MarketplaceSection } from "./components/marketplace-section";
import { MobileNav } from "./components/mobile-nav";
import { ModalSection } from "./components/modal-section";
import { PopoverSection } from "./components/popover-section";
import { SelectSection } from "./components/select-section";
import { SheetSection } from "./components/sheet-section";
import { Sidebar } from "./components/sidebar";
import { SkeletonSection } from "./components/skeleton-section";
import { SonnerSection } from "./components/sonner-section";
import { SwitchSection } from "./components/switch-section";
import { TableSection } from "./components/table-section";
import { TabsSection } from "./components/tabs-section";
import { TextareaSection } from "./components/textarea-section";
import { ThemesSection } from "./components/themes-section";
import { ToggleSection } from "./components/toggle-section";
import { TooltipSection } from "./components/tooltip-section";
import { TypographySection } from "./components/typography-section";

const uiSections = [
  { id: "overview", label: "Overview", icon: Store },
  { id: "typography", label: "Typography", icon: Type },
  { id: "copywriting", label: "Copywriting", icon: PenTool },
  { id: "colors", label: "Colors", icon: Palette },
  { id: "themes", label: "Themes", icon: PaintBucket },
  { id: "buttons", label: "Buttons", icon: MousePointer2 },
  { id: "input", label: "Input", icon: CaseSensitive },
  { id: "cards", label: "Cards", icon: Layout },
  { id: "tables", label: "Tables", icon: Table },
  { id: "tabs", label: "Tabs", icon: Layers },
  { id: "accordion", label: "Accordion", icon: List },
  { id: "avatar", label: "Avatar", icon: User },
  { id: "dialog", label: "Dialog", icon: MessageSquare },
  { id: "badges", label: "Badges", icon: Tag },
  { id: "alerts", label: "Callouts", icon: AlertCircle },
  { id: "tooltip", label: "Tooltip", icon: Info },
  { id: "breadcrumb", label: "Breadcrumb", icon: ChevronRight },
  { id: "carousel", label: "Carousel", icon: Copy },
  { id: "checkbox", label: "Checkbox", icon: CheckSquare },
  { id: "combobox", label: "Combobox", icon: Command },
  { id: "datepicker", label: "Date Picker", icon: Calendar },
  { id: "drawer", label: "Drawer", icon: PanelBottom },
  { id: "dropdown-menu", label: "Dropdown Menu", icon: Menu },
  { id: "form", label: "Form", icon: FileText },
  { id: "label", label: "Label", icon: Tag },
  { id: "popover", label: "Popover", icon: MessageSquare },
  { id: "textarea", label: "Text Area", icon: Type },
  { id: "expanding-textarea", label: "Expanding Text Area", icon: TextSelect },
  { id: "select", label: "Select", icon: List },
  { id: "sheet", label: "Sheet", icon: PanelRight },
  { id: "skeleton", label: "Skeleton", icon: Loader2 },
  { id: "sonner", label: "Sonner", icon: Bell },
  { id: "switch", label: "Switch", icon: ToggleLeft },
  { id: "toggle", label: "Toggle", icon: ToggleRight },
  { id: "modal", label: "Modal", icon: MessageSquare },
  { id: "file-upload", label: "File Upload", icon: Upload },
];

const patternSections = [
  { id: "empty-state", label: "Empty State", icon: Ghost },
  { id: "marketplace", label: "Marketplace", icon: Store },
  { id: "trade-handshake", label: "Trade Handshake", icon: QrCode },
];

const groups = [
  { title: "UI Components", items: uiSections },
  { title: "UI Patterns", items: patternSections },
];

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronRight className="h-6 w-6 -rotate-90" />
    </button>
  );
}

export default function DesignSystemPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <CommandMenu groups={groups} open={open} onOpenChange={setOpen} />
      <MobileNav groups={groups} onSearchClick={() => setOpen(true)} />
      <Sidebar groups={groups} onSearchClick={() => setOpen(true)} />

      <main className="flex-1 ml-0 md:ml-64 relative">
        <div className="absolute top-0 right-0 -z-10 size-[300px] md:size-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 size-[250px] md:size-[400px] bg-secondary/10 blur-[60px] md:blur-[100px] rounded-full" />

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-16 space-y-16 md:space-y-32">
          <HeroSection />

          <TypographySection />

          <CopywritingSection />

          <ColorsSection />

          <ThemesSection />

          <ButtonsSection />

          <InputSection />

          <CardsSection />

          <TableSection />

          <TabsSection />

          <AccordionSection />

          <AvatarSection />

          <DialogSection />

          <BadgeSection />

          <AlertSection />

          <TooltipSection />

          <BreadcrumbSection />

          <CarouselSection />

          <CheckboxSection />

          <ComboboxSection />

          <DatePickerSection />

          <DrawerSection />

          <DropdownMenuSection />

          <FormSection />

          <LabelSection />

          <PopoverSection />

          <TextareaSection />

          <ExpandingTextareaSection />

          <SelectSection />

          <SheetSection />

          <SkeletonSection />

          <SonnerSection />

          <SwitchSection />

          <ToggleSection />

          <ModalSection />

          <FileUploadSection />

          <EmptyStateSection />

          <MarketplaceSection />

          <HandshakeSection />

          <footer className="py-8 border-t border-border/40 mt-16 md:mt-24 w-full font-lexend">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-0 text-center md:text-left">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground/40">Built by Unimart design team.</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-muted-foreground/40">
                  Site inspired by{" "}
                  <Link
                    href="https://supabase.com"
                    target="_blank"
                    className="hover:text-primary transition-colors underline"
                  >
                    Supabase
                  </Link>{" "}
                  Design System
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <ScrollToTopButton />
    </div>
  );
}
