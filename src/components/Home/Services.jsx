/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-[100%] min-h-[60vh] bg-[#5C5C5C] py-16 mt-3 flex flex-col gap-10 justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.5, type: "spring", delay: 0.6 }}
        className="font-inter font-extrabold text-white text-center lg:text-5xl text-4xl inline-block"
      >
        Предоставляемые Нами Услуги
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.5, type: "spring", delay: 1 }}
        className="flex flex-row flex-wrap gap-12 mx-auto lg:w-[80%] w-[90%] item-center justify-center mt-10"
      >
        {[
          {
            name: "Уголовные Дела",
            link: "ugolovka",
            icon: "/handcuffs.webp",
          },
          {
            name: "Гражданские Дела",
            link: "grazhdanka",
            icon: "/ugolovla.webp",
          },
          {
            name: "Трудовые Споры",
            link: "trud",
            icon: "/people.webp",
          },
          {
            name: "Жилищные Споры",
            link: "house",
            icon: "/home.webp",
          },
          {
            name: "Наследственные Споры",
            link: "nasled",
            icon: "/dna.webp",
          },
          {
            name: "Семейные Споры",
            link: "family",
            icon: "/family.webp",
          },
          {
            name: "Строительство Объектов",
            link: "stroyka",
            icon: "/building.webp",
          },
          {
            name: "Помощь в ДТП Любой Сложности",
            link: "dtp",
            icon: "/car_crash.webp",
          },
        ].map((item, index) => (
          <Link
            href={"/uslugi/" + item.link}
            key={index}
            className="lg:max-w-[40%] w-[85%]"
          >
            <div
              className={`bg-[url('/background${index}.webp')] bg-cover px-6 py-7 flex flex-row gap-3 ring-2 ring-white rounded-xl`}
            >
              <img src={item.icon} alt="icon" className="w-12 h-12" />
              <h2 className="font-inter font-semibold text-white text-xl my-auto">
                {item.name}
              </h2>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
