import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import Map from "./Map";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="font-playfair text-2xl mb-4">Newsletter</h3>
            <p className="font-lato mb-4">
              Recevez nos offres exclusives pour vos escapades romantiques
            </p>
            <div className="flex gap-4">
              <Input placeholder="Your Email" className="bg-white text-black" />
              <Button className="bg-romantic-gold text-black hover:bg-romantic-pink">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-romantic-pink" />
                <p>123 Avenue des Rêves, Paris, France</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-romantic-pink" />
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-romantic-pink" />
                <p>contact@evasioneternelle.com</p>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-romantic-pink transition-colors">Instagram</a>
              <a href="#" className="hover:text-romantic-pink transition-colors">Facebook</a>
              <a href="#" className="hover:text-romantic-pink transition-colors">Twitter</a>
            </div>
          </div>

          <div className="h-[300px] rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Évasion Éternelle. All rights reserved. | Created with ❤️ by Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};