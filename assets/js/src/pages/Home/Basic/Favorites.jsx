import React, { useState, useEffect, useRef } from "react";
import FavoritesCard from "../../../components/Cards/FavoritesCard";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import ItemNotFound from "../../../components/ItemNotFound";

const Favorites = () => {

  const items = [
    {
      title: "School Supply Kits",
      contents: "Pencils, notebooks, backpacks",
      tag: "Bulk Donation",
      desc: "Provides essential learning tools for one student for a full school year.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDD815Ybm0kR4PgI_PT4WFNtGdrVjoA-auvo2nFXBquWi-gJuoMXk2oB84RKU83aYYG6le7-UeL_0dA4TwLx3tVSVX74Lf-wHHUQ4_qJtOuHfWyzvI263MEy7sec3CW0LSVjXy_khlZZocs2Lhc8TBKsCBF_sRNLYE4DJQK3U4FQQpUw829yuZ7UxetTauYlLBOQygbD-O14vrpQaUZe4wu1APtd9vSgXOuz62YWko6S_vSDYgA8RsjFR4uNJv58AALL9CjOb69AUpK",
    },
    {
      title: "Winter Warmth Blankets",
      contents: "Blanket",
      tag: "Single Item",
      desc: "A cozy, warm blanket to help someone through the cold winter months.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAb5NyRCjQlYj0zx49HPDdbVZZ4ggDlhKb40fXioGIg2qB2d1C5NvjiqJi0epkLwxNEj24tXPpg1bTWDSAwrZi8QOqcGzHxNwFZePLFSDOTSXd0UzRD7qGcnWTMjOEKKnm-7weB2OijW01B-fKz0FFBCudIt9nqA9deCue1ojNa17y__pjdtWw3zYicHrBiYxfr9zvDT7bOc5BDfvtS1SmQrKbauxlPCEXqkl9gcLT1_JB_UJMRquWaw30QOm4xD7hMMmN5c7sflG0L",
    },
    {
      title: "Emergency Food Basket",
      contents: "Canned food, rice, pasta",
      tag: "Bulk Donation",
      desc: "A basket of non-perishable food to support a family for a week.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2cPxMnnUTsCIXPS1eTThZ3tfc6sdD6YZc3cC_H7mZe_2AJynSrxWtdNvuQyRh_WzmV6Q1aGwyPDChysHsqSAMMciXia_GuYF1BlRDQ64Z2qhtrlhNBgKlteU2KOYdfw4DoDfEYIS1gliOUFkOlASUJvQRh414LDlTbeciYO_W6pnobFnKS8sug5TDJNIs-HkJoCUCJZyaYHPKvQdu7nap0pC7OofkLgXOpfJfQH7USWbHbxQUnf2NkYqK377P-pLhJ8UR6VldKnh",
    },
    {
      title: "Winter Clothes Set",
      contents: "Socks, t-shirts, pants, jackets",
      tag: "Bulk Donation",
      desc: "A bundle of clothing items to help families stay warm during winter.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2cPxMnnUTsCIXPS1eTThZ3tfc6sdD6YZc3cC_H7mZe_2AJynSrxWtdNvuQyRh_WzmV6Q1aGwyPDChysHsqSAMMciXia_GuYF1BlRDQ64Z2qhtrlhNBgKlteU2KOYdfw4DoDfEYIS1gliOUFkOlASUJvQRh414LDlTbeciYO_W6pnobFnKS8sug5TDJNIs-HkJoCUCJZyaYHPKvQdu7nap0pC7OofkLgXOpfJfQH7USWbHbxQUnf2NkYqK377P-pLhJ8UR6VldKnh",
    },
     {
      title: "Winter Clothes Set",
      contents: "Socks, t-shirts, pants, jackets",
      tag: "Bulk Donation",
      desc: "A bundle of clothing items to help families stay warm during winter.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2cPxMnnUTsCIXPS1eTThZ3tfc6sdD6YZc3cC_H7mZe_2AJynSrxWtdNvuQyRh_WzmV6Q1aGwyPDChysHsqSAMMciXia_GuYF1BlRDQ64Z2qhtrlhNBgKlteU2KOYdfw4DoDfEYIS1gliOUFkOlASUJvQRh414LDlTbeciYO_W6pnobFnKS8sug5TDJNIs-HkJoCUCJZyaYHPKvQdu7nap0pC7OofkLgXOpfJfQH7USWbHbxQUnf2NkYqK377P-pLhJ8UR6VldKnh",
    },
     {
      title: "Winter Clothes Set",
      contents: "Socks, t-shirts, pants, jackets",
      tag: "Bulk Donation",
      desc: "A bundle of clothing items to help families stay warm during winter.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2cPxMnnUTsCIXPS1eTThZ3tfc6sdD6YZc3cC_H7mZe_2AJynSrxWtdNvuQyRh_WzmV6Q1aGwyPDChysHsqSAMMciXia_GuYF1BlRDQ64Z2qhtrlhNBgKlteU2KOYdfw4DoDfEYIS1gliOUFkOlASUJvQRh414LDlTbeciYO_W6pnobFnKS8sug5TDJNIs-HkJoCUCJZyaYHPKvQdu7nap0pC7OofkLgXOpfJfQH7USWbHbxQUnf2NkYqK377P-pLhJ8UR6VldKnh",
    },
  ];

  return (
   <div className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 pt-20">
      {/* Header Section */}
      <header className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 
            tabIndex={-1}
            className="text-primary dark:text-white text-4xl font-black leading-tight focus:outline-none"
          >
            My Favorites
          </h1>
          <p className="text-text-light dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
            View and manage your saved donation items.
          </p>
          
          {items.length > 0 && (
            <button
              className="mt-2 px-4 py-2 text-sm text-primary hover:text-white  transition-colors duration-200 border border-border-dark rounded-lg hover:bg-primary dark:hover:bg-red-900/20"
            >
              Clear All Favorites
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 pb-16">
        {items.length === 0 ? (
          <ItemNotFound
            icon={<Heart className="w-24 h-24" />}
            title="Your Favorites List is Waiting"
            description="Start adding items to your favorites to easily track and access them later. Your saved donations will appear here for quick reference."
            buttonText="Browse Donations"
          />
        ) : (
          <div>
            <FavoritesCard items={items} />
          </div>
        )}
      </main>
    </div>
  );
};




export default Favorites