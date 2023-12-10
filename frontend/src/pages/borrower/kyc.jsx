import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import axios from "axios";
import { useAccount } from "wagmi";

const Kyc = () => {
  const route = useRouter();
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: "",
    age: null,
    minSal: null,
    aadhar: null,
    pan: null,
    address: "",
    phone: null,
    creditScore: null,
    id: "",
    userAddress: address,
  });

  const [jsonData, setJsonData] = useState(null);

  const [jsonData2, setJsonData2] = useState("");

  const doKyc = async () => {
    try {
      const data = {
        id: formData.id,
        creditScore: formData.creditScore,
        age: formData.age,
        minSal: formData.minSal,
      };

      const data2 = {
        name: formData.name,
        aadhar: formData.aadhar,
        pan: formData.pan,
        address: formData.address,
        phone: formData.phone,
        creditScore: formData.credit,
        age: formData.age,
        minSal: formData.salary,
        userAddress: formData.userAddress,
      };

      const response = await axios.post(
        "http://localhost:3333/polygon-id/verifyKYC",
        data
      );
      const response2 = await axios.post(
        "http://localhost:3333/lighthouse/uploadToLigthhouse",
        data2
      );

      console.log(response2);

      setJsonData(response.data);
      setJsonData2(response2.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };
  const handleIDChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      id: e.target.value,
    }));
  };
  const handleMinSalChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      minSal: Number(e.target.value),
    }));
  };
  const handleAgeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      age: Number(e.target.value),
    }));
  };

  const handleAadharChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      aadhar: e.target.value,
    }));
  };

  const handlePanChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      pan: e.target.value,
    }));
  };

  const handleAddressChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      address: e.target.value,
    }));
  };

  const handlePhoneChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: e.target.value,
    }));
  };

  const handleCreditChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      creditScore: Number(e.target.value),
    }));
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    route.push("/borrower");
  };

  const encodedData = encodeURIComponent(JSON.stringify(jsonData));

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
              onChange={handleNameChange}
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
              onChange={handleAadharChange}
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
              onChange={handlePanChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Salary sir?
            </label>
            <input
              type="text"
              name="Enter mini sal No"
              value={formData.minSal}
              onChange={handleMinSalChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              DID Number:
            </label>
            <input
              type="text"
              name="Enter Pan No"
              value={formData.id}
              onChange={handleIDChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Age:
            </label>
            <input
              type="text"
              name="Enter age No"
              value={formData.age}
              onChange={handleAgeChange}
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
              onChange={handleAddressChange}
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
              onChange={handlePhoneChange}
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
              value={formData.creditScore}
              onChange={handleCreditChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="text-center">
            <button
              onClick={doKyc}
              className="hover:bg-black/40 mt-2 text-white w-full py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      {jsonData && (
        <div className="w-1/2 flex items-center justify-center flex-col">
          {/* <Image
          src={logo}
          alt="loan"
          className="w-[500px] h-[500px] sm:w-[400px] sm:h-[400px] xs:w-[300px] xs:h-[300px]"
        /> */}
          <Image
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodedData}&amp;size=100x100`}
            alt="l"
            title="r"
            width={2000}
            height={2000}
            className="w-[500px] h-[500px] sm:w-[400px] sm:h-[400px] xs:w-[300px] xs:h-[300px]"
          />
          <div className="space-y-2">
            <div className="text-white">CID No :</div>
            <div className="text-white py-2 px-6 border border-[#787878] rounded-lg  ">
              {jsonData2}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kyc;
