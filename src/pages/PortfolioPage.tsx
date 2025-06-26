import React, { useState } from "react";
import AnimatedHeading from "../components/ui/AnimatedHeading";
import ImageGallery from "../components/Gallery/ImageGallery";
import { GALLERY_IMAGES } from "../constants/constants";
import Button from "../components/ui/Button";
import OrderForm from "../components/ui/OrderForm";

const Portfolio: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full overflow-x-clip">
      <div className="container mt-36 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <AnimatedHeading className="text-left">
              Галерея робіт
            </AnimatedHeading>
            <p className="mt-4 text-lg text-dark/80 max-w-2xl">
              Ми спеціалізуємося на укладанні натурального каменю для фасадів,
              доріжок, декору та ландшафту. Нижче ви можете переглянути приклади
              наших робіт — кожен проект виконано з увагою до деталей та з
              використанням якісних матеріалів.
            </p>
          </div>
          <div className="flex md:items-start items-center md:justify-end justify-center w-full md:w-auto">
            <Button onClick={() => setShowForm(true)}>Залишити заявку</Button>
          </div>
        </div>
      </div>
      <ImageGallery images={GALLERY_IMAGES} />
      <OrderForm open={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default Portfolio;
