/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [hidden, setHidden] = useState(true);
  const [hiddenNumber, setHiddenNumber] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const router = useRouter();

  return (
    <div className="bg-[#333333] backdrop-blur-xl bg-opacity-35 lg:px-12 px-5 flex flex-row lg:gap-32 justify-between lg:justify-evenly w-[100%] fixed z-50">
      <motion.img
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring", delay: 0.2 }}
        src="/logo.webp"
        alt="logo"
        className="lg:w-36 lg:h-36 w-20 h-20"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.8,
          type: "spring",
          staggerChildren: 0.1,
          delayChildren: 0.6,
        }}
        className="lg:flex flex-row gap-20 text-center items-center hidden"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-row gap-12"
        >
          <Link href="/">
            <h2 className="font-inter font-bold text-lg text-white">Главная</h2>
          </Link>
          <div className="flex flex-col gap-3">
            <div
              onMouseEnter={() => setHidden(false)}
              onMouseLeave={() => setHidden(true)}
              className="flex flex-row gap-1 h-[100%] items-center ml-2"
            >
              <h2 className="font-inter font-bold text-lg text-white">
                Услуги
              </h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={
                  !hidden
                    ? {
                        rotate: 180,
                        transition: { duration: 0.4, type: "spring" },
                      }
                    : ""
                }
                className="w-8 h-8"
              >
                <img src="/list.webp" alt="list" />
              </motion.div>
            </div>
            <AnimatePresence>
              {!hidden ? (
                <motion.div
                  onMouseEnter={() => setHidden(false)}
                  onMouseLeave={() => setHidden(true)}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 60 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex flex-col gap-1 bg-[#FDC656] absolute top-24 px-3 pt-4 pb-5 z-30 rounded-lg"
                >
                  {[
                    {
                      name: "Уголовные Дела",
                      link: "ugolovka",
                    },
                    { name: "Гражданские Дела", link: "grazhdanka" },
                    { name: "Трудовые Споры", link: "trud" },
                    { name: "Жилищные Споры", link: "house" },
                    { name: "Наследственные Споры", link: "nasled" },
                    { name: "Семейные Споры", link: "family" },
                    { name: "Строительство Объектов", link: "stroyka" },
                    { name: "Помощь в ДТП Любой Сложности", link: "dtp" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col gap-3 mt-2">
                      <Link href={"/uslugi/" + item.link}>
                        <h2 className="font-inter font-semibold text-md text-[#5C5C5C]">
                          {item.name}
                        </h2>
                      </Link>
                      {index < 9 ? (
                        <div className="border-b-2 border-b-[#5C5C5C] w-[95%] mx-auto" />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
          <Link href="/#why">
            <h2 className="font-inter font-bold text-lg text-white">О нас</h2>
          </Link>
          <Link href="/comments">
            <h2 className="font-inter font-bold text-lg text-white">Отзывы</h2>
          </Link>
        </motion.div>
        <div className="border-r-2 border-r-white h-[80%]" />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-row gap-16 items-center">
            <div
              className="flex flex-row gap-1"
              onMouseEnter={() => setHiddenNumber(false)}
              onMouseLeave={() => setHiddenNumber(true)}
            >
              <h2 className="font-inter font-bold text-lg text-[#FDC656]">
                Контакты
              </h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={
                  !hiddenNumber
                    ? {
                        rotate: 180,
                        transition: { duration: 0.4, type: "spring" },
                      }
                    : ""
                }
                className="w-8 h-8"
              >
                <img src="/number_down.png" alt="list" />
              </motion.div>
            </div>
            <motion.button
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2, type: "spring" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, type: "spring" },
              }}
              onClick={() => router.push("/#contact")}
              className="font-inter font-bold text-xl bg-[#FDC656] text-[#5C5C5C] py-4 px-14 rounded-full"
            >
              Заказать Услугу
            </motion.button>
          </div>
          <AnimatePresence>
            {!hiddenNumber ? (
              <motion.div
                onMouseEnter={() => setHiddenNumber(false)}
                onMouseLeave={() => setHiddenNumber(true)}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col gap-1 bg-[#FDC656] absolute top-24 px-4 pt-3 pb-6 z-30 rounded-lg"
              >
                {["+7 705 422 92 93", "+7 775 964 42 08"].map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h2 className="font-inter font-semibold text-md text-[#5C5C5C] mt-3">
                      {item}
                    </h2>
                    <div className="border-b-2 border-b-[#5C5C5C] w-[100%] mx-auto" />
                  </div>
                ))}
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {sidebar ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-[#404040] z-[6] flex flex-col text-white gap-5 place-items-center justify-center absolute left-0 top-0 w-[100vw] h-[100vh]"
            onClick={() => setSidebar(false)}
          >
            {[
              { header: "Главная", link: "/" },
              { header: "Услуги", link: "#services" },
              { header: "Наша Команда", link: "#team" },
              { header: "Отзывы", link: "/comments" },
              { header: "+7 705 422 92 93", link: "/" },
              { header: "Заказать Услугу", link: "#contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-[60%]"
                onClick={() => setSidebar(false)}
              >
                <h2 className="font-poppins font-medium text-xl mx-auto text-center">
                  {item.header}
                </h2>
                <div className="border-b-2 border-b-gray-200 mt-4" />
              </Link>
            ))}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <div className="px-4 py-4 w-16 h-16 my-auto bg-[#FFC858] rounded-full lg:hidden flex ">
        <img
          alt="more"
          src="/more.png"
          className="w-8 h-8 self-center"
          onClick={() => setSidebar(true)}
        />
      </div>
    </div>
  );
}
