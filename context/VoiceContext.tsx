import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
// @ts-ignore
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = '8628d1ab-3994-4d3a-ae07-d98fb59d6ace';
const ASSISTANT_ID = '0f7450bb-15e4-4aef-905b-40db12729cab';

interface VoiceContextType {
  isActive: boolean;
  isConnecting: boolean;
  isAssistantSpeaking: boolean;
  volume: number;
  toggleVoiceCall: () => Promise<void>;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    const initializeVapi = () => {
      try {
        const VapiConstructor = (Vapi as any).default || Vapi;
        if (typeof VapiConstructor !== 'function') {
          console.error('Vapi: Constructor is not a function. Current value:', VapiConstructor);
          return;
        }

        console.log('Vapi: Initializing with Public Key:', VAPI_PUBLIC_KEY);
        const vapi = new VapiConstructor(VAPI_PUBLIC_KEY);
        vapiRef.current = vapi;

        vapi.on('call-start', () => {
          console.log('Vapi: Call successfully connected');
          setIsActive(true);
          setIsConnecting(false);
        });

        vapi.on('call-end', () => {
          console.log('Vapi: Call ended');
          setIsActive(false);
          setIsConnecting(false);
          setIsAssistantSpeaking(false);
          setVolume(0);
        });

        vapi.on('volume-level', (level: number) => {
          setVolume(level);
        });

        vapi.on('speech-start', () => setIsAssistantSpeaking(true));
        vapi.on('speech-end', () => setIsAssistantSpeaking(false));

        vapi.on('error', (error: any) => {
          console.log('--- VAPI ERROR START ---');
          console.dir(error);
          
          let message = 'An unknown error occurred.';
          if (typeof error === 'string') {
            message = error;
          } else if (error instanceof Error) {
            message = error.message;
          } else if (error && typeof error === 'object') {
            const potentialMessage = error.message || 
                                     (error.error && typeof error.error === 'object' ? error.error.message : null) ||
                                     (error.error && typeof error.error === 'string' ? error.error : null) ||
                                     (error.originalError && error.originalError.message);
            
            if (potentialMessage) {
              message = potentialMessage;
            } else {
              try {
                message = JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
              } catch (e) {
                message = 'Error object could not be stringified safely.';
              }
            }
          }
          
          console.error(`Vapi Detailed Trace: ${message}`);
          console.log('--- VAPI ERROR END ---');
          
          setIsActive(false);
          setIsConnecting(false);
        });
      } catch (err) {
        console.error('Vapi: Critical initialization error:', err);
      }
    };

    initializeVapi();

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const toggleVoiceCall = async () => {
    if (isActive) {
      console.log('Vapi: Manually stopping call...');
      vapiRef.current?.stop();
    } else {
      if (!vapiRef.current) {
        console.warn('Vapi: Instance not ready. Re-initializing...');
        const VapiConstructor = (Vapi as any).default || Vapi;
        if (typeof VapiConstructor === 'function') {
          vapiRef.current = new VapiConstructor(VAPI_PUBLIC_KEY);
        } else {
          console.error('Vapi: Could not re-initialize instance.');
          return;
        }
      }

      setIsConnecting(true);
      try {
        console.log('Vapi: Requesting call start for Assistant:', ASSISTANT_ID);
        await vapiRef.current.start(ASSISTANT_ID);
      } catch (err: any) {
        console.error('Vapi: Start method failed exception:', err);
        const failMsg = err?.message || (typeof err === 'string' ? err : 'Unknown start exception');
        console.error(`Vapi: Start Exception Details: ${failMsg}`);
        setIsConnecting(false);
        setIsActive(false);
      }
    }
  };

  return (
    <VoiceContext.Provider value={{ isActive, isConnecting, isAssistantSpeaking, volume, toggleVoiceCall }}>
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (!context) throw new Error('useVoice must be used within a VoiceProvider');
  return context;
};