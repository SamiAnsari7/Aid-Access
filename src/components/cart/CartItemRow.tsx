
"use client";

import React from 'react';
import Image from 'next/image';
import type { CartItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItemRowProps {
  item: CartItem;
  onQuantityChange: (itemId: string, quantity: number) => void; // Mock
  onRemoveItem: (itemId: string) => void; // Mock
}

export function CartItemRow({ item, onQuantityChange, onRemoveItem }: CartItemRowProps) {
  const { toast } = useToast();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      onQuantityChange(item.id, newQuantity); // In a real app, update state
      toast({ title: `Quantity for ${item.name} updated to ${newQuantity} (Mock)` });
    }
  };

  const handleRemove = () => {
    onRemoveItem(item.id); // In a real app, update state
    toast({ title: `${item.name} removed from cart (Mock)`, variant: 'destructive' });
  };
  
  const priceAsNumber = parseFloat(item.price.replace('$', ''));
  const subtotal = !isNaN(priceAsNumber) ? (priceAsNumber * item.quantity).toFixed(2) : 'N/A';


  return (
    <tr className="border-b">
      <td className="p-4">
        <div className="flex items-center space-x-3">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={64}
            height={64}
            className="rounded-md object-cover"
            data-ai-hint={item.imageAiHint}
          />
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.category}</p>
          </div>
        </div>
      </td>
      <td className="p-4 text-center">{item.price}</td>
      <td className="p-4">
        <Input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-20 text-center h-9"
        />
      </td>
      <td className="p-4 text-center">${subtotal}</td>
      <td className="p-4 text-center">
        <Button variant="ghost" size="icon" onClick={handleRemove} aria-label="Remove item">
          <Trash2 className="h-5 w-5 text-destructive" />
        </Button>
      </td>
    </tr>
  );
}
