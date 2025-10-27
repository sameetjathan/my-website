import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sameetjatan@gmail.com',
      href: 'mailto:sameetjatan@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91-9321787707',
      href: 'tel:+919321787707',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Mumbai, Maharashtra',
      href: null,
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sameet-jathan',
      href: 'https://linkedin.com/in/sameet-jathan',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/sameetjathan',
      href: 'https://github.com/sameetjathan',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4"
                >
                  <div className="text-blue-400 flex-shrink-0">{contact.icon}</div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{contact.label}</p>
                    <p className="font-semibold break-all">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 flex-shrink-0">{contact.icon}</div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{contact.label}</p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            © 2025 Jathan Sameet Suresh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
