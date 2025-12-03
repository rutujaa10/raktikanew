import { Cpu, FlaskConical, Layers, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  const techPoints = [
    {
      icon: Cpu,
      title: "Hardware",
      description: "Low-cost optical detection module with smart illumination and emission filtering.",
    },
    {
      icon: FlaskConical,
      title: "Software",
      description: "AI/ML model processes fluorescence intensity for accurate biomarker quantification.",
    },
    {
      icon: Layers,
      title: "Integration",
      description: "Works seamlessly with standard FIA/LFA strips.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Insert/Scan Strip",
      description: "Place your test strip in the device",
    },
    {
      number: "02",
      title: "Capture Using Raktika",
      description: "Device automatically captures fluorescence data",
    },
    {
      number: "03",
      title: "Get Instant Report",
      description: "Receive detailed results on your smartphone app",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Technology & Innovation
          </h2>
          <p className="text-xl text-muted-foreground">How Raktika Works</p>
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
            Simple 3-Step Process
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
