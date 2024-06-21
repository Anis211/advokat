/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="bg-[url('/background2.webp')] bg-cover w-[100%] min-h-[100vh] z-10 flex lg:flex-row flex-col mt-3 pb-16 lg:pb-0">
      <div className="lg:w-[50%] flex flex-col">
        <img
          ref={ref}
          src="/celebration.webp"
          alt="lawyer"
          className="w-[85%] h-[85%] object-cover ring-2 ring-[#E0E0E0] rounded-full self-center mt-16 mx-auto"
        />
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={inView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.4, type: "spring", delay: 0.8 }}
          className="bg-white px-4 py-3 rounded-3xl rounded-bl-none flex flex-row gap-3 lg:max-w-[30%] max-w-[45%] self-end relative bottom-[50vh] lg:bottom-[85%]"
        >
          <h2 className="font-inter font-semibold text-md text-[#30297A]">
            Лучшие адвокаты Казахстана
          </h2>
          <img src="/law.webp" alt="law" className="w-9 h-9 self-center" />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : ""}
        transition={{
          duration: 0.4,
          type: "spring",
          delayChildren: 1,
          staggerChildren: 0.2,
        }}
        className="lg:w-[45%] w-[90%] flex flex-col gap-6 text-center my-auto mx-auto pb-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col gap-1"
        >
          <h2 className="font-inter font-medium text-white lg:text-4xl text-3xl">
            Адвокатская Контора
          </h2>
          <h1 className="font-inter font-extrabold lg:text-6xl text-5xl text-white">
            Zan Komek
          </h1>
        </motion.div>
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
          className="font-inter font-medium text-white lg:text-3xl text-2xl inline-block"
        >
          Команда высоко-квалифицированных адвокатов и юристов
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
          className="font-inter font-regular text-lg text-white w-[80%] mx-auto inline-block"
        >
          Наши высококвалифицированные адвокаты способны найти выход из любой
          затруднительной ситуации.
        </motion.p>
      </motion.div>
    </div>
  );
}
