"use client";

import { HandshakeQR, HandshakeScanner, HandshakeSuccess } from "@unimart/ui-patterns";
import { QrCode } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function HandshakeSection() {
  return (
    <section id="trade-handshake" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <QrCode className="size-3.5" />
          Pattern: Trade Handshake
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Trade Handshake</h3>
        <p className="text-muted-foreground max-w-2xl font-sans text-lg">
          Secure physical exchange flow between Buyer and Seller using QR codes.
        </p>
      </div>

      <div className="space-y-16">
        <ComponentPreview
          title="Seller QR Code"
          description="Displays a QR code for the buyer to scan."
          code={`import { HandshakeQR } from "@unimart/ui-patterns";

<HandshakeQR
  itemTitle="MacBook Pro M2 14-inch"
  itemPrice="$1,250"
  expiresIn={60}
  qrData="unimart-secure-trade-v1:tx-12345678"
  // uncomment this line on mobile view
  // className="w-full max-w-none h-[100dvh] rounded-none border-0"
/>`}
        >
          <div className="flex justify-center p-8 rounded-3xl bg-background/5 border border-primary/5">
            <HandshakeQR
              itemTitle="MacBook Pro M2 14-inch"
              itemPrice="$1,250"
              expiresIn={60}
              qrData="unimart-secure-trade-v1:tx-12345678"
              // className="w-full max-w-none h-[100dvh] rounded-none border-0"
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Buyer Scanner"
          description="Interface for scanning the seller's QR code."
          code={`import { HandshakeScanner } from "@unimart/ui-patterns";

<HandshakeScanner 
// uncomment this line on mobile view
  // className="w-full max-w-none h-[100dvh] rounded-none border-0"
/>`}
        >
          <div className="flex justify-center p-8 rounded-3xl bg-background/5 border border-primary/5">
            <HandshakeScanner
            // className="w-full max-w-none h-[100dvh] rounded-none border-0"
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Success Confirmation"
          description="displayed after a successful handshake."
          code={`import { HandshakeSuccess } from "@unimart/ui-patterns";

<HandshakeSuccess transactionId="TX-9382-ABCD" 
// uncomment this line on mobile view
  // className="w-full max-w-none h-[100dvh] rounded-none border-0"
/>`}
        >
          <div className="flex justify-center p-8 rounded-3xl bg-background/5 border border-primary/5">
            <HandshakeSuccess
              transactionId="TX-9382-ABCD"
              // className="w-full max-w-none h-[100dvh] rounded-none border-0"
            />
          </div>
        </ComponentPreview>
      </div>
    </section>
  );
}
