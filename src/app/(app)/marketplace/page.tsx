
"use client";

import React from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { MedicineMarketplaceCard } from '@/components/marketplace/MedicineMarketplaceCard';
import { marketplaceMedicines } from '@/constants/medicines';
import { ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Get unique categories for filtering
const categories = Array.from(new Set(marketplaceMedicines.map(med => med.category)));

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredMedicines = marketplaceMedicines.filter(medicine => {
    const matchesSearchTerm = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="Drugs"
        description="Browse and 'purchase' drugs online. (This is a mock interface)"
        icon={<ShoppingCart />}
      />

      <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 border rounded-lg bg-card shadow">
        <div>
          <Input
            placeholder="Search drugs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10"
          />
        </div>
        <div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMedicines.map(medicine => (
            <MedicineMarketplaceCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">No drugs found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
