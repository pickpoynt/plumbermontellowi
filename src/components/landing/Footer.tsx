import { ShieldCheck, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative border-t border-indigo-500/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -translate-y-48 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl translate-y-48 -translate-x-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/40">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase text-[15px]">Eau Claire WI</span>
                <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest text-[10px]">Mold Remediation Pros</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic text-sm text-nowrap">
              Eau Claire's specialized team for professional <br /> mold remediation and property restoration. <br /> We provide elite-grade mold removal services.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300">
                  <Icon className="w-5 h-5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-indigo-400">Mold Services</h4>
            <ul className="space-y-4">
              {[
                "Residential Mold Removal",
                "Black Mold Treatment",
                "Crawl Space Remediation",
                "Commercial Mold Remediation",
                "Mold Inspections & Testing",
                "Emergency Mold Response"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:w-3 transition-all" />
                    <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-indigo-400">Eau Claire NAP</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">HQ</p>
                  <p className="text-sm font-bold text-slate-300 uppercase tracking-tight leading-tight">2000 Eastridge Center</p>
                  <p className="text-sm font-bold text-slate-300 uppercase tracking-tight">Eau Claire, WI 54701</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Inquiries</p>
                  <a href="tel:3802660944" className="text-sm font-bold text-slate-300 hover:text-indigo-400 transition-colors uppercase tracking-tight">3802660944</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Support</p>
                  <a href="/lease" className="text-sm font-bold text-slate-300 hover:text-indigo-400 transition-colors uppercase tracking-tight text-nowrap">LEASE MY NUMBER</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-indigo-400">Standard Excellence</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 italic font-medium">
              We specialize in the unique mold remediation requirements of Eau Claire WI homes, using precision HEPA filtration and professional-grade containment systems.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">Service Promise</p>
              <p className="text-sm font-bold text-slate-300 uppercase leading-tight italic">Expert Mold Assessments Available Across Eau Claire & Chippewa Valley.</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 uppercase tracking-widest text-[10px] font-bold">
          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Eau Claire Mold Remediation Pros. All rights reserved. Professional Mold Removal &amp; Property Restoration.
          </p>

          <div className="flex gap-8 items-center text-nowrap">
            <a href="/lease" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors border border-indigo-400/30 text-nowrap">LEASE MY NUMBER</a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
