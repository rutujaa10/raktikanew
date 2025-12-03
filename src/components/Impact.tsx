import { TrendingUp, DollarSign, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "70%",
      description: "of women in India delay reproductive tests due to cost or inaccessibility",
    },
    {
      icon: DollarSign,
      value: "60%",
      description: "reduction in diagnostic costs with Raktika",
    },
    {
      icon: Activity,
      value: "5+",
      description: "hormonal markers supported, with more to come",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Shaping the Future of Women's Health
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Making healthcare accessible and affordable for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.value}
              className="border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-10 pb-10 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.value}</div>
                <p className="text-lg text-white/90 leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
