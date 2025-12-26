import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  BarChart3, 
  Menu, 
  X, 
  Zap, 
  TrendingUp, 
  Layers,
  Terminal,
  Code2,
  Cpu,
  AlertCircle,
  FileText,
  Shield,
  Activity // Added Activity icon for the new visual
} from 'lucide-react';

/**
 * AVENTEQAI - ENTERPRISE AI INFRASTRUCTURE
 * Version: 5.2 - Reference Error Fix
 * Updates: Ensured all Page components are defined before use in App.
 */

// --- TYPES ---
type PageRoute = 'home' | 'finance' | 'logistics' | 'operations' | 'contact' | 'privacy' | 'terms';

interface NavProps {
  currentPage: PageRoute;
  navigate: (page: PageRoute) => void;
}

// --- SEO & METADATA MANAGER ---
const usePageMetadata = (page: PageRoute) => {
  useEffect(() => {
    const metadata = {
      home: {
        title: 'AventeqAI | Enterprise AI Infrastructure',
        desc: 'Custom AI Infrastructure Built for Measurable Business Growth. Stop experimenting and start scaling with production-ready AI systems.',
        url: '/'
      },
      finance: {
        title: 'Financial Ops Layer | AventeqAI',
        desc: 'Eliminate manual workflows and uncover hidden insights. Build custom, high-fidelity AI systems that integrate directly into your financial stack.',
        url: '/solutions/finance'
      },
      logistics: {
        title: 'Logistics AI Engine | AventeqAI',
        desc: 'Accelerate operational velocity with outcome-driven logistics AI. Predict bottlenecks, optimize routes, and automate global trade.',
        url: '/solutions/logistics'
      },
      operations: {
        title: 'Programmable Ops | AventeqAI',
        desc: 'Programmable AI systems engineered to automate operational complexity. Integrate across your entire stack to eliminate bottlenecks.',
        url: '/solutions/operations'
      },
      contact: {
        title: 'Start Building | AventeqAI',
        desc: 'Book a free strategy call to identify where AI can deliver the greatest impact across your business.',
        url: '/contact'
      },
      privacy: {
        title: 'Privacy Policy | AventeqAI',
        desc: 'How AventeqAI collects, uses, and protects your data and AI model training information.',
        url: '/legal/privacy'
      },
      terms: {
        title: 'Terms of Service | AventeqAI',
        desc: 'Terms and conditions governing the use of AventeqAI infrastructure and consultancy services.',
        url: '/legal/terms'
      }
    };

    const data = metadata[page];

    document.title = data.title;

    try {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.desc);
    } catch (e) {}

    window.scrollTo(0, 0);
  }, [page]);
};

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// --- DESIGN SYSTEM COMPONENTS ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionShell = ({ 
  children, 
  className = "bg-white",
  id
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Badge = ({ text }: { text: string }) => (
  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-xs font-mono mb-6">
    {text}
  </span>
);

