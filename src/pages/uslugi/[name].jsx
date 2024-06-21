/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import data from "../../../data.json";
import { useRouter } from "next/router";

export default function Hero({ url }) {
  const router = useRouter();

  return (
    <div className="bg-[url('/background1.webp')] bg-cover w-[100%] h-auto z-10 flex flex-col py-16 pt-48">
      <h1 className="font-inter font-extrabold text-white text-5xl text-center">
        {data[url].name}
      </h1>
      <div className="flex flex-col gap-10 lg:px-20 px-6 py-16">
        {data[url].text.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 ring-2 ring-white rounded-xl px-6 py-7"
          >
            <h2
              className={`font-inter font-bold text-[#FFC858] text-center lg:text-start ${
                index == 0 ? "text-3xl" : "text-2xl"
              }`}
            >
              {item.header}
            </h2>
            <p className="font-inter font-semibold text-white text-lg mt-5 lg:mt-0">
              {item.body}
            </p>
          </div>
        ))}
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
          className="font-inter font-bold text-xl bg-[#FDC656] text-[#5C5C5C] py-4 px-5 lg:px-14 rounded-xl mx-auto lg:w-[70%] w-[90%] text-center mt-5"
        >
          Заказать Услугу
        </motion.button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "ugolovka" } },
      {
        params: { name: "grazhdanka" },
      },
      {
        params: { name: "trud" },
      },
      {
        params: { name: "house" },
      },
      {
        params: { name: "nasled" },
      },
      {
        params: { name: "family" },
      },
      {
        params: { name: "stroyka" },
      },
      {
        params: { name: "dtp" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const name = params.name;

  return {
    props: {
      url: name,
    },
  };
}
