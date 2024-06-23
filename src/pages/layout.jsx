/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="h-auto bg-[#404040] overflow-x-hidden">
      <Navbar />
      {children}
      <div
        className="px-4 py-4 bg-white rounded-full flex justify-center items-center lg:hidden fixed left-[70%] top-[87%] z-40"
        onClick={() => router.push("https://wa.me/+77054229293")}
      >
        <img src="/whatsapp1.png" alt="whatsapp" className="w-18 h-18" />
      </div>
      <div
        className="px-4 py-4 bg-[#2CAE80] rounded-full flex justify-center items-center lg:hidden fixed left-[5%] top-[88%] z-40"
        onClick={() => router.push("/#numbers")}
      >
        <img src="/call.png" alt="call" className="w-14 h-14" />
      </div>
      <Footer />
    </div>
  );
}
