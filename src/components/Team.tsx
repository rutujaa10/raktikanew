import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

// Import images
import teamKavya from "@/assets/team-kavya.jpg";
import teamAastik from "@/assets/team-aastik.jpg";
import teamVrushali from "@/assets/team-vrushali.jpg";
import teamShlok from "@/assets/team-shlok.jpg";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Kavya Solanke",
      role: t("team.roles.productLead"),
      initials: "KS",
      image: teamKavya,
    },
    {
      name: "Aastik Pol",
      role: t("team.roles.operations"),
      initials: "AP",
      image: teamAastik,
    },
    {
      name: "Vrushali",
      role: t("team.roles.productLead"),
      initials: "V",
      image: teamVrushali,
    },
    {
      name: "Shlok",
      role: t("team.roles.hardware"),
      initials: "S",
      image: teamShlok,
    },
  ];

  return (
    <section id="team" className="py-12 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-text">{t("team.title")}</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("team.subtitle")}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up bg-background/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 sm:pt-10 pb-6 sm:pb-8 text-center space-y-4 px-4">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4 ring-4 ring-primary/20 shadow-inner">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-xl sm:text-2xl font-bold bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 leading-tight">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-accent/20 shadow-lg max-w-2xl mx-auto backdrop-blur-sm">
          <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center px-6">
            <p className="text-base sm:text-lg font-bold text-primary">{t("team.moreMembers")}</p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed italic">
              {t("team.moreDesc")}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Team;
