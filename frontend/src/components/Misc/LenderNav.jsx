import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";

const LenderNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const handleNavigate = () => {
    router.push("/lender/my-requests");
  };

  const handleCreate = () => {
    router.push("/lender/add-request");
  };
  return (
    <>
      <div className="text-white flex items-center h-[10vh] justify-between px-10 md:px-6 mds:pl-0 xs:pr-4">
        <Image
          src={logo}
          alt="SubPrime"
          onClick={handleHome}
          className="h-28 cursor-pointer w-40 md:h-24 md:w-36 mds:h-20 mds:w-28"
        />
        <div className="flex space-x-4">
          <div
            onClick={handleNavigate}
            className="text-white cursor-pointer py-2 px-4 xs:hidden font-semibold tracking-widest"
          >
            My Requests
          </div>
          <div
            onClick={handleCreate}
            className="text-white cursor-pointer py-2 px-4 xs:hidden font-semibold tracking-widest"
          >
            Create Request
          </div>
        </div>
        <div className="hidden xs:block">
          {navbarOpen ? (
            <div>
              <RxCross2
                color="white"
                size={30}
                onClick={() => setNavbarOpen(!navbarOpen)}
              />
            </div>
          ) : (
            <div>
              <MdMenu
                color="white"
                size={30}
                onClick={() => setNavbarOpen(!navbarOpen)}
              />
            </div>
          )}
        </div>
      </div>
      {navbarOpen && (
        <div className="h-[90vh] flex items-start py-4">
          <div
            onClick={handleNavigate}
            className="text-white mx-4 w-full text-center cursor-pointer py-1 px-3 rounded-lg"
          >
            My Requests
          </div>
        </div>
      )}
    </>
  );
};

export default LenderNav;
