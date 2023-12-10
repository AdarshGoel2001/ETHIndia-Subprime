import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import logo from '../../../public/logo.png'

const Kyc = () => {
    const route = useRouter();
      const [formData, setFormData] = useState({
        name: "",
        aadhar: "",
        pan: "",
        address: "",
        phone: "",
        credit: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSave = () => {
        console.log("Form Data:", formData);
        route.push("/borrower");
      };

  return (
    <div className="flex justify-center items-center md:flex-col py-10">
      <div className="w-1/2 md:w-full">
        <div className="text-[40px] md:text-[32px] mds:text-[28px] sm:text-[20px] xs:text-[18px] font-bold text-white text-center pt-4">
          Fill this form for KYC
        </div>

        <div className="mt-4 px-8 xs:px-4 py-4 mx-auto sm:mx-12 xs:mx-4 max-w-md bg-black/40 rounded-xl ">
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder=""
              className="w-full px-4 py-2 placeholder:text-[#989898] border border-[#676767] rounded-md bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Aadhar Number:
            </label>
            <input
              type="text"
              name="Enter Aadhar No"
              value={formData.aadhar}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              PAN Card Number:
            </label>
            <input
              type="text"
              name="Enter Pan No"
              value={formData.pan}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Address:
            </label>
            <textarea
              name="Enter Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              name="Enter Phone no"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Credit Information:
            </label>
            <input
              type="text"
              name="Enter Credit Details"
              value={formData.credit}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleSave}
              className="hover:bg-black/40 mt-2 text-white w-full py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center flex-col">
        <Image
          src={logo}
          alt="loan"
          className="w-[500px] h-[500px] sm:w-[400px] sm:h-[400px] xs:w-[300px] xs:h-[300px]"
        />
        <div className="space-y-2">
          <div className="text-white">CID No :</div>
          <div className="text-white py-2 px-6 border border-[#787878] rounded-lg  ">
            ABCDEFGHIJ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kyc