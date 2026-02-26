import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Residential Mold Removal",
    description: "Our Eau Claire specialists provide thorough mold removal from basements, attics, bathrooms, and crawl spaces — protecting your family's health and your property's value."
  },
  {
    icon: Search,
    title: "Mold Inspection & Testing",
    description: "Comprehensive air quality testing and mold inspection services to accurately identify the type, extent, and source of mold growth in your Eau Claire property."
  },
  {
    icon: Activity,
    title: "Black Mold Treatment",
    description: "Safe and effective black mold (Stachybotrys) remediation using HEPA filtration and proven containment techniques to fully eliminate toxic mold colonies."
  },
  {
    icon: Zap,
    title: "Emergency Mold Response",
    description: "24/7 emergency mold remediation services in Eau Claire — because mold spreads fast and waiting is not an option when your family's health is at risk."
  },
  {
    icon: Sprout,
    title: "Crawl Space Remediation",
    description: "Specialized crawl space mold removal and encapsulation services that eliminate moisture sources and prevent mold from returning to your Eau Claire home."
  },
  {
    icon: ShieldCheck,
    title: "Certified Mold Protection",
    description: "Fully licensed and insured mold remediation professionals in Wisconsin providing guaranteed property protection and post-remediation air quality verification."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Mold Remediation Eau Claire WI</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive mold removal and remediation solutions designed for Eau Claire's unique climate and homes. We restore your property's safety and air quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
