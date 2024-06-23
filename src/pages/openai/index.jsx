import { motion, AnimatePresence } from "framer-motion";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { firestore } from "../../../firebase/clientApp";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ChatBot() {
  const [res, setRes] = useState("");
  const router = useRouter();

  const handleCripto = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=cryptocurrency&from=2024-05-23&language=ru&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      )
      .then(async (res) => setRes(res));
  };

  const handleSubmit = async () => {
    const result = await getDoc(doc(firestore, "crypto", "news"));
    const data = result.data();

    await setDoc(doc(collection(firestore, "crypto"), "news"), {
      news: [
        ...data.news,
        {
          title: res.data.articles[0].title,
          content: res.data.articles[0].content,
        },
      ],
    });

    router.push("/");
  };

  return (
    <div className="min-h-[100vh] flex flex-col gap-10 items-center justify-center pt-44">
      <AnimatePresence>
        {res != "" ? (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex flex-col w-[90%] mx-auto gap-2 ring-2 ring-white rounded-xl px-6 py-7"
          >
            <h2
              className={`font-inter font-bold text-[#FFC858] text-center text-3xl lg:text-start`}
            >
              {res != "" ? res.data.articles[0].title : ""}
            </h2>
            <p className="font-inter font-semibold text-white text-lg mt-5 lg:mt-0">
              {res != "" ? res.data.articles[0].content : ""}
            </p>
            <motion.button
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2, type: "spring" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, type: "spring" },
              }}
              onClick={handleSubmit}
              className="font-inter font-bold text-xl bg-[#FDC656] text-[#5C5C5C] w-[80%] mx-auto py-4 px-14 rounded-full"
            >
              Залить
            </motion.button>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <motion.button
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.2, type: "spring" },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, type: "spring" },
        }}
        onClick={handleCripto}
        className="font-inter font-bold text-xl bg-[#FDC656] text-[#5C5C5C] py-4 px-14 rounded-full"
      >
        Крипта
      </motion.button>
    </div>
  );
}
