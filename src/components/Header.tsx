import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <Search />
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <select className="bg-transparent text-sm font-medium">
              <option>EN</option>
              <option>PID</option>
              <option>YOR</option>
              <option>HAU</option>
              <option>IGB</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
