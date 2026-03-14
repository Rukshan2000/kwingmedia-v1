import { Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
          <Phone size={24} />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Call Us</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          +1 (555) 000-1234
          <br className="hidden sm:block" />
          <span className="block sm:inline">Mon-Fri, 9am - 6pm</span>
        </p>
      </div>
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
          <Mail size={24} />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Email Us</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          hello@kwingsmedia.com
          <br />
          support@kwingsmedia.com
        </p>
      </div>
    </div>
  );
}
