import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';
import { WelcomePopup } from '@/components/WelcomePopup';
import { useSEO } from '@/hooks/useSEO';

/**
 * MainLayout — persistent shell for all public routes.
 * Navbar and Footer render once; only <Outlet> swaps on navigation.
 * useSEO() updates <title> and <meta description> on every route change.
 */
export default function MainLayout() {
  useSEO();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Main content — flex-1 pushes footer to bottom */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloatingButton />

      {/* Welcome popup only on homepage */}
      {isHome && <WelcomePopup />}
    </div>
  );
}
