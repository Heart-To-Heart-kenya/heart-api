import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ImageItemNotFound from '../../../assets/Images/ItemNotFound.png'
import { Link } from "react-router-dom";
import ItemNotFound from "../../../components/ItemNotFound";
import ImageGallery from "../../../components/ImageGallery";

const ItemDetails = () => {
  

  const itemDetails = {
    id: "item-001",
    name: "Blue Winter Coat",
     item: "pencils, notebooks, backpacks",
    category: "Clothing",
    description:
      "Stay warm and stylish with this beautiful blue winter coat. Barely used and in excellent condition — perfect for chilly days. Donated with love to bring comfort to someone new.",
    condition: "Like New",
    size: "Medium",
    location: "Springfield, USA",
    pickup: "Available",
    likes: 128,
    donor: {
      id: 1,
      name: "Jane Doe",
      profileUrl: "#",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoltP1qWFAE2cf3LvSHgPgGq8l0Aj5flW_1psc0vckr8Wsi4A--MnkhSoN2eddfeGhLhEvcdQvY0n8Inkqi-MWcd27f-IDBNFDvVbQVIXrgZHeNDtPkE9xVqr8nglWytW5byK_sybJRJH7V3X_lm6c-TWw-t9D8lB0XjVOLdcsutv2FtQtF-ecpuFCf3bWegSGkyXWNXGjSDJyrjBPcEbuFc2TKWKAFOuks9zPPJefJmLqtK4D4alDMzsd22V_OqMutG6NqgYdFdrJ",
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHzN8rfIAwn4dtTAvq5gvTI-baDGVwLH1oKAUNvQzMxZMM8VxFiEhOKkGyvwvoYrhUoo0P1M6Dye2YHWyddRFO3Nvfb0r5j6E_WWMGExlGx27_SKqHioRjOHKFldUobr1XE1toAbP2PRrTZh5Ff6cSE6Akys9SA19NauWcNBXk1Ze6uPHodXxHdXsoH_7O5BGUD68dXFJU1_zof2gAAGURGTRkbvuXcdB7wN7bZpCGlZvQoQHaA2xT4YV2ssFkjipDzx43mRJURwl1",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCqX39dq9m-hrJ2dE0WX9MuGtfPr0UVra0mfZ39WGh0Zw3nGonc5JjhV9Rlpxv4XdZh7pYJjbNmuGpIN8O_chVn8HixuKCWfpZz9hhjCOiQWIMrYMKMnhLjYWcS-iA9j5TnNdH_08DMAKLrhPX5hD2hVTff76z5kneFO_NJ7P7P7nPFedYOA3-fwtq5edVYBO7T2ehVeE1EmyIb8XIOtqrMTB-RW6zxB05WRibncqEYGgovVkYQrlAReiO7qX8TKThk07Isp_-71mB",
    ],
  };


    
  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8 py-28 text-gray-900 dark:text-gray-100">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:text-primary transition-colors">
          Home
        </a>
      {itemDetails ? (
  <>
    <ChevronRight className="w-4 h-4 opacity-60" />
    <p className="hover:text-primary transition-colors">
      {itemDetails.category}
    </p>
    <ChevronRight className="w-4 h-4 opacity-60" />
    <span className="font-semibold text-green-900 dark:text-white">
      {itemDetails.name}
    </span>
  </>
) : ( ' ')}
      </nav>

     {/* Main Section */}
              {Object.keys(itemDetails).length === 0 ? (
                      <ItemNotFound
                          icon={<img  className="w-24 h-24 mx-auto mb-6 text-gray-300 dark:text-gray-600" src={ImageItemNotFound} />}
                          title="Oops! This item is no longer available."
                          description="SIt looks like this wonderful item has found a new home! we're always getting new items."
                          buttonText="Explore More Items"
                        />

                          ) : (
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                      {/* Left: Image Gallery */}
<div>
<ImageGallery
  images={itemDetails.images}
  alt={itemDetails.name}
  aspectRatio="aspect-[4/3]" // match your layout
/>

</div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {itemDetails.category}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            {itemDetails.name}
          </h1>
         <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 mt-1 italic">
                        {itemDetails.item}
                      </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-md">
            {itemDetails.description}
          </p>

          {/* Item Info */}
          <div className="mt-8 grid grid-cols-2 gap-6  dark:bg-gray-800/50 rounded-xl p-6 text-sm ">
            <div>
              <h4 className="text-gray-500">Condition</h4>
              <p className="font-medium mt-1">{itemDetails.condition}</p>
            </div>
            <div>
              <h4 className="text-gray-500">Size</h4>
              <p className="font-medium mt-1">{itemDetails.size}</p>
            </div>
            <div>
              <h4 className="text-gray-500">Location</h4>
              <p className="font-medium mt-1">{itemDetails.location}</p>
            </div>
            <div>
              <h4 className="text-gray-500">Pickup</h4>
              <p className="font-medium mt-1">{itemDetails.pickup}</p>
            </div>
          </div>

          {/* Donor Info */}
          <div className="mt-8  dark:bg-gray-800/60 rounded-xl p-5 flex items-center gap-4 ">
            <div
              className="w-14 h-14 rounded-full bg-cover bg-center ring-2 ring-primary/30"
              style={{ backgroundImage: `url('${itemDetails.donor.avatar}')` }}
            ></div>
            <div>
              <p className="font-bold text-base">{itemDetails.donor.name}</p>
              <Link
                to={`/profile/${itemDetails.donor.id}`}
                className="text-sm text-primary hover:underline"
              >
                View Profile
              </Link>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <button className="flex-1 h-12 rounded-xl bg-primary text-white font-semibold shadow hover:shadow-lg hover:bg-primary/90 transition-all">
              Request Item
            </button>
          </div>
        </div>
      </div>
      )}
    </main>
  );
};

export default ItemDetails;
