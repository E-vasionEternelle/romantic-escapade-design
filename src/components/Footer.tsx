import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          <div className="text-right">
            <h3 className="font-playfair text-2xl mb-4">Follow Us</h3>
            <div className="flex justify-end gap-4">
              <a href="#" className="hover:text-romantic-pink transition-colors">Instagram</a>
              <a href="#" className="hover:text-romantic-pink transition-colors">Facebook</a>
              <a href="#" className="hover:text-romantic-pink transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};