import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToPacks = () => {
    document.getElementById("packs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3')",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="font-playfair text-5xl md:text-7xl text-center mb-6 animate-fade-up">
          Vivez l'amour, explorez le monde
        </h1>
        <p className="font-lato text-xl md:text-2xl mb-8 animate-fade-up opacity-90">
          Des voyages romantiques sur mesure
        </p>
        <Button 
          onClick={scrollToPacks}
          className="bg-romantic-gold text-black hover:bg-romantic-pink transition-colors duration-300 text-lg px-8 py-6 rounded-full animate-fade-up"
        >
          Explore Our Packs
        </Button>
      </div>
    </div>
  );
};