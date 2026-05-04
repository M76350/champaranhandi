import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';
import { AlertTriangle, Mail, Phone } from 'lucide-react';

const LAST_UPDATED = 'May 1, 2025';
const BUSINESS_NAME = 'Purvi Champaran Handi Meat, Rafiganj';
const EMAIL = 'champaranmeatrafiganj@gmail.com';
const PHONE = '+91 7424961362';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">Legal Document</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Disclaimer</h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">

          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              The information provided on this website by{' '}
              <strong className="text-foreground">{BUSINESS_NAME}</strong> is for general
              informational purposes only. All information is provided in good faith; however,
              we make no representation or warranty of any kind regarding the accuracy,
              adequacy, validity, reliability, or completeness of any information on the Site.
            </p>
          </div>

          {[
            {
              title: 'Website Disclaimer',
              text: 'The website and its content are provided on an "as is" basis. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to make changes to the website at any time without notice.',
            },
            {
              title: 'Food & Menu Disclaimer',
              text: 'Menu items, prices, and availability are subject to change without prior notice. Images of food items on this website are for illustrative purposes only and may not exactly represent the actual dish served. Actual portion sizes, presentation, and ingredients may vary. We strive to keep menu information accurate but cannot guarantee it is always up to date.',
            },
            {
              title: 'Allergen & Dietary Disclaimer',
              text: 'Our kitchen handles meat products, spices, dairy, and other common allergens. While we take precautions, we cannot guarantee that any menu item is completely free from allergens or cross-contamination. Customers with severe allergies or specific dietary requirements should contact us directly before ordering. We are not liable for any allergic reactions or dietary issues arising from consumption of our food.',
            },
            {
              title: 'Pricing Disclaimer',
              text: 'All prices displayed on this website are in Indian Rupees (₹) and are subject to change without notice. Prices may vary during festivals, special events, or due to ingredient cost fluctuations. The final price will be confirmed at the time of order via WhatsApp.',
            },
            {
              title: 'Third-Party Links Disclaimer',
              text: 'Our website contains links to third-party websites including WhatsApp, Google Maps, and Google Forms. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
            },
            {
              title: 'Blog Content Disclaimer',
              text: 'Blog posts on this website are written for informational and SEO purposes. While we strive for accuracy, the information in blog posts reflects our knowledge at the time of writing and may not be current. Blog content should not be taken as professional nutritional, medical, or dietary advice.',
            },
            {
              title: 'Testimonials & Reviews Disclaimer',
              text: 'Any testimonials or reviews displayed on this website reflect the individual experiences of those customers. Results and experiences may vary. We do not claim that all customers will have the same experience.',
            },
            {
              title: 'Errors & Omissions',
              text: 'While we have made every attempt to ensure the accuracy of the information on this website, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. We reserve the right to correct any errors or omissions and to change or update information at any time without prior notice.',
            },
          ].map((section) => (
            <div key={section.title} className="space-y-2">
              <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-4">
                {section.title}
              </h2>
              <p className="ml-4 text-sm text-muted-foreground leading-relaxed">{section.text}</p>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">Questions?</h2>
            <p className="text-muted-foreground text-sm mb-4">
              If you have any questions about this Disclaimer, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
