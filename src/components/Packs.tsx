import { PackCard } from "./PackCard";

export const Packs = () => {
  const packs = [
    {
      title: "Romance à Bali",
      description: "Sunset dinners, couples massages, and serene temples",
      price: "From $2,999",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3",
    },
    {
      title: "Évasion Tropicale en Thaïlande",
      description: "Private beaches, cultural tours, and luxury stays",
      price: "From $3,499",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3",
    },
    {
      title: "Luxe et Sérénité à Bali",
      description: "Helicopter rides, gourmet dinners, and spa retreats",
      price: "From $4,999",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3",
    },
    {
      title: "Plage et Aventure en Thaïlande",
      description: "Kayaking, rooftop dinners, and culinary experiences",
      price: "From $3,999",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3",
    },
  ];

  return (
    <section id="packs" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">
          Our Romantic Getaways
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack, index) => (
            <PackCard key={index} {...pack} />
          ))}
        </div>
      </div>
    </section>
  );
};