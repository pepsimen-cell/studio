"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { AnnouncementsView } from "@/components/views/announcements";
import { ChangelogsView } from "@/components/views/changelogs";
import { StatusView } from "@/components/views/status";
import { ProductsView } from "@/components/views/products";
import { ProductDetailsView } from "@/components/views/product-details";
import { X } from "lucide-react";

type View = "announcements" | "changelogs" | "status" | "products";

export default function FatalServicesApp() {
  const [view, setView] = useState<View>("announcements");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchMoveX, setTouchMoveX] = useState<number | null>(null);

  const navItems = [
    { id: "announcements", label: "Annoucs", icon: Icons.announcements },
    { id: "changelogs", label: "Changes", icon: Icons.changelogs },
    { id: "status", label: "Status", icon: Icons.status },
    { id: "products", label: "Products", icon: Icons.products },
  ];

  const handleProductSelect = (product: Product) => {
    setView("products");
    setSelectedProduct(product);
  };

  const handleNavClick = (newView: View) => {
    setView(newView);
    if (newView !== "products") {
      setSelectedProduct(null);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchMoveX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchMoveX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchMoveX === null) {
      return;
    }

    const swipeDistance = touchMoveX - touchStartX;
    const minSwipeDistance = 75; // Minimum distance for a swipe to be registered

    if (swipeDistance > minSwipeDistance) {
      setSelectedProduct(null);
    }

    // Reset touch coordinates
    setTouchStartX(null);
    setTouchMoveX(null);
  };


  const CurrentView = () => {
    switch (view) {
      case "announcements":
        return <AnnouncementsView />;
      case "changelogs":
        return <ChangelogsView />;
      case "status":
        return <StatusView />;
      case "products":
        return (
          <ProductsView
            onProductSelect={handleProductSelect}
            selectedProductId={selectedProduct?.id}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="w-20 lg:w-64 bg-card flex-col border-r border-border hidden md:flex">
        <div className="flex items-center justify-center lg:justify-start lg:pl-4 h-14 border-b border-border">
          <Image
            src="https://cdn.discordapp.com/icons/1394129470968828135/97bb635450786eed40063ef044813a55.png?size=1024"
            alt="Fatal Services Logo"
            width={28}
            height={28}
            className="h-7 w-7"
            unoptimized
          />
          <h1 className="text-xl font-bold text-foreground hidden lg:block ml-2">
            Fatal Services
          </h1>
        </div>
        <nav className="flex-1 p-2 lg:p-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={view === item.id ? "secondary" : "ghost"}
              className="w-full justify-center lg:justify-start h-12"
              onClick={() => handleNavClick(item.id as View)}
            >
              <item.icon className="h-6 w-6 lg:mr-4" />
              <span className="hidden lg:inline">{item.label}</span>
            </Button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="fixed top-0 left-0 right-0 z-30 flex md:hidden items-center justify-center h-14 border-b border-border bg-card">
          <div className="flex items-center">
            <Image
              src="https://cdn.discordapp.com/icons/1394129470968828135/97bb635450786eed40063ef044813a55.png?size=1024"
              alt="Fatal Services Logo"
              width={28}
              height={28}
              className="h-7 w-7"
              unoptimized
            />
            <h1 className="text-xl font-bold text-foreground ml-2">
              Fatal Services
            </h1>
          </div>
        </header>
        <main className="flex-1 flex overflow-hidden relative">
          <div
            key={view}
            className="flex-1 overflow-y-auto p-4 pt-20 pb-20 md:p-8 md:pt-8 md:pb-8 fade-in-up"
          >
            <CurrentView />
          </div>

          <aside
            className={cn(
              "w-full max-w-full md:max-w-md lg:max-w-lg bg-card border-l border-border transition-transform duration-300 ease-in-out absolute md:static inset-0 z-20",
              selectedProduct ? "translate-x-0" : "translate-x-full"
            )}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {selectedProduct && (
              <div className="fade-in-up h-full">
                <ProductDetailsView
                  product={selectedProduct}
                  onClose={() => setSelectedProduct(null)}
                />
              </div>
            )}
          </aside>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 z-30 md:hidden flex justify-around p-2 bg-card border-t border-border">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={view === item.id ? "secondary" : "ghost"}
              className="flex-col h-16 flex-1 basis-0 rounded-lg"
              onClick={() => handleNavClick(item.id as View)}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </footer>
      </div>
    </div>
  );
}
