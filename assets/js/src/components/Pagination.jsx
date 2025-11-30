import React from 'react'
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Pagination() {
  return (
   <nav
            aria-label="Pagination"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-card-dark">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition ${
                  num === 1
                    ? "bg-primary text-white shadow-sm"
                    : "hover:bg-gray-100 dark:hover:bg-card-dark"
                }`}
              >
                {num}
              </button>
            ))}
            <span className="text-sm font-medium">...</span>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-card-dark">
              8
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-card-dark">
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
  )
}

export default Pagination