import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <a href="">Brand Name </a>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a>Home</a>
            <a>About Us</a>
            <a>Portofolio</a>
            <a>GET IN TOUCH</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
