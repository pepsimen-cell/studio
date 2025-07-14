"use client";

import React, { useState } from "react";
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

const SkateIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
  >
    <title>Skates</title>
    <path
      d="M21.92 15.619c-1.808.2-3.468.99-4.838 2.36-1.369 1.36-2.159 3.03-2.36 4.838h-2.31c.2-2.169 1.15-4.178 2.65-5.678s3.509-2.45 5.678-2.65v1.13zm-10.12-3.15c.629.56 1.349 1.01 2.139 1.33V15.5c-1.129-.4-2.169-1.04-3.049-1.92-1.3-1.28-2.21-2.9-2.58-4.72H2.21c.02.09.04.18.06.27.429 1.838 1.359 3.468 2.729 4.798s3.119 2.22 4.989 2.5v2.31c-2.24-.28-4.3-1.29-5.99-2.98S.41 9.249.4 6.999h1.13c.24 2.11 1.25 4.02 2.89 5.48zM6.9 3.399c2.25-.28 4.3-1.29 6-2.98L12 .009l-1.1.41C8.61 2.699 6.27 4.149 3.82 4.149c-1.32 0-2.5-.56-3.37-1.4L-.01 2.289l.39.59c.98 1.48 2.45 2.56 4.14 3.05v2.3h2.31l.07-4.83zm13.12 6.01c.21-1.639-.16-3.3-1.02-4.7-1.3-2.098-3.33-3.518-5.71-4.238v-2.2H11v2.31c2.17.28 4.18 1.29 5.68 2.98s2.32 3.82 2.32 6.13v1.13c.27-.02.54-.04.82-.07z"
      fill="currentColor"
    />
  </svg>
);

export default function SkatesGarageApp() {
  const [view, setView] = useState<View>("announcements");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navItems = [
    { id: "announcements", label: "Announcements", icon: Icons.announcements },
    { id: "changelogs", label: "Changelogs", icon: Icons.changelogs },
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
        <div className="flex items-center justify-center lg:justify-start lg:pl-8 h-20 border-b border-border">
          <SkateIcon />
          <h1 className="text-2xl font-bold text-primary hidden lg:block ml-2">
            Skates
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
        <main className="flex-1 flex overflow-hidden relative">
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
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
              className="flex-col h-16 flex-1 rounded-lg"
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
