/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="bg-[url('/background1.webp')] bg-cover w-[100%] min-h-[100vh] z-10 flex lg:flex-row flex-col">
      <div className="lg:w-[50%] flex flex-col gap-6 text-center my-auto px-2 lg:px-0 mt-7 lg:mt-[30vh]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", delay: 0.8 }}
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", delay: 1.2 }}
          className="font-inter font-medium text-white lg:text-3xl text-2xl inline-block max-w-[80%] mx-auto"
        >
          Команда высоко-квалифицированных адвокатов и юристов
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", delay: 1.2 }}
          className="font-inter font-regular text-lg text-white w-[80%] mx-auto inline-block"
        >
          Добро пожаловать в Zañ Kömek — ваш проводник в мире права и
          справедливости. Наши адвокаты с богатым опытом работы в ведущих
          правоохранительных органах, включая Прокуратуру Республики Казахстан,
          Министерство Внутренних Дел РК, Комитет Национальной Безопасности РК и
          другие авторитетные структуры, всегда готовы помочь вам в решении
          любых правовых вопросов.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", delay: 1.2 }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.3, type: "spring" },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring" },
          }}
          className="font-inter font-bold text-xl bg-[#FDC656] text-[#5C5C5C] py-4 px-14 rounded-lg lg:max-w-[60%] max-w-[95%] mx-auto"
          onClick={() => router.push("/#contact")}
        >
          Получить Консультацию
        </motion.button>
      </div>
      <div className="lg:w-[50%] flex flex-col">
        <img
          src="/merhat.webp"
          alt="lawyer"
          className="w-[85%] h-[70%] object-cover ring-2 ring-[#E0E0E0] rounded-full self-center mt-16 mx-auto"
        />
        <motion.div className="flex flex-col gap-5 relative bottom-20 md:bottom-32 z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.4,
              type: "spring",
              delayChildren: 1.4,
              staggerChildren: 0.2,
            }}
            className="flex md:flex-row flex-col lg:gap-8 gap-5 justify-center"
          >
            {[
              { header: "80%", body: "Успешности дела" },
              { header: "10+", body: "Лет в данной индустрии" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="bg-[#FDC656] rounded-lg font-inter text-[#30297A] px-6 py-4 flex lg:flex-row gap-3 md:gap-4 md:max-w-[35%] max-w-[70%] mx-auto"
              >
                <h1 className="font-bold lg:text-4xl text-3xl self-center">
                  {item.header}
                </h1>
                <p className="font-medium text-lg self-center">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
          <h2 className="font-inter font-medium text-white text-xl text-center mt-7 w-[80%] flex flex-col gap-2 mx-auto">
            Адвокат Коллегии Адвокатов города Астаны:{" "}
            <span className="font-semibold text-2xl">
              Ахметолдин Мерхат Болатович
            </span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
