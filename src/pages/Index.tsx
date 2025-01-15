import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Packs } from "@/components/Packs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Packs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;