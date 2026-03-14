import { MapPin, Building2 } from 'lucide-react';

export default function ContactLocation() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
        <MapPin size={28} className="text-primary" />
        Our Headquarters
      </h3>
      <div className="rounded-2xl overflow-hidden h-72 relative bg-slate-200 dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700/50">
        <img
          className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXR4ZYSdJe_3om-mxee3NDbKtd1yZIT_KnVanTwQOfQwLj2hX3WSy9aUjDmQ_gsPbQfNLdjxeGByZxg7tMj2E3GqGEFySfIIGWsklEKRVHLDoROm_nD6AjdMjnuLquMjiNRiVAKlA5Fdy8kobcgJlXYMOj29w2qn4YlzPleEvr496UyEULhhk2Ba2w5pBuv1hAdK9hgNcAoEL368CQvekzAEhow9FsXKoOzSKqsUCn9sq6Dy7HkTi7c2iKBTuXU7Sa-RxUE7Ep7JI"
          alt="Map location"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
            <Building2 size={24} className="text-white" />
          </div>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700/50">
        <span className="font-semibold text-slate-900 dark:text-white">123 Business Avenue, Suite 400</span>
        <br />
        Creative District, New York, NY 10001
      </p>
    </div>
  );
}
