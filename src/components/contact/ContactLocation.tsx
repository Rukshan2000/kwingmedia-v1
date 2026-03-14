import { MapPin, Building2 } from 'lucide-react';

export default function ContactLocation() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <MapPin size={24} className="text-primary" />
        Our Headquarters
      </h3>
      <div className="rounded-xl overflow-hidden h-64 relative bg-slate-800">
        <img
          className="w-full h-full object-cover grayscale opacity-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXR4ZYSdJe_3om-mxee3NDbKtd1yZIT_KnVanTwQOfQwLj2hX3WSy9aUjDmQ_gsPbQfNLdjxeGByZxg7tMj2E3GqGEFySfIIGWsklEKRVHLDoROm_nD6AjdMjnuLquMjiNRiVAKlA5Fdy8kobcgJlXYMOj29w2qn4YlzPleEvr496UyEULhhk2Ba2w5pBuv1hAdK9hgNcAoEL368CQvekzAEhow9FsXKoOzSKqsUCn9sq6Dy7HkTi7c2iKBTuXU7Sa-RxUE7Ep7JI"
          alt="Map location"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary p-2 rounded-full shadow-lg">
            <Building2 size={20} className="text-white" />
          </div>
        </div>
      </div>
      <p className="text-slate-400">
        123 Business Avenue, Suite 400
        <br />
        Creative District, New York, NY 10001
      </p>
    </div>
  );
}
