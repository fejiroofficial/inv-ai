"use client";

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineMinusSm } from "react-icons/hi";
import TagLabel from "../../components/tagLabel";

const faqs = [
  {
    question: "What is Investor AI and how does it work?",
    answer:
      "Investor Al is a multi-agent investing platform that uses artificial intelligence to help users analyze markets, generate trade ideas, and optimize portfolios in real time.",
  },
  {
    question: "How does Investor AI generate trade ideas?",
    answer:
      "No. Investor Al is non-custodial, It provides insights and recommendations-you stay in full control of your brokerage and decisions..",
  },
  {
    question: "Who is Investor AI designed for?",
    answer:
      "Investor Al is built for all investors-beginners, intermediates, and experienced traders-looking to make smarter, data-driven decisions with the help of Al.",
  },
  {
    question: "Can Investor AI execute trades on my behalf?",
    answer:
      "Investor Al uses a team of intelligent agents trained on market data, news sentiment, technical patterns, and portfolio analytics to surface personalized trade suggestions.",
  },
  {
    question: "Is Investor AI free to use?",
    answer:
      "Yes, Investor Al offers a free plan with limited features. You can upgrade to access real-time alerts, deeper insights, and a full suite of Al agents.",
  },
  {
    question: "How safe is my portfolio data with Investor AI?",
    answer:
      "Unlike typical tools, Investor Al uses a multi-agent system that delivers real-time, layered insights-like having a personal analyst, strategist, and market scanner all in one",
  },
  {
    question: "What types of assets can I manage with Investor AI?",
    answer:
      "You can use Investor Al to monitor and analyze stocks, ETFs, crypta. and options.",
  },
  {
    question: "What makes Investor AI different from other platforms?",
    answer:
      "Your data is protected with bank level encryption and read-only integrations. Investor Al never stores passwords or executes trades without your permission.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-center justify-between container mx-auto px-6 lg:px-16 py-16"
      id="#faq"
    >
      <TagLabel text="FAQs" />
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-center mt-4 text-black leading-tight">
        You’ve Got Questions? We’ve <br />
        Got Smart Answers.
      </h2>
      <p className="text-[14px] text-base font-medium md:font-semibold text-[#AAAAAA] mt-4">
        Everything you need to know before letting Investor AI guide your
        trades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl pt-12">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl border border-[#212121] overflow-hidden"
            >
              <button
                className={`w-full flex justify-between items-center p-4 text-left text-lg font-medium transition ${
                  isOpen ? "rounded-t-2xl" : "rounded-2xl"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[16px] lg:text-[18px] font-medium">
                  {faq.question}
                </span>
                {isOpen ? (
                  <HiOutlineMinusSm size={28} />
                ) : (
                  <IoMdAdd size={28} />
                )}
              </button>
              <div
                className={`transition-all duration-300 ${
                  isOpen ? "max-h-30 rounded-b-2xl" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="text-[14px] lg:text-[18px] font-normal px-6 py-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
