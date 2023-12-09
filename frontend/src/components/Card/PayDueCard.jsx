import React from "react";

const PayDueCard = ({ item }) => {
  return (
    <div className="rounded-lg px-6 xs:px-3 xs:py-3 bg-[#000]/40 py-4">
      <div className="flex space-x-2 items-center">
        <div className="text-white text-[20px]">{item.name}</div>
        <div className="text-[#787878]">#{item.id}</div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-4">
          <div className="flex gap-8 flex-wrap">
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Amount</div>
              <div className="text-white text-[16px]">${item.amount}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Interest</div>
              <div className="text-white text-[16px]">{item.interest}%</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Duration</div>
              <div className="text-white text-[16px]">{item.duration}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Genesis Time</div>
              <div className="text-white text-[16px]">{item.genesisTime}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Emi</div>
              <div className="text-white text-[16px]">{item.emi}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex gap-6">
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Total Due</div>
              <div className="text-white text-[16px]">{item.totalDue}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#787878] text-[20px]">Total Due</div>
              <div className="text-white text-[16px]">{item.totalDue}</div>
            </div>
          </div>
          <div className="text-white space-y-2">
            <div className=" text-[20px] text-[#787878]">Pay</div>
            <div className="flex items-center gap-4 xs:flex-col">
              <input
                type="text"
                placeholder="Enter Amount"
                className="bg-transparent border rounded-xl py-1 mds:py-0.5 px-4 outline-none"
              />
              <div className="cursor-pointer">Pay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayDueCard;
