import { Calendar, CheckCircle2, Rocket, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Roadmap = () => {
  const { t } = useTranslation();

  const milestones = [
    {
      year: t("roadmap.m1Year"),
      title: t("roadmap.m1Title"),
      icon: CheckCircle2,
      status: "current",
    },
    {
      year: t("roadmap.m2Year"),
      title: t("roadmap.m2Title"),
      icon: Calendar,
      status: "upcoming",
    },
    {
      year: t("roadmap.m3Year"),
      title: t("roadmap.m3Title"),
      icon: Rocket,
      status: "future",
    },
    {
      year: t("roadmap.m4Year"),
      title: t("roadmap.m4Title"),
      icon: Globe,
      status: "vision",
    },
  ];

  return (
    <section id="roadmap" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">{t("roadmap.title")}</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("roadmap.subtitle")}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={milestone.year}
                className="border-2 border-accent/20 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up relative bg-background/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {milestone.status === "current" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-accent text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {t("roadmap.current")}
                    </span>
                  </div>
                )}
                <CardContent className="pt-8 sm:pt-10 pb-6 sm:pb-8 text-center space-y-3 sm:space-y-4 px-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-1 sm:mb-2 text-white">
                    <milestone.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text tracking-tighter">{milestone.year}</div>
                  <p className="text-sm sm:text-base text-foreground font-semibold leading-relaxed px-2">{milestone.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
