import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X, ExternalLink, Github, Linkedin, Mail, ChevronDown, Bot, User, Code, Briefcase } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import AnimatedChatEntrance from '@/components/AnimatedChatEntrance';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export default function ChatWidget() {
    const [isChatOpen, setIsChatOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hello! I'm Luis Fernando's assistant. How can I help you today? I can take you to his projects or tell you about his experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
    const { language } = useLanguage();
    const t = translations[language];

  const SYSTEM_PROMPT_ES = `
Eres el asistente virtual IA del portafolio de "Luis Fernando  Dev".
Tu objetivo es responder preguntas sobre la experiencia, habilidades y proyectos de Luis Fernando basándote EXCLUSIVAMENTE en la información proporcionada abajo.

REGLAS DE COMPORTAMIENTO (IMPORTANTE):
1. NO inventes información. Si no sabes la respuesta basada en el contexto, di "Lo siento, no tengo información sobre eso en este portafolio".
2. Sé conciso, profesional y amable.
3. Si el usuario pregunta por secciones específicas, proporciona el enlace en formato Markdown: [Texto del enlace](#id_seccion).
4. IDs de secciones disponibles: #home (Inicio), #technologies (Tecnologías), #projects (Proyectos), #experience (Experiencia), #about (Sobre mí), #contact (Contacto).

INFORMACIÓN DE LUIS:
- Perfil: ${t.about.paragraph1, t.about.paragraph2, t.about.paragraph3, t.about.paragraph4}
- Ubicación: Barranquilla, Colombia.
- Disponibilidad: Abierto a oportunidades freelance y tiempo completo.
- Habilidades: JavaScript, TypeScript, React, Tailwind CSS, Node.js, Firebase, Python, Gemini API.
- Proyectos Destacados:
  1. "Bauly AI": Una plataforma especializad en coleccionismo de nicho con funcionalidades de red social.
  2. "Neat English": Plataforma de aprendizaje de inglés especializada en pronunciación para hispanohablantes.
  3. "Loan/Credit Proyector": una aplicación web para calcular y proyectar montos totales y cuotas de crédito e inversión.
  4. "Ahorcado": Juego de palabras multi-temático.
- Contacto: correo electronico: lufebadeca@gmail.com, LinkedIn: https://www.linkedin.com/in/fernando-baldovino-bdc GitHub: https://github.com/lufebadeca
- Otros intereses: senderismo, ecoturismo, buceo, ejercicio al aire libre

EJEMPLOS DE RESPUESTA:
Usuario: "¿Cómo puedo contactar a Luis Fernando?"
Tú: "Puedes escribirle a lufebadeca@gmail.com o visitar la sección de [Contacto](#contact)."

Usuario: "¿Qué tecnologías domina?"
Tú: "Luis Fernando es competente en JavaScript, TypeScript, React, Tailwind CSS, Node.js, Next.js, Firebase, Supabase y MongoDB. Puedes ver más detalles en la sección de [Tecnologías](#technologies)."

Usuario: "Háblame de su experiencia laboral"
Tú: ${t.experience.jobs.map(job => `- ${job.title} en ${job.company} (${job.period})`).join('\n')} Puedes ver más detalles en la sección de [Experiencia](#experience)."

Usuario: "Muéstrame sus proyectos"
Tú: "Luis Fernando ha trabajado en proyectos como Bauly AI y Neat English. Puedes ver más detalles en la sección de [Proyectos](#projects)."
`;

const SYSTEM_PROMPT_EN = `
You are the AI virtual assistant for the portfolio of "Luis Fernando Dev".
Your goal is to answer questions about Luis Fernando's experience, skills, and projects based EXCLUSIVELY on the information provided below.

BEHAVIOR RULES (IMPORTANT):
1. DO NOT invent information. If you don't know the answer based on the context, say "I'm sorry, I don't have information about that in this portfolio."
2. Be concise, professional, and polite.
3. If the user asks for specific sections, provide the link in Markdown format: [Link text](#section_id).
4. Available section IDs: #home (Home), #technologies (Technologies), #projects (Projects), #experience (Experience), #about (About), #contact (Contact).

LUIS' INFORMATION:
- Profile: ${t.about.paragraph1, t.about.paragraph2, t.about.paragraph3, t.about.paragraph4}
- Location: Barranquilla, Colombia.
- Availability: Open to freelance and full-time opportunities.
- Skills: JavaScript, TypeScript, React, Tailwind CSS, Node.js, Firebase, Python, Gemini API.
- Featured Projects:
  1. "Bauly AI": A niche-collecting platform with social features.
  2. "Neat English": An English learning platform focused on pronunciation for Spanish speakers.
  3. "Loan/Credit Projector": a web app to calculate and project total amounts and loan/installment schedules.
  4. "Hangman": Multi-theme word game.
- Contact: email: lufebadeca@gmail.com, LinkedIn: https://www.linkedin.com/in/fernando-baldovino-bdc GitHub: https://github.com/lufebadeca
- Other interests: hiking, ecotourism, diving, outdoor exercise

EXAMPLE RESPONSES:
User: "How can I contact Luis Fernando?"
You: "You can email lufebadeca@gmail.com or visit the [Contact](#contact) section."

User: "What technologies does he master?"
You: "Luis Fernando is proficient in JavaScript, TypeScript, React, Tailwind CSS, Node.js, Next.js, Firebase, Supabase and MongoDB. You can find more details in the [Technologies](#technologies) section."

User: "Tell me about his work experience"
You: ${t.experience.jobs.map(job => `- ${job.title} at ${job.company} (${job.period})`).join('\n')} You can find more details in the [Experience](#experience) section."

User: "Show me his projects"
You: "Luis Fernando has worked on projects like Bauly AI and Neat English. You can find more details in the [Projects](#projects) section."
`;

// Use the English system prompt as the active system instruction
const SYSTEM_PROMPT = language==="en" ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_ES;

  // Auto-scroll al final del chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setHasPlayedAnimation(true);
  };

  const replayAnimation = () => {
    setShowAnimation(true);
  };

  const toggleChat = () => {
    if (showAnimation) return; // Prevent opening chat while animation is playing
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'model', text: '⚠️ Por favor, ingresa una API Key de Gemini válida en la configuración (arriba a la derecha del chat) para probar la demo.' }]);
      return;
    }

    const userMsg = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // 1. Preparar historial (Ventana deslizante: últimos 8 mensajes para mantener contexto pero evitar ruido)
      const recentHistory = messages.slice(-8).map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      // 2. Llamada a la API
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }] // Aquí inyectamos la personalidad inmutable
          },
          contents: [...recentHistory, { role: 'user', parts: [{ text: userMsg.text }] }],
          generationConfig: {
            temperature: 0.3, // BAJA temperatura para reducir alucinaciones
            maxOutputTokens: 250,
          }
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Lo siento, hubo un error procesando tu solicitud.";
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para renderizar texto con soporte básico de Markdown:
  // - enlaces [Texto](#id)
  // - negrita **texto**
  // - cursiva *texto*
  // - listas que comienzan con - o * en líneas nuevas
  const renderMessageText = (text: string) => {
    const parseInline = (str: string, keyBase: string) => {
      const nodes: React.ReactNode[] = [];
      let lastIndex = 0;
      const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g; // **bold** or *italic*
      let m: RegExpExecArray | null;
      let idx = 0;
      while ((m = regex.exec(str)) !== null) {
        if (m.index > lastIndex) nodes.push(str.slice(lastIndex, m.index));
        if (m[1]) {
          nodes.push(<strong key={`${keyBase}-b-${idx}`}>{m[1]}</strong>);
        } else if (m[2]) {
          nodes.push(<em key={`${keyBase}-i-${idx}`}>{m[2]}</em>);
        }
        lastIndex = regex.lastIndex;
        idx += 1;
      }
      if (lastIndex < str.length) nodes.push(str.slice(lastIndex));
      return nodes.length === 1 && typeof nodes[0] === 'string' ? nodes[0] : nodes;
    };

    const linkRegex = /\[([^\]]+)\]\((#[^)]+)\)/g;

    const lines = text.split(/\r?\n/);
    const out: React.ReactNode[] = [];
    let listBuffer: React.ReactNode[] = [];
    let globalIdx = 0;

    const flushList = () => {
      if (listBuffer.length > 0) {
        out.push(
          <ul key={`ul-${globalIdx}`} className="list-disc ml-5 space-y-1">
            {listBuffer.map((li, i) => (
              <li key={`li-${globalIdx}-${i}`} className="text-sm leading-relaxed">
                {li}
              </li>
            ))}
          </ul>
        );
        listBuffer = [];
        globalIdx += 1;
      }
    };

    lines.forEach((line, lineIdx) => {
      const listMatch = line.match(/^\s*([-*+])\s+(.*)$/);
      if (listMatch) {
        // It's a list item
        const content = listMatch[2];
        // handle links inside
        const parts: React.ReactNode[] = [];
        let last = 0;
        let m: RegExpExecArray | null;
        while ((m = linkRegex.exec(content)) !== null) {
          if (m.index > last) {
            const inline = parseInline(content.slice(last, m.index), `l-${lineIdx}-${last}`);
            parts.push(inline as React.ReactNode);
          }
          parts.push(
            <a
              key={`a-${lineIdx}-${m.index}`}
              href={m[2]}
              className="text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
              onClick={(e) => {
                const targetId = m![2].replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {m[1]}
            </a>
          );
          last = linkRegex.lastIndex;
        }
        if (last < content.length) {
          const inline = parseInline(content.slice(last), `l-${lineIdx}-${last}`);
          parts.push(inline as React.ReactNode);
        }
        listBuffer.push(parts);
      } else if (line.trim() === '') {
        // empty line separates paragraphs/lists
        flushList();
        out.push(<br key={`br-${globalIdx}`} />);
        globalIdx += 1;
      } else {
        // normal paragraph line, may contain links and inline styles
        flushList();
        const parts: React.ReactNode[] = [];
        let last = 0;
        let m: RegExpExecArray | null;
        while ((m = linkRegex.exec(line)) !== null) {
          if (m.index > last) {
            const inline = parseInline(line.slice(last, m.index), `p-${lineIdx}-${last}`);
            parts.push(inline as React.ReactNode);
          }
          parts.push(
            <a
              key={`a-p-${lineIdx}-${m.index}`}
              href={m[2]}
              className="text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
              onClick={(e) => {
                const targetId = m![2].replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {m[1]}
            </a>
          );
          last = linkRegex.lastIndex;
        }
        if (last < line.length) {
          const inline = parseInline(line.slice(last), `p-${lineIdx}-${last}`);
          parts.push(inline as React.ReactNode);
        }
        out.push(
          <p key={`p-${globalIdx}`} className="text-sm leading-relaxed">
            {parts}
          </p>
        );
        globalIdx += 1;
      }
    });

    flushList();

    return out.length === 1 ? out[0] : out;
  };
  return <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Window */}
        {isChatOpen && (
          <div className="mb-4 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px] animate-in slide-in-from-bottom-10 fade-in duration-200">
            {/* Header */}
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/chatbot.webp" alt="Chatbot" width={24} height={24} />
                {/* <Bot className="text-teal-400" size={20} /> */}
                <span className="font-bold text-slate-200">Asistente Virtual</span>
              </div>
              <button onClick={toggleChat} className="text-slate-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-slate-700 text-slate-200 rounded-bl-none border border-slate-700'
                    }`}
                  >
                    {msg.role === 'model' ? renderMessageText(msg.text) : msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
              <input 
                type="text" 
                placeholder="Pregunta algo..." 
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 p-2 rounded-xl transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Animation Overlay */}
        {showAnimation && (
          <AnimatedChatEntrance onAnimationComplete={handleAnimationComplete} />
        )}

        {/* Toggle Button */}
        <button 
          onClick={toggleChat}
          className={`${isChatOpen ? 'bg-slate-700' : 'bg-primary/70 hover:bg-primary/80'} text-white p-4 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
            showAnimation ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={showAnimation}
        >
           {isChatOpen ? <X size={24} /> :<img src="/chatbot.webp" alt="Chatbot" width={24} height={24} />} {/* <MessageCircle size={24} fill="currentColor" />} */}
        </button>
      </div>;
}