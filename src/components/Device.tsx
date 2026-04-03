import { Smartphone, Zap, Activity, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Device = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Smartphone,
      title: t("device.f1Title"),
      description: t("device.f1Desc"),
    },
    {
      icon: Zap,
      title: t("device.f2Title"),
      description: t("device.f2Desc"),
    },
    {
      icon: Activity,
      title: t("device.f3Title"),
      description: t("device.f3Desc"),
    },
    {
      icon: Wifi,
      title: t("device.f4Title"),
      description: t("device.f4Desc"),
    },
  ];

  return (
    <section id="device" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-text">{t("device.title")}</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("device.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border border-border/50 hover:border-accent transition-all duration-300 hover:shadow-lg animate-slide-up bg-card/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 text-center space-y-3 px-4">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 mb-1 sm:mb-2 text-accent">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic sm:not-italic">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Device;
