import { Cpu, FlaskConical, Layers, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Technology = () => {
  const { t } = useTranslation();

  const techPoints = [
    {
      icon: Cpu,
      title: t("technology.t1Title"),
      description: t("technology.t1Desc"),
    },
    {
      icon: FlaskConical,
      title: t("technology.t2Title"),
      description: t("technology.t2Desc"),
    },
    {
      icon: Layers,
      title: t("technology.t3Title"),
      description: t("technology.t3Desc"),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("technology.s1Title"),
      description: t("technology.s1Desc"),
    },
    {
      number: "02",
      title: t("technology.s2Title"),
      description: t("technology.s2Desc"),
    },
    {
      number: "03",
      title: t("technology.s3Title"),
      description: t("technology.s3Desc"),
    },
  ];

  return (
    <section id="technology" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {t("technology.title")}
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("technology.subtitle")}
          </p>
        </div>

        {/* Technology Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {techPoints.map((tech, index) => (
            <Card
              key={tech.title}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up bg-background/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6 space-y-4 text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary to-accent mx-auto sm:mx-0">
                  <tech.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{tech.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3-Step Process */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary tracking-tight">
            {t("technology.processTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <Card className="h-full border-2 border-accent/20 hover:border-accent transition-all duration-300 animate-fade-in bg-background">
                  <CardContent className="pt-8 pb-6 text-center space-y-3 px-6">
                    <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 sm:mb-4">{step.number}</div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">{step.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic sm:not-italic">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-8 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-accent animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
