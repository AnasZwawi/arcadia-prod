"use client";

import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import { motion, AnimatePresence } from "framer-motion";

type Message = { sender: string; text: string };

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: updatedMessages, // ← send full conversation every time
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatOpen && messages.length === 0) {
      setMessages([
        {
          sender: "ai",
          text: "Hello. I'm the Arcadia AI — here to help you explore our work, discuss your project, or answer any questions. What are you working on?",
        },
      ]);
    }
  }, [chatOpen]);

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-4">
      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col w-[360px] sm:w-[400px] h-[520px] bg-black border border-white/10"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.8)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
                </div>
                <div>
                  <p className="text-white font-mono text-[10px] uppercase tracking-[0.25em]">
                    Arcadia AI
                  </p>
                  <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest">
                    Production Advisor
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/30 hover:text-lime transition-colors duration-200 p-1"
              >
                <X size={16} strokeWidth={2} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 scrollbar-hide">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "ai" && (
                      <div className="flex flex-col gap-1 max-w-[85%]">
                        <span className="text-lime font-mono text-[8px] uppercase tracking-[0.3em] pl-1 mb-1">
                          Arcadia
                        </span>
                        <div className="bg-white/5 border border-white/8 px-4 py-3">
                          <div
                            className="text-[13px] text-white/80 leading-relaxed prose prose-invert prose-sm max-w-none
                              [&_p]:m-0 [&_p+p]:mt-2 [&_strong]:text-lime [&_ul]:mt-2 [&_ul]:space-y-1 [&_li]:text-white/70"
                            dangerouslySetInnerHTML={{
                              __html: marked(msg.text) as string,
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {msg.sender === "user" && (
                      <div className="flex flex-col gap-1 items-end max-w-[85%]">
                        <span className="text-white/30 font-mono text-[8px] uppercase tracking-[0.3em] pr-1 mb-1">
                          You
                        </span>
                        <div className="bg-lime/10 border border-lime/20 px-4 py-3">
                          <p className="text-[13px] text-white/90 leading-relaxed">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Thinking indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/8 px-4 py-3 flex items-center gap-2">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="block w-1 h-1 rounded-full bg-lime/60 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-white/10 px-4 py-4">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-white placeholder-white/20 text-[13px] font-mono
                    outline-none border-b border-white/10 focus:border-lime/50 pb-2 transition-colors duration-200"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="shrink-0 text-white/30 hover:text-lime disabled:text-white/10
                    transition-colors duration-200 pb-2"
                >
                  <ArrowUpRight size={18} strokeWidth={2} />
                </button>
              </div>
              <p className="text-white/15 font-mono text-[9px] uppercase tracking-widest mt-3">
                Arcadia Production · AI Powered
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setChatOpen((v) => !v)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <AnimatePresence mode="wait">
          {!chatOpen ? (
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2.5 bg-black border border-white/20 hover:border-lime
                text-white hover:text-lime transition-all duration-300 px-5 py-3 font-mono text-[10px]
                uppercase tracking-[0.25em]"
            >
              <MessageSquare size={13} strokeWidth={2.5} />
              <span>Chat with us</span>
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center bg-black border border-white/10
                hover:border-white/30 text-white/40 hover:text-white transition-all duration-300 p-3"
            >
              <X size={15} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
