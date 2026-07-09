import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-bold">MarketHub</h3>
            <p className="text-sm mt-2">
              Buy and sell all kinds of things.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Categories</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Fashion</a></li>
              <li><a href="#" className="hover:underline">Home & Garden</a></li>
              <li><a href="#" className="hover:underline">Motors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">About Us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About MarketHub</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} MarketHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
