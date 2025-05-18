
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { MarketplaceMedicine } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCartIcon } from 'lucide-react';

interface MedicineMarketplaceCardProps {
  medicine: MarketplaceMedicine;
}

export function MedicineMarketplaceCard({ medicine }: MedicineMarketplaceCardProps) {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: `${medicine.name} added to cart (Mock)`,
      description: `Price: ${medicine.price}`,
    });
    // In a real app, this would involve cart state management
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <div className="aspect-video w-full relative overflow-hidden">
          <Image
            src={medicine.imageUrl}
            alt={medicine.name}
            fill
            className="object-cover"
            data-ai-hint={medicine.imageAiHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1">{medicine.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-1">{medicine.category}</p>
        <CardDescription className="text-sm mb-2 min-h-[60px]">{medicine.description}</CardDescription>
        <p className="text-lg font-semibold text-primary">{medicine.price}</p>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCartIcon className="mr-2 h-4 w-4" />
          Add to Cart (Mock)
        </Button>
      </CardFooter>
    </Card>
  );
}
