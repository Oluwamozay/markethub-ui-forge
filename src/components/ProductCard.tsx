import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">{product.price}</p>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
