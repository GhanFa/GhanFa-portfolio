"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: 1,
    name: "Web Development",
    path: "/services/web-development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus? ",
  },
  {
    num: 2,
    name: "Mobile Development",
    path: "/services/mobile-development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus? ",
  },
  {
    num: 3,
    name: "UI/UX Design",
    path: "/services/ui-ux-design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus? ",
  },
  {
    num: 4,
    name: "Logo Design",
    path: "/services/logo-design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora, perferendis velit corrupti cum temporibus? ",
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
