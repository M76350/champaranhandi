import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, UtensilsCrossed, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [dots, setDots] = useState(".");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Animated dots for fun effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { to: "/", label: "Home", icon: Home, desc: "Back to main page" },
    { to: "/menu", label: "Our Menu", icon: UtensilsCrossed, desc: "See all dishes" },
    { to: "/contact", label: "Contact", icon: Phone, desc: "Get in touch" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 overflow-hidden relative">

      {/* Floating food emojis background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {["🍖", "🍗", "🥘", "🫕", "🌶️", "🏺", "🍛", "🥩", "🧅", "🧄"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-10 animate-bounce"
            style={{
              left: `${(i * 11) % 95}%`,
              top: `${(i * 17 + 5) % 85}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
              fontSize: `${2 + (i % 2)}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Main card */}
      <div className="relative z-10 max-w-lg w-full text-center">

        {/* Big 404 with gradient */}
        <div className="relative mb-4">
          <h1
            className="text-[10rem] md:text-[14rem] font-black leading-none select-none"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 24px hsl(var(--primary)/0.3))",
            }}
          >
            404
          </h1>
          {/* Handi pot sitting on the 4 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl animate-bounce pointer-events-none">
            🏺
          </div>
        </div>

        {/* Message */}
        <div className="mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Yeh dish menu mein nahi hai{dots}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-1">
            Lagta hai aap galat page par aa gaye!
          </p>
          <p className="text-sm text-muted-foreground/70 font-mono bg-muted/50 inline-block px-3 py-1 rounded-full mt-1">
            <span className="text-primary">404</span> — Page not found:{" "}
            <span className="text-secondary">{location.pathname}</span>
          </p>
        </div>

        {/* Divider with spice */}
        <div className="flex items-center gap-3 my-6 justify-center">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="text-2xl">🌶️</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {quickLinks.map(({ to, label, icon: Icon, desc }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-sm text-foreground">{label}</span>
              <span className="text-[11px] text-muted-foreground text-center leading-tight">{desc}</span>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto"
            >
              <Home className="h-4 w-4" />
              Go to main website
            </Button>
          </Link>
         
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-muted-foreground/50">
          Purvi Champaran Handi Meat, Rafiganj • +91 7424961362
        </p>
      </div>
    </div>
  );
};

export default NotFound;
