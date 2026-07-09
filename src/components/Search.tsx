import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className="relative flex-1 max-w-lg">
      <Input
        type="search"
        placeholder="Search for products, brands and categories"
        className="w-full rounded-full border-2 border-primary bg-transparent py-2 pl-12 pr-4 text-primary placeholder-primary/70 focus:border-primary-focus focus:outline-none"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
};

export default Search;
