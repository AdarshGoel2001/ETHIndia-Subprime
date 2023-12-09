import React, { useState } from "react";
import Chat from "../Chat";

const InvestorDetailCard = ({ item }) => {
  const [interested, setIntersted] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return showChat ? (
    <div>
      <Chat setShowChat={setShowChat} />
    </div>
  ) : (
    <div className="rounded-lg px-6 mxs:px-3 xs:py-3 bg-[#000]/40 py-4 ">
      <div className="flex space-x-2 items-center">
        <div className="text-white text-[20px]">{item.name}</div>
        <div className="text-[#787878]">#{item.id}</div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-8 flex-wrap">
            <div>
              <div className="text-[#787878] text-[20px]">Amount</div>
              <div className="text-white text-[16px]">${item.amount}</div>
            </div>
            <div>
              <div className="text-[#787878] text-[20px]">Interest</div>
              <div className="text-white text-[16px]">{item.interest}%</div>
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
            <div>
              <div className="text-[#787878] text-[20px]">Total Due</div>
              <div className="text-white text-[16px]">{item.totalDue}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setIntersted(true)}
            className={` ${
              interested
                ? "bg-green-500 text-black cursor-not-allowed"
                : "bg-transparent text-white cursor-pointer "
            } py-2 px-4 rounded-lg border `}
          >
            Interested
          </div>
          {interested && (
            <div
              onClick={() => setShowChat(true)}
              className="text-white cursor-pointer py-2 px-4 border border-[#787878] rounded-lg "
            >
              Chat
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorDetailCard;
