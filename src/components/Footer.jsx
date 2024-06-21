/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const router = useRouter();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : ""}
      transition={{
        duration: 0.8,
        type: "spring",
        staggerChildren: 0.2,
        delayChildren: 0.6,
      }}
      className="w-[100%] min-h-[40vh] bg-[#5C5C5C] lg:py-16 py-10 mt-3 flex flex-col lg:flex-row justify-evenly"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col lg:w-[22%] w-[90%] mx-auto lg:mx-0"
      >
        <img src="/logo.webp" alt="logo" className="w-44 h-44" />
        <p className="font-inter font-medium text-white text-md text-start relative bottom-5">
          Если Вам нужен опытный адвокат и квалифицированная юридическая помощь,
          тогда не стоит медлить и минуты, ведь от этого зависит Ваша репутация
          или свобода.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col gap-2"
      >
        <h2 className="font-inter font-semibold text-[#FDC656] text-xl text-center lg:mt-10 mt-6">
          Навигация
        </h2>
        {[
          { name: "Главная", link: "/" },
          { name: "Услуги", link: "/#services" },
          { name: "О Команде", link: "/#team" },
        ].map((item, index) => (
          <Link key={index} href={item.link}>
            <p className="font-inter font-medium text-white text-lg text-center lg:text-start">
              {item.name}
            </p>
          </Link>
        ))}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col gap-2"
      >
        <h2 className="font-inter font-semibold text-[#FDC656] text-xl text-center mt-10">
          Контакты
        </h2>
        {["Пн — вс (24 часа в сутки)", "+7 705 422 92 93"].map(
          (item, index) => (
            <p
              key={index}
              className="font-inter font-medium text-white text-lg text-center lg:text-center"
            >
              {item}
            </p>
          )
        )}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col gap-2"
      >
        <h2 className="font-inter font-semibold text-[#FDC656] text-xl text-center mt-10">
          Оставить Заявку
        </h2>
        <motion.button
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.3, type: "spring" },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring" },
          }}
          onClick={() => router.push("/#contact")}
          className="font-inter font-bold text-xl bg-[#FDC656] text-[#5C5C5C] py-4 px-14 rounded-xl mx-auto  text-center mt-5"
        >
          Заказать Услугу
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
