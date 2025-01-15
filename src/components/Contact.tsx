import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-romantic-lavender/10">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">
          Book Your Escape
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Destination" className="font-lato" />
              <Input type="date" className="font-lato" />
              <Input placeholder="Number of Travelers" type="number" className="font-lato" />
              <Input placeholder="WhatsApp Number" type="tel" className="font-lato" />
            </div>
            <Textarea placeholder="Your Message" className="font-lato" />
            <Button className="w-full bg-romantic-gold text-black hover:bg-romantic-pink">
              Send Inquiry
            </Button>
          </form>
          <div className="mt-12 text-center">
            <p className="font-lato text-lg mb-2">Contact Us</p>
            <p className="font-lato">Phone: +212 6 00 00 00 00</p>
            <p className="font-lato">Website: www.evasioneternelle.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};