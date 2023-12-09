import { useRouter } from 'next/router';
import React, { useState } from 'react'

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
    <div>
      <div className="text-[48px] md:text-[40px] mds:text-[32px] sm:text-[28px] xs:text-[24px] font-bold text-white text-center pt-10">
        Fill this form for KYC
      </div>

      <div className="mt-8 mx-auto sm:mx-12 xs:mx-4 max-w-md ">
        <div className="mb-4">
          <label className="text-white block text-sm font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder=''
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
            className="bg-transparent text-white w-full py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kyc