"use client"
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFloating, setIsNavbarFloating] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Portfolio",
    "Contact",
  ];

  const scrollTo = (elementId) => {
    scroll.scrollTo(elementId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const handleMenuItemClick = (item) => {
    scrollTo(item.toLowerCase());
    setIsMenuOpen(false); // Close the menu
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than a certain threshold (e.g., 50px)
      setIsNavbarFloating(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-transparent text-white ${isNavbarFloating ? 'fixed top-0 w-full z-10' : ''}`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Mohamed Habib</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12 font-bold" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem isActive={index === 0} >
            <Link color="foreground" href="#" className="bg-transparent text-white text-lg">
              <ScrollLink
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </ScrollLink>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="custom-menu-item">
  {menuItems.map((item, index) => (
    <NavbarMenuItem key={`${item}-${index}`} >
      <Link
        color="red"
        className="w-full"
        href="#"
        size="lg"
        onClick={() => handleMenuItemClick(item)}
        style={{ backgroundColor: "yourColorHere" }}
      >
        <ScrollLink
          activeClass="active"
          to={item.toLowerCase()}
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onClick={() => handleMenuItemClick(item)}
        >
          {item}
        </ScrollLink>
      </Link>
    </NavbarMenuItem>
  ))}
</NavbarMenu>
    </Navbar>
  );
}
