import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const BASE = 'Purvi Champaran Handi Meat, Rafiganj';
const SITE = 'https://champaran-delight.vercel.app';

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

// Per-route SEO config — keyword-rich for Rafiganj / Gaya / Aurangabad
const routeSEO: Record<string, SEOMeta> = {
  '/': {
    title: `${BASE} | Best Handi Mutton in Rafiganj, Gaya, Aurangabad Bihar`,
    description:
      'Purvi Champaran Handi Meat, Rafiganj — Bihar\'s No.1 Champaran Handi Mutton restaurant. Authentic clay-pot slow-cooked mutton with old traditional recipes. Nearest to Gaya (40km), Aurangabad (30km), Sasaram (50km). Order: +91 7424961362',
    canonical: `${SITE}/`,
    ogTitle: `${BASE} | Best Handi Mutton Rafiganj Bihar`,
    ogDescription:
      'Authentic Champaran Handi Mutton in Rafiganj, Gaya district. Old traditional recipes, clay pot cooking. Nearest to Aurangabad, Sasaram, Dehri-on-Sone.',
  },
  '/menu': {
    title: `Menu — Champaran Handi Mutton, Biryani, Thali | ${BASE}`,
    description:
      'Full menu of Purvi Champaran Handi Meat, Rafiganj. Champaran Handi Mutton (₹1000/kg), Mutton Biryani, Chicken Handi, Thali and more. Best non-veg food near Gaya, Aurangabad, Sasaram Bihar.',
    canonical: `${SITE}/menu`,
    ogTitle: `Menu — Handi Mutton, Biryani, Thali | Rafiganj Bihar`,
    ogDescription:
      'Explore our full menu: Champaran Handi Mutton, Mutton Biryani, Chicken Handi, Thali. Best mutton restaurant in Rafiganj, Gaya district, Bihar.',
  },
  '/about': {
    title: `About Us — Champaran Handi Mutton Restaurant Rafiganj | ${BASE}`,
    description:
      'Learn about Purvi Champaran Handi Meat, Rafiganj — owned by Rohit Chauhan. Authentic Champaran cuisine in Gaya district, Bihar since 2010. Serving Aurangabad, Gaya, Sasaram, Dehri-on-Sone.',
    canonical: `${SITE}/about`,
    ogTitle: `About Purvi Champaran Handi Meat Rafiganj | Rohit Chauhan`,
    ogDescription:
      'Purvi Champaran Handi Meat, Rafiganj — authentic Champaran cuisine by Rohit Chauhan. Gaya district, Bihar. Serving Aurangabad, Gaya, Sasaram.',
  },
  '/contact': {
    title: `Contact — Mutton Restaurant Rafiganj Gaya Bihar | ${BASE}`,
    description:
      'Contact Purvi Champaran Handi Meat, Rafiganj. Address: Main Road, Rafiganj, Gaya District, Bihar 824125. Phone: +91 7424961362. Open 11 AM – 11 PM daily. Order Champaran Handi Mutton near Gaya, Aurangabad.',
    canonical: `${SITE}/contact`,
    ogTitle: `Contact Purvi Champaran Handi Meat Rafiganj | +91 7424961362`,
    ogDescription:
      'Main Road, Rafiganj, Gaya District, Bihar 824125. Open 11 AM – 11 PM. Best mutton near Gaya, Aurangabad, Sasaram.',
  },
  '/blog': {
    title: `Blog — Champaran Mutton Recipes, Rafiganj Food Guide | ${BASE}`,
    description:
      'Read our blog for Champaran Handi Mutton recipes, best non-veg restaurants near Gaya, Aurangabad, Sasaram, Dehri-on-Sone, and Bihar food culture stories.',
    canonical: `${SITE}/blog`,
    ogTitle: `Blog — Champaran Mutton Recipes & Rafiganj Food Guide`,
    ogDescription:
      'Champaran Handi Mutton recipes, best non-veg near Gaya, Aurangabad, Sasaram. Bihar food culture and local guides.',
  },
  '/login': {
    title: `Login | ${BASE}`,
    description: `Sign in to your account at Purvi Champaran Handi Meat, Rafiganj.`,
    canonical: `${SITE}/login`,
    ogTitle: `Login | ${BASE}`,
    ogDescription: `Sign in to your account at Purvi Champaran Handi Meat, Rafiganj.`,
  },
  '/register': {
    title: `Create Account | ${BASE}`,
    description: `Register at Purvi Champaran Handi Meat, Rafiganj to order Champaran Handi Mutton online.`,
    canonical: `${SITE}/register`,
    ogTitle: `Create Account | ${BASE}`,
    ogDescription: `Register at Purvi Champaran Handi Meat, Rafiganj.`,
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${BASE}`,
    description: `Privacy Policy of Purvi Champaran Handi Meat, Rafiganj, Gaya District, Bihar.`,
    canonical: `${SITE}/privacy-policy`,
    ogTitle: `Privacy Policy | ${BASE}`,
    ogDescription: `Privacy Policy of Purvi Champaran Handi Meat, Rafiganj.`,
  },
  '/terms': {
    title: `Terms of Service | ${BASE}`,
    description: `Terms of Service of Purvi Champaran Handi Meat, Rafiganj, Gaya District, Bihar.`,
    canonical: `${SITE}/terms`,
    ogTitle: `Terms of Service | ${BASE}`,
    ogDescription: `Terms of Service of Purvi Champaran Handi Meat, Rafiganj.`,
  },
  '/disclaimer': {
    title: `Disclaimer | ${BASE}`,
    description: `Disclaimer of Purvi Champaran Handi Meat, Rafiganj, Gaya District, Bihar.`,
    canonical: `${SITE}/disclaimer`,
    ogTitle: `Disclaimer | ${BASE}`,
    ogDescription: `Disclaimer of Purvi Champaran Handi Meat, Rafiganj.`,
  },
  '/admin': {
    title: `Admin Panel | ${BASE}`,
    description: `Admin dashboard for Purvi Champaran Handi Meat, Rafiganj.`,
    canonical: `${SITE}/admin`,
    ogTitle: `Admin Panel | ${BASE}`,
    ogDescription: `Admin dashboard for Purvi Champaran Handi Meat, Rafiganj.`,
  },
};

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO() {
  const location = useLocation();
  const params = useParams<{ slug?: string }>();

  useEffect(() => {
    const path = location.pathname;
    let meta: SEOMeta;

    // Blog post — dynamic per post
    if (path.startsWith('/blog/') && params.slug) {
      const post = blogPosts.find((p) => p.slug === params.slug);
      if (post) {
        meta = {
          title: `${post.titleEn} | Champaran Handi Mutton Rafiganj Bihar`,
          description: `${post.excerptEn} — Purvi Champaran Handi Meat, Rafiganj, Gaya District, Bihar. ${post.seoKeywords}`,
          canonical: `${SITE}/blog/${post.slug}`,
          ogTitle: `${post.titleEn} | ${BASE}`,
          ogDescription: post.excerptEn,
        };
      } else {
        meta = routeSEO['/blog'];
      }
    } else {
      meta = routeSEO[path] ?? {
        title: `${BASE} | Handi Mutton Rafiganj Bihar`,
        description:
          'Purvi Champaran Handi Meat, Rafiganj — authentic Champaran Handi Mutton in Gaya district, Bihar.',
        canonical: `${SITE}${path}`,
        ogTitle: `${BASE}`,
        ogDescription: 'Authentic Champaran Handi Mutton in Rafiganj, Gaya district, Bihar.',
      };
    }

    // Apply to DOM
    document.title = meta.title;
    setMeta('description', meta.description);
    setLink('canonical', meta.canonical);
    setMeta('og:title', meta.ogTitle, 'property');
    setMeta('og:description', meta.ogDescription, 'property');
    setMeta('og:url', meta.canonical, 'property');
    setMeta('twitter:title', meta.ogTitle);
    setMeta('twitter:description', meta.ogDescription);
  }, [location.pathname, params.slug]);
}
