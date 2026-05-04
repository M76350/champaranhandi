import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon, Phone, LogIn, User, LayoutDashboard, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { NavLink } from './NavLink';
import { CartButton } from './CartDrawer';
import { toast } from 'sonner';
const navLinks = [
  { to: '/', labelEn: 'Home', labelHi: 'होम' },
  { to: '/menu', labelEn: 'Menu', labelHi: 'मेन्यू' },
  { to: '/blog', labelEn: 'Blog', labelHi: 'ब्लॉग' },
  { to: '/about', labelEn: 'About', labelHi: 'हमारे बारे में' },
  { to: '/contact', labelEn: 'Contact', labelHi: 'संपर्क' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform">
              🍖
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg md:text-xl text-foreground leading-tight">
                <span className="en-text">Purvi Champaran</span>
                <span className="hi-text hindi-text">पूर्वी चम्पारण</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                <span className="en-text">Handi Meat, Rafiganj</span>
                <span className="hi-text hindi-text">हांडी मीट, रफीगंज</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                labelEn={link.labelEn}
                labelHi={link.labelHi}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Cart Button */}
            <CartButton />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>

            {/* WhatsApp Button - Desktop */}
            <a
              href="https://wa.me/917424961362"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                <Phone className="h-4 w-4" />
                <span className="en-text">Order Now</span>
                <span className="hi-text hindi-text">ऑर्डर करें</span>
              </Button>
            </a>

            {/* User menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hidden md:flex">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-foreground">{user?.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
                  </div>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center gap-2 cursor-pointer">
                        <LayoutDashboard className="h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive gap-2 cursor-pointer">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login" className="hidden md:flex">
                <Button variant="outline" size="sm" className="gap-2 border-primary/40 hover:bg-primary/10">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg">
                      🍖
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">
                        <span className="en-text">Purvi Champaran</span>
                        <span className="hi-text hindi-text">पूर्वी चम्पारण</span>
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        <span className="en-text">Handi Meat</span>
                        <span className="hi-text hindi-text">हांडी मीट</span>
                      </p>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        labelEn={link.labelEn}
                        labelHi={link.labelHi}
                        className="text-lg py-2"
                      />
                    ))}
                  </div>

                  {/* Mobile Order Button */}
                  <a
                    href="https://wa.me/917424961362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary gap-2">
                      <Phone className="h-4 w-4" />
                      <span className="en-text">Order on WhatsApp</span>
                      <span className="hi-text hindi-text">व्हाट्सएप पर ऑर्डर करें</span>
                    </Button>
                  </a>

                  {/* Mobile auth */}
                  <div className="flex flex-col gap-2 mt-2">
                    {isAuthenticated ? (
                      <>
                        <div className="flex items-center gap-2 px-1 py-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{user?.name}</span>
                          <span className="text-xs capitalize bg-primary/10 text-primary px-2 py-0.5 rounded-full">{user?.role}</span>
                        </div>
                        {isAdmin && (
                          <Link to="/admin">
                            <Button variant="outline" size="sm" className="w-full gap-2">
                              <LayoutDashboard className="h-4 w-4" />
                              Admin Panel
                            </Button>
                          </Link>
                        )}
                        <Button variant="outline" size="sm" onClick={handleLogout} className="w-full gap-2 text-destructive border-destructive/30">
                          <LogOut className="h-4 w-4" />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Link to="/login">
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <LogIn className="h-4 w-4" />
                          Login / Register
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
