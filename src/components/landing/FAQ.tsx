import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does mold cost to remediate?",
    answer: "Mold remediation in Eau Claire, WI typically ranges from $500 to $6,000 depending on the mold type, location, and extent of growth. Basement or crawl space projects in Wisconsin homes average around $2,000–$3,500."
  },
  {
    question: "How much does it cost to get rid of mold?",
    answer: "Getting rid of mold in an Eau Claire home typically costs $1,500–$4,000 for average infestations. Smaller bathroom mold jobs may cost $300–$800, while large attic or basement projects can exceed $5,000."
  },
  {
    question: "Is mold remediation worth the cost?",
    answer: "Absolutely yes. Professional mold remediation protects your family's health, prevents structural damage, and maintains your property value. Left untreated, mold damage in Eau Claire homes can cost tens of thousands in repairs."
  },
  {
    question: "Is there a difference between mold removal and mold remediation?",
    answer: "Yes, there is an important difference. Mold removal eliminates visible mold. Mold remediation is a full-scale process: containment, HEPA air filtration, removal, surface treatment, moisture source correction, and post-clearance testing."
  },
  {
    question: "Can I remediate mold myself?",
    answer: "For very small, isolated patches (under 10 sq ft) on non-porous surfaces, DIY treatment is possible. However, for black mold, hidden mold behind walls, or large infestations in Eau Claire homes, professional remediation is essential."
  },
  {
    question: "Is professional mold removal worth it?",
    answer: "Yes. Professionals use industrial HEPA air scrubbers, negative pressure containment, and EPA-registered biocides that ensure complete removal and air quality verification — far beyond what DIY methods can achieve."
  },
  {
    question: "What kills 100% of mold?",
    answer: "There is no single product that permanently kills 100% of mold. Professional remediation — combining physical removal, HEPA vacuuming, EPA-approved antimicrobials, and moisture control — provides the most complete solution."
  },
  {
    question: "Can a house full of mold be saved?",
    answer: "In most cases, yes. Even severely mold-affected Eau Claire homes can be fully restored through comprehensive remediation, structural drying, replacement of heavily contaminated materials, and moisture source correction."
  },
  {
    question: "What are signs of mold exposure?",
    answer: "Common signs of mold exposure include chronic coughing, nasal congestion, eye and throat irritation, skin rashes, persistent fatigue, headaches, and aggravated asthma or allergy symptoms that improve when you leave the property."
  },
  {
    question: "What to do if you can't afford mold remediation?",
    answer: "Contact your homeowner's insurance provider — mold from a sudden water event is often covered. Wisconsin has assistance programs for qualifying homeowners, and many remediation companies in Eau Claire offer financing plans."
  },
  {
    question: "Do air purifiers help with mold?",
    answer: "HEPA air purifiers can reduce airborne mold spores and improve air quality, but they cannot remove mold from surfaces. They are a helpful supplement to professional remediation, not a replacement for it."
  },
  {
    question: "Can black mold be fully remediated?",
    answer: "Yes. Black mold (Stachybotrys chartarum) can be completely and safely remediated by certified professionals. The process uses full containment, protective equipment, specialized biocides, and disposal of all contaminated materials."
  },
  {
    question: "Do you have to throw everything away with mold in the house after?",
    answer: "Not necessarily. Heavily mold-affected porous materials like drywall and insulation typically require removal. However, many non-porous surfaces and belongings can be cleaned, HEPA vacuumed, and safely retained."
  },
  {
    question: "Can mold ever be fully removed?",
    answer: "Yes, mold can be fully removed through professional remediation. The critical step is also addressing the underlying moisture source — without fixing leaks, humidity, or water intrusion, mold will return."
  },
  {
    question: "How long should you stay out of the house after mold remediation?",
    answer: "Most Eau Claire homeowners can return within a few hours after remediation is complete. For large projects involving strong biocides, technicians may recommend waiting 24 hours for full ventilation and off-gassing."
  },
  {
    question: "What kills mold permanently?",
    answer: "Controlling moisture is the most permanent solution. Combined with professional mold removal, application of encapsulating coatings, and eliminating humidity or water intrusion, mold can be prevented from returning long-term."
  },
  {
    question: "Is it okay to live in a house with mold?",
    answer: "It depends on the type and extent. Small surface molds carry lower risks, but living with black mold or large infestations is dangerous long-term. Eau Claire homeowners facing significant mold growth should seek professional remediation immediately."
  },
  {
    question: "How do people pay for mold remediation?",
    answer: "Homeowners in Eau Claire most commonly pay through insurance (when caused by sudden water damage), out-of-pocket, or with financing plans offered by remediation companies. Wisconsin assistance programs may also be available for eligible homeowners."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Mold Remediation <span className="text-indigo-600">in Eau Claire WI FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about professional mold remediation, removal techniques, costs, and health concerns in Eau Claire, Wisconsin.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-xs">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
