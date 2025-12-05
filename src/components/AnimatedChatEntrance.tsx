import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import chatbotImage from '/chatbot.webp';
import { useLanguage } from '@/hooks/useLanguage';

interface AnimatedChatEntranceProps {
  onAnimationComplete: () => void;
}

export default function AnimatedChatEntrance({ onAnimationComplete }: AnimatedChatEntranceProps) {
  const [stage, setStage] = useState<'initial' | 'transforming' | 'moving' | 'complete'>('initial');
  const { language } = useLanguage();

  useEffect(() => {
    // Start animation sequence with better timing
    const timeline = [
      { delay: 500, stage: 'transforming' as const },
      { delay: 2200, stage: 'moving' as const },  // Start moving earlier for smooth overlap
      { delay: 4000, stage: 'complete' as const },
    ];

    timeline.forEach(({ delay, stage: nextStage }) => {
      setTimeout(() => setStage(nextStage), delay);
    });

    // Complete animation after final stage
    const completeTimeout = setTimeout(() => {
      onAnimationComplete();
    }, 5500);

    return () => clearTimeout(completeTimeout);
  }, [onAnimationComplete]);

  const finalText = language === 'en'
    ? "Luis has downloaded his consciousness into an AI instance"
    : "Luis ha descargado su conciencia en una instancia de IA";

  const clickText = language === 'en' ? 'Click to chat' : 'Haz clic para chatear';

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Text that appears from the start above the profile */}
        <div
          className={`absolute text-center transition-opacity duration-700 top-12 md:top-12 ${
            stage === 'complete' ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            animation: 'shadow-pulse 2s ease-in-out infinite'
          }}
        >
          <p className="text-lg sm:text-2xl md:text-4xl font-bold text-primary max-w-xs sm:max-w-2xl px-4 leading-tight">
            {finalText}
          </p>
        </div>

        {/* Animated Image Container */}
        <div
          className={`absolute rounded-full ${
            stage === 'complete' ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'
          }`}
          style={{
            width: stage === 'moving' || stage === 'complete' ? '56px' : '140px',
            height: stage === 'moving' || stage === 'complete' ? '56px' : '140px',
            transition: stage === 'moving' ? 'width 1.8s ease-in-out, height 1.8s ease-in-out' : 'none',
            animation: stage === 'moving' 
              ? 'slide-to-corner-smooth 1.8s ease-in-out forwards' 
              : stage === 'initial' || stage === 'transforming'
              ? 'none'
              : 'none',
            top: stage === 'initial' || stage === 'transforming' ? '50%' : 'auto',
            left: stage === 'initial' || stage === 'transforming' ? '50%' : 'auto',
            bottom: stage === 'moving' || stage === 'complete' ? 'clamp(16px, 5vh, 24px)' : 'auto',
            right: stage === 'moving' || stage === 'complete' ? 'clamp(16px, 5vw, 24px)' : 'auto',
            transform: stage === 'initial' || stage === 'transforming' ? 'translate(-50%, -50%)' : 'none'
          }}
        >
          {/* Background circular glow (sun/star) - visible during transformation */}
          {(stage === 'initial' || stage === 'transforming') && (
            <div className={`absolute -inset-12 bg-gradient-to-r from-primary via-primary/60 to-primary rounded-full blur-3xl transition-opacity duration-1000 ${
              stage === 'transforming' ? 'opacity-100 animate-pulse' : 'opacity-50'
            }`} />
          )}

          {/* Profile Image - Fade out during transformation */}
          <img
            src={profileImage}
            alt="Profile"
            className={`absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-1000 ${
              stage === 'initial' || stage === 'transforming'
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              animation: stage === 'transforming' 
                ? 'pulse-fade 1.5s ease-in-out' 
                : 'none'
            }}
          />

          {/* Chatbot Image - Fade in during transformation */}
          <img
            src={chatbotImage}
            alt="Chatbot"
            className={`absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-1000 ${
              stage === 'initial'
                ? 'opacity-0'
                : stage === 'transforming' || stage === 'moving'
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          />
        </div>

        {/* Pointer/Arrow to chat button */}
        {stage === 'moving' || stage === 'complete' ? (
          <div className={`absolute transition-all duration-700 bottom-24 sm:bottom-28 md:bottom-32 right-4 sm:right-6 ${
            stage === 'complete' ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="text-xs text-primary font-medium text-center">{clickText}</div>
              <ArrowDown size={20} className="sm:w-6 sm:h-6 text-primary" style={{ animation: 'float-arrow 2s ease-in-out infinite' }} />
            </div>
          </div>
        ) : null}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-fade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes shadow-pulse {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.4), 0 0 20px rgba(var(--primary-rgb), 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(var(--primary-rgb), 0.8), 0 0 40px rgba(var(--primary-rgb), 0.4);
          }
        }
        @keyframes float-arrow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        @keyframes slide-to-corner-smooth {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          100% {
            top: auto;
            left: auto;
            bottom: clamp(16px, 5vh, 24px);
            right: clamp(16px, 5vw, 24px);
            transform: none;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          @keyframes slide-to-corner-smooth {
            0% {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            100% {
              top: auto;
              left: auto;
              bottom: 16px;
              right: 16px;
              transform: none;
            }
          }
        }
      `}</style>
    </div>
  );
}
