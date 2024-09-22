"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeIn" }}
      >
        {/* image */}
        <motion.div
          className="w-[245px] h-[245px] xl:w-[360px] xl:h-[360px] mix-blend-lighten absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src="/assets/profile.png"
            alt="profile"
            fill
            priority
            quality={100}
            className="object-contain rounded-b-[50%] "
          />
          <div className="absolute rounded-full bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black to-transparent"></div>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[250px] h-[250px] xl:w-[365px] xl:h-[365px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#4F75FF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              delay: 2,
              duration: 28,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
