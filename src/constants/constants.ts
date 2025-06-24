import stone1 from "../assets/images/image1.jpg";
import stone2 from "../assets/images/image2.jpg";
import stone3 from "../assets/images/image4.jpg";

export const NAV_LINKS = [
  { to: "/", label: "Головна" },
  { to: "/portfolio", label: "Галерея" },
  { to: "/calculator", label: "Калькулятор" },
];

export const STONES = [
  { name: "Піщаник", price: 800, img: stone1 },
  { name: "Граніт", price: 1200, img: stone2 },
  { name: "Вапняк", price: 950, img: stone3 },
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
