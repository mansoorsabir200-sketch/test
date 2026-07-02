import { Github, Instagram, Linkedin, X } from "lucide-react";
import { FacebookIcon } from "../components/faceBookIcon";
import Link from "next/link";
import { WhatsappIcon } from "../components/whatsappIcon";

export default function Navbar() {
  return (
    <nav className="flex  w-full justify-between  shadow-2xl  shadow-cyan-500 border-white/55 fixed   px-24   z-30 bg-slate-900">
      <div className="flex items-center flex-shrink-0 ">
        <a href="/" aria-label="Home">
          <img
            src="logo.png"
            alt="pictuer"
            className="size-16 lg:size-24 mx-3"
          />
        </a>
        <div className="flex flex-col w-12 gap-y-2  ">
          <div className=" bg-blue-400 w-0.5 h-0.5 rounded-full p-2 "></div>
          <div className=" bg-slate-400 w-0.5 h-0.5 rounded-full p-2"></div>
          <div className=" bg-green-600 w-0.5 h-0.5 rounded-full p-2"></div>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="/">
          {" "}
          <Linkedin />{" "}
        </a>
        <a href="https://github.com/mansoorsabir200-sketch">
          {" "}
          <Github />
        </a>
        <a href="/">
          {" "}
          <X />{" "}
        </a>{" "}

        <a href="https://www.facebook.com/منصور" target="_blank">
          {" "}
          <FacebookIcon />{" "}
        </a>{" "}

        <a href="/whatsapp.com/0700267728">
          {" "}
          <WhatsappIcon />{" "}
        </a>
      </div>
    </nav>
  );
}
