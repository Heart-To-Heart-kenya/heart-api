import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, XCircle } from 'lucide-react';

function ImageGallery({ images = [], alt, aspectRatio = "aspect-square" }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className={`relative ${aspectRatio} bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-600 group`}>
        <img
          src={images[selectedImage]}
          alt={alt}
          className="w-full h-full object-cover cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        />
        {/* Zoom button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        {/* Prev/Next buttons */}
        {images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`aspect-square rounded-xl overflow-hidden border transition-all ${
                selectedImage === idx
                  ? "ring-2 ring-primary"
                  : "border-gray-200 dark:border-gray-600 hover:ring-2 hover:ring-primary/50"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Modal (unchanged) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <XCircle className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage]}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImage === idx ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;


