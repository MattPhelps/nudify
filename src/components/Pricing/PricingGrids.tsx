import React from 'react';
import SectionTitle from "../Common/SectionTitle";
import SinglePricing from './SinglePricing';

const PricingGrids = () => {
  const hardCodedPrices = [
    {
      id: "plan_small",
      nickname: "subscription",
      unit_amount: 40
    },
    {
      id: "plan_medium",
      nickname: "payasgo",
      unit_amount: 80
    },
  ];

  return (
    <div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <SectionTitle
          title="Pricing Plan"
          paragraph="1 IMAGE = 1 CREDIT"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7.5">
          {hardCodedPrices.map((price, key) => (
            <SinglePricing price={price} key={price.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
