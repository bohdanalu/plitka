import React, { useEffect, useState } from "react";


const tileColors = [
  "#e2c290", "#d6c4ab", "#ba775a", "#cfc7b2", "#e2c290", "#d6c4ab"
];


const rows = [
  [0, 1, 2, 3],
  [4, 5, 0, 1, 2],
  [3, 4, 5, 0],
];


const directions = ["left", "right", "top", "bottom"] as const;
type Direction = typeof directions[number];

// Випадковий напрямок для кожної плитки
const getRandomDirection = () => directions[Math.floor(Math.random() * directions.length)];

const getTransform = (direction: Direction, show: boolean) => {
  if (show) return "translate(0,0)";
  switch (direction) {
    case "left": return "translateX(-100vw)";
    case "right": return "translateX(100vw)";
    case "top": return "translateY(-100vh)";
    case "bottom": return "translateY(100vh)";
    default: return "translateY(-100vh)";
  }
};

const getColor = (idx: number) => tileColors[idx % tileColors.length];

const TileWall: React.FC = () => {
  const [visible, setVisible] = useState<number>(0);
  // Зберігаємо напрямки для кожної плитки, щоб не змінювались при ререндері
  const [tileDirections] = useState<Direction[]>(
    Array.from({ length: 12 }, getRandomDirection)
  );

  useEffect(() => {
    if (visible < 12) {
      const timeout = setTimeout(() => setVisible(visible + 1), 140);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  let tileIdx = 0;
  return (
    <div className="flex flex-col gap-1">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-1 justify-center">
          {row.map((_, colIdx) => {
            const show = tileIdx < visible;
            const direction = tileDirections[tileIdx];
            const style = {
              background: getColor(tileIdx),
              opacity: show ? 0.85 : 0.12,
              filter: show ? "blur(1.2px)" : "blur(3px)",
              transform: getTransform(direction, show),
              transition: "all 1.2s cubic-bezier(.77,0,.18,1)",
              transitionDelay: `${tileIdx * 0.08}s`,
              width: 60,
              height: 32,
              borderRadius: 6,
              boxShadow: "0 1px 4px #0001",
              marginLeft: rowIdx % 2 === 1 && colIdx === 0 ? 32 : 0,
            } as React.CSSProperties;
            tileIdx++;
            return <div key={colIdx} style={style} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default TileWall;