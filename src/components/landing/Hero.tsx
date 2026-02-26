import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Wind, Zap, FlaskConical, Search, Microscope, Hammer, Locate, Activity } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
  overlayImage?: string;
  phone?: string;
  badge?: string;
  features?: { icon: any; text: string }[];
}

const Hero = ({
  title = "Raccoon control Southwest Ranches",
  subtitle = "Southwest Ranches' specialized experts in professional raccoon control and advanced exclusion techniques. Available 24/7.",
  image = "/1.jpeg",
  overlayImage = "/2.jpeg",
  phone = "3802660944",
  badge = "SOUTHWEST RANCHES RACCOON PROS",
  features = [
    { icon: Search, text: "Detection Experts" },
    { icon: ShieldCheck, text: "Raccoon Exclusion" },
    { icon: Hammer, text: "Structural Repair" }
  ]
}: HeroProps) => {
  const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Technical Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-900/90">
        <img src={image} alt="" className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]" />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <img
            src={overlayImage}
            alt=""
            className="w-full h-full object-cover mix-blend-screen scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-indigo-300 mb-8 animate-fade-in shadow-2xl uppercase tracking-widest text-[10px] font-bold">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>{badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1] uppercase tracking-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-xl text-slate-200 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic font-medium border-l-4 border-indigo-500/80 pl-6 backdrop-blur-[2px]">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-indigo-600/90 hover:bg-indigo-600 text-white border border-indigo-400/30 h-14 px-8 text-lg font-bold shadow-2xl shadow-indigo-900/40 uppercase tracking-widest transition-all hover:scale-105 backdrop-blur-sm" asChild>
              <a href={`tel:${phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-indigo-200" />
                {formattedPhone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 transition-all h-14 px-8 text-lg uppercase tracking-widest font-bold shadow-2xl" asChild>
              <a href={`tel:${phone}`} className="flex items-center gap-2">
                Call Now
                <ArrowRight className="w-5 h-5 text-indigo-400" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3 uppercase tracking-widest text-[10px] font-bold">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-white">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
