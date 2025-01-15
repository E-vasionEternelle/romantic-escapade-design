import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 py-4">
      <NavigationMenu className="max-w-screen-xl mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              onClick={() => scrollToSection("hero")}
              className="bg-transparent hover:bg-romantic-pink/10"
            >
              Home
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              onClick={() => scrollToSection("about")}
              className="bg-transparent hover:bg-romantic-pink/10"
            >
              About
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              onClick={() => scrollToSection("video")}
              className="bg-transparent hover:bg-romantic-pink/10"
            >
              Video
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              onClick={() => scrollToSection("packs")}
              className="bg-transparent hover:bg-romantic-pink/10"
            >
              Packs
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              onClick={() => scrollToSection("contact")}
              className="bg-transparent hover:bg-romantic-pink/10"
            >
              Contact
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};