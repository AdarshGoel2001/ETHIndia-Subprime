import { BorrowerNav } from "@/components";
import React, { useState } from "react";
import Chat from "../../components/Chat";
import { ROUTER_ADDRESS } from "@/config";
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import router from '../../router.json'
import { formatEther, ZeroAddress } from "ethers";

const {
  default: InvestorDetailCard,
} = require("@/components/Card/InvestorDetailCard");

const BorrowerHome = () => {
  const { address, isConnected } = useAccount();
  const [interested, setIntersted] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const { data: requests } = useContractRead({
    address: ROUTER_ADDRESS,
    abi: router.abi,
    functionName: "getAllRequests",
  });

  console.log(requests)

  const handleBorrow = async (id, lenderAddress) => {
    console.log(id, lenderAddress)
    setIntersted(id)
    const { request } = await prepareWriteContract({
      address: ROUTER_ADDRESS,
      abi: router.abi,
      functionName: 'addBorrowerToRequest',
      args: [id, lenderAddress]
    })
    const { hash } = await writeContract(request)
    console.log(hash)
    const data = await waitForTransaction({
      hash
    })
  }

  return showChat ? (
    <div>
      <Chat setShowChat={setShowChat} />
    </div>
  ) : (
    <div>
      <BorrowerNav />
      <div className="text-[48px] md:text-[40px] mds:text-[32px] sm:text-[28px] xs:text-[24px] font-bold text-white text-center pt-10">
        Lenders Requests
      </div>
      <div className="mt-10 px-10 md:px-6 sm:px-4 space-y-4">
        {requests && requests?.map((item, key) => (
          <div key={key}>
            <div className="rounded-lg px-6 mxs:px-3 xs:py-3 bg-[#000]/40 py-4 ">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-48 flex-wrap">
                    <div>
                      <div className="text-[#787878] text-[20px]">Amount</div>
                      <div className="text-white text-[16px]">{formatEther(item.amount)}</div>
                    </div>
                    <div>
                      <div className="text-[#787878] text-[20px]">Interest</div>
                      <div className="text-white text-[16px]">{item.interest.toString()}%</div>
                    </div>
                    <div>
                      <div className="text-[#787878] text-[20px]">Duration</div>
                      <div className="text-white text-[16px]">1 Year</div>
                    </div>
                    { item.borrower !== ZeroAddress && <div>
                      <div className="text-[#787878] text-[20px]">Amount Repayed</div>
                      <div className="text-white text-[16px]">{formatEther(item.amountRepaid)}</div>
                    </div> }
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    onClick={() => handleBorrow(item.id.toString(), item.lender)}
                    className={` ${
                      interested === item.id.toString()
                        ? "bg-green-500 text-black cursor-not-allowed"
                        : "bg-transparent text-white cursor-pointer "
                    } py-2 px-4 rounded-lg border `}
                  >
                    Borrow
                  </div>
                  {interested === item.id.toString() && (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowerHome;
