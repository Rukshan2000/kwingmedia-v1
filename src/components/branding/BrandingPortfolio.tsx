import { ArrowRight } from 'lucide-react';

export default function BrandingPortfolio() {
  const portfolio = [
    {
      title: 'Luxe Aura Cosmetics',
      category: 'Visual Identity',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcGcLg9gkl4iOMSQczt4gi5ISbaHq8_8hnot4VXFnbxcb-WsM9PTqB49RA4QIy1asUXm1nxO48Ibxl1JZBlbQyMF-zCUXBudrKR9bqU9dLwqf33hb06HQB9Kj5KM027FSR69Zgbg61W74p5dR_KfqvkfTIEj6X1DpjQ_n0X2d8fiDbNKyHfSjZajnwKz2Smwubd9aZgApp2NApqKFWqbIA4qid37JvEOPj174CPTZnTNVZjw2U0efkOvPVRU9ota1_JXWkK7SkeC0',
    },
    {
      title: 'Swift Delivery App',
      category: 'Social Advertising',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZwKYMfbH95nflk9Rc9Z_Zhe9i7de_vADB8HnGDapMP1u6I9lI78iEbc4VQ8IKpZT40kgYWxW7lUpjdj5_vTV-vDZvpEkNpxLcc6-TaD08tIwtf3zvUyUHqqgz67pNCWqXSkLs7lwu-I49opNYrLmYxIMcCoR10iRFCUlxeP5p6L5-M16Eg7cpD4v0r22c0mM8uVPalA6tUihRGaU7pCap-RoOeYqpZLUp48tJfvjVUE5dzvWIwS4h1Y09IMobumMkBQqFRIsFgU',
    },
    {
      title: 'Vertex Solutions',
      category: 'Branding',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpsO7zUVQcjhPXUtj-MQBI1X886RBCsvXsqytdkz9LRZWKCt9SUEOsvQ0FEy3oMlh4ekMZBA3C6R2irsV6v43yfmoXBZH-iLnClwPZo8z_lvNkS5pm_vQ37pS-TgrffudGm9Hisz61JBprF7RrgewWniAubaF95zbaPYNjfShNoJYDMpaUZh-NdFv60hx8E3sDVuKeJvPXOzYPyIwvK2PsYYJ0M3Nba43SGo7w884yRtSsYbfLeOVff1wrIdk_PH70AyFSuyV7X4Q',
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-extrabold text-white">Recent Campaigns</h3>
          <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
            View Full Portfolio <ArrowRight size={20} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-4/5">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <p className="text-primary font-bold text-xs uppercase mb-1">{item.category}</p>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
