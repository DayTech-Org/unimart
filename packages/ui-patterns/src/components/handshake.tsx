import * as React from "react";
import { cva } from "class-variance-authority";
import { cn, Button } from "@unimart/ui";
import {
  CheckCircle2,
  QrCode,
  Scan,
  Flashlight,
  FlashlightOff,
  Star,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

// --- Handshake QR (Giver View) ---
interface HandshakeQRProps extends React.HTMLAttributes<HTMLDivElement> {
  itemTitle: string;
  itemPrice: string;
  expiresIn?: number; // seconds, default 60
  isExpired?: boolean;
}

function HandshakeQR({
  className,
  itemTitle,
  itemPrice,
  expiresIn = 60,
  isExpired = false,
  ...props
}: HandshakeQRProps) {
  const [timeLeft, setTimeLeft] = React.useState(expiresIn);

  React.useEffect(() => {
    if (isExpired) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isExpired]);

  const progress = (timeLeft / expiresIn) * 100;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-between rounded-[2.5rem] border border-border bg-card p-8 text-center shadow-sm overflow-hidden min-h-[480px] w-full max-w-sm mx-auto space-y-4",
        className,
      )}
      {...props}
    >
      <div className="w-full space-y-1">
        <h3 className="text-lg font-heading font-bold text-foreground">
          Scan to Confirm
        </h3>
        <p className="text-sm text-muted-foreground">
          Show this code to the buyer
        </p>
      </div>

      <div className="relative group p-8 bg-card rounded-3xl shadow-inner border-2 border-primary/10">
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 rounded-3xl z-10",
            isExpired || timeLeft === 0
              ? "opacity-100"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="text-center p-4">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-xl font-bold gap-2"
              onClick={() => setTimeLeft(expiresIn)}
            >
              <RefreshCcw />
            </Button>
          </div>
        </div>
        {/* Placeholder for QR Code - typically you'd use a library like qrcode.react */}
        <QrCode className="w-48 h-48 text-foreground" strokeWidth={1.5} />
        <div className="absolute inset-0 border-[3px] border-dashed border-primary/30 rounded-3xl" />
      </div>

      <div className="w-full space-y-4">
        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Item
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Price
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-foreground truncate max-w-[180px]">
              {itemTitle}
            </span>
            <span className="font-bold text-primary text-lg">{itemPrice}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-muted-foreground">
            <span>Code expires in</span>
            <span
              className={cn(
                "tabular-nums",
                timeLeft < 10 && "text-destructive",
              )}
            >
              00:{timeLeft.toString().padStart(2, "0")}
            </span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full bg-primary transition-all duration-1000 ease-linear",
                timeLeft < 10 && "bg-destructive",
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Handshake Scanner (Taker View) ---
interface HandshakeScannerProps extends React.HTMLAttributes<HTMLDivElement> {
  isScanning?: boolean;
}

function HandshakeScanner({
  className,
  isScanning = true,
  ...props
}: HandshakeScannerProps) {
  const [torchOn, setTorchOn] = React.useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[2.5rem] border border-border bg-card overflow-hidden min-h-[480px] w-full max-w-sm mx-auto",
        className,
      )}
      {...props}
    >
      {/* Mock Camera Feed */}
      <div className="absolute inset-0 bg-card">
        {/* Simulated camera noise/gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-foreground/10 opacity-60" />

        {/* Simulated camera content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Scan className="w-64 h-64 text-primary animate-pulse" />
        </div>
      </div>

      {/* Header Controls */}
      <div className="relative z-10 flex justify-between items-center p-6 text-foreground">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground border border-border/10"
          onClick={() => setTorchOn(!torchOn)}
        >
          {torchOn ? (
            <Flashlight className="w-5 h-5 fill-current" />
          ) : (
            <FlashlightOff className="w-5 h-5" />
          )}
        </Button>
        <span className="font-semibold text-sm tracking-wide bg-background/20 backdrop-blur-md px-3 py-1 rounded-full border border-border/10">
          Scan QR Code
        </span>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Target Frame (Mango Aesthetic) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 gap-8">
        <div className="relative w-64 h-64">
          {/* Corner Markers */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-3xl shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-3xl shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-3xl shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-3xl shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

          {/* Scanning Line Animation */}
          {isScanning && (
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/80 shadow-[0_0_20px_rgba(var(--primary),0.8)] animate-[scan_2s_ease-in-out_infinite] rounded-full" />
          )}
        </div>

        {/* Instructions placed below the frame with space */}
        <p className="text-foreground text-xs font-medium text-center max-w-56 bg-background/40 px-4 py-2 leading-relaxed">
          Align the QR code within the frame to confirm receipt
        </p>
      </div>
    </div>
  );
}

// --- Handshake Success (Shared View) ---
interface HandshakeSuccessProps extends React.HTMLAttributes<HTMLDivElement> {
  transactionId: string;
  onRate?: (rating: number) => void;
}

function HandshakeSuccess({
  className,
  transactionId,
  onRate,
  ...props
}: HandshakeSuccessProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-[2.5rem] border border-border bg-card/50 backdrop-blur-xl overflow-hidden min-h-[480px] w-full max-w-sm mx-auto p-8 text-center",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-card" />

      <div className="relative z-10 flex flex-col items-center space-y-6 animate-in zoom-in-95 duration-500">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
          <div className="relative h-24 w-24 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <CheckCircle2
              className="h-12 w-12 text-primary-foreground"
              strokeWidth={3}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-heading font-bold text-foreground">
            Trade Confirmed!
          </h3>
          <p className="text-muted-foreground">Transaction #{transactionId}</p>
        </div>

        <div className="py-4 w-full">
          <div className="bg-background/60 backdrop-blur-md rounded-2xl p-4 border border-border/50">
            <p className="text-sm font-medium mb-3">Rate your experience</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-transform focus:outline-none"
                  onClick={() => onRate?.(star)}
                >
                  <Star className="w-8 h-8 fill-current opacity-20 hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <Button className="flex-1" variant="default">
            Done
          </Button>
          <Button size="icon" variant="outline" className="rounded-full">
            <ShieldCheck className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HandshakeQR, HandshakeScanner, HandshakeSuccess };
