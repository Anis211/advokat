/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : ""}
      transition={{
        duration: 0.4,
        type: "spring",
        delayChildren: 0.8,
        staggerChildren: 0.2,
      }}
      className="w-[100%] min-h-[50vh] flex lg:flex-row flex-col lg:gap-[2.4%] bg-[#5C5C5C] py-10 mt-3"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col gap-1 lg:w-[30%] w-[96%] lg:ml-2 text-center self-center"
      >
        <div className="flex flex-row gap-2 self-center max-w-[80%]">
          <img
            src="/meeting1.webp"
            alt="meeting1"
            className="w-14 h-14 self-center"
          />
          <h1 className="font-inter font-semibold text-2xl text-[#FDC656] text-center self-center">
            Записывайтесь на консультацию
          </h1>
          <img
            src="/meeting2.webp"
            alt="meeting2"
            className="w-14 h-14 self-center"
          />
        </div>
        <h2 className="font-inter font-medium text-xl text-white mt-6">
          +7 705 422 92 93
        </h2>
        <h2 className="font-inter font-medium text-xl text-white">
          +7 775 964 42 08
        </h2>
      </motion.div>
      <div className="lg:border-r-2 lg:border-r-[#FDC656] mx-auto lg:mx-0 my-16 lg:my-0 lg:h-[40vh] w-[90%] border-b-2 border-b-[#FDC656] lg:w-0 lg:border-b-0" />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col gap-1 lg:w-[30%] w-[90%] text-center self-center"
      >
        <div className="flex flex-row gap-2 self-center">
          <img
            src="/clock1.webp"
            alt="clock1"
            className="w-12 h-12 self-center"
          />
          <h1 className="font-inter font-semibold text-2xl text-[#FDC656] text-center self-center max-w-[80%]">
            График Работы
          </h1>
          <img
            src="/clock2.webp"
            alt="clock2"
            className="w-12 h-12 self-center"
          />
        </div>
        <h2 className="font-inter font-medium text-xl text-white mt-6">
          Ежедневно ( с 8:30 до 21:00 )
        </h2>
        <p className="font-inter font-light text-sm text-white">
          По вопросам Уголовной ответственности КРУГЛОСУТОЧНО
        </p>
      </motion.div>
      <div className="lg:border-r-2 lg:border-r-[#FDC656] mx-auto lg:mx-0 my-16 lg:my-0 lg:h-[40vh] w-[90%] border-b-2 border-b-[#FDC656] lg:w-0 lg:border-b-0" />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col gap-1 lg:w-[30%] w-[90%] text-center self-center"
      >
        <div className="flex flex-row gap-2 self-center">
          <img
            src="/dogy.webp"
            alt="clock1"
            className="w-12 h-12 self-center"
          />
          <h1 className="font-inter font-semibold text-2xl text-[#FDC656] text-center self-center max-w-[80%]">
            Социальные Сети
          </h1>
          <img
            src="/insta.webp"
            alt="clock2"
            className="w-12 h-12 self-center"
          />
        </div>
        <div className="flex flex-row gap-4 justify-center">
          {[
            { image: "/facebook.webp", link: "" },
            {
              image: "/instagram.webp",
              link: "https://www.instagram.com/reel/C3w_QZygDTN/?igsh=bTZiYW1xNnB3ZDNn",
            },
            {
              image: "/whatsapp.webp",
              link: "https://wa.me/+77054229293",
            },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <motion.div
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.3, type: "spring" },
                }}
              >
                <img src={item.image} alt="social" className="w-20 h-20" />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
