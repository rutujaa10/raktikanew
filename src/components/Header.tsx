import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("nav.mission"), id: "mission" },
    { label: t("nav.device"), id: "device" },
    { label: t("nav.technology"), id: "technology" },
    { label: t("nav.about"), id: "about" },
    { label: t("nav.team"), id: "team" },
    { label: t("nav.impact"), id: "impact" },
    { label: t("nav.roadmap"), id: "roadmap" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Raktika Logo"
              className="w-16 sm:w-20 h-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-2 pl-4 border-l border-border/50">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu (Sheet) */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-12 h-auto" />
                    <span className="gradient-text font-bold">Raktika</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-lg font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-xl transition-all"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
