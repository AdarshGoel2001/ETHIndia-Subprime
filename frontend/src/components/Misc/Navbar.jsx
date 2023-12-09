"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Modal } from "..";
import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  }

  
   useEffect(() => {
     // Add and remove the 'overflow-hidden' class based on the navbar state
     if (navbarOpen) {
       document.body.classList.add("overflow-hidden");
     } else {
       document.body.classList.remove("overflow-hidden");
     }

     // Cleanup function to remove the class when the component unmounts or the state changes
     return () => {
       document.body.classList.remove("overflow-hidden");
     };
   }, [navbarOpen]);

  return (
    <>
      <div className="text-white flex items-center h-[10vh] justify-between px-10 md:px-6 mds:pl-0 xs:pr-4">
        <Image
          src={logo}
          alt="SubPrime"
          onClick={handleHome}
          className="h-28 cursor-pointer w-40 md:h-24 md:w-36 mds:h-20 mds:w-28"
        />
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');
            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <div
                        onClick={openConnectModal}
                        className="text-white border border-[#676767] hover:border-white cursor-pointer py-2 px-4 rounded-lg xs:hidden"
                      >
                        Connect Wallet
                      </div>
                    );
                  }
                  if (chain.unsupported) {
                    return (
                      <div
                        onClick={openChainModal}
                        className="text-white border border-[#676767] hover:border-white cursor-pointer py-2 px-4 rounded-lg xs:hidden"
                      >
                        Wrong network
                      </div>
                    );
                  }
                  return (
                    <div
                      onClick={() => setModal(!modal)}
                      className="text-white border border-[#676767] hover:border-white cursor-pointer py-2 px-4 rounded-lg xs:hidden"
                    >
                      Open App
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        {/* <div
          onClick={() => setModal(!modal)}
          className="text-white border border-[#676767] hover:border-white cursor-pointer py-2 px-4 rounded-lg xs:hidden"
        >
          Open App
        </div> */}
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
        <div className="h-[100vh] flex items-start py-4">
          <div
            onClick={() => setModal(!modal)}
            className="text-white mx-4 border w-full text-center border-[#676767] hover:border-white cursor-pointer py-1 px-3 rounded-lg"
          >
            Open App
          </div>
        </div>
      )}
      <Modal isOpen={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default Navbar;
