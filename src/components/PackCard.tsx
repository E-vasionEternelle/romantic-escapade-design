import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PackCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const PackCard = ({ title, description, price, image }: PackCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullDescription = `${description} Additional details include luxury airport transfers, daily breakfast served in your private villa, exclusive access to resort facilities, and a dedicated concierge service available 24/7. We also offer customizable add-ons such as photography sessions, private yacht tours, and romantic dinner setups under the stars.`;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <div 
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-8">
        <h3 className="font-playfair text-3xl mb-4">{title}</h3>
        <p className="font-lato text-gray-600 mb-6 text-lg leading-relaxed">
          {isExpanded ? fullDescription : description}
        </p>
        <p className="font-playfair text-2xl mb-6">{price}</p>
        <Button 
          onClick={toggleExpand}
          className="w-full bg-romantic-lavender text-black hover:bg-romantic-pink text-lg py-6 flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-5 h-5" />
            </>
          ) : (
            <>
              Learn More
              <ChevronDown className="w-5 h-5" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};