
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { CartItemRow } from '@/components/cart/CartItemRow';
import { mockCartItems as initialMockCartItems } from '@/constants/cart';
import type { CartItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialMockCartItems);
  const { toast } = useToast();
  const mockShippingCost = 50.00; // Mock shipping cost in Rupees

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₹', '')); // Updated currency symbol
      return total + (isNaN(price) ? 0 : price * item.quantity);
    }, 0).toFixed(2);
  };

  const grandTotalWithShipping = (parseFloat(calculateGrandTotal()) + mockShippingCost).toFixed(2);

  const handleCheckout = () => {
    toast({
      title: "Proceeding to Checkout (Mock)",
      description: `Your order total is ₹${grandTotalWithShipping}. This is a mock action.`, // Updated currency symbol
    });
    // In a real app, navigate to a checkout page or process payment
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Your Shopping Cart"
        description="Review your items and proceed to checkout."
        icon={<ShoppingBag />}
      />

      {cartItems.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-xl font-semibold mb-2">Your cart is empty.</p>
            <p className="text-muted-foreground mb-4">Looks like you haven't added any medicines yet.</p>
            <Button asChild>
              <Link href="/marketplace">Continue Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Product</TableHead>
                      <TableHead className="text-center">Price</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-center">Subtotal</TableHead>
                      <TableHead className="text-center">Remove</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map(item => (
                      <CartItemRow
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemoveItem={handleRemoveItem}
                      />
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{calculateGrandTotal()}</span> 
                </div>
                <div className="flex justify-between">
                  <span>Shipping (Mock)</span>
                  <span>₹{mockShippingCost.toFixed(2)}</span> 
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Grand Total</span>
                  <span>₹{grandTotalWithShipping}</span> 
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button onClick={handleCheckout} className="w-full" size="lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Checkout (Mock)
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/marketplace">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
