import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Comments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-[100%] min-h-[80vh] bg-[#5C5C5C] lg:py-10 pb-16 mt-3 flex flex-col gap-16 justify-center"
    >
      <motion.h1
        intial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
        className="font-inter font-extrabold text-5xl text-center text-white mt-16 lg:mt-0 inline-block"
      >
        Отзывы
      </motion.h1>
      <motion.div
        intial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.4, delay: 1, type: "spring" }}
        className="flex flex-col lg:flex-row flex-wrap gap-5 w-[100%] justify-evenly"
      >
        {[
          {
            name: "​Зульфия Б",
            text: "Добрый вечер! Спасибо за консультацию, объяснения и пути решения. Развития вам и благополучия 🙌🏼",
          },
          {
            name: "Aa Aa",
            text: "Рахмет большое адвокату Мерхату за проделанную работу! Выиграли дело, человек взял на себя ответственность и сохранил наши нервы, коп Рахмет 👍🏻👍🏻👍🏻👍🏻👍🏻",
          },
          {
            name: "Свирид Свиридов",
            text: "Спасибо за хорошую работу, все четко 👍",
          },
          {
            name: "Azamat Meiramov",
            text: "Ахметолдин Мерхатқа рахмет. Көптен шешілмеген ісіміз бар еді. Барлық моменттарымен көмектесіп, ісімізді аяғына дейін бітіріп берді👍 Жұмысыңыз алға баса берсін",
          },
          {
            name: "​Jorabek Qamar",
            text: "Спасибо за хорошую работу! Все грамотно объяснил, советую !",
          },
          {
            name: "Ерсайын Мейрамбек",
            text: "Очень хороший и вежливый адвокат помог по некоторым случаям ✊",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-3 mx-auto lg:mx-0 ">
            <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 lg:w-[40vw] w-[90vw]">
              <h1 className="font-inter font-medium text-lg">{item.text}</h1>
            </div>
            <h2 className="font-inter font-semibold text-white text-xl">
              {item.name}
            </h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
