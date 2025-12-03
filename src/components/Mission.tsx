import { Target, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  const items = [
    {
      icon: Eye,
      title: "Vision",
      content:
        "To democratize access to reproductive health diagnostics through affordable, portable, and intelligent devices.",
    },
    {
      icon: Target,
      title: "Mission",
      content:
        "To integrate bioengineering, AI, and mobile technology to create reliable, user-friendly health diagnostic tools for every individual.",
    },
    {
      icon: Sparkles,
      title: "Motto",
      content: "Science that Empowers Wellness.",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={item.title}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
