import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Device from "@/components/Device";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import WaitlistModal from "@/components/WaitlistModal";
import { useState } from "react";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />
      <Mission />
      <Device />
      <Technology />
      <About />
      <Team />
      <Impact />
      <Roadmap />
      <Contact />
      <Footer />
      <ChatWidget />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
