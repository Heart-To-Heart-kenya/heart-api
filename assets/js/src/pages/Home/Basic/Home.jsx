import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  Layers,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import Dropdown from "../../../components/Dropdown";
import ItemCard from "../../../components/Cards/ItemCard";
import Pagination from "../../../components/Pagination";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const [filters, setFilters] = useState({
    category: "",
    itemType: "",
    sort: "",
  });

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        Object.values(dropdownRefs.current).every(
          (ref) => !ref?.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleSelect = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

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
      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-32 lg:py-40 min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-extrabold md:text-5xl leading-tight">
            Discover Items in Need
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Support causes that matter — every contribution helps.
          </p>

          {/* Search + Filters */}
          <div className="mt-8 relative z-10 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/30 shadow-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-center">
              {/* Search */}
              <div className="relative w-full">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search items — e.g., 'blankets', 'foods'..."
                  className="w-full rounded-xl border border-gray-200 bg-white/90 dark:bg-gray-900/90 py-3 pl-12 pr-4 text-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-500 focus:border-primary focus:ring-3 border-none focus:outline-none focus:ring-primary/30 transition"
                  aria-label="Search items"
                />
              </div>

              {/* Dropdowns + Filters */}
              <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center gap-3 w-full lg:w-auto">
                <Dropdown
                  name="category"
                  icon={Layers}
                  label={filters.category || "Category"}
                  options={["Education", "Health", "Food", "Shelter"]}
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                  dropdownRefs={dropdownRefs}
                  onSelect={handleSelect}
                />
                <Dropdown
                  name="itemType"
                  icon={Filter}
                  label={filters.itemType || "Item Type"}
                  options={["Single Item", "Bulk Donation"]}
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                  dropdownRefs={dropdownRefs}
                  onSelect={handleSelect}
                />
                <Dropdown
                  name="sort"
                  icon={ArrowUpDown}
                  label={filters.sort || "Sort"}
                  options={["Newest", "Alphabetical", "Hearts ↑", "Hearts ↓"]}
                  openDropdown={openDropdown}
                  toggleDropdown={toggleDropdown}
                  dropdownRefs={dropdownRefs}
                  onSelect={handleSelect}
                />

                <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-5 py-2 text-sm font-semibold text-white shadow-md hover:from-primary/90 hover:to-primary transition-all">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <main className="container flex-grow mx-auto px-4 lg:px-8 py-16">
        <ItemCard items={items} />

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center">
         <Pagination/>
        </div>
      </main>
    </div>
  );
};

export default Home;
