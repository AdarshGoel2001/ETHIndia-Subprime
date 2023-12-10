import { LenderNav } from '@/components'
import React, {useState} from 'react'
import { ROUTER_ADDRESS } from '../../config';
import router from '../../router.json'
import { parseUnits } from 'ethers';
import { useAccount, usePrepareContractWrite, useContractRead, useWaitForTransaction } from 'wagmi';

const AddRequests = () => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState("1 Year");
  const { address, isConnected } = useAccount();
  const { data: requests } = useContractRead({
    address: ROUTER_ADDRESS,
    abi: router.abi,
    functionName: 'getAllRequests',
  });

  console.log(requests);

  // const { error: requestError, config: requestConfig, status: requestConfigStatus } = usePrepareContractWrite({
  //   address: ROUTER_ADDRESS,
  //   abi: router.abi,
  //   functionName: 'buy',
  //   args: [parseUnits(amount ? amount.toString() : "0", 18), interest, parseUnits(amount ? amount.toString() : "0", 18)],
  //   value: purchaseCost ?? BigInt(0)
  // });
  // const { error: buyError, status: buyStatus, data: buyData, write: buy } = useContractWrite(buyConfig);
  // const { data: buyTxData, isError: buyTxError, isLoading: buyTxLoading } = useWaitForTransaction({ hash: buyData?.hash })


  return (
    <div>
      <LenderNav />

      <div>
        <div className="text-[48px] md:text-[40px] mds:text-[32px] sm:text-[28px] xs:text-[24px] font-bold text-white text-center pt-10">
          Create a Request
        </div>

        <div className="flex justify-center items-center mt-8">
          <div className="bg-[#000]/40 p-8 rounded-md w-full sm:mx-4 max-w-md">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-white">
                  Amount:
                </label>
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter the amount"
                  className="w-full px-4 text-white py-2 outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-white">
                  Interest:
                </label>
                <input
                  type="text"
                  name="interest"
                  placeholder="Enter the interest rate"
                  className="w-full px-4 py-2 text-white outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
                  value={interest}
                  onChange={e => setInterest(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-white">
                  Duration:
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="1 year"
                  className="w-full px-4 py-2 text-white outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
                  onChange={e => setDuration(e.target.value)}
                  // value={duration}
                  disabled
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className=" w-full mt-4 hover:bg-[#000]/40 text-white px-4 py-2 rounded-md"
                >
                  Create Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRequests