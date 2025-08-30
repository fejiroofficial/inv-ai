import React from "react";
import TagLabel from "../../components/tagLabel";
import ProcessCard from "../../components/processCard";

const processData = [
  {
    num: "1",
    title: "Sync & Set Up",
    description:
      "Securely connect to your brokerage, analyze your holdings, & prepare your AI agent in minutes.",
  },
  {
    num: "2",
    title: "Analyze & Strategize",
    description:
      "AI agents scan market trends, backtest strategies, & surface personalized trade ideas using real-time data ",
  },
  {
    num: "3",
    title: "Act & Adapt",
    description:
      "Receive actionable alerts with suggested entry/exit points. Your AI team  continuously adapts to market changes ",
  },
];

export default function Process() {
  return (
    <div
      className="py-16 px-6 lg:px-0 lg:w-[90%] md:w-full container lg:mx-12 mx-auto"
      id="process"
    >
      <div className="flex flex-col items-center md:px-4">
        <TagLabel text="Our Process" />
        <h2 className="text-center text-[#2B2B2B] max-w-2xl lg:max-w-3xl text-[32px] md:text-[40px] font-semibold mt-4">
          Simple Steps, Powerful Results
        </h2>
        <p className="text-base font-medium text-[#666666] text-center">
          Simplified AI transformation in three clear steps that gives
          real-world results.
        </p>
      </div>
      <div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {processData.map((item, index) => (
            <ProcessCard
              key={index}
              num={item.num}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
