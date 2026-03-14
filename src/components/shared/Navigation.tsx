'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Events', href: '/events' },
    { label: 'IT Solutions', href: '/solutions' },
    { label: 'Brand Management', href: '/branding' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 lg:px-20 bg-white dark:bg-background-dark sticky top-0 z-50">
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="h-10 w-10 flex items-center justify-center">
            <img
              alt="Kwings Media Logo"
              className="h-full w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH2N323NkWJ8c9GcbXTz336eaXWrbFpQK8dpZExEXW6dh8gyh7oeOyuPANFv3Nct7B7hEl0k5Bx5Ch2BQVY1JSnNCLSYbMWAAp0qY-tXSqL1G9dezX9oqhxwobddB-qiV4dOxVdUI00qJoKna5DeQgTiRSJfB_tqj5pt9ZQf4tbT-27h9-uv7k92Pnutejra8gXA_QQWsp8pr70bs3-TceLydd1gPOX53vq_jzIrXnF5S1LcSTwdwk7Eycx_alo8PujM4oCBZGoFo"
            />
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
            Kwings Media
          </h2>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          Get a Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-slate-900 dark:text-white hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-primary/10 md:hidden">
          <nav className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-4">
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
