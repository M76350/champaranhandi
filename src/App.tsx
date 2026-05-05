import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ThemeProvider } from "@/hooks/useTheme";
import { CartProvider } from "@/hooks/useCart";
import { AuthProvider } from "@/hooks/useAuth";
import { CartDrawer } from "@/components/CartDrawer";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { CookieConsent } from "@/components/CookieConsent";

// Layout
import MainLayout from "@/layouts/MainLayout";

// Pages inside MainLayout (Navbar + Footer always visible)
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

// Standalone pages (no shared layout — have their own full-screen UI)
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <CartDrawer />
                <CookieConsent />
                <Routes>

                  {/* ── MAIN LAYOUT (Navbar + Footer persistent) ── */}
                  <Route element={<MainLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                  </Route>

                  {/* ── STANDALONE (full-screen, no shared Navbar/Footer) ── */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute requireAdmin>
                        <Admin />
                      </ProtectedRoute>
                    }
                  />

                  {/* ── 404 ── */}
                  <Route path="*" element={<NotFound />} />

                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
