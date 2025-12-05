import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSuggestion() {
  const { language } = useLanguage();
  const [show, setShow] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Detect if mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Show suggestion only if in English, user hasn't interacted, and NOT on mobile
    if (language === 'en' && !hasInteracted && !isMobile) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [language, hasInteracted, isMobile]);

  useEffect(() => {
    // Listen for language changes to know user interacted
    if (language === 'es' && !hasInteracted) {
      setHasInteracted(true);
    }
  }, [language, hasInteracted]);

  useEffect(() => {
    // Update position based on language button position
    const updatePosition = () => {
      // Find the language toggle button - more robust selector
      // Look for button that contains the language text (EN or ES)
      let button = document.querySelector('button[class*="gap-1.5"]') as HTMLElement;
      
      // Fallback: if not found with gap-1.5, search by button containing "EN" or "ES" text
      if (!button) {
        const allButtons = document.querySelectorAll('button');
        button = Array.from(allButtons).find(btn => {
          const text = btn.textContent?.trim();
          return text === 'EN' || text === 'ES';
        }) as HTMLElement;
      }
      
      if (button) {
        const rect = button.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 12, // Position below the button with 12px gap
          left: rect.left + rect.width / 2 // Center horizontally on the button
        });
      }
    };

    if (show) {
      // Initial update
      setTimeout(updatePosition, 0);
      
      // Update on window resize
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);
      
      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed z-40 pointer-events-none"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)'
      }}
    >
      {/* Arrow pointing up to the language toggle */}
      <div className="relative flex flex-col items-center">
        {/* Animated arrow pointing up */}
        <div
          style={{
            animation: 'float-arrow-suggestion 3s ease-in-out infinite',
            marginBottom: '6px'
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          >
            <path d="M18 15l-5 -5l-5 5M18 22l-5 -5l-5 5" />
          </svg>
        </div>

        {/* Floating text bubble */}
        <div
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg whitespace-nowrap shadow-lg"
          style={{
            animation: 'float-suggestion 3s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)',
            marginLeft: '-12px'
          }}
        >
          <p className="text-sm font-medium">Prefieres español?</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-suggestion {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }

        @keyframes float-arrow-suggestion {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-4px) scale(1.1);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .text-sm {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
