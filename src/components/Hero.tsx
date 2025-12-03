import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-image.jpg"; 

interface HeroProps {
  onOpenWaitlist: () => void;
}

const Hero = ({ onOpenWaitlist }: HeroProps) => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/*  Background Hero Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/*  Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-md">
            Empowering Accessible Reproductive Health Diagnostics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Raktika is developing low-cost, AI-assisted diagnostic solutions for hormone testing
            using fluorescence-based mobile technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all animate-scale-in"
              onClick={onOpenWaitlist}
            >
              {t("hero.joinWaitlist")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg animate-scale-in"
              onClick={() => scrollToSection("contact")}
              style={{ animationDelay: "0.1s" }}
            >
              {t("contact.title").split(" ").slice(0, 2).join(" ")}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("mission")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
