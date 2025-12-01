import { Github, Instagram, Linkedin, X } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0 ">
        <a href="/" aria-label="Home">
          <img
            src="logo.png"
            alt="pictuer"
            className="size-16 lg:size-24 mx-3"
          />
        
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="/">
          {" "}
          <Linkedin />{" "}
        </a>
        <a href="/">
          {" "}
          <Github />{" "}
        </a>{" "}
        <a href="/">
          {" "}
          <Instagram />{" "}
        </a>{" "}
        <a href="/">
          {" "}
          <X />{" "}
        </a>
      </div>
    </nav>
  );
}
