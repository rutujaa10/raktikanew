import { Target, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();
  
  const items = [
    {
      icon: Eye,
      title: t("mission.vision"),
      content: t("mission.visionContent"),
    },
    {
      icon: Target,
      title: t("mission.missionTitle"),
      content: t("mission.missionContent"),
    },
    {
      icon: Sparkles,
      title: t("mission.motto"),
      content: t("mission.mottoContent"),
    },
  ];

  return (
    <section id="mission" className="py-12 sm:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <Card
              key={item.title}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-background/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-2">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
