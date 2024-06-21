import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Map from "../Map";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-[100%] min-h-[80vh] mt-3 bg-[#5C5C5C] lg:py-10 pb-16 flex flex-col gap-10 justify-center"
    >
      <motion.h1
        intial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
        className="font-inter font-extrabold text-white text-center text-5xl mt-10 inline-block"
      >
        Где Мы Находимся
      </motion.h1>
      <motion.p
        intial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
        className="font-inter font-extrabold text-white text-center text-xl mt-10 inline-block"
      >
        Ма находимся в городе Астана на улице Туран 46/2
      </motion.p>
      <Map className="mx-auto" />
    </div>
  );
}
