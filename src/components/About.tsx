import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge className="mb-4 bg-accent text-white">{t("about.badge")}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              {t("about.company")}
            </h2>
          </div>

          <Card className="border-none shadow-xl mb-12 animate-fade-in">
            <CardContent className="pt-10 pb-10 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-center animate-slide-up">
                {t("about.description")}
              </p>
              <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Badge variant="outline" className="text-primary border-primary text-base py-2 px-4">
                  {t("about.incubated")}
                </Badge>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default About;
