import React from 'react';
import {
    Truck,
    Image as ImageIcon,
    AlertTriangle,
    FileSpreadsheet,
    Network,
    Wrench,
    Check,
    VenetianMask,
    Calculator,
    TrendingUp
} from 'lucide-react';

import dashboardPreview from './assets/dashboard_preview.png';
import vehicleDetails from './assets/vehicle_details.png';
import toolsEquipment from './assets/tools_equipment.png';

// Custom Colors from Request
// primary: '#1d4ed8'
// secondary: '#f1f5f9'
// dark: '#0f172a'

const SavingsCalculator = () => {
    const [fleetSize, setFleetSize] = React.useState(10);
    const [spendPerTruck, setSpendPerTruck] = React.useState(300000); // 3 Lakhs default
    const [savingsPerTruck, setSavingsPerTruck] = React.useState(210000); // 2.1L default

    const totalSavings = (fleetSize * savingsPerTruck) / 100000; // In Lakhs
    const reductionPercentage = Math.round((savingsPerTruck / spendPerTruck) * 100);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Number of trucks in your fleet</label>
                        <input
                            type="number"
                            value={fleetSize}
                            onChange={(e) => setFleetSize(Number(e.target.value))}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 outline-none transition font-semibold text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Current tyre spend per truck/year (₹)</label>
                        <input
                            type="number"
                            value={spendPerTruck}
                            onChange={(e) => setSpendPerTruck(Number(e.target.value))}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 outline-none transition font-semibold text-gray-900"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="block text-sm font-semibold text-gray-700">Expected savings per truck/year</label>
                            <span className="text-[#1d4ed8] font-bold">₹{(savingsPerTruck / 100000).toFixed(2)} L</span>
                        </div>
                        <input
                            type="range"
                            min="50000"
                            max="500000"
                            step="10000"
                            value={savingsPerTruck}
                            onChange={(e) => setSavingsPerTruck(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                            <span>₹0.5L (Conservative)</span>
                            <span>₹2.5L (Average)</span>
                            <span>₹5L (Optimistic)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-8 text-center border border-blue-100 h-full flex flex-col justify-center">
                    <p className="text-gray-500 font-medium mb-4">Your estimated annual savings</p>
                    <div className="text-5xl md:text-6xl font-bold text-[#1d4ed8] mb-4 tracking-tight">
                        ₹ {totalSavings.toFixed(2)} L
                    </div>
                    <div className="inline-flex items-center justify-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-full mx-auto mb-8">
                        <TrendingUp className="w-4 h-4" /> {reductionPercentage}% reduction in tyre costs
                    </div>

                    <div className="space-y-3 text-sm text-gray-600 border-t border-blue-100 pt-6 mb-8">
                        <div className="flex justify-between">
                            <span>Fleet size</span>
                            <span className="font-bold text-gray-900">{fleetSize} trucks</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Savings per truck</span>
                            <span className="font-bold text-gray-900">₹{(savingsPerTruck / 100000).toFixed(2)} L/year</span>
                        </div>
                        <div className="flex justify-between pt-3 border-t border-dashed border-blue-200 text-base">
                            <span className="font-medium text-[#1d4ed8]">Total annual savings</span>
                            <span className="font-bold text-[#1d4ed8]">₹{totalSavings.toFixed(2)} L</span>
                        </div>
                    </div>

                    <button className="w-full bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
                        Start saving today
                    </button>
                </div>
            </div>
        </div>
    );
};

const TyreMasterPage = ({ navigate }: { navigate: (page: any) => void }) => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased selection:bg-[#1d4ed8] selection:text-white">

            {/* Font Import (can be handled globally, but ensuring it works here) */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .text-dark { color: #0f172a; }
        .text-primary { color: #1d4ed8; }
        .bg-primary { background-color: #1d4ed8; }
        .bg-dark { background-color: #0f172a; }
        .hover\\:bg-primary:hover { background-color: #1d4ed8; }
        .hover\\:text-primary:hover { color: #1d4ed8; }
      `}</style>

            {/* Navbar - Note: Replaced "a href" with button/onClick for SPA navigation where appropriate, or anchors for scrolling */}


            <img src={dashboardPreview} alt="Dashboard Preview" className="hidden" /> {/* Preload for testing if needed, or just standard import */}

            <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] tracking-tight mb-6">
                        Stop Burning Money on <span className="text-[#1d4ed8]">Tyres</span>.
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
                        The complete tyre management system for Indian fleets. Track every kilometer, prevent theft, and secure your jacks and toolkits.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <a href="https://tyremaster.aventeqai.com/" className="bg-[#1d4ed8] hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-xl font-semibold transition shadow-xl shadow-blue-600/20 flex items-center justify-center">
                            Start Saving Today - Free Trial
                        </a>
                        <a href="https://tyremaster.aventeqai.com/" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-lg px-8 py-3 rounded-xl font-semibold transition flex items-center justify-center">
                            View Features
                        </a>
                    </div>

                    <div className="relative max-w-5xl mx-auto mt-12">
                        <div className="bg-slate-100 rounded-xl shadow-2xl border border-slate-200 overflow-hidden aspect-[16/9] flex items-center justify-center group relative">
                            <img src={dashboardPreview} alt="TyreMaster Dashboard" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-10 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted by 200+ Logistics Companies Across India</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        <div className="text-xl font-bold text-gray-400">MAHINDRA LOGISTICS</div>
                        <div className="text-xl font-bold text-gray-400">VRL</div>
                        <div className="text-xl font-bold text-gray-400">TCI</div>
                        <div className="text-xl font-bold text-gray-400">SAFEEXPRESS</div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Is "Tyre Ghapla" Draining Your Profits?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">You track diesel, but tyres are your second biggest cost. Negligence and theft are silent killers.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                                <VenetianMask className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3">Inventory Theft</h3>
                            <p className="text-gray-500 leading-relaxed">Brand new spare tyres swapped for old ones at roadside dhabas. Jacks and tools disappearing without a trace.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3">Unknown Wear</h3>
                            <p className="text-gray-500 leading-relaxed">Drivers running tyres until they burst because no one checked the pressure or tread depth in weeks.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-6">
                                <FileSpreadsheet className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3">Data Chaos</h3>
                            <p className="text-gray-500 leading-relaxed">Relying on messy diaries, WhatsApp messages, and Excel sheets that don't tell the real story.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALCULATOR SECTION */}
            <section id="calculator" className="py-20 bg-slate-50 border-y border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold mb-6">
                            <Calculator className="w-3 h-3" /> Savings Calculator
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">Calculate your potential savings</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            See how much you could save annually with TyreMaster's wear monitoring and remould planning.
                        </p>
                    </div>
                    <SavingsCalculator />
                </div>
            </section>

            <section id="features" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0f172a] mb-4">The Smart Way to Manage Fleet Assets</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="md:w-1/2">
                            <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200">
                                <div className="bg-slate-100 aspect-video rounded-lg flex items-center justify-center text-gray-400 flex-col overflow-hidden">
                                    <img src={vehicleDetails} alt="Visual Tyre Map" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Visual Tyre Mapping</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Forget complex serial numbers. Our visual dashboard shows you exactly where every tyre is—Front Left, Rear Outer, or Spare. Move them digitally in seconds.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600"><Check className="text-green-500 mr-3 w-5 h-5" /> Drag & drop rotation</li>
                                <li className="flex items-center text-gray-600"><Check className="text-green-500 mr-3 w-5 h-5" /> Support for 6-Tyre to Multi-Axle</li>
                                <li className="flex items-center text-gray-600"><Check className="text-green-500 mr-3 w-5 h-5" /> Instant visual alerts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200">
                                <div className="bg-slate-100 aspect-video rounded-lg flex items-center justify-center text-gray-400 flex-col overflow-hidden">
                                    <img src={toolsEquipment} alt="Tools & Equipment Inventory" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Inventory & Asset Protection</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">We don't just track rubber. Assign jacks, fire extinguishers, and toolkits to specific vehicles and drivers. If it goes missing, you know who is responsible.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600"><Check className="text-green-500 mr-3 w-5 h-5" /> Track Jacks & Toolkits</li>
                                <li className="flex items-center text-gray-600"><Check className="text-green-500 mr-3 w-5 h-5" /> Driver accountability logs</li>
                                <li className="flex items-center text-gray-600"><Check className="text-green-500 mr-3 w-5 h-5" /> Prevent roadside theft</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="roi" className="py-20 bg-[#1d4ed8] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">The Software That Pays for Itself</h2>
                    <p className="text-blue-100 text-lg mb-10">We know margins in transport are tight. TyreMaster is built to be affordable.</p>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="text-xl sm:text-2xl font-medium mb-4">
                            "If TyreMaster saves just <span className="text-yellow-300 font-bold">ONE tyre</span> from theft or damage, your subscription is paid for the next 5 years."
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0f172a]">Take Control in 3 Steps</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-blue-50 text-[#1d4ed8] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0f172a]">Onboard Fleet</h3>
                            <p className="text-gray-500">Add vehicles and visually map your current tyre setup in minutes.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-blue-50 text-[#1d4ed8] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0f172a]">Log & Track</h3>
                            <p className="text-gray-500">Update odometers and log inspections. Rotate tyres digitally.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-blue-50 text-[#1d4ed8] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0f172a]">Stop Leaks</h3>
                            <p className="text-gray-500">Get alerts for missing inventory or abnormal wear immediately.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#0f172a] text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to secure your fleet?</h2>
                    <p className="text-gray-400 mb-8">Join the smartest fleet owners in India. Stop the leaks in your budget today.</p>
                    <a href="https://tyremaster.aventeqai.com/" className="inline-block bg-[#1d4ed8] hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-xl font-semibold transition mb-16">
                        Get Started for Free
                    </a>


                </div>
            </footer>

        </div>
    );
};

export default TyreMasterPage;
