import { Smartphone, Zap, Activity, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Device = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Clip-on optical fluorescence module",
      description: "Seamlessly attaches to your smartphone",
    },
    {
      icon: Zap,
      title: "AI-driven analysis",
      description: "Smart algorithms through smartphone app",
    },
    {
      icon: Activity,
      title: "Multiple test support",
      description: "Lateral-flow and fluorescence-based tests",
    },
    {
      icon: Wifi,
      title: "Portable & rechargeable",
      description: "Designed for precision and convenience",
    },
  ];

  return (
    <section id="device" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">The Raktika Device</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An affordable, smartphone-integrated fluorescence detection system that enables at-home
            hormone testing with laboratory-level precision.
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
