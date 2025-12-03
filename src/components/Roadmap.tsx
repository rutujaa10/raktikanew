import { Calendar, CheckCircle2, Rocket, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Roadmap = () => {
  const milestones = [
    {
      year: "2025",
      title: "Prototype & Validation",
      icon: CheckCircle2,
      status: "current",
    },
    {
      year: "2026",
      title: "Pilot with Clinics & Labs",
      icon: Calendar,
      status: "upcoming",
    },
    {
      year: "2027",
      title: "Public Launch & Expansion to B2C",
      icon: Rocket,
      status: "future",
    },
    {
      year: "Beyond",
      title: "Global Scale & Integration with healthcare networks",
      icon: Globe,
      status: "vision",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Future Roadmap</h2>
          <p className="text-xl text-muted-foreground">Our journey to transform healthcare</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={milestone.year}
                className="border-2 border-accent/20 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {milestone.status === "current" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Current
                    </span>
                  </div>
                )}
                <CardContent className="pt-10 pb-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-2">
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{milestone.year}</div>
                  <p className="text-foreground font-medium leading-relaxed">{milestone.title}</p>
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
