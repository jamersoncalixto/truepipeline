import React from 'react';
import { motion } from 'framer-motion';

interface VoiceVisualizerProps {
  volume: number;
  isActive: boolean;
}

const Wave = ({ 
  delay = 0, 
  duration = 3, 
  amplitude = 20, 
  frequency = 1, 
  color = "rgba(37, 99, 235, 0.1)",
  volumeMultiplier = 1
}: { 
  delay?: number, 
  duration?: number, 
  amplitude?: number, 
  frequency?: number, 
  color?: string,
  volumeMultiplier?: number
}) => {
  // We use a simplified sine wave approximation with SVG paths
  return (
    <motion.svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.path
        fill={color}
        animate={{
          d: [
            `M0 60 Q300 ${60 - amplitude * volumeMultiplier} 600 60 T1200 60 V120 H0 Z`,
            `M0 60 Q300 ${60 + amplitude * volumeMultiplier} 600 60 T1200 60 V120 H0 Z`,
            `M0 60 Q300 ${60 - amplitude * volumeMultiplier} 600 60 T1200 60 V120 H0 Z`,
          ]
        }}
        transition={{
          duration: duration / frequency,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }}
      />
    </motion.svg>
  );
};

const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ volume, isActive }) => {
  if (!isActive) return null;

  // Normalize volume for visual impact (Vapi volume is usually 0-1)
  const normalizedVolume = Math.min(Math.max(volume * 5, 0.1), 3);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-full">
        {/* Layered Gradient Waves */}
        <Wave 
          color="rgba(37, 99, 235, 0.08)" 
          amplitude={40} 
          duration={4} 
          volumeMultiplier={normalizedVolume} 
          delay={0}
        />
        <Wave 
          color="rgba(14, 165, 233, 0.1)" 
          amplitude={30} 
          duration={3.5} 
          volumeMultiplier={normalizedVolume} 
          delay={0.5}
        />
        <Wave 
          color="rgba(79, 70, 229, 0.06)" 
          amplitude={50} 
          duration={5} 
          volumeMultiplier={normalizedVolume} 
          delay={1}
        />
        
        {/* Glowing Base */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5 + volume * 0.5, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-600/10 to-transparent blur-3xl"
        />
      </div>

      {/* Pulsing Central Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2 + volume, 1],
          opacity: [0.1, 0.2 + volume * 0.3, 0.1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500 rounded-full blur-[140px]"
      />
    </div>
  );
};

export default VoiceVisualizer;