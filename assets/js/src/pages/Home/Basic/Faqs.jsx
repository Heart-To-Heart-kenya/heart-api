import React, { useState } from "react";
import { HeartHandshake, HandCoins, Users, ChevronDown, MessageCircle, Search } from "lucide-react";
import { HeroSection } from "../../../components/HeroSection";

function Faq() {
  const [selectedCategory, setSelectedCategory] = useState("For Donors");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

const faqs = [
  // Donors
  {
    category: "For Donors",
    question: "How do I create a donor account?",
    answer: "Click 'Sign Up', select the Donor role, provide your email and password (or sign up via Google), and verify your email to start donating."
  },
  {
    category: "For Donors",
    question: "Can I see all requests from receivers?",
    answer: "Yes. Once logged in as a donor, you can view all active requests from verified receivers and choose which ones to support."
  },
  {
    category: "For Donors",
    question: "How do I track my donation history?",
    answer: "Your donor dashboard shows a history of all past donations, including the status of each request you supported."
  },
  {
    category: "For Donors",
    question: "Can I later request items if I am a donor?",
    answer: "Yes, you can request to become a receiver through your profile. This request will be reviewed by admin before approval."
  },

  // Receivers
  {
    category: "For Receivers",
    question: "How do I register as a receiver?",
    answer: "Sign up and select 'Receiver'. Then choose your receiver type (e.g., Shelter, Home, School, NGO). Your account will be set to Pending Verification for admin review."
  },
  {
    category: "For Receivers",
    question: "How do I track received items?",
    answer: "Your receiver dashboard displays all approved requests, current pending donations, and history of items received."
  },
  {
    category: "For Receivers",
    question: "Can a receiver also donate?",
    answer: "Yes, after your account is approved, you can request to add a donor role through your profile to make donations while still receiving support."
  },

  // Partners
  {
    category: "For Partners",
    question: "How can I partner with Heart to Heart?",
    answer: "Partners can register through the 'Partner With Us' page and contact our team to coordinate contributions, programs, or shelter support."
  },
  {
    category: "For Partners",
    question: "What support can partners provide?",
    answer: "Partners can contribute resources, coordinate with shelters, offer volunteering, or fund specific initiatives to help communities efficiently."
  },
];


  const categories = [
    { name: "For Donors", icon: <HandCoins className="w-4 h-4" />, count: 4 },
    { name: "For Receivers", icon: <HeartHandshake className="w-4 h-4" />, count: 2 },
    { name: "For Partners", icon: <Users className="w-4 h-4" />, count: 2 },
  ];

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <main className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 overflow-hidden pt-20">
      <HeroSection
        title="FAQ Center"
        description="Find answers to the most common questions about donations, partnerships, and community support through Heart to Heart Kenya."
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                    selectedCategory === cat.name
                      ? "bg-primary text-white shadow-primary/25"
                      : "bg-white dark:bg-gray-800 text-text-primary-light dark:text-text-primary-dark hover:bg-primary/5 dark:hover:bg-primary/10 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${selectedCategory === cat.name ? "bg-white/20" : "bg-primary/10"}`}>{cat.icon}</div>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => (
                  <div
                    key={i}
                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(i)}
                      className="flex items-center justify-between w-full px-8 py-6 text-left hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-xl mt-1 group-hover:scale-110 transition-transform duration-300">
                          <MessageCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">{faq.question}</h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openItems[i] ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`px-8 transition-all duration-300 overflow-hidden ${openItems[i] ? "max-h-96 pb-6" : "max-h-0"}`}>
                      <div className="pl-12 border-l-2 border-primary/20">
                        <p className="text-text-primary-light/80 dark:text-text-primary-dark/80 leading-relaxed text-md">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">No questions found</h3>
                  <p className="text-text-primary-light/70 dark:text-text-primary-dark/70">
                    Try adjusting your search terms or browse different categories
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Faq;
