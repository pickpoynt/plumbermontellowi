import { Phone } from "lucide-react";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            <a
                href="tel:3802660944"
                className="group relative flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-2xl shadow-2xl hover:bg-indigo-700 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Call Eau Claire Mold Remediation Pros"
            >
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl animate-ping opacity-20 group-hover:hidden" />
                <Phone className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest shadow-xl">
                    Call 3802660944
                </div>
            </a>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200 shadow-sm animate-pulse">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Emergency Mold Team - Eau Claire</span>
            </div>
        </div>
    );
};

export default FloatingCallButton;
