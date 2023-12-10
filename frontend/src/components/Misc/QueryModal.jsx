import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import lend from "../../../public/lend.json";
import loan from "../../../public/loan.json";

const QueryModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [option, setOption] = useState(null);
  const route = useRouter();
  const [salary, setSalary] = useState("");
  const [credit, setCredit] = useState("");
  const [age, setAge] = useState("");

  const handleClick = (opt) => {
    if (opt === "lender") {
      setOption("lender");
      route.push("/lender");
    } else {
      setOption("borrower");
      route.push("/borrower");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black/90 z-50 ">
      <div
        ref={modalRef}
        className="bg-gradient overflow-hidden w-1/2 h-1/2 md:w-3/5 md:h-3/5 mds:w-[70%] mds:h-2/5 sm:w-4/5 sm:h-1/3 xs:w-[90%] flex justify-center items-center rounded-[25px]"
      >
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white">
              Salary:
            </label>
            <input
              type="text"
              name="salary"
              placeholder="Enter the amount"
              className="w-full px-4 text-white py-2 outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white">
              Credit:
            </label>
            <input
              type="text"
              name="credit"
              placeholder="Enter the interest rate"
              className="w-full px-4 py-2 text-white outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white">
              Age:
            </label>
            <input
              type="text"
              name="age"
              placeholder="1 year"
              className="w-full px-4 py-2 text-white outline-none bg-transparent border border-[#787878] mt-2 rounded-md"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className=" w-full mt-4 hover:bg-[#000]/40 text-white px-4 py-2 rounded-md"
            >
              Send 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryModal;
