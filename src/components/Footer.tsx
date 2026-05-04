import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Shield, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import { toast } from 'sonner';

const navLinks = [
  { href: '/', label: 'Home', labelHi: 'होम' },
  { href: '/menu', label: 'Menu', labelHi: 'मेन्यू' },
  { href: '/about', label: 'About Us', labelHi: 'हमारे बारे में' },
  { href: '/blog', label: 'Blog', labelHi: 'ब्लॉग' },
  { href: '/contact', label: 'Contact', labelHi: 'संपर्क' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield },
  { href: '/terms', label: 'Terms of Service', icon: FileText },
  { href: '/disclaimer', label: 'Disclaimer', icon: AlertTriangle },
];

const nearbyAreas = [
  'Rafiganj', 'Gaya', 'Aurangabad', 'Sasaram',
  'Dehri-on-Sone', 'Kochas', 'Buxar', 'Rohtas',
];

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Subscribed! We\'ll notify you of new posts and offers.');
    setEmail('');
  };

  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Top contact strip */}
      <div className="bg-black py-4 border-b border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 text-sm">
          <a href="https://maps.app.goo.gl/TidfVbdNfqjxw9hh9" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-orange-400 transition">
            <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
            <span>Main Road, Rafiganj, Gaya District, Bihar 824125</span>
          </a>
          <a href="tel:+917424961362" className="flex items-center gap-2 hover:text-orange-400 transition">
            <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
            <span>+91 7424961362</span>
          </a>
          <a href="mailto:champaranmeatrafiganj@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition">
            <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
            <span>champaranmeatrafiganj@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
            <span>Open: 11 AM – 11 PM (All Days)</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-2xl shadow-lg group-hover:scale-105 transition-transform">
                🍖
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  <span className="en-text">Purvi Champaran</span>
                  <span className="hi-text hindi-text">पूर्वी चम्पारण</span>
                </h3>
                <p className="text-xs text-gray-500">
                  <span className="en-text">Handi Meat, Rafiganj</span>
                  <span className="hi-text hindi-text">हांडी मीट, रफीगंज</span>
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              <span className="en-text">
                Authentic Bihar-style Champaran Handi Mutton with old traditional multi-variety recipes.
                Slow-cooked in clay pots. Gaya district, Bihar.
              </span>
              <span className="hi-text hindi-text">
                पुरानी पारंपरिक मल्टी-वैरायटी रेसिपी के साथ प्रामाणिक बिहार स्टाइल चम्पारण हांडी मटन।
                मिट्टी के बर्तन में धीमी आंच पर पकाया। गया जिला, बिहार।
              </span>
            </p>
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1.5 text-xs">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-300">4.9 / 5 (150+ reviews)</span>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              Made with ❤️ by{' '}
              <a href="https://github.com/M76350" target="_blank" rel="noopener noreferrer"
                className="hover:text-orange-400 transition">Manish Kumar</a>
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-orange-400 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition flex-shrink-0" />
                    <span className="en-text">{link.label}</span>
                    <span className="hi-text hindi-text">{link.labelHi}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-base font-semibold text-orange-400 mt-7 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link to={href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-orange-500/60 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Service Areas */}
          <div>
            <h4 className="text-base font-semibold text-orange-400 mb-5">We Serve Near</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {nearbyAreas.map((area) => (
                <span key={area}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700 hover:border-orange-500/50 hover:text-orange-400 transition cursor-default">
                  📍 {area}
                </span>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">Business Hours</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mon – Sun</span>
                  <span className="text-orange-400 font-medium">11 AM – 11 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Holidays</span>
                  <span className="text-green-400 font-medium">Open</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 — Subscribe + Social */}
          <div>
            <h4 className="text-base font-semibold text-orange-400 mb-5">
              <span className="en-text">Stay Updated</span>
              <span className="hi-text hindi-text">अपडेट रहें</span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              <span className="en-text">Get notified about new blog posts, special offers, and seasonal menus.</span>
              <span className="hi-text hindi-text">नए ब्लॉग पोस्ट, स्पेशल ऑफर और सीजनल मेन्यू के बारे में सूचित रहें।</span>
            </p>
            <form onSubmit={handleSubscribe} className="flex mb-6">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'en' ? 'Your email address' : 'आपका ईमेल पता'}
                className="rounded-r-none bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
              <Button type="submit" className="bg-orange-600 hover:bg-orange-700 rounded-l-none flex-shrink-0">
                <span className="en-text">Go</span>
                <span className="hi-text hindi-text">जाएं</span>
              </Button>
            </form>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917424961362?text=Hi,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600/10 border border-green-600/30 rounded-xl p-3 hover:bg-green-600/20 transition mb-6"
            >
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-400">Order on WhatsApp</p>
                <p className="text-xs text-gray-500">+91 7424961362</p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
                <span className="en-text">Follow Us</span>
                <span className="hi-text hindi-text">हमें फॉलो करें</span>
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/purvichamparanhandimeat" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition text-xs font-bold text-gray-400 hover:text-white">
                  f
                </a>
                <a href="https://www.instagram.com/purvichamparanhandimeat" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition text-gray-400 hover:text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://maps.app.goo.gl/TidfVbdNfqjxw9hh9" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center transition text-gray-400 hover:text-white">
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">

          <p>
            © {currentYear} <strong className="text-gray-400">Purvi Champaran Handi Meat, Rafiganj</strong>.{' '}
            <span className="en-text">All rights reserved.</span>
            <span className="hi-text hindi-text">सर्वाधिकार सुरक्षित।</span>
          </p>

          {/* Legal links inline */}
          <div className="flex items-center gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} to={href} className="hover:text-orange-400 transition">
                {label}
              </Link>
            ))}
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-gray-800 rounded-full p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 h-7 text-xs transition-all ${
                language === 'en'
                  ? 'bg-orange-600 text-white hover:bg-orange-600'
                  : 'hover:bg-gray-700 text-gray-400'
              }`}
            >
              EN
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('hi')}
              className={`rounded-full px-3 h-7 text-xs transition-all hindi-text ${
                language === 'hi'
                  ? 'bg-orange-600 text-white hover:bg-orange-600'
                  : 'hover:bg-gray-700 text-gray-400'
              }`}
            >
              हिंदी
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
}
