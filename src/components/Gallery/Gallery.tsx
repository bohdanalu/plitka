import React from "react";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";
import img4 from "../../assets/images/image4.jpg";
import { Link } from "react-router-dom";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedDecor from "../ui/AnimatedDecor";

const Gallery: React.FC = () => {
  return (
    <section className=" h-full py-6 sm:py-8 lg:py-12 my-16 container">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <AnimatedHeading>Камінь... природня краса</AnimatedHeading>
            <AnimatedDecor animationType="fadeIn" delay={300}>
              <div className="hidden md:block w-16 h-16 bg-accent/20 rounded-full"></div>
            </AnimatedDecor>
          </div>

          <Link
            to="portfolio"
            className="
              inline-block border border-accent bg--bg
             px-6 py-2 rounded  text-center text-sm font-semibold text-dark
              outline-none ring-accent transition-all duration-200
              hover:bg-accent hover:text-white hover:shadow-lg 
              focus-visible:ring focus-visible:ring-accent
              active:bg-muted
              md:px-8 md:py-3 md:text-base self-end
            "
          >
            Більше
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 relative">
          <AnimatedDecor
            animationType="slideIn"
            delay={200}
            className="absolute -top-4 -left-4 w-8 h-8 bg-accent/30 rounded-full hidden md:block"
          />
          <AnimatedDecor
            animationType="slideIn"
            delay={400}
            className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-lg transform rotate-45 hidden md:block"
          />

          <Link
            to="portfolio"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-lg md:h-80"
          >
            <img
              src={img1}
              loading="lazy"
              alt="Фото 1"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </Link>

          <Link
            to="portfolio"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={img2}
              loading="lazy"
              alt="Фото 2"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </Link>

          <Link
            to="portfolio"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={img3}
              loading="lazy"
              alt="Фото 3"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </Link>

          <Link
            to="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[var(--color-surface)] shadow-lg md:h-80"
          >
            <img
              src={img4}
              loading="lazy"
              alt="Фото 4"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
