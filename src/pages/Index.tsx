import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Video } from "@/components/Video";
import { Packs } from "@/components/Packs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Video />
      <Packs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;