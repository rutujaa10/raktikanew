import { Linkedin, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-3xl sm:text-4xl font-bold font-heading tracking-tighter hover:opacity-90 transition-opacity cursor-pointer">
            Raktika
          </div>

          {/* Social Links */}
          <div className="flex space-x-8 sm:space-x-10">
            {[
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            ))}
          </div>

          {/* Company Info */}
          <div className="text-center space-y-2 px-4 max-w-sm mx-auto">
            <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">{t("footer.company")}</p>
            <p className="text-sm sm:text-base text-white/70 italic">{t("footer.location")}</p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 w-full text-center">
            <p className="text-xs sm:text-sm text-white/60 tracking-wide font-light">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
