"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Role = "user" | "model";
type Message = { role: Role; parts: { text: string }[] };

const resumeData = `Divax Shah - AI Developer & Python Developer
Contact Information:
- Phone: +91-8866572525
- Email: divax12345@gmail.com
- LinkedIn: https://www.linkedin.com/in/divax-shah/
- GitHub: https://github.com/shahdivax
- HuggingFace: https://huggingface.co/diabolic6045
- Portfolio: https://divax-shah-portfolio.vercel.app/

Professional Experience:
- **AI/ML Engineer** at Avinyaa Edtech Private Limited (March 2025 - Present)
 - Developing and enhancing AI models for kreativespace.com's AI Writing Tools Suite.
 - Focused on creating and refining grammar checker and developing an advanced AI text detection system.
 - Involves fine-tuning Transformer Models (MLM and LLMs) for high accuracy and optimal output.

- **Jr. Python Developer** at Thinkbiz Technology Private Limited (May 2024 - March 2025)
 - Developed an advanced pipeline for Jugaad, Thinkbiz's product, using OCR and LLM technologies to extract and process text from invoices.
 - Conducted extensive research and evaluation of open-source OCR and LLM tools.
 - Built and curated specialized datasets to enhance accuracy and reliability of text extraction.

- **AI and Synthetic Data Developer Intern** at DMI Finance Private Limited (January 2024 - April 2024)
 - Developed a generative AI system for synthetic structured data generation, from concept to deployment.
 - Created a pipeline with Python and Gradio for data cleaning, deduplication, and embedding.
 - Designed a robust training framework using PyTorch and Hugging Face's Transformers.
 - Introduced a user-friendly Gradio interface to streamline synthetic structured data generation.

Key Projects (All project names are clickable links):

1. **Sanskrit Translate v2** (https://huggingface.co/diabolic6045/Sanskrit-qwen-7B-Translate-v2)
 - Fine-tuned Qwen2.5-7B-Instruct optimized for Sanskrit language processing.
 - Features: Sanskrit to IAST transliteration, bidirectional Sanskrit ↔ English translation with context-aware preservation.
 - Enhanced with specialized dataset, chat template format, and optimized LoRA configuration.
 - Tech: LLM, Translation, Fine-tuning, Sanskrit, Qwen-2.5-7B, LoRA.

2. **Sanskrit Tokenizer** (https://huggingface.co/diabolic6045/Sanskrit-English-qwen2-tokenizer)
 - Native Sanskrit-English tokenizer for Qwen2.5 providing 4.5x better efficiency than byte-level tokens.
 - Produces clean, readable tokens with 120K vocabulary trained on massive English+Sanskrit corpus.
 - Native Hugging Face format with perfect reconstruction.
 - Tech: Tokenizer, NLP, Sanskrit, BPE, HuggingFace.

3. **Sanskrit Translate v1** (https://huggingface.co/diabolic6045/Sanskrit-qwen-7B-Translate)
 - Fine-tuned Qwen2.5-7B-Instruct-1M on Sanskrit datasets using QLoRA (Axolotl).
 - Gradient checkpointing, 4-bit quantization, and cosine LR to translate Vedic Sanskrit → English.
 - Tech: LLM, Translation, Fine-tuning, Sanskrit, Qwen-2.5-7B.

4. **Flux LoRAs** (https://flux-loras.divaxshah.com)
 - Flux.dev model fine-tuned on different images creating various LoRAs that you can explore.
 - Specialized LoRA adapters for different visual styles and concepts.
 - Tech: Generative AI, Image Generation, LoRA, Flux, Fine-tuning.

5. **Geolocation through Image Classification** (https://huggingface.co/diabolic6045/indian_cities_image_classification)
 - Transfer learning with VGG16 to identify Indian cities from images, achieving 66.3% accuracy.
 - Tech: Computer Vision, Deep Learning, Transfer Learning.

6. **Character Chatbot** (https://huggingface.co/diabolic6045/tony_stark_chatbot)
 - Conversational agents with DialoGPT-medium: interactive chats as Tony Stark, Harry Potter, and more.
 - Tech: LLM, Chatbot, Fine-tuning, DialoGPT.

7. **Itinerary Generator** (https://huggingface.co/diabolic6045/itineraries_Generator)
 - GPT-2 fine-tuned for on-demand travel itinerary generation with PyTorch + Transformers.
 - Tech: LLM, GPT-2, Fine-tuning.

8. **Lore Keeper** (https://lore-keeper.divaxshah.com)
 - An infinite story generator tool with different genres and themes.
 - Create endless narratives with customizable settings.
 - Tech: AI, Story Generation, NLP, Creative AI.

9. **World Sim** (https://world-sim.divaxshah.com)
 - A CLI-based game where users can simulate real worlds and play with them.
 - Features different models to choose from for various simulation scenarios.
 - Tech: Game, Simulation, CLI, AI.

10. **Todo** (https://todo.divaxshah.com)
 - A crazy 3D todo list keeper with immersive visual experience for managing your tasks.
 - Tech: 3D, Productivity, WebGL.

11. **AURA Vibes - Random Quote Maker** (https://random-quote-maker.divaxshah.com)
 - Generate your personal quotes with AI. Share a thought, choose your vibe, and watch AI craft a unique quote card.
 - Features: manual input, Twitter analysis, multiple themes, moods, and card sizes.
 - Tech: AI, Quote Generation, Creative.

12. **QuizWiz** (https://quizwiz.divaxshah.com) [DEPRECATED]
 - AI-powered platform for one-click custom chatbot creation with document ingestion (PDF/TXT), RAG via LlamaIndex.
 - Tech: NLP, Chatbot, Flask, Mistral-AI-API, Gemini-API.

Technical Skills:
- **ML Frameworks & Libraries:** PyTorch, TensorFlow / Keras, HuggingFace Transformers, scikit-learn, LangChain, NumPy & Pandas.
- **AI Specializations & Techniques:** Natural Language Processing (NLP), Computer Vision (CV), LLM Fine-tuning, Generative AI, Prompt Engineering, Reinforcement Learning (RL).
- **LLM Ecosystem & Tools:** Axolotl, Unsloth, OpenAI API, Google Gemini API, Anthropic API, Mistral AI API.
- **Programming Languages:** Python, Java, C++.
- **Other Tools/Frameworks:** Flask, Streamlit, Tkinter, OpenCV.

Education:
- **B.Tech in Computer Science and Engineering**
 - Parul Institute of Engineering and Technology (2024)
 - CGPA: 8.2
- **GHSEB, Gujarat**
 - Gyanmanjari Secondary and Higher Secondary School, Bhavnagar (2020)
 - Percentage: 64%`;

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [genAI, setGenAI] = useState<GoogleGenerativeAI | null>(null);
  const chatRef = useRef<any>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!key) return;
    const ai = new GoogleGenerativeAI(key);
    setGenAI(ai);
  }, []);

  useEffect(() => {
    if (!genAI || chatRef.current) return;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    chatRef.current = model.startChat({ history: [] });
  }, [genAI]);

  // Allow external toggle (navbar 🤗) via a custom event
  useEffect(() => {
    function onToggle() {
      setIsOpen((v) => !v);
    }
    window.addEventListener("divax-toggle-chat", onToggle as EventListener);
    return () => window.removeEventListener("divax-toggle-chat", onToggle as EventListener);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!genAI) {
      setMessages((prev) => [
        ...prev,
        { role: "user", parts: [{ text: input }] },
        { role: "model", parts: [{ text: "API key missing. Set NEXT_PUBLIC_GEMINI_API_KEY and reload." }] },
      ]);
      setInput("");
      return;
    }

    if (!chatRef.current) {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      chatRef.current = model.startChat({ history: [] });
    }

    const first = messages.length === 0;
    const question = input;
    setMessages((prev) => [...prev, { role: "user", parts: [{ text: question }] }, { role: "model", parts: [{ text: "" }] }]);
    setInput("");
    setIsLoading(true);

    try {
      const prompt = first
        ? `You are Divax Shah's portfolio assistant. Only answer about his professional work.\n${resumeData}\nUser: ${question}`
        : question;
      try {
        const result = await chatRef.current.sendMessageStream(prompt);
        let full = "";
        for await (const chunk of result.stream) {
          if (chunk?.text) {
            full += chunk.text();
            setMessages((prev) => {
              const next = [...prev];
              const last = next[next.length - 1];
              if (last?.role === "model") last.parts[0].text = full;
              return next;
            });
          }
        }
      } catch {
        const res = await chatRef.current.sendMessage(prompt);
        const text = await res.response.text();
        setMessages((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          if (last?.role === "model") last.parts[0].text = text;
          return next;
        });
      }
    } catch (err) {
      setMessages((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.role === "model") last.parts[0].text = "Sorry, I hit an error. Please try again.";
        return next;
      });
    } finally {
      setIsLoading(false);
    }
  }

  const suggestions = [
    "His role at Avinyaa?",
    "Sanskrit Translate v2?",
    "Lore Keeper project?",
    "World Sim details?",
    "Flux LoRAs?",
  ];

  return (
    <>
      {/* Bottom-right launcher */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full border border-black/10 dark:border-white/10 bg-card backdrop-blur hover:bg-black/10 dark:hover:bg-white/10 shadow"
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5 m-auto" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-4 z-40 w-[min(92vw,380px)] h-[520px] bg-bg border border-black/10 dark:border-white/10 rounded-xl shadow-2xl flex flex-col"
          >
            <div className="px-4 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <p className="text-sm font-medium">Chat with Divax’s AI</p>
              <button className="text-muted hover:text-fg" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 ? (
                <div className="text-sm text-muted">
                  <p className="mb-2">Ask about Divax’s experience, projects, or skills.</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((q) => (
                      <button key={q} className="text-xs rounded-full border px-3 py-1 hover:bg-card" onClick={() => setInput(q)}>
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-teal text-white" : "bg-card"}`}>
                      {m.role === "user" ? (
                        m.parts[0].text
                      ) : (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.parts[0].text}</ReactMarkdown>
                      )}
                    </div>
                  </div>
                ))
              )}
              {isLoading && <div className="text-xs text-muted">Thinking…</div>}
              <div ref={endRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-3 border-t border-black/10 dark:border-white/10">
              <div className="flex gap-2">
                <input
                  className="flex-1 rounded-full border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Divax…"
                />
                <button type="submit" disabled={isLoading || !input.trim()} className="rounded-full bg-amber text-black text-sm px-3 py-2 disabled:opacity-50">Send</button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

