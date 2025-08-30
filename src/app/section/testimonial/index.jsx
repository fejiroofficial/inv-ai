"use client";

import React, { useState } from "react";
import Image from "next/image";
import TagLabel from "../../components/tagLabel";
import jasmine from "../../asset/testimonial/jasmine.svg";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const testimonials = [
  {
    text: "Investor AI feels like having a personal Wall Street analyst in my pocket. It's fast, smart, and actually helps me make better moves.",
    name: "Jasmine O., Retail Investor",
    image: jasmine,
  },
  {
    text: "Investor AI completely change how i invest, It's like having a full research team in my pocket-fast, insightful and easy to use.",
    name: "Danelle Kim, Project Manager",
    image: jasmine,
  },
  {
    text: "I don't have time to track market all day. Investor AI gives me sharp, real-time suggestions that makes sense for my portfolio.",
    name: "Amara Blake, Freelance Ux Developer",
    image: jasmine,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : prev
    );
  };

  const { text, name, image } = testimonials[currentIndex];

  return (
    <div className="px-6 lg:px-16 pb-6 py-16 mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <TagLabel text="Testimonial" />
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold max-w-3xl mt-4 text-black">
          Trusted by Real Investors Who Scale Smart
        </h2>
        <p className="text-[14px] text-base font-medium md:font-semibold text-[#AAAAAA] mt-4">
          Hear how Investor AI is transforming portfolios and building
          confidence daily.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="overflow-hidden bg-gradient-to-b from-[#E2E2E2] to-[#E2E2E2] rounded-3xl border border-[#AAAAAA] px-4 md:px-10 py-4">
        <div className="flex flex-col md:flex-row xl:mx-auto justify-between items-center">
          {/* Image Section */}
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="object-cover w-[304px] h-[304px] order-1 md:order-2"
          />

          {/* Text Section */}
          <div className="flex flex-col gap-6 md:w-[300px] lg:w-[400px] xl:w-[500px] order-2 md:order-1">
            <p className="pt-6 md:pt-0 text-base font-medium md:font-semibold text-[#666666]">
              “{text}”
            </p>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-black text-base font-semibold">{name}</p>

              {/* Controls */}
              <div className="flex items-center justify-between w-full mt-12">
                {/* Prev button */}
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`transition-colors ${
                    currentIndex === 0
                      ? "text-[#AAAAAA] cursor-not-allowed"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  <IoArrowBackOutline size={20} />
                </button>

                {/* Dots */}
                <div className="flex gap-2 mx-auto">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "bg-black scale-110"
                          : "bg-[#AAAAAA]"
                      }`}
                    />
                  ))}
                </div>

                {/* Next button */}
                <button
                  onClick={handleNext}
                  disabled={currentIndex === testimonials.length - 1}
                  className={`transition-colors ${
                    currentIndex === testimonials.length - 1
                      ? "text-[#AAAAAA] cursor-not-allowed"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  <IoArrowForwardOutline size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
