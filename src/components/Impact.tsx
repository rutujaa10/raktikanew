import { TrendingUp, DollarSign, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Impact = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: TrendingUp,
      value: "70%",
      description: t("impact.stat1"),
    },
    {
      icon: DollarSign,
      value: "60%",
      description: t("impact.stat2"),
    },
    {
      icon: Activity,
      value: "5+",
      description: t("impact.stat3"),
    },
  ];

  return (
    <section id="impact" className="py-12 sm:py-20 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      {/* Decorative elements - scaled down on mobile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-5 right-5 w-48 h-48 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t("impact.title")}
          </h2>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t("impact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.value}
              className="border-none bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 sm:pt-10 pb-8 sm:pb-10 text-center space-y-3 sm:space-y-4 px-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 mb-2 sm:mb-4">
                  <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1 sm:mb-3 tracking-tighter">{stat.value}</div>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
