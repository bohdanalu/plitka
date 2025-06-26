import stone1 from "../assets/images/image1.jpg";
import stone2 from "../assets/images/image2.jpg";
import stone3 from "../assets/images/image4.jpg";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
import img5 from "../assets/images/image5.jpg";
import img6 from "../assets/images/image6.jpg";
import img7 from "../assets/images/image7.jpg";

export const NAV_LINKS = [
  { to: "/", label: "Головна" },
  { to: "/portfolio", label: "Галерея" },
];

export const STONES = [
  { name: "Піщаник", price: 800, img: stone1 },
  { name: "Граніт", price: 1200, img: stone2 },
  { name: "Вапняк", price: 950, img: stone3 },
];

export const GALLERY_IMAGES = [
  { src: img1, alt: "Фото 1" },
  { src: img2, alt: "Фото 2" },
  { src: img3, alt: "Фото 3" },
  { src: img4, alt: "Фото 4" },
  { src: img5, alt: "Фото 5" },
  { src: img6, alt: "Фото 6" },
  { src: img7, alt: "Фото 7" },
];

export const FAQ_DATA = [
  {
    question: "Який камінь найкраще підходить для фасаду?",
    answer: "Для фасаду найкраще підходять піщаник, вапняк, граніт та сланець. Вибір залежить від бажаного вигляду, бюджету та кліматичних умов.",
  },
  {
    question: "Чи можна укладати камінь самостійно?",
    answer: "Можна, але для якісного результату рекомендуємо звернутися до професіоналів. Важливо дотримуватись технології укладки та використовувати відповідні матеріали.",
  },
  {
    question: "Як доглядати за натуральним каменем?",
    answer: "Рекомендується періодично очищати поверхню від бруду, використовувати спеціальні засоби для каменю та уникати агресивної хімії.",
  },
];
