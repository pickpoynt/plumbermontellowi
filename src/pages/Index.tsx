import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MoldRemediationInfo from "@/components/landing/MoldRemediationInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Wind, Microscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>mold remediation eau claire wi | Eau Claire Mold Remediation Pros</title>
        <meta name="description" content="Looking for professional mold remediation eau claire wi? Expert mold removal, air quality testing, and full property mold remediation for Eau Claire homes. Call 3802660944 today!" />
        <meta name="keywords" content="mold remediation eau claire wi, Eau Claire mold removal, mold remediation Eau Claire Wisconsin, professional mold removal Eau Claire WI, mold inspection Eau Claire" />
        <link rel="canonical" href="https://moldremediationeauclairewi.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Eau Claire Mold Remediation Pros",
            "image": "/1.jpeg",
            "@id": "https://moldremediationeauclairewi.vercel.app/",
            "url": "https://moldremediationeauclairewi.vercel.app/",
            "telephone": "+13802660944",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2000 Eastridge Center",
              "addressLocality": "Eau Claire",
              "addressRegion": "WI",
              "postalCode": "54701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.8113",
              "longitude": "-91.4985"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mold Remediation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Eau Claire Mold Remediation Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Eau Claire, WI"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mold Remediation Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Mold Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Mold Remediation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Black Mold Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mold Inspections & Air Quality Testing" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="mold remediation eau claire wi | Eau Claire Mold Remediation Pros" />
        <meta property="og:description" content="Expert mold remediation services in Eau Claire, WI. Professional black mold removal, air quality testing, and full property restoration. Call 3802660944 today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moldremediationeauclairewi.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Mold <br />
              <span className="text-white drop-shadow-sm uppercase">Remediation in Eau Claire WI</span>
            </>
          }
          subtitle="Eau Claire's premier specialists in professional mold remediation. We provide advanced mold removal techniques that restore air quality and protect your property from dangerous mold growth. Safe, certified, and fully guaranteed."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="EAU CLAIRE MOLD REMEDIATION PROS"
          phone="3802660944"
          features={[
            { icon: Microscope, text: "Mold Inspection" },
            { icon: Wind, text: "Air Quality Testing" },
            { icon: ShieldCheck, text: "Full Remediation" }
          ]}
        />
        <Services />
        <WhyUs />
        <MoldRemediationInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://bedbugexterminatorinwapakonetaohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Bed Bug Exterminator Wapakoneta Ohio</a>
              <a href="https://chipmunkremovalbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Chipmunk Removal Brooksville FL</a>
              <a href="https://wildliferemovalgastonianc.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Wildlife Removal Gastonia NC</a>
              <a href="https://wildliferemovaldouglasvillega.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Wildlife Removal Douglasville GA</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
