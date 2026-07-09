import React from 'react';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCard from '@/components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Vintage Leather Jacket',
    category: 'Fashion',
    price: '₦45,000',
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Latest Smartphone Model',
    category: 'Electronics',
    price: '₦850,000',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1965&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Modern Sofa Set',
    category: 'Home & Garden',
    price: '₦1,200,000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
  },
    {
    id: 4,
    name: 'Running Sneakers',
    category: 'Sporting Goods',
    price: '₦75,000',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
  },
];

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <section className="container py-12">
        <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
