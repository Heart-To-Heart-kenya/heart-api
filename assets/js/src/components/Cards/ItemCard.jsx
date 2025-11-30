import React from 'react'
import {
  Heart,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function ItemCard({items}) {
  return (
     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card-light dark:bg-card-dark shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <button
                  aria-label={`Add ${item.title} to favorites`}
                  className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 backdrop-blur-sm transition hover:scale-110 hover:bg-primary/90 hover:text-white"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="self-start rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-secondary dark:bg-blue-800/30 dark:text-blue-200">
                  {item.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-primary leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1 italic">
                  {item.contents}
                </p>
                <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <Link to={`/item-details/${i}`}>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 group-hover:text-black">
                      <span className="text-sm font-medium">View</span>
                      <MoveRight
                        className="h-4 w-4 text-primary fill-primary/80"
                        strokeWidth={1.5}
                      />
                    </div>
                  </Link>

                  <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-primary/90">
                    Request Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ItemCard