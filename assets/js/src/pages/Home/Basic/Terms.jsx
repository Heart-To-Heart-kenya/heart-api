import React from "react";
import { ShieldCheck, FileText, Handshake, Lock, Info, Mail, CheckCircle, Users, Heart } from "lucide-react";
import { HeroSection } from "../../../components/HeroSection";

function Terms() {
  const termsSections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content:
        "By accessing or using Heart to Heart Kenya, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please discontinue use of the platform immediately.",
      highlights: ["Automatic agreement upon access", "Includes Privacy Policy", "Immediate discontinuation if not agreed"],
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Your Responsibilities",
      content:
        "Users are expected to act with honesty, respect, and integrity when donating or receiving items. Misuse of the platform, including fraudulent activity or harassment, will result in account suspension or removal.",
      highlights: ["Act with honesty and respect", "No fraudulent activities", "Account suspension for violations"],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy and Security",
      content:
        "We respect your privacy and protect your personal information in accordance with our Privacy Policy. Please avoid sharing private contact information publicly or with users you do not know well.",
      highlights: ["Data protection compliance", "Secure information handling", "Limited personal information sharing"],
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Limitation of Liability",
      content:
        "Heart to Heart kenya is not responsible for damages, losses, or disputes arising from interactions between users. We act solely as a platform for connecting donors and receivers.",
      highlights: ["Platform connector only", "User interactions responsibility", "No liability for disputes"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content:
        "If you have any questions or concerns regarding these Terms, please contact our support team for assistance. Please contact us at support@hearttoheart.org",
      highlights: ["Direct support access", "Quick response guaranteed", "Multiple contact channels"],
    },
  ];

  return (
    <main className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 overflow-hidden pt-20">
      {/* Hero Section */}
      <HeroSection
        title="Terms of Service"
        description="Please take a few moments to read our terms of service carefully. Your trust and transparency are at the heart of what we do."
      />

      {/* Quick Overview */}
      <section className="py-12 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: <Users className="w-8 h-8 text-primary" />, text: "Community Guidelines" },
                { icon: <ShieldCheck className="w-8 h-8 text-primary" />, text: "Safety First" },
                { icon: <Heart className="w-8 h-8 text-primary" />, text: "Trust & Respect" },
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

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {termsSections.map((section, index) => (
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

                    {section.highlights && (
                      <div className="space-y-2">
                        {section.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-3 text-text-primary-light/70 dark:text-text-primary-dark/70">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-primary/20">
              <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-2 mb-6 border border-primary/20">
                <Info className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Important Notice</span>
              </div>

              <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Your Agreement Matters</h3>
              <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-6">
                By continuing to use Heart to Heart Kenya, you acknowledge that you have read, understood, and agreed to these Terms of Service. Your
                commitment helps us maintain a safe, respectful, and generous community.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-text-primary-light/70 dark:text-text-primary-dark/70">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Last updated: November 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Terms;
