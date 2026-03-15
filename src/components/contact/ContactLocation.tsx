import { MapPin, Building2 } from 'lucide-react';

export default function ContactLocation() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
        <MapPin size={28} className="text-primary" />
        Our Headquarters
      </h3>
      <div className="rounded-2xl overflow-hidden relative bg-slate-200 dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700/50">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.475914544061!2d79.94340727581839!3d7.070688316561158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb729ba28775%3A0x962d6339675eab5f!2sKWINGS%20MEDIA%20(PVT)LTD!5e0!3m2!1sen!2slk!4v1773556129209!5m2!1sen!2slk" 
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}
