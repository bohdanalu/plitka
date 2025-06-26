import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import IMAGE_URL from "../../assets/images/image2.jpg";
import IMAGE_VERTICAL from "../../assets/images/image-vertical.jpg";

const COLS = 10;
const TILE_WIDTH = 175;
const TILE_HEIGHT = 85;

const TileHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tileWidth, setTileWidth] = useState(TILE_WIDTH);
  const [tileHeight, setTileHeight] = useState(TILE_HEIGHT);
  const [adaptiveRows, setAdaptiveRows] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateTileLayout = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      const mobile = containerWidth < 768;
      setIsMobile(mobile);

      let effectiveHeight = containerHeight;
      let cols = COLS;
      let baseTileWidth = TILE_WIDTH;
      let baseTileHeight = TILE_HEIGHT;

      if (mobile) {
        cols = 8;
        baseTileWidth = 120;
        baseTileHeight = 60;
        effectiveHeight = containerHeight * 0.8;
      } else if (containerWidth >= 768 && containerWidth < 1200) {
        effectiveHeight = containerHeight * 0.7;
      }

      const maxTileW = containerWidth / (cols + 0.5);
      const maxTileH = effectiveHeight / (mobile ? 10 : 8);

      const calcTileW = Math.max(
        Math.min(maxTileW, baseTileWidth),
        Math.min(maxTileH * 2, baseTileWidth)
      );
      const calcTileH = calcTileW * (baseTileHeight / baseTileWidth);

      const maxRows = Math.floor(
        effectiveHeight / (calcTileH + (mobile ? 4 : 6))
      );
      const minRows = mobile ? 10 : 6;
      const maxAllowedRows = mobile ? 14 : 10;
      const finalRows = Math.max(minRows, Math.min(maxRows, maxAllowedRows));

      setTileWidth(calcTileW);
      setTileHeight(calcTileH);
      setAdaptiveRows(finalRows);
    };

    updateTileLayout();
    window.addEventListener("resize", updateTileLayout);
    return () => window.removeEventListener("resize", updateTileLayout);
  }, []);

  useEffect(() => {
    const tiles = gsap.utils.toArray<HTMLElement>(".tile");
    const heroTitle = gsap.utils.toArray<HTMLElement>(".hero-title")[0];

    gsap.set(heroTitle, { opacity: 0, y: 20 });

    tiles.forEach((tile) => {
      const fromX = gsap.utils.random(-300, 300);
      const fromY = gsap.utils.random(-300, 300);
      gsap.set(tile, { opacity: 0, x: fromX, y: fromY });
    });

    gsap.to(tiles, {
      opacity: 1,
      x: 0,
      y: 0,
      stagger: { each: 0.03, from: "random" },
      duration: 0.38,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(heroTitle, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      },
    });
  }, [tileWidth, tileHeight, adaptiveRows]);

  const rows = [];
  const cols = isMobile ? 8 : COLS;

  for (let row = 0; row < adaptiveRows; row++) {
    const tiles = [];

    if (row % 2 !== 0) {
      tiles.push(
        <div
          key={`offset-${row}`}
          style={{
            width: tileWidth / 2,
            height: tileHeight,
            margin: isMobile ? "2px" : "3px",
          }}
        />
      );
    }

    for (let col = 0; col < cols; col++) {
      const x = (col / (cols - 1)) * 100;
      const y = (row / (adaptiveRows - 1)) * 100;

      tiles.push(
        <div
          key={`${row}-${col}`}
          className="tile rounded-md bg-cover bg-center"
          style={{
            width: tileWidth,
            height: tileHeight,
            backgroundImage: `url('${isMobile ? IMAGE_VERTICAL : IMAGE_URL}')`,
            backgroundSize: `${cols * 100}% ${adaptiveRows * 100}%`,
            backgroundPosition: `${x}% ${y}%`,
            margin: isMobile ? "2px" : "3px",
          }}
        />
      );
    }

    rows.push(
      <div key={`row-${row}`} className="flex justify-center ">
        {tiles}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen md:min-h-0 bg-[#fdfaf6] overflow-hidden flex flex-col items-center justify-center"
    >
      <div>{rows}</div>

      <div className="hero-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-dark bg-white/5  px-2 py-2 rounded-lg backdrop-blur-xs">
          Ми працюємо щоб ви були впевнені в кожному шві
        </h1>
        <p className="text-lg md:text-2xl font-medium mt-4 text-dark bg-white/20 px-4 py-2 rounded-md backdrop-blur-sm">
          Досконалість надихає. Вдячність у кожній деталі.
        </p>
      </div>
    </div>
  );
};

export default TileHero;
