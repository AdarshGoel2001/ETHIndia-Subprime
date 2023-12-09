import { LenderNav } from '@/components'
import React from 'react'

const AddRequests = () => {
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
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 text-white outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-white">
                  Amount:
                </label>
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter the amount"
                  className="w-full px-4 text-white py-2 outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
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
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-white">
                  Duration:
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="Enter the duration"
                  className="w-full px-4 py-2 text-white outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
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