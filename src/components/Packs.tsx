import { PackCard } from "./PackCard";

export const Packs = () => {
  const packs = [
    {
      title: "Romance à Bali",
      description: "Experience the ultimate romantic getaway with sunset dinners overlooking the ocean, couples massages in serene spa settings, and visits to ancient temples. Includes luxury villa accommodation with private pool.",
      price: "From $2,999",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3",
    },
    {
      title: "Évasion Tropicale en Thaïlande",
      description: "Discover secluded beaches, immerse yourself in Thai culture with private tours, and stay in exclusive luxury resorts. Includes romantic beachfront dinners and traditional couple's spa treatments.",
      price: "From $3,499",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3",
    },
    {
      title: "Luxe et Sérénité à Bali",
      description: "Elevate your romance with private helicopter tours, exclusive gourmet dining experiences, and luxury spa retreats. Stay in a prestigious villa with butler service and stunning ocean views.",
      price: "From $4,999",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3",
    },
    {
      title: "Plage et Aventure en Thaïlande",
      description: "Combine romance with adventure through private kayaking excursions, rooftop dining experiences, and authentic Thai cooking classes for couples. Includes luxury beachfront resort accommodation.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {packs.map((pack, index) => (
            <PackCard key={index} {...pack} />
          ))}
        </div>
      </div>
    </section>
  );
};