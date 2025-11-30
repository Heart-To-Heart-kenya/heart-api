import React from "react";
import { Lock, UserCheck, Database, Globe, Mail, Shield, FileText, CheckCircle, Eye, ShieldCheck, Users, Heart } from "lucide-react";
import { HeroSection } from "../../../components/HeroSection";

function Policy() {
  const policySections = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Information We Collect",
      content:
        "We collect information you provide directly, such as when you create an account or contact us, and automatically through usage data such as IP address, browser type, and device information.",
      highlights: ["Account information", "Usage data", "Contact details", "Communication history"],
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "How We Use Your Information",
      content:
        "Your information helps us operate our platform, improve user experience, communicate updates, and ensure safety and compliance with applicable laws.",
      highlights: ["Platform operation", "User experience improvement", "Safety and compliance", "Service communication"],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Storage and Security",
      content:
        "We use industry-standard encryption and secure servers to protect your personal data from unauthorized access, alteration, or destruction.",
      highlights: ["Industry-standard encryption", "Secure servers", "Regular security audits", "Data backup protocols"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sharing of Information",
      content: "We do not sell or rent your personal data. Information is shared only with trusted service providers or when legally required.",
      highlights: ["No data selling", "Trusted partners only", "Legal compliance", "Transparent sharing practices"],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Your Rights",
      content:
        "You can request access to, correction of, or deletion of your data at any time. We comply with global data protection standards to safeguard your rights.",
      highlights: ["Data access rights", "Correction requests", "Deletion rights", "Global compliance standards"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: "If you have any questions or concerns regarding this policy, please contact our support team for assistance.",
      highlights: ["Direct support access", "Privacy concerns addressed", "Quick response time", "Multiple contact options"],
    },
  ];

  return (
    <main className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 overflow-hidden pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains how we collect, use, and protect your information while using our services."
      />

      {/* Privacy Principles */}
      <section className="py-12 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: <ShieldCheck className="w-8 h-8 text-primary" />, text: "Data Protection" },
                { icon: <Eye className="w-8 h-8 text-primary" />, text: "Transparency" },
                { icon: <Users className="w-8 h-8 text-primary" />, text: "User Control" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  {item.icon}
                  <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {policySections.map((section, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">{section.icon}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{index + 1}</div>
                      <h2 className="text-2xl font-bold text-primary dark:text-white">{section.title}</h2>
                    </div>

                    <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-6">{section.content}</p>

                    <div className="space-y-2">
                      {section.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-3 text-text-primary-light/70 dark:text-text-primary-dark/70">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-primary/20">
              <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-2 mb-6 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Commitment</span>
              </div>

              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Protecting Your Trust</h3>
              <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-6">
                We are committed to maintaining the highest standards of privacy and data protection. Your trust is the foundation of our community,
                and we work tirelessly to ensure your information remains secure and confidential.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-text-primary-light/70 dark:text-text-primary-dark/70">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Last updated: November 2054</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Policy;
