import { Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-6 bg-slate-900 rounded-xl border border-white/5 hover:border-primary/20 transition-all flex flex-col gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Phone size={20} />
        </div>
        <h3 className="font-bold text-white">Call Us</h3>
        <p className="text-slate-400 text-sm">
          +1 (555) 000-1234
          <br />
          Mon-Fri, 9am - 6pm
        </p>
      </div>
      <div className="p-6 bg-slate-900 rounded-xl border border-white/5 hover:border-primary/20 transition-all flex flex-col gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Mail size={20} />
        </div>
        <h3 className="font-bold text-white">Email Us</h3>
        <p className="text-slate-400 text-sm">
          hello@kwingsmedia.com
          <br />
          support@kwingsmedia.com
        </p>
      </div>
    </div>
  );
}
