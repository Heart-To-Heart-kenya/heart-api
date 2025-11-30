import React from "react";
import {
  HeartHandshake,
  Users,
  Globe2,
  HandHeart,
  ArrowRight,
  Target,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Lightbulb,
  Leaf,
  Handshake,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { HeroSection } from "../../../components/HeroSection";
import { Link } from "react-router-dom";

function OurStory() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 overflow-hidden pt-20">
<HeroSection
  title="Our Story"
  description="Heart to Heart Kenya — Where Compassion Meets Action and Every Item Finds a Purpose."
/>

{/* Origin Story / How It All Began */}
<section className="px-6 sm:px-10 md:px-20 lg:px-32 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-primary dark:text-white">
            Our Journey Begins
          </h2>
        </div>
        <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-2">
          Heart to Heart started with a simple idea — kindness should have no barriers. In every neighborhood, people had items they no longer needed, while others were searching for them. Yet, no trusted way existed to connect them.
        </p>
        <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-2">
          From a small community effort to share essentials, Heart to Heart has grown into a nationwide platform connecting givers and receivers across Kenya.
        </p>
        <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-2">
          Our vision was clear: a space where generosity meets purpose, where donated items find new homes, and every act of giving sparks hope and change.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { number: "2018", label: "Since — Laying the foundation of kindness" },
            { number: "50K+", label: "Lives Touched — Stories of impact and hope" },
            { number: "120+", label: "Communities Reached — Spreading support across Kenya" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-xl font-bold text-primary">{stat.number}</div>
              <div className="text-xs text-text-primary-light/70 dark:text-text-primary-dark/70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold text-primary dark:text-white">
            The Moment That Ignited Us
          </h3>
        </div>
        <p className="text-lg text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-6">
          "One day, I watched families giving away items to friends, neighbors, and strangers, often without knowing who truly needed them most. I realized we could build a platform to make giving easier, personal, and transparent. Heart to Heart was born to connect hearts through acts of kindness."
        </p>
      </div>
    </div>
  </div>
</section>

{/* Mission & Vision */}
<section className="bg-gradient-to-br from-content-light to-content-light/50 dark:from-content-dark/30 dark:to-content-dark/10 px-6 sm:px-10 md:px-20 lg:px-32 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-2 mb-4">
        <Target className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">Our Purpose</span>
      </div>
      <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
        Our Mission, Our Vision, Our Purpose
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Mission Card */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary dark:text-white">Our Mission</h3>
        </div>
        <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-6">
          To build a network of compassionate individuals and institutions that support one another. We focus on promoting growth, sustainability, and empowerment for every person and community involved.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-lg mt-1">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-1">Community Support</h4>
              <p className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80">
                Providing resources, education, and direct aid to vulnerable communities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-lg mt-1">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-1">Sustainability</h4>
              <p className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80">
                Eco-friendly initiatives promoting responsible use of resources.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-lg mt-1">
              <Handshake className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-1">Collaboration</h4>
              <p className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80">
                Partnering with organizations and communities to drive meaningful change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Card */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Globe2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary dark:text-white">Our Vision</h3>
        </div>
        <p className="text-md text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed mb-6">
          A nationwide platform that facilitates seamless item donations, reduces waste, and empowers vulnerable populations.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-primary dark:text-white mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Short-term Goals
            </h4>
            <ul className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80 space-y-2 ml-7">
              <li>Onboard <strong>10,000 passionate users</strong> in Year 1</li>
              <li>Process <strong>50,000+ meaningful donations</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary dark:text-white mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Long-term Goals
            </h4>
            <ul className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80 space-y-2 ml-7">
              <li>Achieve <strong>1M+ users</strong></li>
              <li>Expand to <strong>East Africa</strong></li>
              <li>Integrate <strong>sustainability education</strong> into the platform</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <h4 className="font-semibold text-primary dark:text-white mb-2">Ultimate Vision</h4>
            <p className="text-sm text-text-primary-light/80 dark:text-text-primary-dark/80">
              A zero-waste sharing economy where every unused item finds a home, fostering self-reliance and environmental well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="px-6 sm:px-10 md:px-20 lg:px-32 py-20">
  <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
    <div className="relative z-10 text-center">
      <h2 className="text-2xl lg:text-4xl font-extrabold mb-6">Become Part of Heart to Heart</h2>
      <p className="text-sm lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
        Together, we can make giving the norm, not the exception. Join a growing community that spreads kindness, reduces waste, and transforms lives every day.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/auth/signup">
          <button className="bg-white text-primary font-bold py-4 px-12 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 group">
            Get Involved
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        <Link to="/about">
          <button className="border-2 border-white text-white font-bold py-4 px-12 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
            Learn More
            <ChevronRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default OurStory;
