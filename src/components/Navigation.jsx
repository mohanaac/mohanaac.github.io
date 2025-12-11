import { useState, useEffect, useRef } from "react";
import { Phone, Home, Wrench, User, Quote, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../assets/Mohana_logo.png";
import Logo_Alone from "../assets/Mohana_logo_alone.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isScrolling.current) return;

      const sections = ["home", "services", "about", "testimonial", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "hero" : section
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id === "home" ? "hero" : id);
    if (!element) return;

    isScrolling.current = true;
    element.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 700); 
  };

  const navItems = [
    { label: "Home", id: "home", icon: <Home className="w-5 h-5" /> },
    { label: "Services", id: "services", icon: <Wrench className="w-5 h-5" /> },
    { label: "About", id: "about", icon: <User className="w-5 h-5" /> },
    {
      label: "Testimonial",
      id: "testimonial",
      icon: <Quote className="w-5 h-5" />,
    },
    {
      label: "Contact",
      id: "contact",
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/10 shadow-xl transition-all duration-500
          ${
            isScrolled
              ? "max-w-[90%] rounded-2xl h-16 scale-95"
              : "max-w-full rounded-2xl h-20 scale-100"
          }
          hidden md:flex items-center justify-between px-6 lg:px-10
        `}
      >
        <div
          className={`flex items-center transition-all duration-300 ${
            isScrolled ? "w-14" : "min-w-[150px] space-x-4"
          }`}
        >
          <div
            className={
              isScrolled
                ? "w-9 h-15 cursor-pointer"
                : "w-18 h-15 cursor-pointer"
            }
            onClick={() => scrollToSection("home")}
          >
            <img
              src={isScrolled ? Logo_Alone : Logo}
              alt="Mohana AC Logo"
              className={`object-cover ${
                isScrolled ? "w-15 h-15" : "w-18 h-14"
              }`}
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center space-x-6 px-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300
                ${
                  activeSection === item.id
                    ? "text-primary bg-white/10 backdrop-blur-md shadow-lg scale-105"
                    : "text-foreground hover:text-primary hover:bg-white/10 hover:backdrop-blur-md hover:shadow-md hover:scale-105"
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm -z-10 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        <a href="tel:+917338965589">
          <Button
            className={`btn-primary flex items-center space-x-3 ${
              isScrolled ? "w-12 px-0 justify-center" : "px-6"
            }`}
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            {!isScrolled && (
              <span className="hidden lg:inline select-none">
                +91 73389 65589
              </span>
            )}
          </Button>
        </a>
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:hidden backdrop-blur-md bg-white/10 border-b border-white/10 shadow-xl rounded-b-2xl">
        <div
          className="w-7 h-9 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={Logo_Alone} alt="Logo" className="w-full h-full" />
        </div>

        <div className="flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <a href="tel:+917338965589">
          <Button className="btn-primary w-12 h-12 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </Button>
        </a>
      </nav>
    </>
  );
};

export default Navigation;
