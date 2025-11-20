import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2, User } from "lucide-react";
import { queryRAG } from "@/lib/rag-service";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Good day. I am JARVIS, an artificial intelligence designed to assist you in learning about Rashid S. Comon. I have access to comprehensive information regarding his professional background, technical expertise, research contributions, and project portfolio. How may I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    const timer = setTimeout(() => {
      if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await queryRAG(userMessage.content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error querying RAG:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble processing your request right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* JARVIS Toggle Button - Minimal Arc Reactor */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full transition-all duration-300 ${
          isOpen
            ? "bg-primary/10"
            : "bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        }`}
        aria-label="Toggle JARVIS"
      >
        {/* Outer ring */}
        <div className="absolute inset-1 rounded-full border border-primary/30"></div>
        {/* Simple pulsing core */}
        <div className={`absolute inset-3 rounded-full ${
          isOpen ? 'bg-primary/20' : 'bg-primary/40 animate-pulse'
        }`}></div>
        
        {/* Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {isOpen ? (
            <X className="w-5 h-5 text-primary-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          )}
        </div>
      </button>

      {/* JARVIS Interface - Minimal Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-background/95 backdrop-blur-xl border-l border-primary/20 z-40 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Single scan line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Minimal corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-primary/30"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-primary/30"></div>

        {/* Header - Minimal */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            {/* JARVIS Arc Reactor Avatar */}
            <div className="relative w-10 h-10">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/30"></div>
              {/* Core */}
              <div className="absolute inset-2 rounded-full bg-primary/20 border border-primary/40"></div>
              {/* Center */}
              <div className="absolute inset-3 rounded-full bg-primary/40 animate-pulse"></div>
              {/* Status dot */}
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
            </div>
            
            <div>
              <h3 className="text-base font-bold text-foreground">JARVIS</h3>
              <p className="text-[10px] font-mono text-primary/60 uppercase tracking-wider">RAG System</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary/10"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages Area - Clean */}
        <ScrollArea className="h-[calc(100vh-160px)]" ref={scrollAreaRef}>
          <div className="p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="relative w-8 h-8 flex-shrink-0">
                    {/* JARVIS Arc Reactor */}
                    <div className="absolute inset-0 rounded-full border border-primary/30"></div>
                    <div className="absolute inset-1 rounded-full bg-primary/20 border border-primary/40"></div>
                    <div className="absolute inset-1.5 rounded-full bg-primary/30 animate-pulse"></div>
                  </div>
                )}
                
                <Card
                  className={`max-w-[80%] p-3 ${
                    message.role === "user"
                      ? "bg-primary/10 border-primary/30"
                      : "bg-card/50 border-primary/20"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap text-foreground">
                    {message.content}
                  </p>
                  <p className="text-[10px] font-mono text-muted-foreground/60 mt-2">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </Card>
                
                {message.role === "user" && (
                  <div className="relative w-8 h-8 flex-shrink-0">
                    {/* User Icon - Circle with user icon */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="relative w-8 h-8 flex-shrink-0">
                  {/* JARVIS Arc Reactor */}
                  <div className="absolute inset-0 rounded-full border border-primary/30"></div>
                  <div className="absolute inset-1 rounded-full bg-primary/20 border border-primary/40"></div>
                  <div className="absolute inset-1.5 rounded-full bg-primary/30 animate-pulse"></div>
                </div>
                <Card className="bg-card/50 border-primary/20 p-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Processing...</span>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area - Minimal */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary/20 bg-background/95 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Rashid..."
              className="flex-1 bg-background/50 border-primary/30 focus:border-primary text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-primary/90 w-11 h-11"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground/60 mt-2 text-center">
            Jarvis • {messages.length} messages
          </p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Chatbot;

