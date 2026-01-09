import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Linkedin,
    Facebook,
    Mail,
    Webhook,
    ArrowRight,
    CheckCircle2,
    Users,
    Calendar,
    FileText,
    MessageSquare,
    Globe
} from 'lucide-react';

// Workflow Node Configuration
interface WorkflowNode {
    id: string;
    label: string;
    icon: React.ElementType;
    color: string;
}

interface WorkflowData {
    id: string;
    label: string;
    icon: React.ElementType;
    title: string;
    description: string;
    nodes: WorkflowNode[];
    color: string;
}

const workflows: WorkflowData[] = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: Linkedin,
        title: 'LinkedIn Lead Flow',
        description: 'Whether it’s outbound outreach, inbound content engagement, or paid ads—True Pipeline unifies every LinkedIn signal.',
        color: 'bg-[#0077b5]',
        nodes: [
            { id: '1', label: 'Outreach / Content', icon: Users, color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' },
            { id: '2', label: 'Booking / Form', icon: Calendar, color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' },
            { id: '3', label: 'LinkedIn Ads', icon: FileText, color: 'text-sky-600 bg-sky-50 dark:bg-sky-900/20' },
        ]
    },
    {
        id: 'meta',
        label: 'Facebook / IG',
        icon: Facebook,
        title: 'Social Lead Capture',
        description: 'Capture high-intent leads instantly from Meta Instant Forms and social DMs without manual data entry.',
        color: 'bg-blue-600',
        nodes: [
            { id: '1', label: 'Meta Ads', icon: Globe, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' },
            { id: '2', label: 'Instant Forms', icon: FileText, color: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20' },
            { id: '3', label: 'DM Automation', icon: MessageSquare, color: 'text-violet-500 bg-violet-50 dark:bg-violet-900/20' },
        ]
    },
    {
        id: 'email-sms',
        label: 'Email & SMS',
        icon: Mail,
        title: 'Direct Response',
        description: 'Turn cold traffic into warm leads via keywords, dedicated numbers, and intelligent email parsers.',
        color: 'bg-emerald-500',
        nodes: [
            { id: '1', label: 'Inbound Email', icon: Mail, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' },
            { id: '2', label: 'SMS Keyword', icon: MessageSquare, color: 'text-green-500 bg-green-50 dark:bg-green-900/20' },
            { id: '3', label: 'Missed Call', icon: Users, color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' },
        ]
    },
    {
        id: 'webhook',
        label: 'Webhooks',
        icon: Webhook,
        title: 'Universal Connect',
        description: 'Connect any tool in your stack. If it can send a webhook, True Pipeline can capture the lead.',
        color: 'bg-indigo-500',
        nodes: [
            { id: '1', label: 'Typeform', icon: FileText, color: 'text-slate-600 bg-slate-50 dark:bg-slate-800' },
            { id: '2', label: 'Zapier / Make', icon: Webhook, color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' },
            { id: '3', label: 'Custom App', icon: Globe, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' },
        ]
    }
];

const MultiChannel: React.FC = () => {
    const [activeTab, setActiveTab] = useState(workflows[0].id);
    const activeWorkflow = workflows.find(w => w.id === activeTab) || workflows[0];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Lead Gen <span className="text-brand-600">Workflows</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        See how lead data flows from major platforms directly into your pipeline.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {workflows.map((flow) => (
                        <button
                            key={flow.id}
                            onClick={() => setActiveTab(flow.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === flow.id
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-lg transform scale-105'
                                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700'
                                }`}
                        >
                            <flow.icon size={18} />
                            {flow.label}
                        </button>
                    ))}
                </div>

                {/* Visualization Area */}
                <div className="relative w-full bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 md:p-12 overflow-hidden min-h-[500px] flex flex-col justify-center">

                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-5 transition-colors duration-700 ${activeWorkflow.color.replace('bg-', 'from-').replace('500', '500/20')} to-transparent rounded-[2.5rem] pointer-events-none`}></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 w-full"
                        >
                            {/* Desktop Connecting SVG Overlay */}
                            <div className="hidden md:block absolute inset-0 pointer-events-none w-full h-[300px] top-1/2 -translate-y-1/2">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    {/* Paths from Nodes to Center */}
                                    {/* Top Node (Y~16) to Center (Y~50) */}
                                    <path d="M 30 16 C 40 16, 40 50, 50 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" vectorEffect="non-scaling-stroke" />
                                    {/* Middle Node (Y~50) to Center (Y~50) */}
                                    <path d="M 30 50 L 50 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" vectorEffect="non-scaling-stroke" />
                                    {/* Bottom Node (Y~84) to Center (Y~50) */}
                                    <path d="M 30 84 C 40 84, 40 50, 50 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" vectorEffect="non-scaling-stroke" />

                                    {/* Path from Center (X~50) to Destination (X~70) */}
                                    <path d="M 50 50 L 70 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" vectorEffect="non-scaling-stroke" />

                                    {/* Animated Flow Lines */}
                                    <motion.path
                                        d="M 30 16 C 40 16, 40 50, 50 50"
                                        fill="none"
                                        stroke="url(#gradient-flow)"
                                        strokeWidth="0.5"
                                        strokeDasharray="2 2"
                                        vectorEffect="non-scaling-stroke"
                                        animate={{ strokeDashoffset: [4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                    <motion.path
                                        d="M 30 50 L 50 50"
                                        fill="none"
                                        stroke="url(#gradient-flow)"
                                        strokeWidth="0.5"
                                        strokeDasharray="2 2"
                                        vectorEffect="non-scaling-stroke"
                                        animate={{ strokeDashoffset: [4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                    <motion.path
                                        d="M 30 84 C 40 84, 40 50, 50 50"
                                        fill="none"
                                        stroke="url(#gradient-flow)"
                                        strokeWidth="0.5"
                                        strokeDasharray="2 2"
                                        vectorEffect="non-scaling-stroke"
                                        animate={{ strokeDashoffset: [4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                    <motion.path
                                        d="M 50 50 L 70 50"
                                        fill="none"
                                        stroke="url(#gradient-flow)"
                                        strokeWidth="0.5"
                                        strokeDasharray="2 2"
                                        vectorEffect="non-scaling-stroke"
                                        animate={{ strokeDashoffset: [4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />

                                    <defs>
                                        <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Left: Input Nodes */}
                            <div className="flex flex-col justify-between h-[300px] w-full md:w-[30%]">
                                {activeWorkflow.nodes.map((node, index) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm relative z-20"
                                    >
                                        <div className={`p-2 rounded-lg ${node.color}`}>
                                            <node.icon size={20} />
                                        </div>
                                        <span className="font-bold text-slate-700 dark:text-slate-200">{node.label}</span>

                                        {/* Mobile Connecting Line */}
                                        <div className="md:hidden absolute -bottom-6 left-1/2 w-0.5 h-6 bg-slate-200 dark:bg-slate-700 -ml-[1px] overflow-hidden">
                                            <motion.div
                                                className="w-full h-full bg-brand-500"
                                                initial={{ y: '-100%' }}
                                                animate={{ y: '100%' }}
                                                transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Center: Processing / Arrow Visual */}
                            <div className="flex flex-col items-center justify-center w-full md:w-[30%] h-[300px]">
                                <div className="relative z-20">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-xl z-20 relative"
                                    >
                                        <ArrowRight size={32} className="text-slate-400" />
                                    </motion.div>
                                    {/* Orbit Particles */}
                                    <div className="absolute inset-0 animate-spin-slow">
                                        <div className={`w-3 h-3 rounded-full ${activeWorkflow.color} absolute -top-2 left-1/2 shadow-lg`}></div>
                                    </div>
                                </div>
                                <div className="mt-4 text-center z-20">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Processing</span>
                                </div>
                            </div>

                            {/* Right: True Pipeline Destination */}
                            <div className="w-full md:w-[30%] flex justify-center md:justify-end h-[300px] items-center">
                                <div className="w-full bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center text-center relative overflow-hidden group z-20">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
                                    <div className="mb-4 relative">
                                        <img
                                            src="https://i.imgur.com/UdzWq5n.png"
                                            alt="True Pipeline"
                                            className="w-16 h-16 object-contain relative z-10"
                                        />
                                        <div className={`absolute inset-0 ${activeWorkflow.color} blur-2xl opacity-20 rounded-full`}></div>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">True Pipeline</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Lead captured & Workflow triggered</p>

                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 rounded text-xs font-bold">
                                            <CheckCircle2 size={12} /> Sync
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded text-xs font-bold">
                                            <Users size={12} /> Assign
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* Context Text Footer */}
                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50 text-center relative z-10">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            {activeWorkflow.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {activeWorkflow.description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MultiChannel;
