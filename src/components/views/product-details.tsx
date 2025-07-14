import Image from "next/image";
import type { Product } from "@/lib/data";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

interface ProductDetailsViewProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetailsView({
  product,
  onClose,
}: ProductDetailsViewProps) {
  return (
    <div className="p-4 md:p-8 h-full flex flex-col pb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
          <Icons.close className="h-6 w-6" />
        </Button>
      </div>

      <div className="relative aspect-video mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-lg object-cover"
          data-ai-hint={product.dataAiHint}
        />
      </div>

      <p className="text-muted-foreground mb-6">{product.description}</p>

      <Separator className="mb-6" />

      <div className="flex-1 overflow-y-auto mb-6">
        <h3 className="text-lg font-semibold mb-4">Information</h3>
        <ul className="space-y-4">
          {product.features.map((feature, index) => {
            const IconComponent = Icons[feature.icon];
            return (
              <li key={index} className="flex items-center gap-4">
                {IconComponent && (
                  <IconComponent className="h-6 w-6 text-secondary" />
                )}
                <span>{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <a
        href="https://skatesgarage.cc/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto"
      >
        <Button className="w-full" size="lg">Buy Now</Button>
      </a>
    </div>
  );
}