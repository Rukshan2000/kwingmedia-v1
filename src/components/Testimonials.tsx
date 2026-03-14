import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-primary font-bold tracking-widest text-xs uppercase mb-2">
          Success Stories
        </h2>
        <h3 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-black tracking-tight">
          What Our Clients Say
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-primary/5 p-10 rounded-2xl relative">
          <Quote size={64} className="text-primary/20 absolute top-6 right-6" />
          <div className="flex flex-col gap-6 relative">
            <p className="text-slate-700 dark:text-slate-300 text-lg italic leading-relaxed">
              "Kwings Media transformed our digital presence. Their integrated approach helped
              us unify our branding across all platforms, resulting in a 40% increase in lead
              generation within the first quarter."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-slate-300 overflow-hidden">
                <img
                  alt="Client Portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsxvhuJSggzvjcERxFwfHtqrsGRs8_hFuxQ5ULTeG-0I_0sEHnvkgeQsmNzM-yOpvGXKNhhxMgFVQa24eBONdq9gGLqiYwwvoLBrWZu6K1uA23HfYr2FF_IhNcVTJRTmW9hXG78gMFOUS2AWXP4e9KVgDuOtdq6vN1nifuxJ8JVheeRsFm8hDXrNpqbVrWKGYu1-oM4Y8GmGf37s_vJXQjk5oug6ov59ryiCD6k38tMOMmEPHpMZTF5bvcgahpWQnFa4u_0OmjcKo"
                />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">Alex Chen</h5>
                <p className="text-sm text-slate-500">CEO, Nexus Tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-primary/5 p-10 rounded-2xl relative">
          <Quote size={64} className="text-primary/20 absolute top-6 right-6" />
          <div className="flex flex-col gap-6 relative">
            <p className="text-slate-700 dark:text-slate-300 text-lg italic leading-relaxed">
              "The event management team is simply world-class. Our annual summit was
              flawlessly executed, and the custom event app they built for us was a huge hit
              with all the attendees."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-slate-300 overflow-hidden">
                <img
                  alt="Client Portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHv8_QO-ShD5HLuxDy9AIWH6nqhs-Uy4zB5BmRjG25UaK7b85mflDtztBuauaiT0w3mG43-QX0E6RdLJ_biI6mFAzWqgvy6HC0bFElYjehzOud-n2pK2LhSmzpbzFdoarHDbzl1uXiOL9ZPcY8eh43wC4QX9xUeOhrWV2tnbE3xoqZ08gtXryz3VqHr_CY91IK1m41tLg5tgPNH22w20BS1mLXfHPItu2UFgXyz1kunWiljGpml3EaFFeaK0l3bxUX8c0kE_RYUgE"
                />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">Sarah Jenkins</h5>
                <p className="text-sm text-slate-500">Marketing Director, Global Retail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
