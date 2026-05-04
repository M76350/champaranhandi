import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_KEY = 'pchm-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-slide-in-up"
      style={{
        animation: 'slideInUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
      }}
    >
      <div className="max-w-4xl mx-auto bg-card border border-border/80 rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="h-5 w-5 text-primary" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground mb-1">We use cookies & local storage</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use browser local storage to save your language preference, theme, and cart items.
              No tracking cookies or third-party advertising cookies are used. By continuing, you agree to our{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/terms" className="text-primary hover:underline font-medium">
                Terms of Service
              </Link>.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
            <Button
              size="sm"
              variant="outline"
              onClick={decline}
              className="flex-1 md:flex-none gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
              Decline
            </Button>
            <Button
              size="sm"
              onClick={accept}
              className="flex-1 md:flex-none gap-1.5 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Check className="h-3.5 w-3.5" />
              Accept All
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
