
import React, { useState } from 'react';
import {
  Users,
  Calendar,
  FileText,
  Filter,
  Globe,
  Repeat,
  PhoneForwarded,
  Mail,
  Zap,
  BarChart3,
  QrCode,
  Facebook,
  Chrome,
  Star,
  Share2,
  Megaphone,
  Link,
  DollarSign,
  Award,
  LayoutDashboard,
  MessageCircle,
  PenTool,
  CheckSquare,
  Network,
  MapPin,
  Bot,
  MousePointer2
} from 'lucide-react';

interface FeatureItem {
  name: string;
  icon: React.ElementType;
}

interface PlanData {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  monthlyLink: string;
  annualLink: string;
  recommended?: boolean;
  baseFeatures?: string;
  features: FeatureItem[];
  addons: FeatureItem[];
}

const starterFeatures: FeatureItem[] = [
  { name: 'Smart CRM that tracks every opportunity', icon: Users },
  { name: 'Client booking and calendar sync', icon: Calendar },
  { name: 'Custom landing pages and funnels', icon: Filter },
  { name: 'Lead capture forms and surveys', icon: FileText },
  { name: 'Text and email follow-ups (automated)', icon: Repeat },
  { name: 'Email campaigns', icon: Mail },
  { name: 'Missed call recovery', icon: PhoneForwarded },
  { name: 'Smart automations and workflows', icon: Zap },
  { name: 'Performance dashboards', icon: BarChart3 },
  { name: 'QR codes and review links', icon: QrCode },
];

const growthFeatures: FeatureItem[] = [
  { name: 'Google & Facebook message integration', icon: Facebook },
  { name: 'Google Business call tracking', icon: Chrome },
  { name: 'Review and reputation management', icon: Star },
  { name: 'Social media content planner', icon: Share2 },
  { name: 'Campaign templates and documents', icon: Megaphone },
  { name: 'Smart trigger links', icon: Link },
  { name: 'Invoice and payment requests', icon: DollarSign },
  { name: 'Professional certificates', icon: Award },
];

const proFeatures: FeatureItem[] = [
  { name: 'Membership sites and course hosting', icon: LayoutDashboard },
  { name: 'Private community platform', icon: MessageCircle },
  { name: 'Blog publishing system', icon: PenTool },
  { name: 'Custom quizzes and assessments', icon: CheckSquare },
  { name: 'Affiliate program management', icon: Network },
];

const sharedAddons: FeatureItem[] = [
  { name: 'WhatsApp', icon: MessageCircle },
  { name: 'WordPress', icon: Globe },
  { name: 'Listings', icon: MapPin },
];

const growthAddons: FeatureItem[] = [
  ...sharedAddons,
  { name: 'AI Employee', icon: Bot },
  { name: 'Ad Manager', icon: MousePointer2 },
];

const plans: PlanData[] = [
  {
    name: 'Launch',
    description: 'Solo entrepreneurs and new businesses ready to capture and nurture their first leads',
    monthlyPrice: 97,
    annualPrice: 970,
    monthlyLink: 'https://link.fastpaydirect.com/payment-link/694427beb17a074268f96033',
    annualLink: 'https://link.fastpaydirect.com/payment-link/69442d7e2024d43e8627bceb',
    features: starterFeatures,
    addons: sharedAddons,
  },
  {
    name: 'Amplify',
    description: 'Established businesses scaling up with multi-channel marketing and reputation building',
    monthlyPrice: 197,
    // Fix: removed comma from number literal 1,970 to fix parsing error
    annualPrice: 1970,
    monthlyLink: 'https://link.fastpaydirect.com/payment-link/69446c7cb17a0714abf9dbc1',
    annualLink: 'https://link.fastpaydirect.com/payment-link/69446c86b17a074ea8f9dbd2',
    recommended: true,
    baseFeatures: 'Everything in Launch, plus',
    features: growthFeatures,
    addons: growthAddons,
  },
  {
    name: 'TRUE',
    description: 'Growing companies building community, courses, and affiliate programs',
    monthlyPrice: 297,
    // Fix: removed comma from number literal 2,970 to fix parsing error
    annualPrice: 2970,
    monthlyLink: 'https://link.fastpaydirect.com/payment-link/69446c992024d4f91228324c',
    annualLink: 'https://link.fastpaydirect.com/payment-link/69446ca24b824343e1729dba',
    baseFeatures: 'Everything in Amplify, plus',
    features: proFeatures,
    addons: growthAddons,
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-brand-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-sky-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs mb-3">
            Pricing Plans
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Choose Your <span className="text-brand-600">Plan.</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors focus:outline-none"
            >
              <div className={`w-5 h-5 bg-brand-600 rounded-full transition-transform duration-300 transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
              Annual <span className="text-brand-600 ml-1 text-[10px] bg-brand-50 dark:bg-brand-900/30 px-2 py-0.5 rounded-full uppercase">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col relative rounded-[2.5rem] p-8 transition-all duration-500 border ${plan.recommended
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-2xl scale-[1.02] z-10'
                  : 'bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 border-slate-100 dark:border-slate-800 shadow-xl'
                }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h3>
                <p className={`text-xs font-bold leading-relaxed opacity-70`}>
                  Best for {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black tracking-tighter">
                    ${isAnnual ? plan.annualPrice.toLocaleString() : plan.monthlyPrice}
                  </span>
                  <span className="ml-2 text-sm font-bold opacity-60">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-[10px] font-bold text-brand-500 mt-1 uppercase tracking-tight">
                    Billed annually — save ${plan.monthlyPrice * 12 - plan.annualPrice}
                  </p>
                )}
              </div>

              <div className="flex-1 space-y-6 mb-10">
                {plan.baseFeatures && (
                  <div className={`text-[11px] font-black uppercase tracking-widest ${plan.recommended ? 'text-brand-400' : 'text-brand-600'}`}>
                    {plan.baseFeatures}
                  </div>
                )}

                <ul className="space-y-3.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${plan.recommended ? 'bg-white/10' : 'bg-brand-50 dark:bg-brand-900/30'}`}>
                        <feature.icon size={14} className={plan.recommended ? 'text-white' : 'text-brand-600'} />
                      </div>
                      <span className="text-xs font-bold tracking-tight">{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.recommended ? 'text-white/40' : 'text-slate-400'}`}>
                    Optional Add-Ons
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.addons.map((addon, i) => (
                      <div
                        key={i}
                        className={`group cursor-default flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border transition-colors ${plan.recommended
                            ? 'bg-white/5 border-white/10 hover:bg-white/10'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-brand-200'
                          }`}
                      >
                        <addon.icon size={10} className={plan.recommended ? 'text-brand-400' : 'text-brand-600'} />
                        {addon.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={isAnnual ? plan.annualLink : plan.monthlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-black text-center text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 block ${plan.recommended
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-500/20'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 shadow-lg'
                  }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 dark:text-slate-500 text-xs font-bold mt-16 tracking-tight uppercase">
          * All plans include a 7-day free trial.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
