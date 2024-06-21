import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Numbers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-[100%] min-h-[50vh] bg-[#5C5C5C] lg:py-10 pb-16 mt-3 flex justify-center"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : ""}
        transition={{
          duration: 1,
          type: "spring",
          staggerChildren: 0.2,
          delayChildren: 0.6,
        }}
        className="flex flex-row flex-wrap lg:gap-32 gap-20 mt-16 w-[90%] mx-auto"
      >
        {[
          { header: "998", body: "Выигранных Дел" },
          { header: "10+", body: "Лет Стажа" },
          { header: "800+", body: "Довольных Клиентов" },
          { header: "80%", body: "Коэфицент выигрыша" },
        ].map((item, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            key={index}
            className="flex flex-col gap-2 font-inter font-bold text-center mx-auto"
          >
            <h1 className="text-white text-7xl inline-block">{item.header}</h1>
            <p className="text-[#FDC656] text-2xl inline-block">{item.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
