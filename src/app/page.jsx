import Link from "next/link";
import Contact from "./myComponents/Contact";
import Hero from "./myComponents/Hero";
import Navbar from "./myComponents/Navbar";
import Projects from "./myComponents/Projects";
import Technologeis from "./myComponents/Technologeis";


export default function Home() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">

          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-16 ">
        <div className="pb-24 w-full ">

        <Navbar />
        </div>
        <Hero />
        <Technologeis />
        <Projects />
        <Contact />
        <p className="text-center p-4">  مننه چی دلته یاست </p>
      </div>
    </div>
  );
}
