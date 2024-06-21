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
      <img
        src="/whatsapp.webp"
        alt="whatsapp"
        className="w-18 h-18 flex lg:hidden fixed left-[70%] top-[85%] z-40"
        onClick={() => router.push("https://wa.me/+77054229293")}
      />
      <Footer />
    </div>
  );
}
