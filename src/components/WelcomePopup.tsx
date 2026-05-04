import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import welcomeCooking from '@/assets/welcome-champaran-handi-cooking.jpg';

const WELCOME_KEY = 'pchm-welcomed';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem(WELCOME_KEY);
    if (!hasVisited) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(WELCOME_KEY, 'true');
    setIsOpen(false);
  };

  const handleExplore = () => {
    handleClose();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md overflow-hidden p-0">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={welcomeCooking}
            alt="Champaran Handi Mutton cooking — Purvi Champaran Handi Meat Rafiganj"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-4xl mb-2">🍖</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl">
              <span className="en-text">Welcome to Purvi Champaran!</span>
              <span className="hi-text hindi-text">पूर्वी चम्पारण में आपका स्वागत है!</span>
            </DialogTitle>
          </DialogHeader>

          <p className="text-muted-foreground mb-6">
            <span className="en-text">
              Experience the authentic taste of Champaran Handi Mutton —
              slow-cooked in traditional clay pots with secret family spices.
              Located in Rafiganj, Gaya District, Bihar.
            </span>
            <span className="hi-text hindi-text">
              चम्पारण हांडी मटन का प्रामाणिक स्वाद अनुभव करें —
              पारंपरिक मिट्टी के बर्तनों में गुप्त पारिवारिक मसालों के साथ धीमी आंच पर पकाया गया।
              रफीगंज, गया जिला, बिहार में स्थित।
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleExplore}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <span className="en-text">Explore Menu</span>
              <span className="hi-text hindi-text">मेन्यू देखें</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-primary/50"
            >
              <span className="en-text">Maybe Later</span>
              <span className="hi-text hindi-text">बाद में</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
