import Image from "next/image";
import { products, type Product } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface ProductsViewProps {
  onProductSelect: (product: Product) => void;
  selectedProductId?: string;
}

export function ProductsView({ onProductSelect, selectedProductId }: ProductsViewProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className={cn(
              "cursor-pointer hover:border-primary transition-colors",
              selectedProductId === product.id && "border-primary"
            )}
            onClick={() => onProductSelect(product)}
          >
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-md object-cover"
                  data-ai-hint={product.dataAiHint}
                />
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
