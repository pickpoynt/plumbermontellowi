import { Helmet } from "react-helmet-async";
import { Mail, DollarSign, Phone, ShieldCheck, CheckCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const LeaseNumber = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Lease This Phone Number - Eau Claire Mold Remediation Pros</title>
                <meta name="description" content="Replace this mold remediation phone number with your own business line in Eau Claire, WI for only $19 a month. Contact leasemynumber@gmail.com to get started." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <Header />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Hero Banner */}
                    <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] p-10 md:p-16 text-white mb-12 relative overflow-hidden shadow-2xl border border-indigo-500/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -translate-y-32 translate-x-32 blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 blur-2xl" />
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mx-auto mb-6">
                                <DollarSign className="w-9 h-9 text-indigo-300" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-tight">
                                Lease This Phone Number
                            </h1>
                            <p className="text-indigo-100 text-xl max-w-2xl mx-auto leading-relaxed font-medium italic text-nowrap">
                                Run a mold removal business in Eau Claire WI? Replace this number <br /> with your own business line and receive all inbound leads — for just <span className="font-bold text-white">$19 a month</span>.
                            </p>
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-10 mb-12">

                        {/* What You Get */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-7 h-7 text-indigo-600" />
                                What You Get
                            </h2>
                            <ul className="space-y-5">
                                {[
                                    "Your business phone number displayed site-wide",
                                    "All inbound mold remediation inquiries routed to you",
                                    "Full local SEO benefit of an optimized landing page",
                                    "Exclusive placement — only one business at a time",
                                    "Month-to-month, no long-term contract",
                                    "Cancel anytime with 30 days notice",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Phone className="w-7 h-7 text-indigo-600" />
                                    Simple Pricing
                                </h2>
                                <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100 mb-8">
                                    <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-2">Monthly Rate</p>
                                    <p className="text-6xl font-bold text-indigo-700 mb-1">$19</p>
                                    <p className="text-slate-500 font-medium text-sm">per month · billed monthly</p>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed italic mb-8">
                                    To get started, simply email us at the address below. We'll confirm availability, swap in your number, and have you receiving mold remediation calls within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:leasemynumber@gmail.com?subject=Phone Lease Inquiry - Eau Claire Mold Remediation - $19/month"
                                    className="w-full inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:gap-4 shadow-lg shadow-indigo-900/20"
                                >
                                    <Mail className="w-5 h-5" />
                                    leasemynumber@gmail.com
                                </a>
                                <p className="text-center text-slate-400 text-xs italic font-medium">
                                    Subject line auto-filled. We respond within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="bg-slate-900 rounded-2xl p-8 text-center text-white border border-indigo-500/20">
                        <p className="text-slate-400 text-sm font-medium mb-2">Questions? Email us directly</p>
                        <a href="mailto:leasemynumber@gmail.com" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase">
                            LEASE MY NUMBER
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LeaseNumber;
