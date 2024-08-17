import Image from "next/image";
import Hero from "./component/Hero";
import Marque from "./component/Marque";
import Slogan from "./component/Slogan";
import Demo from "./component/Demo";
import Features from "./component/Features";
import CTA from "./component/CTA";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <Hero />
    <Marque />
    <Slogan />
    <Demo />
    <Features/>
    <CTA/>
    <Footer/>
    </>
  );
}
