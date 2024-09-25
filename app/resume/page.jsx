"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { about, education, Experiences, skills } from "@/lib/constants";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold ">{Experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Experiences.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col gap-1 justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                {education.description.split("\n").map((item, index) => (
                  <p
                    key={index}
                    className="text-white/60 indent-10 max-w-[800px] mx-auto xl:mx-0"
                  >
                    {item}
                  </p>
                ))}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col gap-1 justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60 ">{item.school}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white/60"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-white/60">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full  text-center xl:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="flex flex-col gap-[30px]"
              >
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {about.description.split("\n").map((item, index) => (
                  <p
                    key={index}
                    className="text-white/60 indent-10 max-w-[800px] mx-auto xl:mx-0"
                  >
                    {item}
                  </p>
                ))}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex  justify-center gap-4 xl:justify-start"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
Resume;
