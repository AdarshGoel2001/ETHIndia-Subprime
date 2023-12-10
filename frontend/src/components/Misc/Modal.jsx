import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import lend from "../../../public/lend.json";
import loan from "../../../public/loan.json";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [option, setOption] = useState(null);
  const route = useRouter();

  const handleClick = (opt) => {
    if (opt === "lender") {
      setOption("lender");
      route.push("/lender");
    } else {
      setOption("borrower");
      route.push("/borrower/kyc");
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
        <div
          onClick={() => handleClick("lender")}
          className={`flex flex-col h-full w-1/2 justify-center items-center cursor-pointer ${
            option === "lender" && "bg-purple-950"
          }`}
        >
          <Lottie animationData={lend} loop={true} className="h-4/5" />
          <div className="text-white font-semibold text-[28px] mds:text-[24px] sm:text-[20px]">
            Lender
          </div>
        </div>
        <div
          onClick={() => handleClick("borrower")}
          className={`flex flex-col h-full w-1/2 justify-center items-center cursor-pointer ${
            option === "borrower" && "bg-purple-950"
          }`}
        >
          <Lottie animationData={loan} loop={true} className="h-4/5" />
          <div className="text-white font-semibold text-[28px] mds:text-[24px] sm:text-[20px]">
            Borrower
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