const SectionHeading = ({ text, center = false }: { text: string; center?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6 ${center ? 'text-center mx-auto' : ''}`}>
    {text}
  </h2>
);

const Card = ({ 
  children, 
  onClick, 
  className = "",
  badgeText
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  badgeText?: string;
}) => (
  <motion.div 
    onClick={onClick}
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bg-white border border-zinc-200 rounded-xl p-8 transition-all duration-200 hover:shadow-lg hover:border-indigo-200 h-full flex flex-col group ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {badgeText && (
      <div className="mb-4">
        <span className="font-mono text-[10px] uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded tracking-wider">
          {badgeText}
        </span>
      </div>
    )}
    {children}
    <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center text-xs font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">
      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-indigo-500" />
      Ready for Scale
    </div>
  </motion.div>
);

const ButtonPrimary = ({ onClick, text = "[ Start Building ]", fullWidth = false, type = "button", disabled = false }: { onClick?: () => void; text?: string; fullWidth?: boolean; type?: "button" | "submit"; disabled?: boolean }) => (
  <motion.button 
    whileHover={{ scale: disabled ? 1 : 1.02 }}
    whileTap={{ scale: disabled ? 1 : 0.98 }}
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={`bg-indigo-600 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-colors inline-flex items-center justify-center gap-2 ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
  >
    {text} <ArrowRight className="w-4 h-4" />
  </motion.button>
);

const ButtonSecondary = ({ onClick, text }: { onClick: () => void; text: string }) => (
  <motion.button 
    whileHover={{ x: 2 }}
    onClick={onClick}
    className="text-zinc-600 font-medium hover:text-zinc-900 flex items-center gap-2 px-4 py-2 text-sm transition-colors"
  >
    {text} <ArrowRight className="w-4 h-4" />
  </motion.button>
);

// --- NAVIGATION ---
const Navbar: React.FC<NavProps> = ({ currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = (page: PageRoute, label: string) => (
    <button
      onClick={() => { navigate(page); setIsOpen(false); }}
      className={`text-sm font-medium transition-colors ${
        currentPage === page ? 'text-indigo-600 font-semibold' : 'text-zinc-600 hover:text-zinc-900'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => navigate('home')} className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Cpu className="w-3 h-3 text-white" />
          </div>
          AventeqAI
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLink('home', 'Home')}
          {navLink('finance', 'Finance')}
          {navLink('logistics', 'Supply Chain')}
          {navLink('operations', 'Operations')}
          <ButtonPrimary onClick={() => navigate('contact')} text="[ Contact Us ]" />
        </div>

        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 p-6 flex flex-col gap-6 shadow-xl absolute w-full left-0">
          {navLink('home', 'Home')}
          {navLink('finance', 'Finance')}
          {navLink('logistics', 'Supply Chain')}
          {navLink('operations', 'Operations')}
          <ButtonPrimary onClick={() => { navigate('contact'); setIsOpen(false); }} text="[ Contact Us ]" fullWidth />
        </div>
      )}
    </nav>
  );
};

// --- VISUAL COMPONENTS ---
const TerminalVisual = () => (
  <motion.div variants={fadeInUp} className="hidden md:block bg-zinc-900 rounded-xl p-6 shadow-2xl font-mono text-xs text-zinc-300 border border-zinc-800">
      <div className="flex gap-2 mb-4 border-b border-zinc-800 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
          <p><span className="text-indigo-400">➜</span> <span className="text-emerald-400">~</span> initialize_ops_agent --mode=autonomous</p>
          <p className="text-zinc-500">Loading modules...</p>
          <p className="text-zinc-500">Connecting to data warehouse...</p>
          <p><span className="text-green-400">✔</span> Data ingestion complete (1.2TB)</p>
          <p><span className="text-green-400">✔</span> Pattern recognition: <span className="text-yellow-400">OPTIMIZED</span></p>
          <p><span className="text-green-400">✔</span> Workflow automation: <span className="text-yellow-400">ACTIVE</span></p>
          <p className="animate-pulse">_</p>
      </div>
  </motion.div>
);

const FinanceVisual = () => (
  <motion.div variants={fadeInUp} className="hidden md:block bg-white rounded-xl p-6 shadow-2xl border border-zinc-100 relative overflow-hidden">
    <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
       <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
             <Activity className="w-5 h-5" />
          </div>
          <div>
             <h4 className="text-sm font-bold text-zinc-900">Live Transaction Audit</h4>
             <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Real-time Anomaly Detection</p>
          </div>
       </div>
       <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono text-emerald-600">ACTIVE</span>
       </div>
    </div>
    
    <div className="space-y-3">
       {[
         { id: 'INV-8821', type: 'Vendor Payment', amount: '$12,450.00', status: 'Verified', color: 'text-emerald-600 bg-emerald-50' },
         { id: 'EXP-9932', type: 'Travel Expense', amount: '$432.20', status: 'Verified', color: 'text-emerald-600 bg-emerald-50' },
         { id: 'TXN-4421', type: 'Wire Transfer', amount: '$8,200.00', status: 'Anomaly Detected', color: 'text-red-600 bg-red-50' },
         { id: 'INV-8822', type: 'SaaS Subscription', amount: '$299.00', status: 'Processing...', color: 'text-zinc-500 bg-zinc-50' },
       ].map((item, i) => (
          <div key={i} className="flex items-center justify-between text-xs p-3 rounded-lg border border-zinc-50 hover:border-zinc-100 hover:bg-zinc-50 transition-colors group">
             <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${item.status.includes('Anomaly') ? 'bg-red-500' : item.status.includes('Processing') ? 'bg-zinc-300' : 'bg-emerald-500'}`}></div>
                <div>
                   <p className="font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">{item.type}</p>
                   <p className="text-zinc-400 text-[10px] font-mono">{item.id}</p>
                </div>
             </div>
             <div className="text-right">
                <p className="font-mono text-zinc-700 mb-1">{item.amount}</p>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${item.color}`}>
                   {item.status}
                </span>
             </div>
          </div>
       ))}
    </div>

    <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-between items-center text-[10px]">
        <span className="text-zinc-400 font-mono">SCAN_RATE: 1400/SEC</span>
        <div className="flex items-center gap-1 text-indigo-600 font-medium">
           <Shield className="w-3 h-3" />
           <span>Financial Guardrails Active</span>
        </div>
    </div>
  </motion.div>
);

const LogisticsVisual = () => (
  <motion.div variants={fadeInUp} className="hidden md:block bg-zinc-950 rounded-xl p-6 shadow-2xl border border-zinc-800 text-white relative">
     <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
        <h4 className="text-sm font-bold flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-500" /> Global Logistics</h4>
        <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">LIVE_TRACKING</span>
     </div>
     <div className="space-y-6 relative pl-2">
        <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-zinc-800"></div>
        {[
           { city: 'Singapore Hub', status: 'Departed', time: '04:00Z', active: false },
           { city: 'Ocean Transit', status: 'In Progress', time: 'Active', active: true },
           { city: 'Los Angeles Port', status: 'Scheduled', time: '+14h', active: false }
        ].map((item, i) => (
           <div key={i} className="flex items-center gap-4 relative z-10">
              <div className={`w-3 h-3 rounded-full border-2 border-zinc-950 ${item.active ? 'bg-indigo-500 ring-4 ring-indigo-500/20' : 'bg-zinc-700'}`}></div>
              <div className={`flex-1 flex justify-between items-center p-3 rounded border ${item.active ? 'bg-zinc-900 border-zinc-700' : 'bg-transparent border-transparent'}`}>
                 <div>
                    <p className={`text-xs font-bold ${item.active ? 'text-white' : 'text-zinc-500'}`}>{item.city}</p>
                    <p className="text-[10px] text-zinc-500">{item.status}</p>
                 </div>
                 <span className={`text-[10px] font-mono ${item.active ? 'text-indigo-400' : 'text-zinc-600'}`}>{item.time}</span>
              </div>
           </div>
        ))}
     </div>
     <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
        <span>ID: #SHP-8829</span>
        <span className="flex items-center gap-1 text-emerald-500"><TrendingUp className="w-3 h-3" /> ON TIME</span>
     </div>
  </motion.div>
);

// --- LEAD MAGNET FORM ---
const ReadinessAssessmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⚠️ REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJ4cAleKG2UWmDo0n-llqKMvtdL4byiyQUUOVhGKHhk9Ck85GMW-CeRIsyb-tj-cNJ/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()); // Convert to plain object
    
    // Convert object to URLSearchParams for reliable transmission
    const formParams = new URLSearchParams();
    for (const key in data) {
        formParams.append(key, data[key] as string);
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formParams, // Send as URL encoded params
        mode: 'no-cors'
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ label, name, type = "text", placeholder, required = false }: any) => (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-zinc-500 mb-1 font-mono uppercase tracking-wide">{label}</label>
      <input 
        name={name}
        type={type} 
        required={required}
        className="w-full bg-white border border-zinc-300 rounded-md p-3 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow" 
        placeholder={placeholder} 
      />
    </div>
  );

  const SelectField = ({ label, name, options }: any) => (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-zinc-500 mb-1 font-mono uppercase tracking-wide">{label}</label>
      <div className="relative">
        <select name={name} className="w-full bg-white border border-zinc-300 rounded-md p-3 pr-10 text-zinc-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow appearance-none cursor-pointer">
          {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-zinc-500">
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </div>
  );

  const TextAreaField = ({ label, name, placeholder, rows = 3 }: any) => (
    <div className="mb-6">
      <label className="block text-xs font-semibold text-zinc-500 mb-1 font-mono uppercase tracking-wide">{label}</label>
      <textarea 
        name={name}
        rows={rows}
        className="w-full bg-white border border-zinc-300 rounded-md p-3 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow" 
        placeholder={placeholder} 
      ></textarea>
    </div>
  );

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-zinc-200 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-4">Request Queued</h3>
        <p className="text-zinc-500 mb-6 text-sm">
          Your infrastructure assessment request has been logged. We will deploy resources to review your inputs and schedule a strategy session.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-indigo-600" />
          Request Assessment
        </h3>
        <p className="text-sm text-zinc-500">
           A practical assessment to identify where AI can deliver real business impact.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Name" name="Name" placeholder="e.g. Alex Morgan" required />
          <InputField label="Work Email" name="Email" type="email" placeholder="alex@company.com" required />
        </div>
        <InputField label="Company" name="Company" placeholder="Company Name Ltd." required />

        <SelectField 
          label="Target Architecture" 
          name="Target_Architecture"
          options={['Finance', 'Logistics & Supply Chain', 'Operations', 'Full Stack / Multiple', 'Not sure']} 
        />
        
        <SelectField 
          label="Primary Objective" 
          name="Primary_Objective"
          options={['Improve efficiency / automation', 'Better forecasting', 'Cost reduction', 'Decision support', 'Visibility & Control']} 
        />

        <SelectField 
          label="Current Data Maturity" 
          name="Data_Maturity"
          options={['Fragmented / Siloed', 'Partially Structured', 'Centralized / Warehouse', 'Unsure']} 
        />

        <SelectField 
          label="AI Experience Level" 
          name="AI_Experience"
          options={['No prior experience', 'Limited experimentation', 'Active production use']} 
        />

        <SelectField 
          label="Deployment Timeline" 
          name="Timeline"
          options={['Immediately', '3–6 Months', 'Exploratory']} 
        />

        <TextAreaField 
           label="Success Criteria"
           name="Success_Criteria"
           placeholder="Describe your ideal outcome..."
        />

        <ButtonPrimary 
          type="submit" 
          text={isSubmitting ? "[ Transmitting... ]" : "[ Request Assessment ]"} 
          fullWidth 
          disabled={isSubmitting} 
        />
        <p className="text-[10px] text-center text-zinc-400 mt-4 font-mono">
          NO OBLIGATION. SECURE TRANSMISSION.
        </p>
      </form>
    </div>
  );
};

// --- FOOTER ---
const Footer: React.FC<NavProps> = ({ navigate }) => (
  <footer className="bg-white text-zinc-900 py-20 border-t border-zinc-200">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center">
             <Cpu className="w-3 h-3 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">AventeqAI</span>
        </div>
        <p className="text-zinc-500 mb-6 text-sm">
          Custom AI Infrastructure Built for Measurable Business Growth.
        </p>
        <div className="text-xs text-zinc-400 font-mono">
          © {new Date().getFullYear()} AventeqAI.
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-zinc-900 mb-6 text-sm">Solutions</h4>
        <ul className="space-y-3">
          <li><button onClick={() => navigate('finance')} className="text-zinc-500 hover:text-indigo-600 transition-colors text-sm text-left block w-full">AI for Finance</button></li>
          <li><button onClick={() => navigate('logistics')} className="text-zinc-500 hover:text-indigo-600 transition-colors text-sm text-left block w-full">AI for Logistics & Supply Chain</button></li>
          <li><button onClick={() => navigate('operations')} className="text-zinc-500 hover:text-indigo-600 transition-colors text-sm text-left block w-full">AI for Operations</button></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-zinc-900 mb-6 text-sm">Headquarters</h4>
        <p className="text-zinc-500 text-sm mb-1 font-medium flex items-center gap-2">
          <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-auto rounded-sm opacity-90" /> Vadodara, India
        </p>
        <p className="text-zinc-400 text-xs leading-relaxed mb-4 pl-7">
          Tech Park One, Suite 404<br/>
          Vadodara, Gujarat 390007
        </p>
      </div>

      <div>
        <h4 className="font-bold text-zinc-900 mb-6 text-sm">Global Offices</h4>
        <ul className="space-y-4">
           <li>
              <p className="text-zinc-500 text-sm font-medium flex items-center gap-2">
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-5 h-auto rounded-sm opacity-90" /> London
              </p>
              <p className="text-zinc-400 text-xs pl-7">Canary Wharf, Level 39</p>
           </li>
           <li>
              <p className="text-zinc-500 text-sm font-medium flex items-center gap-2">
                <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="w-5 h-auto rounded-sm opacity-90" /> Singapore
              </p>
              <p className="text-zinc-400 text-xs pl-7">Marina Bay Financial Ctr</p>
           </li>
           <li>
              <p className="text-zinc-500 text-sm font-medium flex items-center gap-2">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-5 h-auto rounded-sm opacity-90" /> Canada
              </p>
              <p className="text-zinc-400 text-xs pl-7">Toronto, Ontario</p>
           </li>
        </ul>
      </div>
      
      {/* Added Missing "About" Link Column/Section */}
      <div className="col-span-1 md:col-span-4 border-t border-zinc-100 pt-8 flex flex-col md:flex-row gap-6 justify-between items-center text-xs text-zinc-400">
         <div className="flex gap-6">
            <button onClick={() => navigate('home')} className="hover:text-indigo-600 transition-colors">About</button>
            <button onClick={() => navigate('privacy')} className="hover:text-indigo-600 transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="hover:text-indigo-600 transition-colors">Terms of Service</button>
         </div>
         <p>System Status: <span className="text-emerald-500 font-medium">Operational</span></p>
      </div>
    </div>
  </footer>
);

// --- LEGAL PAGES ---

const PrivacyPage: React.FC<NavProps> = ({ navigate }) => (
  <div className="bg-white min-h-screen pt-20">
    <SectionShell className="max-w-3xl mx-auto">
      <Badge text="Legal // Privacy" />
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-sm prose-zinc max-w-none text-zinc-600">
        <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
        <p>
          At AventeqAI, we treat data privacy as a fundamental component of our infrastructure. This policy outlines how we handle data during AI model training, development, and deployment.
        </p>
        
        <h3 className="text-zinc-900 font-bold mt-8 mb-4">1. Data Collection & Usage</h3>
        <p>We collect information necessary to provide our AI consultancy services, including:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Client Data:</strong> Operational datasets provided for model training and validation.</li>
          <li><strong>System Telemetry:</strong> Performance metrics from deployed AI agents.</li>
          <li><strong>Contact Information:</strong> Business details collected via our readiness assessment forms.</li>
        </ul>

        <h3 className="text-zinc-900 font-bold mt-8 mb-4">2. AI Model Security</h3>
        <p>
          We adhere to strict data isolation protocols. Data provided for custom model development is never used to train our foundation models or shared with other clients. All training data is processed in SOC2-compliant environments.
        </p>

        <h3 className="text-zinc-900 font-bold mt-8 mb-4">3. Data Retention</h3>
        <p>
          We retain client data only for the duration of the active engagement or as required by service level agreements (SLAs). Upon project termination, all proprietary datasets are securely purged from our training infrastructure.
        </p>
      </div>
    </SectionShell>
  </div>
);

const TermsPage: React.FC<NavProps> = ({ navigate }) => (
  <div className="bg-white min-h-screen pt-20">
    <SectionShell className="max-w-3xl mx-auto">
      <Badge text="Legal // Terms" />
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Terms of Service</h1>
      <div className="prose prose-sm prose-zinc max-w-none text-zinc-600">
        <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>
        <p>
          These Terms of Service govern your use of AventeqAI's consultancy services and AI infrastructure solutions. By engaging with our services, you agree to these terms.
        </p>
        
        <h3 className="text-zinc-900 font-bold mt-8 mb-4">1. Intellectual Property</h3>
        <p>
          <strong>Custom Models:</strong> Any bespoke AI models trained exclusively on your proprietary data are owned by you.
          <br/>
          <strong>Platform IP:</strong> AventeqAI retains ownership of our underlying frameworks, pre-trained base models, and deployment infrastructure code.
        </p>

        <h3 className="text-zinc-900 font-bold mt-8 mb-4">2. Liability & Performance</h3>
        <p>
          While we strive for high-accuracy outcomes, AI models are probabilistic by nature. AventeqAI provides infrastructure on an "as-is" basis and makes no absolute guarantees regarding specific predictive accuracy for novel data inputs.
        </p>

        <h3 className="text-zinc-900 font-bold mt-8 mb-4">3. Governing Law</h3>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the contracting AventeqAI entity resides (United Kingdom, India, Singapore, or Canada).
        </p>
      </div>
    </SectionShell>
  </div>
);

// --- PAGES ---

// HOME PAGE
const HomePage: React.FC<NavProps> = ({ navigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <SectionShell className="pt-24 pb-20 md:pt-32 md:pb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Badge removed */}
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
            Custom AI Infrastructure Built for <span className="text-indigo-600">Measurable Business Growth</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
            Stop experimenting and start scaling. We build custom, production-ready AI systems designed to automate complexity and unlock new revenue streams.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <ButtonPrimary onClick={() => navigate('contact')} text="[ Start Building ]" />
              <ButtonSecondary onClick={() => window.scrollTo({ top: 800, behavior: 'smooth'})} text="View the Framework" />
            </div>
            <p className="text-xs text-zinc-400 font-mono">Powering outcomes for the next generation of industry leaders.</p>
          </motion.div>
        </motion.div>
      </SectionShell>

      {/* Logo Strip */}
      <div className="w-full border-b border-zinc-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-mono text-zinc-400 mb-10 uppercase tracking-widest">
            Trusted by infrastructure leaders globally
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {[
              { name: "UPS", url: "https://logo.clearbit.com/ups.com" },
              { name: "XPO Logistics", url: "https://logo.clearbit.com/xpo.com" },
              { name: "FedEx", url: "https://logo.clearbit.com/fedex.com" },
              { name: "DHL", url: "https://logo.clearbit.com/dhl.com" },
              { name: "DAMCO", url: "https://logo.clearbit.com/maersk.com" }, // Using Maersk as Damco is integrated
              { name: "NIPPON Express", url: "https://logo.clearbit.com/nipponexpress.com" }
            ].map((logo, i) => (
              <div key={i} className="group flex flex-col items-center gap-2 cursor-default">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-8 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback Text if Image Fails */}
                <span className="hidden text-lg font-bold text-zinc-400 group-hover:text-indigo-900 font-sans tracking-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <SectionShell className="bg-white border-t border-zinc-100">
        <FadeIn>
            <Badge text="Capabilities" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionHeading text="Three AI verticals. One delivery partner." />
              <p className="text-zinc-500 max-w-md pb-6 text-sm leading-relaxed">
                AventeqAI focuses on the AI capabilities that create real operational and commercial impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card onClick={() => navigate('contact')} badgeText="STRATEGY">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">AI Strategy & Discovery</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Identify where AI delivers the greatest value. We assess data, workflows, and objectives to define a clear roadmap.
                </p>
              </Card>

              <Card onClick={() => navigate('operations')} badgeText="DEVELOPMENT">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">Custom AI Development</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  We design and build bespoke AI solutions tailored to your business — from early prototypes to production-ready systems.
                </p>
              </Card>

              <Card onClick={() => navigate('logistics')} badgeText="AUTOMATION">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">AI Optimisation</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  We apply AI to automate workflows, optimise operations and improve decision-making — reducing manual effort.
                </p>
              </Card>
            </div>

            <div className="text-center">
               <div className="inline-flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium text-zinc-600">
                  <button onClick={() => navigate('finance')} className="hover:text-indigo-600 transition-colors">Explore the Financial Layer →</button>
                  <button onClick={() => navigate('logistics')} className="hover:text-indigo-600 transition-colors">View Logistics Infrastructure →</button>
                  <button onClick={() => navigate('operations')} className="hover:text-indigo-600 transition-colors">See Programmable Ops →</button>
               </div>
            </div>
        </FadeIn>
      </SectionShell>

       {/* Outcomes Section */}
       <SectionShell className="bg-zinc-50 border-y border-zinc-200">
        <FadeIn>
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
                <div>
                    <SectionHeading text="Engineered for measurable impact" />
                </div>
                <p className="text-zinc-500 max-w-md pb-6 text-sm leading-relaxed">
                    We prioritise AI initiatives that deliver measurable improvements to performance, efficiency and decision-making.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: 'Operational Efficiency', icon: Zap, desc: 'Reduce manual effort and cycle times by automating repetitive and error-prone processes.', link: 'operations', linkText: 'View Programmable Ops' },
                    { title: 'Better Decision-Making', icon: TrendingUp, desc: 'Use AI-driven insights and predictive intelligence to support faster decisions.', link: 'finance', linkText: 'View Financial Layer' },
                    { title: 'Cost Reduction', icon: BarChart3, desc: 'Lower operational costs through optimisation, automation and improved resource allocation.', link: 'logistics', linkText: 'View Logistics Engine' },
                    { title: 'Scalable AI Systems', icon: Layers, desc: 'Build AI solutions that grow with your organisation and adapt as needs change.', link: 'contact', linkText: 'Start Building' }
                ].map((item, i) => (
                    <Card key={i} onClick={() => navigate(item.link as PageRoute)} className="flex flex-col h-full hover:border-slate-400">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                            <item.icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-zinc-900 mb-3">{item.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                        <div className="text-xs text-indigo-600 font-bold tracking-wider text-left mt-auto flex items-center gap-1 group">
                            {item.linkText} <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Card>
                ))}
            </div>
        </FadeIn>
      </SectionShell>

      {/* How We Work */}
      <SectionShell className="bg-white">
        <FadeIn>
            <Badge text="Delivery_Framework" />
            <SectionHeading text="A simple AI delivery framework that scales" />
            
            <div className="grid md:grid-cols-3 gap-8 relative mt-16">
                <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-zinc-100 -z-10"></div>
                
                {[
                    { 
                        num: '01', 
                        title: 'Discover & Align', 
                        desc: 'We start by understanding your business goals, constraints, and data.',
                    },
                    { 
                        num: '02', 
                        title: 'Build & Validate', 
                        desc: 'We design and build tailored AI solutions using rapid prototyping.',
                    },
                    { 
                        num: '03', 
                        title: 'Deploy & Scale', 
                        desc: 'We deploy AI solutions into live environments with monitoring.',
                    }
                ].map((step, i) => (
                    <div key={i} className="bg-white pr-4">
                        <div className="text-4xl font-mono font-bold text-indigo-100 mb-6 bg-white inline-block pr-4">0{i+1}</div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </FadeIn>
      </SectionShell>

      {/* Final CTA */}
      <SectionShell className="bg-zinc-50 border-t border-zinc-200">
        <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <Badge text="Start_Building" />
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Ready to build with AI?</h2>
                    <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
                        Book a free strategy call and we’ll help you identify where AI can deliver the greatest impact across your business.
                    </p>
                    
                    {/* Highlighted Assessment Card */}
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-lg relative overflow-hidden group hover:border-indigo-300 transition-colors">
                       <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                          <Code2 className="w-32 h-32 text-indigo-600" />
                       </div>
                       <div className="relative z-10">
                          <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                             <Code2 className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-zinc-900 mb-4">
                             AI Readiness Assessment
                          </h3>
                          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                             Most organisations want to use AI — but few know where to start. We identify the most practical, high-impact AI opportunities based on your data.
                          </p>
                          <div className="space-y-3 border-t border-zinc-100 pt-6">
                             <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">What you get:</p>
                             {[
                               'Data Maturity Audit', 
                               'High-Impact Use Case Mapping', 
                               'Implementation Roadmap & ROI'
                             ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                                   <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" /> 
                                   {item}
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                </div>
                
                <ReadinessAssessmentForm />
            </div>
        </FadeIn>
      </SectionShell>
    </div>
  );
};

// --- USE CASE TEMPLATE COMPONENT ---
const UseCasePage = ({ 
  eyebrow,
  title, 
  subtitle, 
  intro, 
  challenges,
  solutions,
  outcomes,
  ctaText,
  links,
  navigate,
  visualVariant
}: any) => {
  
  const renderVisual = () => {
    switch (visualVariant) {
      case 'terminal': return <TerminalVisual />;
      case 'finance': return <FinanceVisual />;
      case 'logistics': return <LogisticsVisual />;
      default: return null;
    }
  };

  return (
    <div className="bg-white pt-20">
       {/* Hero */}
       <SectionShell className="bg-white">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  {/* Breadcrumb and Badge removed as requested */}
                  
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">{title}</motion.h1>
                  <motion.p variants={fadeInUp} className="text-lg text-zinc-500 mb-8 leading-relaxed">{subtitle}</motion.p>
                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
                      <ButtonPrimary onClick={() => navigate('contact')} text={ctaText} />
                  </motion.div>
              </div>

              {/* Dynamic Visual */}
              {visualVariant && renderVisual()}
          </motion.div>
       </SectionShell>

        {/* Challenges Section */}
        <SectionShell className="bg-zinc-50 border-y border-zinc-200">
           <FadeIn>
               <div className="flex flex-col md:flex-row gap-12">
                   <div className="md:w-1/3">
                       <Badge text="System_Diagnostics" />
                       <h2 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">Identified Constraints</h2>
                       <p className="text-zinc-500 text-sm">
                           Common structural challenges we detect in legacy systems.
                       </p>
                   </div>
                   <div className="md:w-2/3 grid gap-4">
                       {challenges && challenges.map((item: string, i: number) => (
                           <div key={i} className="flex items-center gap-4 p-4 border border-zinc-200 rounded bg-white shadow-sm hover:border-red-200 transition-colors">
                               <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                               <span className="text-zinc-700 font-medium text-sm">{item}</span>
                           </div>
                       ))}
                   </div>
               </div>
           </FadeIn>
       </SectionShell>

       {/* Solutions Grid */}
       <SectionShell>
           <FadeIn>
               <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                   <div className="max-w-xl">
                       <Badge text="System_Modules" />
                       <SectionHeading text="Engineered for Performance" />
                       <p className="text-zinc-500 text-sm">{intro}</p>
                   </div>
               </div>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                   {solutions && solutions.map((sol: any, i: number) => (
                       <Card key={i} className="bg-white shadow-sm" badgeText={`MODULE_0${i+1}`}>
                           <h3 className="text-lg font-bold text-zinc-900 mb-2">{sol.title}</h3>
                           <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                             {sol.desc}
                           </p>
                           <div className="flex gap-2 flex-wrap mt-4">
                               {sol.cases.map((c: string, j: number) => (
                                   <span key={j} className="text-[10px] bg-zinc-50 text-zinc-500 border border-zinc-200 px-2 py-1 rounded font-mono">
                                     {c}
                                   </span>
                               ))}
                           </div>
                       </Card>
                   ))}
               </div>
           </FadeIn>
       </SectionShell>

       {/* Outcomes Section */}
       <SectionShell className="bg-zinc-50 border-y border-zinc-200">
          <FadeIn>
              <SectionHeading text="Performance Metrics" />
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                  {outcomes && outcomes.map((o: any, i: number) => (
                      <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                          <div className="text-indigo-600 mb-3"><BarChart3 className="w-5 h-5" /></div>
                          <h4 className="text-zinc-900 font-bold mb-2 text-sm">{o.label}</h4>
                          <p className="text-zinc-500 text-xs leading-relaxed">{o.desc}</p>
                      </div>
                  ))}
              </div>
          </FadeIn>
       </SectionShell>

       {/* Delivery Approach */}
        <SectionShell className="bg-white">
            <FadeIn>
                <Badge text="Deployment_Protocol" />
                <SectionHeading text="Implementation Lifecycle" />
                <div className="grid md:grid-cols-4 gap-4 mt-8">
                    {['Audit & Map', 'Architect', 'Build & Integrate', 'Deploy & Scale'].map((step, i) => (
                        <div key={i} className="border-t-2 border-indigo-100 pt-4">
                            <span className="text-xs font-mono text-indigo-500 block mb-2">PHASE_0{i+1}</span>
                            <h4 className="font-bold text-zinc-900">{step}</h4>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </SectionShell>

       {/* CTA */}
       <SectionShell>
          <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                 <h2 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight">Ready to upgrade your infrastructure?</h2>
                 <div className="flex justify-center flex-col items-center gap-4">
                     <ButtonPrimary onClick={() => navigate('contact')} text={ctaText} />
                     <button onClick={() => navigate(links.secondaryLink)} className="text-zinc-500 hover:text-zinc-900 text-sm font-medium">Or view {links.secondaryText} →</button>
                 </div>
              </div>
          </FadeIn>
       </SectionShell>
    </div>
  );
};

// --- USE CASE DATA INJECTION ---

const FinancePage = ({ navigate }: any) => (
  <UseCasePage 
    navigate={navigate}
    eyebrow="FINANCIAL_OPS_LAYER"
    title="The Outcome-First AI Layer for Modern Financial Operations"
    subtitle="Eliminate manual workflows and uncover hidden insights. We build custom, high-fidelity AI systems that integrate directly into your financial stack."
    intro="Finance teams are under increasing pressure to deliver accurate insights. AventeqAI helps finance leaders use AI to automate workflows."
    ctaText="[ View Financial Solutions ]"
    links={{ secondaryText: 'Programmable Ops', secondaryLink: 'operations' }}
    visualVariant="finance" // Specific visual
    challenges={['Manual reporting and reconciliation', 'Poor forecasting accuracy', 'Limited real-time visibility', 'Slow identification of risk', 'Disconnected spreadsheets']}
    solutions={[
      { title: 'AI-Powered Forecasting', desc: 'Improve the accuracy of cash flow, revenue and cost forecasting using ML models.', cases: ['Cash flow forecasting', 'Scenario modelling'] },
      { title: 'Automated Reporting', desc: 'Reduce manual workload by automating recurring reports and variance analysis.', cases: ['Month-end reporting', 'Variance analysis'] },
      { title: 'Risk & Anomaly Detection', desc: 'Identify unusual transactions, trends and risks earlier using AI-driven monitoring.', cases: ['Fraud detection', 'Compliance monitoring'] },
      { title: 'Decision Intelligence', desc: 'Turn financial data into actionable insight with AI-driven recommendations.', cases: ['Budget optimisation', 'Performance dashboards'] }
    ]}
    outcomes={[
      { label: 'Faster Close Cycles', desc: 'Reduce time spent on manual reporting.' },
      { label: 'Improved Accuracy', desc: 'More reliable projections and scenarios.' },
      { label: 'Reduced Risk', desc: 'Identify anomalies before they become issues.' },
      { label: 'Real-Time Visibility', desc: 'Up-to-date insights across performance.' }
    ]}
  />
);

const LogisticsPage = ({ navigate }: any) => (
  <UseCasePage 
    navigate={navigate}
    eyebrow="GLOBAL_SUPPLY_CHAIN_API"
    title="Accelerate Operational Velocity with Outcome-Driven Logistics AI"
    subtitle="Stop reacting to disruptions. We build custom, production-ready AI layers that predict bottlenecks and automate your global trade."
    intro="Logistics teams operate in complex environments. AventeqAI helps organisations apply AI to planning and execution for better control."
    ctaText="[ Build Your Logistics Engine ]"
    links={{ secondaryText: 'Programmable Ops', secondaryLink: 'operations' }}
    visualVariant="logistics" // Specific visual
    challenges={['Demand volatility and inaccurate forecasting', 'Overstocking and excess inventory', 'Limited end-to-end visibility', 'Reactive decision-making', 'Rising transport costs']}
    solutions={[
      { title: 'AI Demand Forecasting', desc: 'Use machine learning to predict demand patterns more accurately enabling better planning.', cases: ['S&OP planning', 'Seasonal forecasting'] },
      { title: 'Inventory Optimisation', desc: 'Optimise inventory levels across locations to reduce waste and prevent stockouts.', cases: ['Stock optimisation', 'Multi-location balancing'] },
      { title: 'Predictive Routing', desc: 'Improve transport efficiency by using AI to optimise routing, scheduling and capacity.', cases: ['Route optimisation', 'Capacity planning'] },
      { title: 'Visibility & Alerts', desc: 'Gain real-time visibility with AI-powered alerts that highlight delays and risks.', cases: ['Disruption alerts', 'Risk management'] }
    ]}
    outcomes={[
      { label: 'Lower Logistics Costs', desc: 'Reduce transport and storage costs.' },
      { label: 'Improved Delivery', desc: 'Increase on-time, in-full delivery rates.' },
      { label: 'Reduced Waste', desc: 'Balance inventory to avoid shortages.' },
      { label: 'Greater Resilience', desc: 'Anticipate disruption earlier.' }
    ]}
  />
);

const OperationsPage = ({ navigate }: any) => (
  <UseCasePage 
    navigate={navigate}
    eyebrow="PROGRAMMABLE_OPS"
    title="Programmable AI Systems Engineered to Automate Operational Complexity"
    subtitle="Stop managing workflows and start orchestrating them. We build custom AI systems that integrate across your entire stack."
    intro="Operational inefficiency slows growth. AventeqAI helps organisations apply AI to everyday operations — reducing manual effort."
    ctaText="[ Start Automating ]"
    links={{ secondaryText: 'Financial Layer', secondaryLink: 'finance' }}
    visualVariant="terminal" // Specific visual
    challenges={['Manual, repetitive processes', 'Siloed systems and disconnected data', 'Limited visibility into bottlenecks', 'Slow decision-making', 'Rising operational costs']}
    solutions={[
      { title: 'Intelligent Process Automation', desc: 'Automate repetitive and rule-based workflows using AI — reducing manual effort.', cases: ['Workflow automation', 'Exception handling'] },
      { title: 'Performance Analytics', desc: 'Gain real-time visibility into operational bottlenecks and capacity using AI analytics.', cases: ['Productivity tracking', 'Bottleneck ID'] },
      { title: 'Predictive Maintenance', desc: 'Use AI to anticipate issues before they impact delivery — enabling proactive planning.', cases: ['Risk forecasting', 'Resource planning'] },
      { title: 'AI Decision Support', desc: 'Support leaders with AI-powered recommendations that help prioritise actions.', cases: ['Resource optimisation', 'Scenario analysis'] }
    ]}
    outcomes={[
      { label: 'Reduced Workload', desc: 'Automate repetitive processes.' },
      { label: 'Lower Costs', desc: 'Optimise resources and reduce inefficiencies.' },
      { label: 'Faster Execution', desc: 'Improve throughput and reliability.' },
      { label: 'Scalable Operations', desc: 'Support growth without linear cost increases.' }
    ]}
  />
);

// CONTACT / STRATEGY CALL PAGE
const ContactPage: React.FC<NavProps> = ({ navigate }) => {
    return (
        <div className="bg-white min-h-screen pt-20">
             <SectionShell className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <Badge text="Start_Building" />
                    <h1 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                        Ready to start your AI transformation? Reach out to our global team.
                    </p>
                    
                    {/* Office Locations Block */}
                    <div className="space-y-8">
                       <div>
                          <h4 className="flex items-center gap-2 font-bold text-zinc-900 mb-3">
                             <CheckCircle2 className="w-5 h-5 text-indigo-600" /> Headquarters
                          </h4>
                          <div className="pl-7 text-sm text-zinc-600">
                             <p className="font-medium flex items-center gap-2 mb-1">
                               <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-auto rounded-sm opacity-90" /> Vadodara, India
                             </p>
                             <p className="text-zinc-500 leading-relaxed pl-7">Tech Park One, Suite 404<br/>Vadodara, Gujarat 390007</p>
                          </div>
                       </div>
                       
                       <div>
                          <h4 className="flex items-center gap-2 font-bold text-zinc-900 mb-3">
                             <CheckCircle2 className="w-5 h-5 text-indigo-600" /> Global Offices
                          </h4>
                          <div className="pl-7 space-y-4 text-sm text-zinc-600">
                             <div>
                                <p className="font-medium flex items-center gap-2 mb-1">
                                  <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-5 h-auto rounded-sm opacity-90" /> London, UK
                                </p>
                                <p className="text-zinc-500 pl-7">Canary Wharf, Level 39</p>
                             </div>
                             <div>
                                <p className="font-medium flex items-center gap-2 mb-1">
                                  <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="w-5 h-auto rounded-sm opacity-90" /> Singapore
                                </p>
                                <p className="text-zinc-500 pl-7">Marina Bay Financial Centre</p>
                             </div>
                             <div>
                                <p className="font-medium flex items-center gap-2 mb-1">
                                  <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-5 h-auto rounded-sm opacity-90" /> Canada
                                </p>
                                <p className="text-zinc-400 text-xs pl-7">Toronto, Ontario</p>
                             </div>
                          </div>
                       </div>

                       <div>
                          <h4 className="flex items-center gap-2 font-bold text-zinc-900 mb-3">
                             <ArrowRight className="w-5 h-5 text-indigo-600" /> Email
                          </h4>
                          <p className="pl-7 text-sm text-indigo-600 font-medium">hello@aventeqai.com</p>
                       </div>
                    </div>
                  </div>
                  
                  <ReadinessAssessmentForm />
                </div>
             </SectionShell>
        </div>
    );
};

// --- APP ROOT ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  usePageMetadata(currentPage); // UPDATED HOOK

  // UPDATED NAVIGATION LOGIC FOR CLEAN URLs
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    // Simulate Next.js Router Push
    let path = '/';
    if (page !== 'home') {
       if (page === 'contact') path = '/contact';
       else if (page === 'privacy') path = '/legal/privacy';
       else if (page === 'terms') path = '/legal/terms';
       else path = `/solutions/${page}`;
    }
    
    try {
      window.history.pushState({ page }, '', path);
    } catch (err) {
      console.log('Navigation URL update suppressed in preview environment.');
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPage={currentPage} navigate={navigate} />
      
      <main>
        {currentPage === 'home' && <HomePage currentPage={currentPage} navigate={navigate} />}
        {currentPage === 'finance' && <FinancePage navigate={navigate} />}
        {currentPage === 'logistics' && <LogisticsPage navigate={navigate} />}
        {currentPage === 'operations' && <OperationsPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage currentPage={currentPage} navigate={navigate} />}
        {currentPage === 'privacy' && <PrivacyPage currentPage={currentPage} navigate={navigate} />}
        {currentPage === 'terms' && <TermsPage currentPage={currentPage} navigate={navigate} />}
      </main>

      <Footer currentPage={currentPage} navigate={navigate} />
    </div>
  );
}