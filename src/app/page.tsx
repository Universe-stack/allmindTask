import Image from "next/image";
import Hero from "./component/Hero";
import Marque from "./component/Marque";
import Slogan from "./component/Slogan";
import Demo from "./component/Demo";

export default function Home() {
  return (
    <>
    <Hero />
    <Marque />
    <Slogan />
    <Demo />
    </>
  );
}
