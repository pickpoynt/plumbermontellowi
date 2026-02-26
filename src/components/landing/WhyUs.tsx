import { ShieldCheck, Clock, Award, Hammer } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Same-Day Response",
    description: "Mold infestations require immediate action. Our Eau Claire team provides rapid assessment and begins remediation fast, stopping the spread before it causes more damage."
  },
  {
    icon: Hammer,
    title: "Wisconsin Mold Experts",
    description: "We specialize in Wisconsin's unique humidity and freeze-thaw climate conditions that make Eau Claire homes particularly vulnerable to basement and crawl space mold growth."
  },
  {
    icon: Award,
    title: "Wisconsin Certified",
    description: "Fully licensed and insured mold remediation contractors in Wisconsin. We follow strict IICRC S520 mold remediation standards for safe and effective treatments."
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Results",
    description: "Our remediation process is proven to eliminate mold at the source, including spores and root systems, providing a long-lasting solution for your Eau Claire property."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Mold Remediation</span> <br />
            Experts in Eau Claire WI
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Providing Eau Claire and surrounding Chippewa Valley communities with specialized, professional mold removal and property protection services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/2.jpeg"
              alt="Professional Mold Remediation in Eau Claire WI"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Success Rate in Eau Claire WI</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Mold-Free Property",
                desc: "Our certified methods stop mold growth immediately, protecting your drywall, insulation, and structural timbers from costly mold-related destruction."
              },
              {
                title: "Eau Claire Climate Expertise",
                desc: "We understand how Wisconsin's cold winters and humid summers drive mold growth in Eau Claire homes — and we address root moisture causes, not just symptoms."
              },
              {
                title: "Post-Remediation Testing",
                desc: "After every job, we perform independent air quality testing to confirm your Eau Claire property meets safe mold spore count standards before we leave."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Ready to restore your property?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left">Call Eau Claire's Best</h4>
                </div>
                <a
                  href="tel:3802660944"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  3802660944
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};




export default WhyUs;
