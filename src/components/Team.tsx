import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import images
import teamKavya from "@/assets/team-kavya.jpg";
import teamAastik from "@/assets/team-aastik.jpg";
import teamVrushali from "@/assets/team-vrushali.jpg";
import teamShlok from "@/assets/team-shlok.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Kavya Solanke",
      role: "Product Lead",
      initials: "KS",
      image: teamKavya,
    },
    {
      name: "Aastik Pol",
      role: "Operations",
      initials: "AP",
      image: teamAastik,
    },
    {
      name: "Vrushali",
      role: "Product Lead",
      initials: "V",
      image: teamVrushali,
    },
    {
      name: "Shlok",
      role: "Hardware Engineer",
      initials: "S",
      image: teamShlok,
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">The Innovators Behind Raktika</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Meet the passionate team driving healthcare innovation
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-10 pb-8 text-center space-y-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20">
                  {/*  Show image if available */}
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-accent/20 shadow-lg max-w-2xl mx-auto">
          <CardContent className="pt-8 pb-8 text-center">
            <p className="text-lg font-semibold text-primary">+ RootNova Core Team Members</p>
            <p className="text-muted-foreground mt-2">
              A dedicated group of engineers and innovators
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Team;
