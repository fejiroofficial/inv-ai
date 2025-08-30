import React from "react";
import TagLabel from "../../components/tagLabel";
import ComparisonCard from "../../components/comparism/ComparismCard";
import defaultTick from "../../asset/svg/greenTick.svg";
import XIcon from "../../asset/svg/XIcon.svg";
import logo from "../../asset/svg/INV.AI (1).svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="container mx-auto py-16 px-6" id="howItWorks">
      <div className="flex flex-col items-center my-6">
        <TagLabel text="Comparism" />
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-center max-w-2xl text-black leading-tight">
          How We Compare to our Competitors
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        <div className="w-full flex flex-col items-center gap-4">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <ComparisonCard
            items={[
              "Unified dashboard with full visibility",
              "Instant setup, no downtime",
              "AI automation built into every action",
              "Real-time insights and trade alerts",
              "Sleek, user-friendly design",
            ]}
            borderColor="#444"
            showButton={true}
            buttonLabel="Get Started - It’s Free!"
            className=""
            showDivider={true}
            img={defaultTick}
          />
        </div>

        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-[24px] font-normal text-[#666666] italic text-center">
            Others
          </p>
          <ComparisonCard
            items={[
              "Scattered tools across disconnected apps",
              "Manual setup and long onboarding times",
              "Repetitive, manual workflow",
              "Lagging data and outdated signals",
              "Cluttered and outdated interfaces",
            ]}
            borderColor="#444"
            showButton={false}
            className=""
            showDivider={true}
            img={XIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
