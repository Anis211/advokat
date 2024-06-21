/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const allDocuments = [
  "/doc1.webp",
  "/doc2.webp",
  "/doc3.webp",
  "/doc4.webp",
  "/document4.webp",
  "/document5.webp",
  "/document6.webp",
  "/document7.webp",
  "/document8.webp",
  "/document9.webp",
  "/document10.webp",
  "/document11.webp",
  "/document12.webp",
  "/document13.webp",
  "/document14.webp",
  "/document16.webp",
  "/document19.webp",
  "/document20.webp",
  "/document21.webp",
  "/document22.webp",
  "/document23.webp",
  "/document24.webp",
  "/document27.webp",
  "/document28.webp",
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="bg-[url('/background3.webp')] bg-cover w-[100%] h-auto z-10 flex flex-col gap-10 pb-16 lg:pb-0 mt-3 overflow-y-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.6, type: "spring", delay: 0.7 }}
        className="font-inter font-extrabold text-white lg:text-5xl text-4xl mx-auto text-center mt-16"
      >
        Сертификаты и <br /> грамоты
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : ""}
        transition={{ duration: 0.6, type: "spring", delay: 1.2 }}
        className="bg-[#D9D9D9] bg-opacity-20 w-[85%] h-[70%] mx-auto flex flex-col gap-6 px-7 py-8"
      >
        <SlideshowLightbox className="my-scrollbar container lg:max-h-[75vh] max-h-[100vh] flex flex-row flex-wrap justify-evenly lg:gap-8 gap-3 items-center justify-self-center overflow-x-hidden overflow-y-scroll">
          {allDocuments.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="document"
              className="object-cover lg:max-h-[40vh] lg:max-w-[30vw] h-[100%]"
            />
          ))}
        </SlideshowLightbox>
      </motion.div>
    </div>
  );
}
