import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue } from 'framer-motion';
import { 
  MessageCircle, Brain, Calendar, Globe, Mail, BarChart3, 
  Bot, PhoneIncoming, PhoneOutgoing, QrCode, MessageSquare, 
  PhoneCall, Link2, ShoppingBag, CreditCard, FileText, 
  GraduationCap, Layers, Code, Hash, Share2, Star
} from 'lucide-react';
import { Feature } from '../types';

const row1Features: Feature[] = [
  { title: 'Unified Inbox', description: 'SMS, Email, FB, IG, and GMB in one feed.', icon: MessageCircle },
  { title: 'AI Automation', description: 'Intelligent workflows that nurture leads.', icon: Brain },
  { title: 'Smart Calendar', description: 'Automated bookings with native reminders.', icon: Calendar },
  { title: 'Website Builder', description: 'Drag-and-drop high-performance sites.', icon: Globe },
  { title: 'AI Voice Agents', description: 'Natural human-like voice interaction.', icon: Bot },
  { title: 'AI Inbound Calls', description: 'Never miss a call with AI answering.', icon: PhoneIncoming },
  { title: 'AI Outbound Calls', description: 'Proactive follow-ups handled by AI.', icon: PhoneOutgoing },
  { title: 'QR Code Engine', description: 'Generate smart tracking codes instantly.', icon: QrCode },
  { title: 'Reputation Manager', description: 'Automate reviews and brand feedback.', icon: Star },
  { title: 'Social Planner', description: 'Schedule content across all platforms.', icon: Share2 },
];

const row2Features: Feature[] = [
  { title: 'AI Chat Widget', description: 'Convert site visitors with smart chat.', icon: MessageSquare },
  { title: 'AI Live Call', description: 'Instant voice calls from your website.', icon: PhoneCall },
  { title: 'Custom Domains', description: 'Manage all brand assets in one portal.', icon: Link2 },
  { title: 'E-commerce Store', description: 'Sell products with native checkout.', icon: ShoppingBag },
  { title: 'Payment Gateways', description: 'Stripe, Authorize, and NMI native sync.', icon: CreditCard },
  { title: 'Document Automation', description: 'AI-powered contracts and proposals.', icon: FileText },
  { title: 'Advanced Reporting', description: 'Deep attribution and ROI tracking.', icon: BarChart3 },
  { title: 'Courses & LMS', description: 'Host memberships and video training.', icon: GraduationCap },
  { title: 'Conversion Funnels', description: 'Multi-step funnels built for scale.', icon: Layers },
  { title: 'API & Webhooks', description: 'Infinite connectivity for tech teams.', icon: Code },
  { title: 'Phone Provisioning', description: 'Get local and toll-free numbers.', icon: Hash },
  { title: '2-Way SMS', description: 'Engage prospects via text marketing.', icon: Mail },
];

const MarqueeRow: React.FC<{ features: Feature[]; direction: number; speed: number }> = ({ features, direction, speed }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    let moveBy = direction * speed * (delta / 1000) * 50;
    
    // Smoothly wrap the position for an infinite effect
    let nextX = x.get() + moveBy;
    if (direction === -1 && nextX <= -containerWidth) {
      nextX += containerWidth;
    } else if (direction === 1 && nextX >= 0) {
      nextX -= containerWidth;
    }
    
    x.set(nextX);
  });

  return (
    <div className="overflow-hidden py-4 cursor-grab active:cursor-grabbing group">
      <motion.div
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -containerWidth, right: 0 }}
        className="flex gap-6 w-max"
      >
        {/* Double the features for seamless looping */}
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="w-72 sm:w-80 flex-shrink-0 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-5">
              <feature.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      {/* Header Content - z-30 to stay above everything */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-brand-600 dark:text-brand-400 font-black tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-4">
            The Complete Stack
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Everything you need. <br className="hidden sm:block" />
            <span className="text-brand-600">No stitches required.</span>
          </h3>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Replace dozens of expensive subscriptions with one unified growth engine. True Pipeline scales with your ambition.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container with its own local masks */}
      <div className="relative flex flex-col gap-4">
        {/* Row 1: Right to Left */}
        <MarqueeRow features={row1Features} direction={-1} speed={0.5} />
        
        {/* Row 2: Left to Right */}
        <MarqueeRow features={row2Features} direction={1} speed={0.5} />

        {/* Side masking for smooth fade - positioned locally to avoid obscuring header text */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-48 lg:w-64 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-48 lg:w-64 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
    </section>
  );
};

export default Features;