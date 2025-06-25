import React from "react";
import IMAGE_URL from "../../assets/images/image3.jpg";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedDecor from "../ui/AnimatedDecor";

const About: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fdfaf6] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <AnimatedHeading>Про нашу компанію</AnimatedHeading>
              <AnimatedDecor animationType="slideIn" delay={200}>
                <div className="w-20 h-1 bg-accent rounded"></div>
              </AnimatedDecor>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Ми - команда професіоналів, яка спеціалізується на укладанні
                плитки та кераміки найвищої якості. Наша місія - створювати
                красиві та функціональні простори, які приносять радість та
                комфорт нашим клієнтам.
              </p>

              <p>
                З більш ніж 10-річним досвідом у галузі, ми виконали сотні
                проектів різної складності - від невеликих ванних кімнат до
                великих комерційних об'єктів. Кожен проект для нас - це
                можливість проявити творчість та досконалість у деталях.
              </p>

              <p>
                Ми використовуємо тільки найкращі матеріали та сучасні
                технології, щоб забезпечити довговічність та естетичну
                привабливість кожного виконаного об'єкта.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <AnimatedDecor animationType="bounce" delay={400}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-600">років досвіду</div>
                </div>
              </AnimatedDecor>
              <AnimatedDecor animationType="bounce" delay={600}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-gray-600">
                    задоволених клієнтів
                  </div>
                </div>
              </AnimatedDecor>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={IMAGE_URL}
                alt="Наша команда за роботою"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <AnimatedDecor
              animationType="rotate"
              delay={800}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
