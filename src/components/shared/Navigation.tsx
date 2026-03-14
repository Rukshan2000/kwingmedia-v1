'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const logo = '/assets/logoWh.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      submenu: [
        { label: 'Events', href: '/events' },
        { label: 'IT Solutions', href: '/solutions' },
        { label: 'Brand Management', href: '/branding' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 lg:px-20 bg-white dark:bg-background-dark sticky top-0 z-50">
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="h-10 w-10 flex items-center justify-center">
            <img
              alt="Kwings Media Logo"
              className="h-full w-auto"
              src={logo}
            />
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
            KWINGS MEDIA
          </h2>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium cursor-default">
                  {item.label}
                </span>
              )}
              {item.submenu && (
                <motion.div
                  className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg origin-top opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.submenu.map((subitem, index) => (
                    <motion.div
                      key={subitem.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={subitem.href}
                        className="block px-4 py-2 text-slate-700 dark:text-slate-300 text-sm hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
        <motion.button
          className="flex min-w-30 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="md:hidden text-slate-900 dark:text-white hover:text-primary transition-colors"
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-primary/10 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-6 gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors py-2 block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium py-2 block">
                      {item.label}
                    </span>
                  )}
                  {item.submenu && (
                    <motion.div
                      className="pl-4 mt-2 border-l border-slate-200 dark:border-slate-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <motion.div
                          key={subitem.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + subindex * 0.05 + 0.15, duration: 0.3 }}
                        >
                          <Link
                            href={subitem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors py-2 block"
                          >
                            {subitem.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <motion.button
                className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 + 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
