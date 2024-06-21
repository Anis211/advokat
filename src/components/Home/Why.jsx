/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/router";

export default function Why() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const router = useRouter();

  return (
    <div
      ref={ref}
      className="lg:bg-[url('/background8.webp')] bg-[url('/background2.webp')] bg-cover bg-no-repeat w-[100%] min-h-[100vh] z-10 flex lg:flex-row flex-col pb-16 lg:pb-0 lg:justify-between mt-3"
    >
      <div className="lg:w-[40%] flex flex-col gap-16 lg:pl-20 lg:pb-32 lg:pt-36 px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.4, type: "spring", delay: 0.6 }}
          className="font-inter font-extrabold text-5xl text-center lg:text-start text-white inline-block"
        >
          Почему именно Мы?
        </motion.h1>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : ""}
          transition={{
            duration: 1,
            type: "spring",
            delayChildren: 1,
            staggerChildren: 0.1,
          }}
          className="flex flex-col gap-7"
        >
          {[
            "Мы — юридическая компания широкого профиля и готовы помочь вам по различным вопросам.",
            "Клиенты доверяют нам в самых сложных вопросах, потому что знают, что мы поможем им снизить все риски.",
            "Все наши специалисты имеют опыт юридической практики более 10 лет.",
            "Ваша частная информация не покинет пределов нашего офиса.",
          ].map((item, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 },
              }}
              key={index}
              className="flex flex-row w-[100%] justify-between"
            >
              <div className="flex flex-row gap-6">
                <div className="w-4 h-4 bg-[#FDC656] rounded-full self-center" />
                <p className="font-inter font-semibold text-[#FDC656] lg:text-lg text-md self-center w-[90%]">
                  {item}
                </p>
              </div>
              <img
                src="/tick.webp"
                alt="tick"
                className="w-12 h-12 self-center"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.4, type: "spring", delay: 1.8 }}
        className="lg:w-[30%] w-[90%] flex flex-col gap-6 lg:pr-24 self-center mx-auto lg:mx-0"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше Имя"
          className="bg-white bg-opacity-40 font-inter font-semibold text-white placeholder:text-white placeholder:font-inter placeholder:text-2xl placeholder:font-semibold rounded-xl text-2xl py-9 px-10"
        />
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Номер Телефона"
          className="bg-white bg-opacity-40 font-inter font-semibold text-white placeholder:text-white placeholder:font-inter placeholder:text-2xl placeholder:font-semibold rounded-xl text-2xl py-9 px-10"
        />
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring" },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.2, type: "spring" },
          }}
          className="bg-[#FDC656] font-inter font-semibold text-[#5C5C5C] text-xl rounded-full py-4 px-6"
          onClick={() =>
            router.push(
              `https://api.whatsapp.com/send?phone=+77054229293&text=Здравствуйте,Меня%20%Зовут%20%${name}.`
            )
          }
        >
          Оставить Заявку
        </motion.button>
      </motion.div>
    </div>
  );
}
