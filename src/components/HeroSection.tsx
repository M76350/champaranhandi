import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone, Utensils } from 'lucide-react';
import champaranHandiMutton from '@/assets/menu/champaran-handi-mutton-1.webp';
import { useTheme } from '@/hooks/useTheme';

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={champaranHandiMutton}
          alt="Champaran Handi Mutton — Purvi Champaran Handi Meat Rafiganj"
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: 'center 30%' }}
        />

        {/* Fixed dark base overlay — same in both modes so image always shows */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Bottom fade — blends into page background */}
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(14,9,6,0.7) 75%, hsl(20,30%,8%) 100%)'
              : 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.75) 100%)',
          }}
        />

        {/* Warm spice color tint — subtle, both modes */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-red-900/20" />
      </div>

      {/* Content — always white text on dark overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 mb-6 backdrop-blur-sm">
            <span className="text-lg">🔥</span>
            <span className="text-sm font-medium">
              <span className="en-text">Authentic Champaran Cuisine</span>
              <span className="hi-text hindi-text">प्रामाणिक चम्पारण व्यंजन</span>
            </span>
          </div>

          {/* Main Heading — always white on dark overlay */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="en-text">
              <span className="text-white/90">Experience the Taste of</span>
              <br />
              <span className="text-gradient">Champaran Handi</span>
            </span>
            <span className="hi-text hindi-text">
              <span className="text-white/90">अनुभव करें</span>
              <br />
              <span className="text-gradient">चम्पारण हांडी का स्वाद</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto drop-shadow">
            <span className="en-text">
              Old traditional recipes, clay pot slow-cooked mutton with multi-variety flavors.
              Located in Rafiganj, Gaya district — nearest to Aurangabad, Sasaram, Dehri-on-Sone.
            </span>
            <span className="hi-text hindi-text">
              पुरानी पारंपरिक रेसिपी, मिट्टी के बर्तन में धीमी आंच पर पका मटन।
              रफीगंज, गया जिला में स्थित — औरंगाबाद, सासाराम, डेहरी-ऑन-सोन के पास।
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917424961362?text=Hi,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 gap-2 shadow-xl shadow-orange-900/40"
              >
                <Phone className="h-5 w-5" />
                <span className="en-text">Order Now</span>
                <span className="hi-text hindi-text">अभी ऑर्डर करें</span>
              </Button>
            </a>
            <Link to="/menu">
              <Button
                size="lg"
                className="text-lg px-8 py-6 gap-2 border-2 border-white/60 text-white bg-transparent hover:bg-white/15 hover:border-white backdrop-blur-sm"
              >
                <Utensils className="h-5 w-5" />
                <span className="en-text">View Menu</span>
                <span className="hi-text hindi-text">मेन्यू देखें</span>
              </Button>
            </Link>
          </div>

          {/* Feature pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { emoji: '🍖', en: 'Fresh Mutton Daily', hi: 'रोज ताजा मटन' },
              { emoji: '🏺', en: 'Clay Pot Cooked', hi: 'मिट्टी के बर्तन में' },
              { emoji: '🌶️', en: 'Secret Spices', hi: 'गुप्त मसाले' },
              { emoji: '📍', en: 'Rafiganj, Gaya', hi: 'रफीगंज, गया' },
            ].map((f) => (
              <div
                key={f.en}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm"
              >
                <span className="text-xl">{f.emoji}</span>
                <span className="text-sm text-white/80 font-medium">
                  <span className="en-text">{f.en}</span>
                  <span className="hi-text hindi-text">{f.hi}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            to="/menu"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm">
              <span className="en-text">Explore Menu</span>
              <span className="hi-text hindi-text">मेन्यू देखें</span>
            </span>
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
