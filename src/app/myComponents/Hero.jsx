"use client";
import Link from "next/link";
import { HERO_CONTENT } from "../data";
import { motion } from "framer-motion";
import { WhatsappIcon } from "../components/whatsappIcon";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    Transition: {
      duration: 1.5,
      saggerChildren: 1.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export default function Hero() {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src="mansoor-1.jpg"
              alt="mansoor sabir"
              className="border border-stone-900 rounded-3xl bg-stone-950 "
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={childVariants}
              className="text-3xl lg:text-8xl p-4 tracking-tighter font-semibold "
            >
              Mansoor Sabir
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-b from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight"
            >
              Full Stok Devloper
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="https://wa.me/93700267728"
              className=" w-43 text-center rounded-full flex items-center justify-center bg-green-600/55 hover:scale-103 duration-300 text-xl text-stone-100 p-2 gap-2 "
            >
              Contact Us
              <WhatsappIcon className="size-8"/>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
