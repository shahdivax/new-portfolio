import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsWall } from "@/components/SkillsWall";
import { Footer } from "@/components/Footer";
import { SkillsParallax } from "@/components/SkillsParallax";
import { MoonBadge, MarsBadge } from "@/components/SectionAccent";

export default function Home() {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />

      <Section id="about" title="About" accessory={<MoonBadge /> }>
        <p className="text-muted max-w-prose">
          Passionate about pushing the boundaries of AI and creating innovative solutions that shape the future of technology.
        </p>
      </Section>

      <Section id="experience" title="Professional Experience" accessory={<MarsBadge /> }>
        <ExperienceTimeline />
      </Section>

      <Section id="projects" title="Featured Projects">
        <ProjectGrid />
      </Section>

      <Section id="skills" title="Skills & Expertise">
        <SkillsParallax>
          <SkillsWall />
        </SkillsParallax>
      </Section>

      <Section id="contact" title="Let’s Connect!">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-center gap-3">
          <a
            href="mailto:divax12345@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-amber text-black px-5 py-2.5 text-sm font-medium hover:brightness-110 transition"
          >
            Contact
          </a>
          <a
            href="https://github.com/shahdivax"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-card transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/divax-shah/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-card transition"
          >
            LinkedIn
          </a>
          <a
            href="https://huggingface.co/diabolic6045"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-card transition"
          >
            HuggingFace
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
