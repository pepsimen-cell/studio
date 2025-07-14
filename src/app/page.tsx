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

export default function SkatesGarageApp() {
  const [view, setView] = useState<View>("announcements");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
        <div className="flex items-center justify-center lg:justify-start lg:pl-4 h-20 border-b border-border">
          <Image
            src="https://cdn.discordapp.com/icons/1359271973099667617/a_0829847c5bd8ae1ffd4929f9cd88a4c1.gif?size=1024"
            alt="Skate's Garage Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            unoptimized
          />
          <h1 className="text-2xl font-bold text-primary hidden lg:block ml-2">
            Skate's Garage
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
        <header className="flex md:hidden items-center justify-center h-20 border-b border-border bg-card">
          <div className="flex items-center">
            <Image
              src="https://cdn.discordapp.com/icons/1359271973099667617/a_0829847c5bd8ae1ffd4929f9cd88a4c1.gif?size=1024"
              alt="Skate's Garage Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              unoptimized
            />
            <h1 className="text-2xl font-bold text-primary ml-2">
              Skate's Garage
            </h1>
          </div>
        </header>
        <main className="flex-1 flex overflow-hidden relative">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-24">
            <CurrentView />
          </div>

          <aside
            className={cn(
              "w-full max-w-full md:max-w-md lg:max-w-lg bg-card border-l border-border transition-transform duration-300 ease-in-out overflow-y-auto absolute md:static inset-0 z-20",
              selectedProduct ? "translate-x-0" : "translate-x-full"
            )}
          >
            {selectedProduct && (
              <ProductDetailsView
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </aside>
        </main>

        <footer className="md:hidden flex justify-around p-2 bg-card border-t border-border">
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