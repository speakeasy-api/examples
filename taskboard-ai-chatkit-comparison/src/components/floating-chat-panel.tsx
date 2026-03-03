"use client";

import { useState } from "react";
import { MessageCircle, Minus, Square, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewState = "closed" | "minimized" | "expanded";

interface FloatingChatPanelProps {
  title: string;
  children: React.ReactNode;
}

export function FloatingChatPanel({ title, children }: FloatingChatPanelProps) {
  const [view, setView] = useState<ViewState>("closed");

  return (
    <>
      {/* Floating button when closed */}
      {view === "closed" && (
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
          onClick={() => setView("expanded")}
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Minimized: small floating window. Chat content stays mounted (hidden below) to preserve session. */}
      {view === "minimized" && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col w-72 rounded-lg border bg-background shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/50">
            <span className="font-medium text-sm truncate">{title}</span>
            <div className="flex items-center gap-0.5">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => setView("expanded")}
                aria-label="Expand chat"
              >
                <Square className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => setView("closed")}
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-2 cursor-pointer" onClick={() => setView("expanded")}>
            <p className="text-xs text-muted-foreground text-center py-2">
              Click to expand
            </p>
          </div>
        </div>
      )}

      {/* Expanded: modal-like panel. When minimized, same content is rendered but invisible so it stays mounted (preserves ChatKit session). */}
      {(view === "expanded" || view === "minimized") && (
        <div
          className={`fixed inset-0 z-50 flex items-end justify-end p-4 pb-6 md:inset-auto md:bottom-6 md:right-6 md:top-auto md:left-auto md:w-[28rem] md:min-w-[24rem] md:max-h-[calc(100vh-3rem)] md:rounded-lg md:border md:bg-background md:shadow-lg md:flex md:flex-col overflow-hidden ${
            view === "minimized" ? "invisible pointer-events-none" : ""
          }`}
        >
          {/* Backdrop on mobile */}
          <div
            className="absolute inset-0 bg-black/50 md:hidden"
            onClick={() => setView("minimized")}
            aria-hidden
          />
          <div className="relative w-full h-[85vh] md:h-[calc(100vh-3rem)] max-h-[85vh] md:max-h-[calc(100vh-3rem)] flex flex-col rounded-lg border bg-background shadow-lg overflow-hidden md:max-w-[28rem]">
            <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/50 shrink-0">
              <span className="font-semibold text-sm">{title}</span>
              <div className="flex items-center gap-0.5">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={() => setView("minimized")}
                  aria-label="Minimize chat"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={() => setView("closed")}
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden" data-chat-content>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
