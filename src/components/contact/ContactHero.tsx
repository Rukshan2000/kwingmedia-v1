export default function ContactHero() {
  return (
    <div className="w-full">
      <div className="px-6 md:px-20 py-8">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px] relative group"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqhOV6zM2G6iOPXkcggGT3KS3yA8m65IhILODdZOmDtILNTboAj_cv87atFbcWi6ZA7O824DkWsKjJ9iHNknyGHeGozwGQ7SOkea6IqxD6p9icJb5b1A83e3--FXbwt7ZV8PIra9fHlnUZqJs7RV55w9dL8pra5tBbNJA-rQ0OZCWbjMlvdIeERdRT3zlY-Yw1U90csiSaP6--FKfZs6vkWBohNO74WB7xVeJR5-tt_L5HGMYAm8-100YBeo-Gmjpuh9udzcq53h0")`,
          }}
        >
          <div className="flex flex-col p-8 md:p-12">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
              Let's Create Something{' '}
              <span className="text-primary">Extraordinary</span>
            </h1>
            <p className="text-slate-200 mt-4 max-w-xl text-lg">
              Whether it's a digital strategy, IT infrastructure, or a flagship event, our
              experts are ready to partner with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
