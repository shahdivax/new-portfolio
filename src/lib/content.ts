export const about = {
  name: "Divax Shah",
  tagline: "AI Enthusiast",
  blurb:
    "Passionate about pushing the boundaries of AI and creating innovative solutions that shape the future of technology.",
  links: {
    github: "https://github.com/shahdivax",
    linkedin: "https://www.linkedin.com/in/divax-shah/",
    huggingface: "https://huggingface.co/diabolic6045",
    email: "mailto:divax12345@gmail.com",
    phone: "+91-8866572525",
    portfolio: "https://divax-shah-portfolio.vercel.app/",
  } as Partial<Record<string, string>>,
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  details: string;
};

export const experiences: Experience[] = [
  {
    role: "Jr. AI/ML Developer",
    company: "Avinyaa Edtech Private Limited",
    date: "Mar 2025 – Present",
    details:
      "Developing and refining an advanced grammar checker for KreativeSpace’s AI Writing Tools Suite by fine-tuning LLMs for high accuracy and natural language output. Designing and training a multilingual AI text classification system to detect AI-generated content in English, Hindi, Spanish, German, Dutch, and Italian (up to 95% accuracy), often outperforming Quillbot’s detector and approaching GPTZero.",
  },
  {
    role: "Jr. Python Developer",
    company: "Thinkbiz Technology Private Limited",
    date: "May 2024 – Mar 2025",
    details:
      "Built a scalable PoC of an advanced chatbot system with LangChain Agents and LLM, handling structured (SQL) and unstructured data with ~17 agents, intercommunication, RBAC, real-time ingestion, and automated source citation. Developed an OCR–LLM pipeline for Jugaad, improving invoice extraction accuracy from 15%→85% and receipts from 10%→90% across formats.",
  },
  {
    role: "AI & Synthetic Data Developer Intern",
    company: "DMI Finance Private Limited",
    date: "Jan 2024 – Apr 2024",
    details:
      "Developed a generative AI system for synthetic structured data generation with Python + Gradio for cleaning, deduplication, and embedding. Built a robust PyTorch + Transformers fine-tuning framework enabling LLM adaptation across diverse datasets, significantly improving accuracy and performance, and delivered a user-friendly Gradio interface for synthesis.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "QuizWiz",
    description:
      "AI-powered platform for one-click custom chatbot creation with document ingestion (PDF/TXT), RAG via LlamaIndex, and deployment-ready workflows.",
    tags: ["NLP", "Chatbot", "Flask", "Mistral-AI-API", "Gemini-API", "Website"],
    url: "https://quiz-wiz-official.vercel.app/",
  },
  {
    title: "Sanskrit-qwen (7B) Translate",
    description:
      "Fine-tuned Qwen2.5-7B-Instruct-1M on Sanskrit datasets using QLoRA (Axolotl), gradient checkpointing, 4-bit quantization, and cosine LR to translate Vedic Sanskrit → English.",
    tags: ["LLM", "Translation", "Fine-tuning", "Sanskrit", "Qwen-2.5-7B", "Model"],
    url: "https://huggingface.co/diabolic6045/Sanskrit-qwen-7B-Translate",
  },
  {
    title: "Geolocation through Image Classification",
    description:
      "Transfer learning with VGG16 to identify Indian cities from images, achieving 66.3% accuracy.",
    tags: ["Computer Vision", "Deep Learning", "Transfer Learning", "Model"],
    url: "https://huggingface.co/diabolic6045/indian_cities_image_classification",
  },
  {
    title: "Character Chatbot",
    description:
      "Conversational agents with DialoGPT-medium: interactive chats as Tony Stark, Harry Potter, and more.",
    tags: ["LLM", "Chatbot", "Fine-tuning", "DialoGPT", "Model"],
    url: "https://huggingface.co/diabolic6045/tony_stark_chatbot",
  },
  {
    title: "Itinerary Generator",
    description:
      "GPT-2 fine-tuned for on-demand travel itinerary generation with PyTorch + Transformers.",
    tags: ["LLM", "GPT-2", "Fine-tuning", "Model"],
    url: "https://huggingface.co/diabolic6045/itineraries_Generator",
  },
  {
    title: "Synthetic Data Generation",
    description:
      "End-to-end synthetic structured data pipeline with Python + Gradio for cleaning, dedup, embeddings, and generation.",
    tags: ["Generative AI", "Data Synthesis", "PyTorch", "Fine-tuning", "Llama-2", "Paper"],
    url: "/documents/divax-recco.pdf",
  },
  {
    title: "Something",
    description:
      "Investor news aggregator with AI summaries to track impactful updates on portfolios.",
    tags: ["Flask", "Firebase", "Gemini AI", "App"],
    url: "https://something-atep.onrender.com",
  },
];

export const skills = [
  "PyTorch",
  "TensorFlow / Keras",
  "HuggingFace Transformers",
  "scikit-learn",
  "LangChain",
  "NumPy & Pandas",
  "NLP",
  "Computer Vision",
  "LLM Fine-tuning",
  "Generative AI",
  "Prompt Engineering",
  "Reinforcement Learning",
  "Axolotl",
  "Unsloth",
  "OpenAI API",
  "Google Gemini API",
  "Anthropic API",
  "Mistral AI API",
];

