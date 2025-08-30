"use client";

import React, { useState } from "react";
import PriceCard from "../../components/price";
import TagLabel from "../../components/tagLabel";

export default function Pricing() {
  const [selectedCard, setSelectedCard] = useState("Professional Plan");
  const [billingCycle, setBillingCycle] = useState("month");

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const pricingData = {
    month: [
      {
        title: "Free",
        amount: "$0",
        duration: "month",
        description: "Perfect for casual investors",
        listItems: [
          "Access to 1 AI agent (Analyst Lite)",
          "Basic portfolio tracking",
          "Limited trade suggestions",
          "Watchlist for up to 5 assets",
          "Educational insights & recaps",
        ],
      },
      {
        title: "Premium",
        amount: "$15",
        duration: "month",
        description: "For active investors ready to level up",
        listItems: [
          "Full access to all AI agents",
          "Real-time alerts & trade signals",
          "Automated portfolio syncing with broker",
          "Strategy backtesting tools",
          "Up to 3 custom AI dashboards",
        ],
      },
      {
        title: "Enterprise",
        amount: "$25",
        duration: "month",
        description: "For professional teams & institutions",
        listItems: [
          "Dedicated AI advisor agent",
          "API access & custom integrations",
          "Team collaboration tools",
          "Unlimited assets & strategies",
          "Priority support & performance reports",
        ],
      },
    ],
    year: [
      {
        title: "Starter Plan",
        amount: "$500",
        duration: "year",
        description:
          "Perfect for individuals or small teams just getting started with CRM.",
        listItems: [
          "Contact and deal management",
          "Email tracking and templates",
          "Basic pipeline customization",
          "Task and activity tracking",
          "Integration with Gmail/Outlooks",
        ],
      },
      {
        title: "Professional Plan",
        amount: "$700",
        duration: "year",
        description:
          "Built for growing businesses that need automation and deeper insights.",
        listItems: [
          "All features in “Starter Plan”",
          "Advanced sales automation",
          "Custom reporting and dashboards",
          "Workflow automation builder",
          "Multi-pipeline management",
          "Lead scoring and segmentation",
        ],
      },
      {
        title: "Enterprise Plan",
        amount: "$1500",
        duration: "year",
        description:
          "For large teams that need full control, customization, and premium support.",
        listItems: [
          "All features in “Professional Plan”",
          "Custom roles and permissions",
          "Team hierarchy and user access control",
          "Dedicated account manager",
          "Predictive lead analytics",
        ],
      },
    ],
  };

  const currentPlans = pricingData[billingCycle] || [];

  return (
    <div className="container mx-auto  py-16 px-6" id="#pricing">
      <div className="flex flex-col items-center gap-6">
        <TagLabel text="Pricing" />
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-center max-w-2xl text-black leading-tight">
          Flexible Plans for Businesses of All Sizes
        </h2>
        <div className="flex justify-center border border-[#080035] max-w-[222px] mb-8 lg:mb-10 rounded-[40px]">
          <button
            onClick={() => setBillingCycle("month")}
            className={`px-4 py-2 text-[14px] md:text-base font-medium rounded-full ${
              billingCycle === "month"
                ? "bg-[#080035] text-white"
                : "text-[#626262]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("year")}
            className={`flex flex-row text-[14px] md:text-base font-medium items-center justify-center gap-1 px-2 py-2 rounded-full ${
              billingCycle === "year"
                ? "bg-[#080035] text-white"
                : " text-[#626262]"
            }`}
          >
            Yearly <span className="bg-[#AAAAAA] rounded-full py-1 px-2">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid lg:flex items-center lg:px-6 gap-12 lg:gap-6 xl:gap-8 lg:flex-row lg:justify-center">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleCardClick(plan.title)}
          >
            <PriceCard
              title={plan.title}
              amount={plan.amount}
              duration={plan.duration}
              description={plan.description}
              listItems={plan.listItems}
              buttonLabel="Start Free Trial"
              variant={selectedCard === plan.title ? "white" : "default"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
