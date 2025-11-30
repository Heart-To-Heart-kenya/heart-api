import React from "react";
import { Heart, Users, Target, Handshake, MessageCircle, Phone, Mail, Shield, Gem, MapPin, Leaf } from "lucide-react";
import { HeroSection } from "../../../components/HeroSection";

function About() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 overflow-hidden pt-20">
      {/* Hero Section */}
      <HeroSection
        title="About Heart to Heart Kenya"
        description="Connecting hearts and hands to support vital needs through compassion, transparency, and community-driven action."
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Who We Are */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Who We Are</h2>
                </div>
                <p className="text-md text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  Heart to Heart Kenya was founded on a simple mission: to connect those who can give with those in need, ensuring support reaches the most vulnerable. We believe access to essential resources and care should never be limited by circumstance.
                </p>
                <p className="text-md text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Our platform bridges generous donors with individuals, families, and communities, creating meaningful connections that transform lives.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    { number: "5K+", label: "Lives Impacted" },
                    { number: "2M+", label: "Donations Raised" },
                    { number: "50+", label: "Communities Served" },
                    { number: "98%", label: "Satisfaction Rate" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-md text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  We aim to create a compassionate network of donors and volunteers who actively support individuals and communities. Our focus is on sustainability, empowerment, and impactful initiatives that bring long-term benefits.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Community Support</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Providing essential resources, education, and direct aid to vulnerable communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Sustainability</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Promoting eco-friendly practices and sustainable living for both individuals and the environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <Handshake className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Collaboration</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        Partnering with organizations and communities to drive meaningful, positive change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-2 mb-4">
                <Gem className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Core Values</span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What Guides Our Work</h2>
              <p className="text-md md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                These principles shape every decision we make and every life we touch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Shield className="h-8 w-8 text-primary" />, title: "Transparency", text: "Ensuring donors know exactly how contributions are used, building trust and accountability." },
                { icon: <Heart className="h-8 w-8 text-primary" />, title: "Compassion", text: "Guiding all interactions with empathy and care for those in need." },
                { icon: <Handshake className="h-8 w-8 text-primary" />, title: "Community", text: "Fostering a collaborative environment where everyone works toward shared goals." },
                { icon: <Target className="h-8 w-8 text-primary" />, title: "Impact", text: "Maximizing the effectiveness of every contribution for the greatest benefit." },
              ].map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-xl">{value.icon}</div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{value.title}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team & Contact */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Team */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Our Team</h2>
              </div>
              <p className="text-md text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Our team comprises passionate professionals from diverse backgrounds, united by a mission to create positive change.
              </p>
              <p className="text-md text-neutral-600 dark:text-neutral-300 leading-relaxed">
                With expertise in healthcare, technology, and philanthropy, we build a platform that is both effective and compassionate.
              </p>

              <div className="mt-8 flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/20">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-10 h-10 bg-primary rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Dedicated Team</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Passionate professionals making a difference</div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Get In Touch</h2>
                </div>
                <p className="text-md md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                  Questions or want to learn more about our work? Reach out to explore how we can collaborate to make a real impact.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-md transition-shadow duration-300">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">Email Us</div>
                      <a href="mailto:support@hearttoheart.org" className="text-primary hover:underline">support@hearttoheart.org</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-md transition-shadow duration-300">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">Call Us</div>
                      <a href="tel:5551234567" className="text-primary hover:underline">(555) 123-4567</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-md transition-shadow duration-300">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">Location</div>
                      <div className="text-neutral-600 dark:text-neutral-400">Serving communities nationwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
