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
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background Hero Image with better mobile focus */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Gradient overlay - enhanced for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-20 relative text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] drop-shadow-lg tracking-tight">
            Empowering Accessible Reproductive Health Diagnostics
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Raktika is developing low-cost, AI-assisted diagnostic solutions for hormone testing
            using fluorescence-based mobile technology.
          </p>

          <div className="flex flex-col xs:flex-row gap-4 justify-center items-center pt-4 sm:pt-6">
            <Button
              size="lg"
              className="w-full xs:w-auto text-base sm:text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all animate-scale-in font-semibold"
              onClick={onOpenWaitlist}
            >
              {t("hero.joinWaitlist")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full xs:w-auto text-base sm:text-lg px-8 py-6 bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white shadow-lg animate-scale-in backdrop-blur-sm transition-all"
              onClick={() => scrollToSection("contact")}
              style={{ animationDelay: "0.1s" }}
            >
              {t("contact.title").split(" ").slice(0, 2).join(" ")}
            </Button>
          </div>
        </div>

        {/* Scroll indicator - hidden on very small screens to save space */}
        <button
          onClick={() => scrollToSection("mission")}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-white transition-colors hidden xs:block"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
