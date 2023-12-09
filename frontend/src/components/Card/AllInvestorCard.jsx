import React from "react";

const AllInvestorCard = ({ item }) => {

  return (
    <div className="rounded-lg px-6 bg-[#000]/40 py-4 flex justify-between items-center">
      <div>
        <div className="flex space-x-2 items-center">
          <div className="text-white text-[20px]">{item.name}</div>
          <div className="text-[#787878]">#{item.id}</div>
        </div>
        <div className="flex space-x-8">
          <div>
            <div className="text-[#787878] text-[20px]">Amount</div>
            <div className="text-white text-[16px]">${item.amount}</div>
          </div>
          <div>
            <div className="text-[#787878] text-[20px]">Interest</div>
            <div className="text-white text-[16px]">${item.interest}</div>
          </div>
          <div>
            <div className="text-[#787878] text-[20px]">Duration</div>
            <div className="text-white text-[16px]">{item.duration}</div>
          </div>
          <div>
            <div className="text-[#787878] text-[20px]">Genesis Time</div>
            <div className="text-white text-[16px]">{item.genesisTime}</div>
          </div>
          <div>
            <div className="text-[#787878] text-[20px]">Emi</div>
            <div className="text-white text-[16px]">{item.emi}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInvestorCard;
