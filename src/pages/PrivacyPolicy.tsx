import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const LAST_UPDATED = 'May 1, 2025';
const SITE_URL = 'https://champaran-delight.vercel.app';
const BUSINESS_NAME = 'Purvi Champaran Handi Meat, Rafiganj';
const EMAIL = 'champaranmeatrafiganj@gmail.com';
const PHONE = '+91 7424961362';
const ADDRESS = 'Main Road, Rafiganj, Gaya District, Bihar 824125, India';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-28 pb-10 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Legal Document</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose-custom space-y-8">

          {/* Intro */}
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to <strong className="text-foreground">{BUSINESS_NAME}</strong> ("we", "our", "us").
              We operate the website <a href={SITE_URL} className="text-primary hover:underline">{SITE_URL}</a> (the "Site").
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              content: [
                {
                  sub: 'Personal Information You Provide',
                  text: 'When you register an account, place an order, or contact us, we may collect: Full name, Email address, Phone number, Delivery address, Order details and preferences.',
                },
                {
                  sub: 'Automatically Collected Information',
                  text: 'When you visit our Site, we automatically collect certain information including: IP address, Browser type and version, Pages visited and time spent, Referring URL, Device type (mobile/desktop), Operating system.',
                },
                {
                  sub: 'Cookies & Local Storage',
                  text: 'We use browser localStorage to save your language preference (English/Hindi), theme preference (light/dark), cart items, and session data. We do not use third-party tracking cookies. You can clear this data at any time through your browser settings.',
                },
              ],
            },
            {
              title: '2. How We Use Your Information',
              content: [
                {
                  sub: 'Primary Uses',
                  text: 'Process and fulfill your food orders via WhatsApp, Respond to your inquiries and customer service requests, Send order confirmations and updates, Improve our website and services, Comply with legal obligations.',
                },
                {
                  sub: 'We Do NOT',
                  text: 'Sell your personal information to third parties, Use your data for unsolicited marketing without consent, Share your data with advertisers, Store payment card information (we use WhatsApp/cash payments only).',
                },
              ],
            },
            {
              title: '3. WhatsApp Ordering',
              content: [
                {
                  sub: 'Third-Party Service',
                  text: 'Our ordering system uses WhatsApp (owned by Meta Platforms, Inc.). When you click "Order on WhatsApp", you are redirected to WhatsApp\'s platform. Your use of WhatsApp is governed by WhatsApp\'s own Privacy Policy and Terms of Service. We receive only the messages you choose to send us.',
                },
              ],
            },
            {
              title: '4. Google Services',
              content: [
                {
                  sub: 'Google Maps & Forms',
                  text: 'Our Contact page embeds Google Maps and a Google Form. These services are provided by Google LLC and are subject to Google\'s Privacy Policy (https://policies.google.com/privacy). Google may collect data when you interact with these embedded services.',
                },
                {
                  sub: 'Google Fonts',
                  text: 'We load the Poppins font from Google Fonts CDN. Google may log your IP address when serving font files.',
                },
              ],
            },
            {
              title: '5. Data Security',
              content: [
                {
                  sub: 'Security Measures',
                  text: 'We implement reasonable technical and organizational measures to protect your information. Our website is served over HTTPS (SSL/TLS encryption). However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
                },
                {
                  sub: 'Data Retention',
                  text: 'We retain your account information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us.',
                },
              ],
            },
            {
              title: '6. Your Rights',
              content: [
                {
                  sub: 'Under Indian IT Act & DPDP Act 2023',
                  text: 'You have the right to: Access the personal data we hold about you, Correct inaccurate or incomplete data, Request deletion of your personal data, Withdraw consent for data processing, Lodge a complaint with the relevant data protection authority.',
                },
                {
                  sub: 'How to Exercise Your Rights',
                  text: `Contact us at ${EMAIL} or ${PHONE}. We will respond to your request within 30 days.`,
                },
              ],
            },
            {
              title: '7. Children\'s Privacy',
              content: [
                {
                  sub: 'Age Restriction',
                  text: 'Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.',
                },
              ],
            },
            {
              title: '8. Third-Party Links',
              content: [
                {
                  sub: 'External Websites',
                  text: 'Our Site may contain links to third-party websites (WhatsApp, Google Maps, social media). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.',
                },
              ],
            },
            {
              title: '9. Changes to This Policy',
              content: [
                {
                  sub: 'Updates',
                  text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date at the top of this page. Continued use of the Site after changes constitutes acceptance of the updated policy.',
                },
              ],
            },
          ].map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-4">
                {section.title}
              </h2>
              {section.content.map((item) => (
                <div key={item.sub} className="ml-4">
                  <h3 className="font-semibold text-foreground mb-1">{item.sub}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-primary hover:underline">{PHONE}</a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{ADDRESS}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
