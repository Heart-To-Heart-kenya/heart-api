import React from "react";
import {
  HeartHandshake,
  User,
  Users2,
  Home,
  Star,
  HandHeart,
  ArrowRight,
  Globe2,
  Award,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { HeroSection } from "../../../components/HeroSection";
import { Link } from "react-router-dom";

function Partners() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 overflow-hidden pt-20">
      
      {/* Hero Section */}
      <HeroSection
        title="Partner With Us"
        description="Join forces with Heart to Heart Kenya. We welcome partnerships with individuals, organizations, and shelters that share our mission of supporting communities in need and reducing waste."
      />

      {/* Partnership Opportunities */}
      <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-text-primary-light/80 dark:text-text-primary-dark/80 max-w-2xl mx-auto">
              Choose how you'd like to collaborate and make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individuals",
                icon: <User className="w-8 h-8 text-primary" />,
                desc: "Become a volunteer, donor, or community ambassador and create tangible impact in your local community.",
                features: ["Volunteer opportunities", "Personal donations", "Community advocacy", "Skill sharing"],
              },
              {
                title: "Organizations",
                icon: <Users2 className="w-8 h-8 text-primary" />,
                desc: "Partner through your company or NGO to launch sustainable programs that transform communities.",
                features: ["Corporate partnerships", "Program funding", "Employee volunteering", "Resource sharing"],
              },
              {
                title: "Shelters & Centers",
                icon: <Home className="w-8 h-8 text-primary" />,
                desc: "Collaborate directly with shelters and community centers to provide essential support to those in need.",
                features: ["Supply coordination", "Program implementation", "Direct beneficiary support", "Capacity building"],
              },
            ].map(({ title, icon, desc, features }) => (
              <div key={title} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{title}</h3>
                </div>
                <p className="text-text-primary-light/80 dark:text-text-primary-dark/80 mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-text-primary-light/70 dark:text-text-primary-dark/70">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Benefits of Partnership</h2>
            <p className="text-text-primary-light/80 dark:text-text-primary-dark/80 max-w-2xl mx-auto">
              Create meaningful impact while growing your own capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Community Impact", desc: "Amplify your positive effect on society through collective action and shared resources.", icon: <HeartHandshake className="w-6 h-6" /> },
              { title: "Enhanced Visibility", desc: "Gain recognition as a community-focused partner across our networks.", icon: <Star className="w-6 h-6" /> },
              { title: "Volunteer Engagement", desc: "Offer your team or network meaningful ways to contribute to society.", icon: <HandHeart className="w-6 h-6" /> },
              { title: "Strategic Growth", desc: "Connect with like-minded organizations and expand your reach.", icon: <Users2 className="w-6 h-6" /> },
              { title: "Sustainable Change", desc: "Drive long-term community development and lasting impact.", icon: <Globe2 className="w-6 h-6" /> },
              { title: "Recognition", desc: "Receive acknowledgment for your contributions through our partner program.", icon: <Award className="w-6 h-6" /> },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{icon}</div>
                  <h3 className="font-semibold text-primary dark:text-white">{title}</h3>
                </div>
                <p className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Ready to Partner?</h2>
            <p className="text-text-primary-light/80 dark:text-text-primary-dark/80 max-w-2xl mx-auto mb-8">
              Reach out today and let's discuss how we can make a difference together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary text-white rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Start Your Partnership</h3>
                <p className="mb-6 opacity-90">Join our network of partners making a real difference in communities across Kenya.</p>
                <Link to="/contact">
                  <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 shadow-md">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text-primary-light/80 dark:text-text-primary-dark/80">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>partnerships@hearttoheart.org</span>
                </div>
                <div className="flex items-center gap-3 text-text-primary-light/80 dark:text-text-primary-dark/80">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex items-center gap-3 text-text-primary-light/80 dark:text-text-primary-dark/80">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partners;
