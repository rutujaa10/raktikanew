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
    <section id="device" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("device.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("device.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border border-border/50 hover:border-accent transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 mb-2">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Device;
