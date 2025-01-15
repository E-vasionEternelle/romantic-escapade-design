import { Button } from "@/components/ui/button";

interface PackCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const PackCard = ({ title, description, price, image }: PackCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <div 
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-8">
        <h3 className="font-playfair text-3xl mb-4">{title}</h3>
        <p className="font-lato text-gray-600 mb-6 text-lg leading-relaxed">{description}</p>
        <p className="font-playfair text-2xl mb-6">{price}</p>
        <Button className="w-full bg-romantic-lavender text-black hover:bg-romantic-pink text-lg py-6">
          Learn More
        </Button>
      </div>
    </div>
  );
};