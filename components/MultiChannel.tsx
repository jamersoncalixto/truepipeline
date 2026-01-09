import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, MessageSquare, Phone, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface ChannelData {
    id: string;
    label: string;
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    color: string;
    gradient: string;
}

const channels: ChannelData[] = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: Linkedin,
        title: 'Capture LinkedIn Demand',
        description: 'Stop letting LinkedIn leads slip through the cracks. Whether it\'s from Ads, personal profile DMs, or content engagement, True Pipeline captures and consolidates them instantly.',
        features: ['Instant Lead Capture', 'Profile Enrichment', 'Conversation Sync'],
        color: 'bg-[#0077b5]',
        gradient: 'from-[#0077b5] to-[#00a0dc]'
    },
    {
        id: 'email',
        label: 'Email',
        icon: Mail,
        title: 'Nurture on Autopilot',
        description: 'Turn cold leads into warm conversations. Our intelligent email sequences adapt to user behavior, ensuring the right message lands at the perfect time.',
        features: ['Behavioral Triggers', 'Smart Personalization', 'A/B Testing'],
        color: 'bg-emerald-500',
        gradient: 'from-emerald-500 to-teal-400'
    },
    {
        id: 'sms',
        label: 'SMS / WhatsApp',
        icon: MessageSquare,
        title: 'Instant Connection',
        description: 'Cut through the noise with direct messaging. Reach your leads where they are most attentive with compliant, high-converting SMS and WhatsApp flows.',
        features: ['98% Open Rates', 'Instant Response', '2-Way Messaging'],
        color: 'bg-violet-500',
        gradient: 'from-violet-500 to-purple-400'
    },
    {
        id: 'voice',
        label: 'Voice AI',
        icon: Phone,
        title: 'Human-Like Qualification',
        description: 'Scale your outreach with Voice AI that sounds so real, your leads won\'t know the difference. Qualify interest and book meetings 24/7.',
        features: ['Natural Conversations', 'Live Transfer', 'Sentiment Analysis'],
        color: 'bg-rose-500',
        gradient: 'from-rose-500 to-orange-400'
    }
];

const MultiChannel: React.FC = () => {
    const [activeTab, setActiveTab] = useState(channels[0].id);

    const activeChannel = channels.find(c => c.id === activeTab) || channels[0];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Orchestrate Every <span className="text-brand-600">Touchpoint</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        A unified command center for all your lead generation channels. capture, nurture, and close without switching tabs.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                    {/* Left Column: Navigation */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {channels.map((channel) => (
                            <button
                                key={channel.id}
                                onClick={() => setActiveTab(channel.id)}
                                className={`group relative p-4 rounded-2xl text-left transition-all duration-300 border-2 ${activeTab === channel.id
                                        ? 'bg-white dark:bg-slate-800 border-brand-200 dark:border-brand-900 shadow-xl scale-105'
                                        : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50'
                                    }`}
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${activeTab === channel.id ? `bg-gradient-to-br ${channel.gradient}` : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                                        }`}>
                                        <channel.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${activeTab === channel.id ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                                            }`}>
                                            {channel.label}
                                        </h3>
                                    </div>
                                    {activeTab === channel.id && (
                                        <div className="ml-auto text-brand-600 dark:text-brand-400">
                                            <ArrowRight size={20} />
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Content Preview */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative h-[500px] w-full bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl p-2 sm:p-4 overflow-hidden">
                            {/* Background Decorative Gradients */}
                            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${activeChannel.gradient} opacity-5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 transition-colors duration-700`}></div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative h-full flex flex-col justify-center p-6 md:p-12 z-10"
                                >
                                    <div className={`inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6 bg-gradient-to-r ${activeChannel.gradient} shadow-lg`}>
                                        <Zap size={14} fill="currentColor" /> {activeChannel.label}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                        {activeChannel.title}
                                    </h3>

                                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
                                        {activeChannel.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeChannel.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`p-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white`}>
                                                    <CheckCircle2 size={16} className={`text-${activeChannel.color.replace('bg-', '')}`} />
                                                </div>
                                                <span className="font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Visual mockup helper */}
                                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                                        <activeChannel.icon size={400} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MultiChannel;
