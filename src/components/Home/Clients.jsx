/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="bg-[url('/background5.webp')] bg-cover w-[100%] min-h-[100vh] bg-[#5C5C5C] mt-3 flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.5, type: "spring", delay: 0.6 }}
        className="font-inter font-extrabold text-white lg:text-6xl text-4xl mt-20 text-center inline-block"
      >
        Представляем Интересы Клиентов
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.5, type: "spring", delay: 1.2 }}
        className="bg-[#D9D9D9] bg-opacity-20 px-8 py-10 mb-20 rounded-lg flex flex-row flex-wrap justify-evenly gap-12 mt-16 lg:w-[80%] w-[90%]"
      >
        {[
          {
            header: "Прокуратура Республики Казахстан",
            image: "/prokuratura.webp",
          },
          {
            header: "Верховный суд Республики Казахстан",
            image: "/sud.webp",
          },
          {
            header: "Министерство Внутренних Дел РК",
            image: "/ministerstvo.webp",
          },
          {
            header: "Комитет Национальной Безопасности РК",
            image: "/knb.webp",
          },
          {
            header: "Департамент Экономических Расследований РК",
            image: "/economica.webp",
          },
          {
            header: "Агентство РК по противодействию коррупции",
            image: "/anticor.webp",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 lg:max-w-[25%] max-w-[80%]"
          >
            <img src={item.image} alt="image" className="w-32 h-32 mx-auto" />
            <p className="font-inter font-semibold text-[#FDC656] text-xl text-center">
              {item.header}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
