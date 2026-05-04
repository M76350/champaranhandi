import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/TawkToWidget';
import { FileText, Mail, Phone } from 'lucide-react';

const LAST_UPDATED = 'May 1, 2025';
const BUSINESS_NAME = 'Purvi Champaran Handi Meat, Rafiganj';
const EMAIL = 'champaranmeatrafiganj@gmail.com';
const PHONE = '+91 7424961362';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Legal Document</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">

          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of the website operated by{' '}
              <strong className="text-foreground">{BUSINESS_NAME}</strong> ("we", "us", "our").
              By accessing or using our website, you agree to be bound by these Terms.
              If you do not agree, please do not use our website.
            </p>
          </div>

          {[
            {
              title: '1. Acceptance of Terms',
              items: [
                'By using this website, you confirm that you are at least 13 years of age.',
                'You agree to use the website only for lawful purposes.',
                'We reserve the right to modify these Terms at any time. Continued use constitutes acceptance.',
              ],
            },
            {
              title: '2. Our Services',
              items: [
                'We provide an online menu and ordering interface for Purvi Champaran Handi Meat, a physical restaurant located in Rafiganj, Gaya District, Bihar.',
                'Orders are placed and confirmed via WhatsApp (+91 7424961362). The website facilitates order preparation but the transaction is completed through WhatsApp.',
                'Menu items, prices, and availability are subject to change without prior notice.',
                'We reserve the right to refuse service to anyone for any reason.',
              ],
            },
            {
              title: '3. Ordering & Payment',
              items: [
                'All orders are subject to availability and confirmation by our team via WhatsApp.',
                'Prices displayed on the website are in Indian Rupees (₹) and are inclusive of applicable taxes.',
                'We currently accept Cash and UPI payments at the time of delivery or pickup.',
                'We do not process online payments through this website. No card or banking information is collected.',
                'Order cancellations must be communicated via WhatsApp before preparation begins.',
              ],
            },
            {
              title: '4. Food & Allergen Information',
              items: [
                'Our menu contains non-vegetarian items including mutton, chicken, and other meat products.',
                'We use common spices, oils, and condiments that may contain allergens.',
                'If you have specific dietary requirements or allergies, please inform us before ordering.',
                'We cannot guarantee that our food is free from cross-contamination with allergens.',
                'Nutritional information is not provided on this website.',
              ],
            },
            {
              title: '5. Intellectual Property',
              items: [
                'All content on this website — including text, images, logos, and design — is owned by or licensed to Purvi Champaran Handi Meat.',
                'You may not reproduce, distribute, or create derivative works without our written permission.',
                'Food images used on this website are either our own or used under appropriate licenses.',
              ],
            },
            {
              title: '6. User Accounts',
              items: [
                'You are responsible for maintaining the confidentiality of your account credentials.',
                'You are responsible for all activities that occur under your account.',
                'We reserve the right to terminate accounts that violate these Terms.',
                'Account data is stored locally in your browser. We do not guarantee data persistence across devices.',
              ],
            },
            {
              title: '7. Limitation of Liability',
              items: [
                'Our website is provided "as is" without warranties of any kind.',
                'We are not liable for any indirect, incidental, or consequential damages arising from your use of the website.',
                'Our total liability to you shall not exceed the amount paid for the specific order in question.',
                'We are not responsible for delays or failures caused by circumstances beyond our control (force majeure).',
              ],
            },
            {
              title: '8. Governing Law',
              items: [
                'These Terms are governed by the laws of India.',
                'Any disputes shall be subject to the exclusive jurisdiction of courts in Gaya, Bihar, India.',
                'These Terms comply with the Indian Information Technology Act, 2000 and Consumer Protection Act, 2019.',
              ],
            },
            {
              title: '9. Prohibited Activities',
              items: [
                'Using the website for any unlawful purpose.',
                'Attempting to gain unauthorized access to any part of the website.',
                'Submitting false or misleading information.',
                'Interfering with the proper functioning of the website.',
                'Scraping or harvesting data from the website without permission.',
              ],
            },
          ].map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-4">
                {section.title}
              </h2>
              <ul className="ml-4 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">10. Contact</h2>
            <p className="text-muted-foreground text-sm mb-4">
              For questions about these Terms, contact us:
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
