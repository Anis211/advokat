/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="bg-[url('/background0.webp')] bg-cover w-[100%] h-auto z-10 flex flex-col mt-3 py-16"
    >
      <h2 className="font-inter font-extrabold text-white text-5xl text-center">
        Наши Адвокаты
      </h2>
      <div className="flex flex-row flex-wrap gap-10 justify-evenly mt-16">
        {[
          {
            name: "Ахметолдин Мерхат Болатович",
            image: "/merhat.webp",
          },
          {
            name: "Иргизбаева Динара Кабденовна",
            image: "/lawyer.webp",
          },
          {
            name: "Ибраев Аблайхан Кайратулы",
            image: "/lawyer2.webp",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <img
              src={item.image}
              alt="image"
              className="lg:w-[25vw] h-auto w-[90vw] mx-auto lg:mx-0 rounded-xl ring-2 ring-white"
            />
            <h2 className="font-inter font-bold text-white text-center text-2xl">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
