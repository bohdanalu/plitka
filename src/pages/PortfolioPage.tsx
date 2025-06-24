import React, { useState } from "react";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
import img5 from "../assets/images/image5.jpg";
import img6 from "../assets/images/image6.jpg";
import img7 from "../assets/images/image7.jpg";
import AnimatedHeading from "../components/ui/AnimatedHeading";

const images = [
  { src: img1, alt: "Фото 1" },
  { src: img2, alt: "Фото 2" },
  { src: img3, alt: "Фото 3" },
  { src: img4, alt: "Фото 4" },
  { src: img5, alt: "Фото 5" },
  { src: img6, alt: "Фото 6" },
  { src: img7, alt: "Фото 7" },
];

const Portfolio: React.FC = () => {
  const [modalImg, setModalImg] = useState<null | (typeof images)[0]>(null);

  return (
    <section className="w-full my-16">
      <AnimatedHeading className="text-left">Галерея робіт</AnimatedHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 w-full mt-12">
        {images.map((img, idx) => (
          <button
            key={idx}
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-lg md:h-80 focus:outline-none"
            onClick={() => setModalImg(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-3xl w-full flex flex-col items-center">
            <button
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[var(--color-dark)] rounded-full p-2 shadow transition"
              onClick={() => setModalImg(null)}
              aria-label="Закрити"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <img
              src={modalImg.src}
              alt={modalImg.alt}
              className="rounded-lg shadow-lg max-h-[80vh] w-auto object-contain transition"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
