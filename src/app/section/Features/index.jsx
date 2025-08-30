import React from "react";
import TagLabel from "../../components/tagLabel";
import CardFeatures from "../../components/card";
import design from "../../asset/features/design.svg";
import intelligence from "../../asset/features/intelligence.svg";
import market from "../../asset/features/market.svg";
import portfolio from "../../asset/features/portfolio.svg";
import Image from "next/image";
import trading from '../../asset/features/trading.svg'
import automation from '../../asset/features/automation.svg'
import platform from '../../asset/features/platform.svg'

export default function Features() {
  return (
    <div className="py-16 px-6 lg:px-0 lg:w-[90%] md:w-full container lg:mx-12 mx-auto" id="features">
      <div className="flex flex-col items-center md:px-4">
        <TagLabel text="Features" />
        <h2 className="text-center text-[#2B2B2B] max-w-2xl lg:max-w-3xl text-[32px] md:text-[40px] font-semibold mt-4">
          Packed with Intelligence & Built for Performance.
        </h2>
        <p className="text-base font-medium text-[#666666] text-center">
          Explore the smart features that power confident, real-time investing.
        </p>
      </div>
      <div className="mt-6">
        <CardFeatures
          image={design}
          divClassName="md:max-w-[30rem]"
          imageClassName=""
          className="flex flex-col md:flex-row items-center md:px-8 justify-start gap-10 w-full lg:w-[920px] xl:w-full h-[379px] md:h-[400px]"
          tittle="AI Powered Strategy Creation"
          description="Backtest strategies with historical data and visualize performance before taking action."
        />
      </div>

      <div className=" flex flex-col md:flex-row justify-center gap-8 mt-8">
        <CardFeatures
          className="md:w-[355px] lg:w-[455px] xl:w-1/2 h-[379px] md:h-[640px] lg:h-[750px]"
          tittle="Multi-Agent Intelligence"
          description="Each agent handles a key part of your strategy fundamentals, options, sentiment, and more."
          image={intelligence}
          imageClassName="h-[250px] md:h-full py-3"
        />
        <div className="xl:w-1/2 flex flex-col gap-8">
          <CardFeatures
            className="md:w-[355px] lg:w-[455px] xl:w-full h-[379px] md:h-[305px] lg:h-[350px]"
            tittle="Deep Market Analysis"
            description="Dive into fundamental, technical, and sentiment analysis without switching tabs or tools."
            image={portfolio}
            // h-[379px] md:h-[442px]
          />
          <CardFeatures
            className="md:w-[355px] lg:w-[455px] xl:w-full h-[379px] md:h-[305px] lg:h-[350px]"
            tittle="Secure Portfolio Syncing"
            description="Connect your accounts securely. No trades executed—just pure analysis, on your terms."
            image={market}
            imageClassName="md:h-[160px] lg:h-full py-3"
          />
        </div>
      </div>

<div className="hidden md:flex flex-row gap-4 lg:gap-8 mt-8">
  <div className="flex flex-col gap-4">
    <Image src={platform} alt="platform" />
    <h3 className="text-[20px] font-semibold text-[#2b2b2b]">
      All-in-One Platform
    </h3>
    <p className="text-[#666666] text-base font-medium">
      From research to execution, everything lives in one smart dashboard
    </p>
  </div>

  <div className="flex flex-col gap-4">
    <Image src={trading} alt="trading" />
    <h3 className="text-[20px] font-semibold text-[#2b2b2b]">
      Confident Trading
    </h3>
    <p className="text-[#666666] text-base font-medium">
      Backtested strategies and alerts reduce the fear of guessing wrong
    </p>
  </div>

  <div className="flex flex-col gap-4">
    <Image src={automation} alt="automation" />
    <h3 className="text-[20px] font-semibold text-[#2b2b2b]">
      Time-Saving Automation
    </h3>
    <p className="text-[#666666] text-base font-medium">
      No spreadsheets, no stress — just fast, actionable recommendations
    </p>
  </div>
</div>

    </div>
  );
}
