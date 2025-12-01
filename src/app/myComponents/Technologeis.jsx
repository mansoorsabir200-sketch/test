"use client";
import { ExpandIcon } from "lucide-react";
import { CssIcon } from "../components/cssIcon";
import { HtmlIcon } from "../components/htmlIcon";
import { JsIcon } from "../components/jsIcon";
import { NextIcon } from "../components/nextIcon";
import { NodejsIcon } from "../components/nodjsIcon";
import { ReactIcon } from "../components/ReactIcon";
import { EXPEIENCES } from "../data";
import { PostgresqlIcon } from "../components/PostgerIcon";
import { TailwindcssIcon } from "../components/taileindJIcon";

import { motion } from "framer-motion";
const iconVariants = () => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: "duration",
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologeis() {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-24 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <HtmlIcon className=" text-7xl " />
        </motion.div>

        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <CssIcon className=" text-7xl " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <JsIcon className=" text-7xl " />
        </motion.div>

        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(1)}
          className="p-4"
        >
          <ReactIcon className="text-7xl " />
        </motion.div>
        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(1)}
          className="p-4"
        >
          <NodejsIcon className=" text-7xl " />
        </motion.div>
        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <PostgresqlIcon className=" text-7xl " />
        </motion.div>
        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <TailwindcssIcon className=" text-7xl " />
        </motion.div>
        <motion.div
          initial="initail"
          animate="animate"
          variants={iconVariants(0.5)}
          className="p-4"
        >
          <NextIcon className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}
