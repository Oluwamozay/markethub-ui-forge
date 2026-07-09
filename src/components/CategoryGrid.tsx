import React from 'react';
import { Car, Shirt, Laptop, Home, ToyBrick, MoreHorizontal } from 'lucide-react';

const categories = [
  { name: 'Motors', icon: <Car /> },
  { name: 'Fashion', icon: <Shirt /> },
  { name: 'Electronics', icon: <Laptop /> },
  { name: 'Home & Garden', icon: <Home /> },
  { name: 'Toys & Hobbies', icon: <ToyBrick /> },
  { name: 'Collectibles & Art', icon: <MoreHorizontal /> },
  { name: 'Sporting Goods', icon: <MoreHorizontal /> },
  { name: 'Health & Beauty', icon: <MoreHorizontal /> },
  { name: 'Industrial Equipment', icon: <MoreHorizontal /> },
  { name: 'Books, Movies & Music', icon: <MoreHorizontal /> },
  { name: 'Deals & Savings', icon: <MoreHorizontal /> },
  { name: 'Groceries', icon: <MoreHorizontal /> },
  { name: 'Real Estate', icon: <MoreHorizontal /> },
  { name: 'Services', icon: <MoreHorizontal /> },
  { name: 'Pets', icon: <MoreHorizontal /> },
  { name: 'Baby', icon: <MoreHorizontal /> },
];

const CategoryCard = ({ category }) => (
  <a href="#" className="group flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 text-card-foreground transition-all hover:shadow-md hover:-translate-y-1">
    <div className="text-primary group-hover:text-primary-focus">
      {React.cloneElement(category.icon, { size: 32 })}
    </div>
    <p className="text-center text-sm font-medium">{category.name}</p>
  </a>
);

const CategoryGrid = () => {
  return (
    <section className="container py-12">
      <h2 className="mb-8 text-2xl font-bold">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
