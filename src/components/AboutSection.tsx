import { ChefHat, Award, Heart, Clock, MapPin, Users } from 'lucide-react';
import champaranHandiMutton1 from '@/assets/menu/champaran-handi-mutton-1.webp';
import champaranHandiFamily1 from '@/assets/menu/champaran-handi-family-1.jpg';

export function AboutSection() {
  const features = [
    {
      icon: ChefHat,
      titleEn: 'Traditional Recipe',
      titleHi: 'पारंपरिक नुस्खा',
      descEn: 'Old multi-variety recipes passed down through generations',
      descHi: 'पीढ़ियों से चली आ रही पुरानी मल्टी-वैरायटी रेसिपी',
    },
    {
      icon: Award,
      titleEn: 'Premium Quality',
      titleHi: 'उच्च गुणवत्ता',
      descEn: 'Fresh mutton sourced daily, no frozen meat',
      descHi: 'रोज ताजा मटन, कोई फ्रोजन मीट नहीं',
    },
    {
      icon: Heart,
      titleEn: 'Made with Love',
      titleHi: 'प्यार से बना',
      descEn: 'Every handi crafted with care and tradition',
      descHi: 'हर हांडी प्यार और परंपरा से तैयार',
    },
    {
      icon: Clock,
      titleEn: 'Slow Cooked',
      titleHi: 'धीमी आंच पर पकाया',
      descEn: '3–4 hours of dum cooking for perfection',
      descHi: 'परिपूर्णता के लिए 3-4 घंटे का दम पकाना',
    },
    {
      icon: MapPin,
      titleEn: 'Gaya District, Bihar',
      titleHi: 'गया जिला, बिहार',
      descEn: 'Rafiganj — near Aurangabad, Sasaram, Dehri',
      descHi: 'रफीगंज — औरंगाबाद, सासाराम, डेहरी के पास',
    },
    {
      icon: Users,
      titleEn: 'Family Friendly',
      titleHi: 'परिवार के लिए',
      descEn: 'Family packs & thali options for groups',
      descHi: 'परिवार के लिए फैमिली पैक और थाली विकल्प',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={champaranHandiMutton1}
                alt="Champaran Handi Mutton — Purvi Champaran Handi Meat Rafiganj"
                className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover"
              />
              <img
                src={champaranHandiFamily1}
                alt="Family handi mutton — Purvi Champaran Handi Meat Rafiganj Gaya Bihar"
                className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover mt-8"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">
                <span className="en-text">Est. 2010</span>
                <span className="hi-text hindi-text">स्थापित 2010</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="en-text">Our Story</span>
              <span className="hi-text hindi-text">हमारी कहानी</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              <span className="en-text">
                Welcome to Purvi Champaran Handi Meat, Rafiganj — where we bring the authentic taste of 
                Champaran to Gaya district. Our specialty, the legendary Handi Mutton, is slow-cooked 
                in traditional clay pots using old multi-variety recipes and secret spices passed down through generations.
              </span>
              <span className="hi-text hindi-text">
                पूर्वी चम्पारण हांडी मीट, रफीगंज में आपका स्वागत है — जहां हम गया जिले में चम्पारण का 
                प्रामाणिक स्वाद लाते हैं। हमारी विशेषता, प्रसिद्ध हांडी मटन, पारंपरिक मिट्टी के 
                बर्तनों में पुरानी मल्टी-वैरायटी रेसिपी और पीढ़ियों से चले आ रहे गुप्त मसालों के साथ धीमी आंच पर पकाया जाता है।
              </span>
            </p>

            <p className="text-muted-foreground mb-8">
              <span className="en-text">
                Under the leadership of <strong className="text-foreground">Rohit Chauhan</strong>, 
                we serve customers from Rafiganj, Aurangabad (30km), Gaya (40km), Sasaram (50km), 
                Dehri-on-Sone (45km), Kochas, and beyond. We are committed to preserving this culinary 
                heritage while serving with the warmest hospitality.
              </span>
              <span className="hi-text hindi-text">
                <strong className="text-foreground">रोहित चौहान</strong> के नेतृत्व में, हम रफीगंज, 
                औरंगाबाद (30 किमी), गया (40 किमी), सासाराम (50 किमी), डेहरी-ऑन-सोन (45 किमी), 
                कोचस और आसपास के ग्राहकों की सेवा करते हैं। हम इस पाक विरासत को संरक्षित करने और 
                गर्मजोशी भरी मेहमाननवाजी के साथ सेवा करने के लिए प्रतिबद्ध हैं।
              </span>
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover-lift"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      <span className="en-text">{feature.titleEn}</span>
                      <span className="hi-text hindi-text">{feature.titleHi}</span>
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      <span className="en-text">{feature.descEn}</span>
                      <span className="hi-text hindi-text">{feature.descHi}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nearby cities strip */}
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                <span className="en-text">Serving customers from</span>
                <span className="hi-text hindi-text">इन शहरों से ग्राहक आते हैं</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {['Rafiganj', 'Gaya', 'Aurangabad', 'Sasaram', 'Dehri-on-Sone', 'Kochas', 'Buxar'].map((city) => (
                  <span key={city} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
