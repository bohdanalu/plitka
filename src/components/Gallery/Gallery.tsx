import React from "react";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";
import img4 from "../../assets/images/image4.jpg";
import { Link } from "react-router-dom";
import AnimatedHeading from "../ui/AnimatedHeading";

const Gallery: React.FC = () => {
  return (
    <section className="bg-[var(--color-bg)] h-full py-6 sm:py-8 lg:py-12 my-16">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <AnimatedHeading>Камінь... природня краса</AnimatedHeading>
          </div>

          <Link
            to="portfolio"
            className="
              inline-block border border-[var(--color-accent)] bg-[var(--color-bg)]
             px-6 py-2 rounded  text-center text-sm font-semibold text-[var(--color-dark)]
              outline-none ring-[var(--color-accent)] transition-all duration-200
              hover:bg-[var(--color-accent)] hover:text-white hover:shadow-lg 
              focus-visible:ring focus-visible:ring-[var(--color-accent)]
              active:bg-[var(--color-muted)]
              md:px-8 md:py-3 md:text-base self-end
            "
          >
            More
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
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
