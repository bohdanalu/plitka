import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import AnimatedDecor from "../ui/AnimatedDecor";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [modalImg, setModalImg] = useState<null | ImageItem>(null);

  return (
    <section className="w-full mb-16 container relative">
      <AnimatedDecor
        animationType="fadeIn"
        delay={200}
        className="absolute -top-8 -left-8 w-16 h-16 bg-accent/75 rounded-full hidden md:block"
      />
      <AnimatedDecor
        animationType="rotate"
        delay={400}
        className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/85 rounded-lg transform rotate-12 hidden md:block"
      />
      <AnimatedDecor
        animationType="fadeIn"
        delay={600}
        className="absolute top-1/2 -left-4 w-8 h-8 bg-accent/50 rounded-full hidden lg:block"
      />
      <AnimatedDecor
        animationType="rotate"
        delay={800}
        className="absolute top-1/4 -right-4 w-12 h-12 bg-accent/60 rounded-lg transform -rotate-12 hidden lg:block"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 w-full mt-12">
        {images.map((img, idx) => (
          <button
            key={idx}
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-lg md:h-80 focus:outline-none transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            onClick={() => setModalImg(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300"
          onClick={() => setModalImg(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 bg-white/90 hover:bg-white text-[var(--color-dark)] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
              onClick={() => setModalImg(null)}
              aria-label="Закрити"
            >
              <IoClose size={24} />
            </button>
            <img
              src={modalImg.src}
              alt={modalImg.alt}
              className="rounded-lg shadow-2xl max-h-[85vh] w-auto object-contain transition-all duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
