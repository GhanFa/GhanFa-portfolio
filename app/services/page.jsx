"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: 1,
    name: "Web Development",
    path: "",
    desc: "Creating user interfaces for applications and websites, focusing on the visual elements and interactivity that users see. Using technologies such as HTML, CSS, and JavaScript, responsible for designing attractive layouts, ensuring responsiveness across devices, and enhancing the user experience through seamless interactions. In addition, we often work with modern frameworks such as React or Next.js to build dynamic and efficient applications. The goal is to combine aesthetics and functionality so that users can navigate the site comfortably and intuitively",
  },

  {
    num: 2,
    name: "Logo Design",
    path: "",
    desc: "Logo design is a creative process that aims to create a unique and recognizable visual identity for a brand or company. A logo serves as a symbolic representation of the brand's values, vision, and mission. In logo design, elements such as shape, color, and typography are carefully selected to create a strong and eye-catching impression. Logo designers must understand the target audience and industry trends to produce a logo that is not only aesthetic, but also relevant and effective in building a consistent brand image. ",
  },
  {
    num: 3,
    name: "Product Design",
    path: "",
    desc: "offers creative solutions to help brands create attractive and functional products. With a collaborative approach, we understand the needs of clients and target audiences, from research to concept development.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.path}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* tittle */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.name}
                </h2>
                {/* desc */}
                <p className="text-white/80">{service.desc} </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
