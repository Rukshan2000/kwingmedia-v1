import { Globe, Mail, MapPin, Phone, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              alt="Kwings Media Logo"
              className="h-8 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByNHMz6pC4NnDVRyHs1rcIaiX1fDiHEB4B7dNzK8iGz84R1aigfEdf9QonqyT2R2xGQEF61x5azZXhRXrZptkUCwgCJ4TTTiZm_VpJCSxxSeFJTjKAJFEY-TtWOz5Jm1bmpCCUJ5EmB4nmxr4pS8JAyPrxfyUtViAvshYNDuw9kNJgnaKTcsXvI3dXvv40YjzQSKQeffWqBfv8BhqkEw0ZhYhRTtEpIFBVSdhxmCc7BYuXRvmIZQ4JhphNV_JHpvN-VX_DPIXRmbQ"
            />
            <span className="text-slate-900 dark:text-white font-bold">Kwings Media</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Integrated solutions for the modern business landscape. Driving growth through
            innovation and creativity.
          </p>
          <div className="flex gap-4">
            <a
              className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <Globe size={18} />
            </a>
            <a
              className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <Mail size={18} />
            </a>
            <a
              className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <Share2 size={18} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-slate-900 dark:text-white font-bold">Services</h6>
          <nav className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">
              Marketing Strategy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Web Development
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              App Development
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Corporate Events
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-slate-900 dark:text-white font-bold">Company</h6>
          <nav className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">
              About Us
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Our Team
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Careers
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-slate-900 dark:text-white font-bold">Contact</h6>
          <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
            <p className="flex items-start gap-2">
              <MapPin size={18} className="text-primary" />
              123 Digital Square, Innovation City, 90210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              hello@kwingsmedia.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              +1 (555) 000-0000
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-400">
        <p>© 2024 Kwings Media. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
