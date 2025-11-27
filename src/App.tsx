import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  TrendingUp,
  Zap,
} from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}</span>;
};

export default function LeadCatchLanding() {
  const [lostRevenue, setLostRevenue] = useState(0);
  const [leadsPerMonth, setLeadsPerMonth] = useState(30);
  const [avgProjectValue, setAvgProjectValue] = useState(15000);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const revenue = Math.round(leadsPerMonth * 0.4 * avgProjectValue * 0.3 * 12);
    setLostRevenue(revenue);
  }, [leadsPerMonth, avgProjectValue]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Work Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .font-display {
          font-family: 'Archivo Black', sans-serif;
          letter-spacing: -0.02em;
        }

        .blueprint-grid {
          background-image: 
            linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .tape-border {
          position: relative;
        }

        .tape-border::before,
        .tape-border::after {
          content: '';
          position: absolute;
          height: 3px;
          left: 0;
          right: 0;
          background: repeating-linear-gradient(
            45deg,
            #f59e0b,
            #f59e0b 10px,
            #1e293b 10px,
            #1e293b 20px
          );
        }

        .tape-border::before {
          top: 0;
        }

        .tape-border::after {
          bottom: 0;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-up-delay-1 { animation-delay: 0.1s; }
        .fade-in-up-delay-2 { animation-delay: 0.2s; }
        .fade-in-up-delay-3 { animation-delay: 0.3s; }
        .fade-in-up-delay-4 { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pulse-warning {
          animation: pulseWarning 2s ease-in-out infinite;
        }

        @keyframes pulseWarning {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
          transform: translateX(-50px);
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .grain-overlay {
          position: relative;
          overflow: hidden;
        }

        .grain-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center blueprint-grid grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95"></div>
        
        {/* Animated construction elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="w-64 h-64 border-4 border-orange-500 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="inline-block mb-4 fade-in-up">
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 border-2 border-orange-500 text-orange-400 rounded">
              <Zap size={20} />
              <span className="font-bold text-sm tracking-wider">AI-POWERED LEAD RESPONSE</span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 fade-in-up fade-in-up-delay-1 leading-tight">
            <span className="text-white">Never Miss a Lead</span>
            <br />
            <span className="text-orange-500">While You're on the Job Site</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 fade-in-up fade-in-up-delay-2 font-medium leading-relaxed">
            LeadCatch helps residential contractors capture <span className="text-emerald-400 font-bold">4-6 additional projects per month</span> by responding to every lead within 5 minutes—<span className="text-orange-400">even when you're on a ladder</span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 fade-in-up fade-in-up-delay-3">
            <button className="group relative px-8 py-4 bg-orange-500 text-slate-900 font-bold text-lg rounded hover:bg-orange-400 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/50">
              START 14-DAY FREE TRIAL
              <Zap className="inline-block ml-2" size={20} />
              <div className="absolute inset-0 bg-white/20 rounded scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold text-lg rounded hover:border-orange-500 hover:text-orange-400 transition-all">
              SEE HOW IT WORKS
            </button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400 fade-in-up fade-in-up-delay-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-400" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN & SITUATIONS SECTION */}
      <section className="py-20 bg-slate-800 tape-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              YOUR <span className="text-orange-500">TYPICAL TUESDAY</span>
            </h2>
            <p className="text-xl text-slate-400">While you're working, your competitors are stealing your leads</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { time: '9:15 AM', icon: Phone, text: "Angi lead calls. You're on a ladder.", lost: '$18K roof job', status: 'MISSED' },
              { time: '10:30 AM', icon: Phone, text: "HomeAdvisor lead calls. You're at supplier.", lost: '$25K deck build', status: 'MISSED' },
              { time: '12:45 PM', icon: Clock, text: 'Check phone. 4 missed calls. Try calling back.', lost: 'No answer', status: 'TOO LATE' },
              { time: '5:30 PM', icon: AlertTriangle, text: 'Finally reach homeowner. "Already hired someone."', lost: '$21K remodel', status: 'LOST' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border-2 border-slate-700 p-6 rounded-lg relative overflow-hidden group hover:border-orange-500/50 transition-all slide-in-right"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-orange-400 font-bold font-mono">{item.time}</span>
                    <item.icon size={24} className="text-slate-600" />
                  </div>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{item.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-bold text-sm">{item.lost}</span>
                    <span className="px-3 py-1 bg-red-500/20 border border-red-500 text-red-400 text-xs font-bold rounded">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-slate-900 border-l-4 border-orange-500 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle size={32} className="text-orange-500" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl mb-2">THE HIDDEN TRUTH</h3>
                <p className="text-slate-300 text-lg">
                  <span className="text-orange-400 font-bold">78% of homeowners hire the first contractor who responds.</span> Your competitors aren't better—they're just faster. You think you respond "same day." Reality? Average contractor response time is <span className="text-red-400 font-bold">42 hours</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 blueprint-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              CAPTURE EVERY LEAD.<br />
              <span className="text-emerald-400">GROW YOUR BUSINESS.</span>
            </h2>
            <p className="text-xl text-slate-400">LeadCatch responds in under 5 minutes—even when you're on a jobsite</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                metric: '4-6',
                unit: 'Additional Projects/Month',
                description: 'Convert leads that would have gone to faster competitors',
                color: 'emerald',
              },
              {
                icon: DollarSign,
                metric: '$60K-$180K',
                unit: 'Additional Revenue/Year',
                description: 'From previously missed or slow-response leads',
                color: 'orange',
              },
              {
                icon: Clock,
                metric: '6',
                unit: 'Hours Saved/Week',
                description: 'No more phone tag, callbacks, or missed opportunities',
                color: 'sky',
              },
            ].map((benefit, idx) => (
              <div key={idx} className={`stat-card bg-slate-800 border-2 border-${benefit.color}-500/30 rounded-lg p-8 relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${benefit.color}-500/5 rounded-bl-full`}></div>
                <div className="relative z-10">
                  <benefit.icon size={48} className={`text-${benefit.color}-400 mb-4`} />
                  <div className={`font-display text-5xl text-${benefit.color}-400 mb-2`}>
                    {benefit.metric}
                  </div>
                  <div className="text-slate-400 font-semibold mb-4">{benefit.unit}</div>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="bg-slate-800 border-2 border-orange-500 rounded-lg p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl mb-8 text-center">
              CALCULATE YOUR <span className="text-orange-500">LOST REVENUE</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-3">LEADS PER MONTH</label>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="text-4xl font-display text-orange-400 mt-2">{leadsPerMonth}</div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-3">AVG PROJECT VALUE</label>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="1000"
                  value={avgProjectValue}
                  onChange={(e) => setAvgProjectValue(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="text-4xl font-display text-orange-400 mt-2">${avgProjectValue.toLocaleString()}</div>
              </div>
            </div>

            <div className="text-center p-8 bg-slate-900 rounded-lg border-2 border-red-500">
              <div className="text-sm font-bold text-slate-400 mb-2">YOU'RE LOSING APPROXIMATELY</div>
              <div className="font-display text-5xl md:text-7xl text-red-400 mb-2">
                <CountUp end={lostRevenue} prefix="$" />
              </div>
              <div className="text-slate-400 text-lg">per year to slow lead response</div>
              <div className="mt-6 text-sm text-slate-500">
                Based on 40% of leads never receiving response + slow response killing conversion rates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT EXPLANATION SECTION */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              HOW <span className="text-orange-500">LEADCATCH</span> WORKS
            </h2>
            <p className="text-xl text-slate-400">Set it up once. Capture every lead. Forever.</p>
          </div>

          <div className="space-y-16">
            {[
              {
                step: '01',
                title: 'LEAD COMES IN',
                description: 'From any source—Angi, HomeAdvisor, website form, Facebook, Google LSA, referrals',
                visual: (
                  <div className="flex flex-wrap gap-3">
                    {['Angi', 'HomeAdvisor', 'Website', 'Facebook', 'Google', 'Referral'].map((source, i) => (
                      <div key={i} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-sm font-semibold">
                        {source}
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                step: '02',
                title: 'AI RESPONDS INSTANTLY',
                description: 'Natural voice conversation (for calls) or smart text response (for forms) — no robotic nonsense',
                visual: (
                  <div className="bg-slate-800 border-2 border-emerald-500 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-slate-900" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-emerald-500/20 rounded-lg p-3 text-emerald-100">
                          "Hi! Thanks for reaching out to Mike's Roofing. I'd love to help you with your project. Are you looking for a full roof replacement or repair work?"
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 text-right">Response time: 8 seconds</div>
                  </div>
                ),
              },
              {
                step: '03',
                title: 'QUALIFIES THE LEAD',
                description: 'AI asks the right questions: project type, timeline, location, budget range, decision-making status',
                visual: (
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { q: 'Project Type?', a: 'Deck build (16x20)' },
                      { q: 'Timeline?', a: 'Start in 3-4 weeks' },
                      { q: 'Location?', a: '428 Oak St, Portland' },
                      { q: 'Budget?', a: '$15K-$20K range' },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800 border border-slate-700 rounded p-3">
                        <div className="text-xs text-slate-500 mb-1">{item.q}</div>
                        <div className="text-sm font-semibold text-slate-200">{item.a}</div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                step: '04',
                title: 'NOTIFIES YOU INSTANTLY',
                description: 'Get a text with all details, priority level, and one-tap options to respond',
                visual: (
                  <div className="bg-slate-800 border-2 border-orange-500 rounded-xl p-6 max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap size={24} className="text-orange-500" />
                      <span className="font-bold text-orange-400">NEW LEAD</span>
                    </div>
                    <h4 className="font-bold text-xl mb-2">Sarah Thompson</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-slate-500" />
                        <span>428 Oak St, Portland</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-slate-500">Project:</span> Deck build (16x20, composite)
                      </div>
                      <div className="text-sm">
                        <span className="text-slate-500">Timeline:</span> Start in 3-4 weeks
                      </div>
                      <div className="text-sm">
                        <span className="text-slate-500">Budget:</span> $15K-$20K range
                      </div>
                      <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs font-bold rounded">
                        🔥 HOT LEAD - No other quotes yet
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full py-3 bg-orange-500 text-slate-900 font-bold rounded hover:bg-orange-400 transition-colors">
                        CALL SARAH NOW
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="py-2 border border-slate-600 rounded text-sm hover:border-orange-500 transition-colors">
                          Send Text
                        </button>
                        <button className="py-2 border border-slate-600 rounded text-sm hover:border-orange-500 transition-colors">
                          Schedule Visit
                        </button>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '05',
                title: 'BOOKS APPOINTMENT',
                description: "If you don't respond within 15 minutes, AI automatically offers available time slots and books the site visit",
                visual: (
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={24} className="text-sky-400" />
                      <span className="font-bold text-sky-400">AUTO-SCHEDULED</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-900 rounded border-l-4 border-emerald-500">
                        <div>
                          <div className="font-semibold">Site Visit Confirmed</div>
                          <div className="text-sm text-slate-400">Thursday, Nov 28 at 2:00 PM</div>
                        </div>
                        <CheckCircle className="text-emerald-400" />
                      </div>
                      <div className="text-xs text-slate-500">
                        ✓ Added to your calendar<br />
                        ✓ Confirmation sent to homeowner<br />
                        ✓ Reminder set for 1 hour before
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '06',
                title: 'AUTOMATIC FOLLOW-UP',
                description: "Smart follow-up sequences at 24hr and 72hr if homeowner doesn't initially respond",
                visual: (
                  <div className="space-y-3">
                    {[
                      { time: '24 hours', message: 'Following up on your deck project inquiry...' },
                      { time: '72 hours', message: 'Still interested in getting an estimate? Here are 3 times Mike is available...' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-800 rounded border-l-4 border-sky-500">
                        <Clock size={20} className="text-sky-400" />
                        <div className="flex-1">
                          <div className="text-xs text-slate-500 mb-1">{item.time}</div>
                          <div className="text-sm">{item.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="inline-block px-4 py-2 bg-orange-500/20 border-2 border-orange-500 text-orange-400 font-bold rounded mb-4">
                    STEP {step.step}
                  </div>
                  <h3 className="font-display text-3xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
                </div>
                <div className="lg:w-2/3 w-full">
                  {step.visual}
                </div>
              </div>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: '5-Min Setup', desc: 'Forward calls, done' },
              { icon: Phone, title: 'Natural Voice', desc: 'No robotic nonsense' },
              { icon: TrendingUp, title: 'ROI Dashboard', desc: 'Track every dollar' },
              { icon: Award, title: 'Money-Back', desc: '30-day guarantee' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors">
                <feature.icon size={40} className="text-orange-400 mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER & CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 tape-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              STOP THE BLEEDING.<br />
              <span className="text-emerald-400">START CAPTURING.</span>
            </h2>
            <p className="text-xl text-slate-400">Simple pricing. Massive ROI. No contracts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'STARTER',
                price: '$149',
                leads: 'Up to 30 leads/month',
                revenue: '$500K-$750K',
                features: ['AI voice & text response', 'Lead qualification', 'Instant notifications', 'Auto scheduling', 'ROI dashboard', 'Email support'],
              },
              {
                name: 'GROWTH',
                price: '$249',
                leads: 'Up to 60 leads/month',
                revenue: '$750K-$1.5M',
                features: ['Everything in Starter', 'Priority routing', 'Advanced follow-ups', 'Calendar integration', 'Custom workflows', 'Phone support'],
                popular: true,
              },
              {
                name: 'PRO',
                price: '$399',
                leads: 'Unlimited leads',
                revenue: '$1.5M-$2M+',
                features: ['Everything in Growth', 'Multi-location support', 'Team management', 'White-label options', 'Dedicated success manager', 'Custom integrations'],
              },
            ].map((plan, idx) => (
              <div key={idx} className={`relative bg-slate-900 rounded-lg p-8 ${plan.popular ? 'border-4 border-orange-500 scale-105' : 'border-2 border-slate-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-orange-500 text-slate-900 font-bold text-sm rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-5xl text-orange-400">{plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <div className="text-sm text-slate-400 mb-1">{plan.leads}</div>
                <div className="text-xs text-slate-500 mb-6">For {plan.revenue} revenue</div>
                
                <button className={`w-full py-3 rounded font-bold mb-6 transition-all ${plan.popular ? 'bg-orange-500 text-slate-900 hover:bg-orange-400' : 'border-2 border-slate-700 hover:border-orange-500 hover:text-orange-400'}`}>
                  START FREE TRIAL
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border-2 border-emerald-500 rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Award size={40} className="text-emerald-400" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl mb-2">30-DAY MONEY-BACK GUARANTEE</h3>
                <p className="text-slate-300 text-lg">
                  If LeadCatch doesn't capture at least 2 additional projects in your first month, we'll refund 100% of your subscription. No questions asked.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: 'We went from missing half our Angi leads to responding to every single one within minutes. Booked 6 extra jobs in the first month alone.',
                name: 'Mike Peterson',
                company: 'Peterson Roofing, Portland OR',
                project: '$112K in new revenue',
              },
              {
                quote: 'I thought I was responding fast. Turns out I was taking 8+ hours. LeadCatch responds in under a minute while I\'m literally on a roof.',
                name: 'Sarah Chen',
                company: 'Evergreen Decks, Seattle WA',
                project: '48% increase in close rate',
              },
              {
                quote: 'The ROI is insane. $249/month pays for itself with ONE captured lead. We\'re capturing 5-7 extra projects monthly now.',
                name: 'James Mitchell',
                company: 'Mitchell Remodeling, Austin TX',
                project: '$180K additional annual revenue',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-900 border-2 border-slate-700 rounded-lg p-6 hover:border-orange-500 transition-colors">
                <div className="text-4xl text-orange-500 mb-2">"</div>
                <p className="text-slate-300 mb-4 italic leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                  <div className="text-sm text-emerald-400 font-semibold mt-2">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-12">
            <h3 className="font-display text-4xl md:text-5xl text-slate-900 mb-4">
              EVERY HOUR YOU WAIT, YOU LOSE LEADS
            </h3>
            <p className="text-xl text-slate-900 mb-8 font-semibold">
              Start your 14-day free trial. No credit card required. 5-minute setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-slate-900 text-white font-bold text-xl rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl">
                START FREE TRIAL NOW
                <Zap className="inline-block ml-2" size={24} />
              </button>
              <button className="px-10 py-5 border-4 border-slate-900 text-slate-900 font-bold text-xl rounded-lg hover:bg-slate-900 hover:text-white transition-all">
                SCHEDULE A DEMO
              </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-6 text-slate-900 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display text-xl mb-4">LEADCATCH</h4>
              <p className="text-sm text-slate-400">
                AI-powered lead response for residential contractors.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-3">Product</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400">Features</a></li>
                <li><a href="#" className="hover:text-orange-400">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-400">Case Studies</a></li>
                <li><a href="#" className="hover:text-orange-400">ROI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3">Resources</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400">Setup Guide</a></li>
                <li><a href="#" className="hover:text-orange-400">Support</a></li>
                <li><a href="#" className="hover:text-orange-400">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400">About</a></li>
                <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400">Privacy</a></li>
                <li><a href="#" className="hover:text-orange-400">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            © 2024 LeadCatch. All rights reserved. Built for contractors who refuse to lose leads.
          </div>
        </div>
      </footer>
    </div>
  );
}

