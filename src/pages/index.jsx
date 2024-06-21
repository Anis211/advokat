import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Work from "@/components/Home/Work";
import Certificates from "@/components/Home/Certificats";
import Numbers from "@/components/Home/Numbers";
import Why from "@/components/Home/Why";
import Clients from "@/components/Home/Clients";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Comments from "@/components/Home/Comments";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="pb-28" />
      <Hero />
      <About />
      <Work />
      <div id="team" />
      <Team />
      <Certificates />
      <Numbers />
      <div id="why" />
      <Why />
      <div id="services" />
      <Services />
      <Clients />
      <div id="comments" />
      <Comments />
      <Contact />
    </div>
  );
}
