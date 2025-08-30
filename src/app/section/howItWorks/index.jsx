"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "../../asset/svg/banner.svg";
import banner2 from "../../asset/svg/banner1.svg";
import banner3 from "../../asset/svg/banner2.svg";
import line from "../../asset/svg/line.svg";
import Sline from "../../asset/svg/shorterLine.svg";
import Hline from "../../asset/svg/Hline.svg";
import HsLine from "../../asset/svg/HsLine.svg";
import TagLabel from "../../components/tagLabel";
import Button from "../../components/button";

const HowItWorksDetails = [
  {
    id: "step 1",
    title: "Sign Up & Set Up",
    description:
      "Create an account, connect your favorite tools, import contacts, and get your CRM running in less than 10 minutes.",
    image: banner1,
    position: line,
    position2: Sline,
  },
  {
    id: "step 2",
    title: "Customize & Automate",
    description:
      "Tailor pipelines, set rules, and build automated workflows to handle repetitive tasks while your team focuses on high-impact work.",
    image: banner2,
    position: Hline,
    position2: HsLine,
  },
  {
    id: "step 3",
    title: "Track, Collaborate & Grow",
    description:
      "Monitor deals, view real-time performance, share insights across teams, and scale operations with total visibility and zero data silos.",
    image: banner3,
    position: line,
    position2: Hline,
  },
];

const lineClassNames = [
  "top-0 right-0",
  "top-0 right-0", 
  "top-0 right-6", 
];

const sLineClassNames = ["top-0 right-[5px]", "top-0 right-0", "top-[-2rem] right-0"];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HowItWorksDetails.length);
    }, 5000);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    startAutoCycle();
  };

  return (
    <div className="container mx-auto py-16 px-6" id="howItWorks">
      <div className="flex flex-col items-center my-6">
        <TagLabel text="How It works" />
        <h2 className="text-center max-w-2xl mt-4 text-black">
          Simple Setup. Powerful Results.
        </h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch gap-2 bg-[#F4F4F5] p-2 lg:p-6 rounded-[40px] border border-[#CCCCCC] transition-all">
        <div className="flex flex-col h-full flex-1">
          {HowItWorksDetails.map((works, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={works.id}
                onClick={() => handleClick(index)}
                className={`relative p-4 lg:p-6 rounded-4xl text-start cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-[#080035] text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {isActive && (
                  <>
                    <motion.div
                      className={`absolute z-10 ${lineClassNames[activeIndex]}`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Image src={works.position} alt="line-svg" />
                    </motion.div>
                    <motion.div
                      className={`absolute z-10 ${sLineClassNames[activeIndex]}`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Image src={works.position2} alt="short-line-svg" />
                    </motion.div>
                  </>
                )}

                <div
                  className={`max-w-[100px] rounded-[24px] px-4 py-2 text-center text-[14px] mb-4 ${
                    isActive
                      ? "text-white border border-[#40C2FF]"
                      : "border border-[#626262]"
                  }`}
                >
                  {works.id}
                </div>

                <h3
                  className={`text-[20px] lg:text-[24px] font-bold lg:pt-2 ${
                    isActive ? "text-white" : "text-[#626262]"
                  }`}
                >
                  {works.title}
                </h3>

                <p
                  className={`font-medium pt-2 ${
                    isActive ? "text-[#AAAAAA]" : "text-[#626262]"
                  }`}
                >
                  {works.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="relative w-full h-full min-h-[400px] md:min-h-[644px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={HowItWorksDetails[activeIndex].image.src}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={HowItWorksDetails[activeIndex].image}
                  alt="how-it-works-image"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <Button className="w-full lg:w-[170px] bg-[#080035] text-[#EFEFEF] p-2 lg:p-4 rounded-[8px] text-[18px] hover:bg-black">
          Start Free Trial
        </Button>
      </div>
    </div>
  );
}
