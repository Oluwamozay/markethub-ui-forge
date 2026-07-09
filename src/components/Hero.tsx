import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=2070&auto=format&fit=crop"
        alt="MarketHub Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">
          Welcome to MarketHub
        </h1>
        <p className="mt-4 max-w-2xl text-lg">
          Your one-stop shop to buy and sell anything. Explore millions of products from thousands of sellers.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground">
            Shop Now
          </Button>
          <Button size="lg" variant="secondary">
            Become a Seller
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
