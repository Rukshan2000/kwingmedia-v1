'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const logo = '/assets/logoWh.png';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    submenu: [
      { label: 'Events', href: '/events' },
      { label: 'IT Solutions', href: '/solutions' },
      { label: 'Brand Management', href: '/branding' },
        { label: 'Audio & Video Studio', href: '/studio' },
      
    ],
  },
  { label: 'Contact', href: '/contact' },
];

// ── Desktop dropdown (hover-safe with pointer tracking) ──────────────────────
function DesktopDropdown({ item }: { item: (typeof menuItems)[number] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      {item.href ? (
        <Link
          href={item.href}
          className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
        >
          {item.label}
        </Link>
      ) : (
        <button className="text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-1 cursor-default select-none">
          {item.label}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.span>
        </button>
      )}

      <AnimatePresence>
        {item.submenu && open && (
          <motion.div
            className="absolute left-0 top-full pt-2 w-52 z-50"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden">
              {item.submenu.map((sub, i) => (
                <motion.div
                  key={sub.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={sub.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/sub"
                  >
                    {sub.label}
                    <ArrowRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-primary"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Mobile drawer (slides in from RIGHT) ────────────────────────────────────
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.aside
            key="drawer"
            className="fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col bg-white dark:bg-black shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 34 }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                Navigation
              </span>
              <motion.button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors"
                whileTap={{ scale: 0.88 }}
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 260, damping: 26 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all group"
                    >
                      {item.label}
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary"
                      />
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {item.submenu && expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 pl-4 mt-1 mb-2 border-l-2 border-primary/20 flex flex-col gap-1">
                              {item.submenu.map((sub, si) => (
                                <motion.div
                                  key={sub.href}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: si * 0.05 }}
                                >
                                  <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
                                  >
                                    {sub.label}
                                    <ArrowRight
                                      size={12}
                                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                                    />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTA at bottom */}
            <div className="px-6 py-6 border-t border-slate-100 dark:border-slate-800">
              <motion.button
                className="w-full flex items-center justify-center gap-2 rounded-xl h-12 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
              >
                Get a Quote
                <ArrowRight size={15} />
              </motion.button>
              <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-3">
                Kwings Media · Creative Studio
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Main Navigation ──────────────────────────────────────────────────────────
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 lg:px-20 bg-white dark:bg-background-dark sticky top-0 z-50">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 flex items-center justify-center">
              <img alt="Kwings Media Logo" className="h-full w-auto" src={logo} />
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
              KWINGS MEDIA
            </h2>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            {menuItems.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>
          <motion.button
            className="flex min-w-[7.5rem] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-white hover:bg-primary hover:text-white transition-colors"
          aria-label="Open menu"
          whileTap={{ scale: 0.88 }}
        >
          <Menu size={20} />
        </motion.button>
      </header>

      {/* Right-to-left mobile drawer */}
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}