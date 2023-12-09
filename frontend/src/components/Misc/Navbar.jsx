"use client";

import Image from "next/image";
import React, { useState } from "react";
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
                      <button onClick={openConnectModal} type="button">
                        Connect Wallet
                      </button>
                    );
                  }
                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }
                  return (
                    <button type="button">
                        Open App
                    </button>
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
        <div className="h-[90vh] flex items-start py-4">
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
