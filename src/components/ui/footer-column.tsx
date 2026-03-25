import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Music2,
  Mail,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://www.facebook.com/profile.php?id=61559429296077',
  instaLink: 'https://www.instagram.com/yallah_baggage/?hl=en',
  linkedinLink: 'https://www.linkedin.com/company/yallah-baggage/?viewAsMember=true',
  tiktokLink: 'https://www.tiktok.com/@yallahbaggage?lang=en',
  youtubeLink: 'https://www.youtube.com/@YallahBaggage',
  services: {
    webdev: '#',
    webdesign: '#',
    marketing: '#',
  },
  about: {
    history: '#',
    team: '#',
    handbook: '#',
  },
  help: {
    faqs: '#',
    support: '#',
    livechat: '#',
  },
  contact: {
    email: 'support@yallahbaggage.com',
    phone: '+971 50 123 4567',
    address: 'Dubai, United Arab Emirates',
  },
  company: {
    name: 'Yallah Baggage',
    description:
      "Dubai's premier luggage concierge. Seamless luggage storage, pickup, and delivery across the UAE. Explore hands-free starting from just 29 AED.",
    logo: '/Logo.png',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Music2, label: 'TikTok', href: data.tiktokLink },
  { icon: Youtube, label: 'YouTube', href: data.youtubeLink },
];

const aboutLinks = [
  { text: 'About Us', href: data.about.history },
  { text: 'Our Fleet', href: data.about.team },
  { text: 'Areas We Serve', href: data.about.handbook },
  { text: 'Partnerships', href: '/partnerships' },
];

const serviceLinks = [
  { text: 'Airport Transfer', href: data.services.webdev },
  { text: 'Hotel Delivery', href: data.services.webdesign },
  { text: 'Luggage Storage', href: data.services.marketing },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Hotel Partnerships', href: '/partnerships' },
  { text: 'Live Chat', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer
      id="footer"
      className="bg-[#050505] relative overflow-hidden border-t border-white/10 mt-24 w-full place-self-end rounded-t-[2.5rem] pt-4 pb-6 px-4 sm:px-6 lg:px-8 z-50"
    >
      
      {/* Decorative blurred background elements for premium feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD100]/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-screen-xl pt-16 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex justify-center items-center gap-3 sm:justify-start">
              <img
                src={data.company.logo}
                alt="Yallah Baggage Logo"
                className="h-9 md:h-11 w-auto object-contain drop-shadow-sm brightness-200"
              />
              <span className="text-2xl font-black tracking-tighter drop-shadow-md">
                <span className="text-white">Yallah</span><span className="text-orange-500">Baggage</span>
              </span>
            </div>

            <p className="text-white/60 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-medium text-balance">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-4 sm:justify-start">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg border border-white/5"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-3">
            <div className="text-center sm:text-left">
              <p className="text-lg font-black tracking-tight text-white mb-6">Company</p>
              <ul className="space-y-4 text-sm font-medium">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link className="group flex items-center justify-center sm:justify-start text-white/60 hover:text-orange-400 transition-colors" href={href}>
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{text}</span>
                        <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-orange-400">{text}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-black tracking-tight text-white mb-6">Services</p>
              <ul className="space-y-4 text-sm font-medium">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link className="group flex items-center justify-center sm:justify-start text-white/60 hover:text-orange-400 transition-colors" href={href}>
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{text}</span>
                        <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-orange-400">{text}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-black tracking-tight text-white mb-6">Support</p>
              <ul className="space-y-4 text-sm font-medium">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`group flex items-center justify-center gap-2 sm:justify-start hover:text-orange-400 transition-colors ${
                        hasIndicator ? 'text-white/90' : 'text-white/60'
                      }`}
                    >
                      <span>{text}</span>
                      {hasIndicator && (
                        <span className="relative flex size-2.5">
                          <span className="bg-orange-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-orange-500 relative inline-flex size-2.5 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-black tracking-tight text-white mb-6">Contact</p>
              <ul className="space-y-5 text-sm font-medium">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <div className="group flex items-center justify-center gap-3 sm:justify-start text-white/60 hover:text-white transition-colors cursor-pointer">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                        <Icon className="text-orange-400 group-hover:text-white size-4 shrink-0 transition-colors" />
                      </div>
                      {isAddress ? (
                        <address className="not-italic text-sm text-balance">
                          {text}
                        </address>
                      ) : (
                        <span className="text-sm">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 pb-4">
          <div className="text-center sm:flex sm:justify-between sm:text-left flex-col sm:flex-row items-center gap-6">
            <p className="text-sm font-medium text-white/40">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-white/40 text-sm font-medium">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
