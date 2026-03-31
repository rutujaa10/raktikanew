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
    <section id="technology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            {t("technology.title")}
          </h2>
          <p className="text-xl text-muted-foreground">{t("technology.subtitle")}</p>
        </div>

        {/* Technology Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {techPoints.map((tech, index) => (
            <Card
              key={tech.title}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <tech.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3-Step Process */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            {t("technology.processTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="h-full border-2 border-accent/20 hover:border-accent transition-all duration-300 animate-fade-in">
                  <CardContent className="pt-8 pb-6 text-center space-y-3">
                    <div className="text-5xl font-bold gradient-text mb-4">{step.number}</div>
                    <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 h-6 w-6 text-accent" />
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
