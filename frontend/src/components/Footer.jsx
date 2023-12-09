import Image from "next/image";
import logo from '../../public/logo.png'


const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {

  return (
    <footer className="flex justify-center items-center flex-col border-t sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row sm:flex-col sm:px-4 px-16">
        <div className="flex flex-1 flex-col">
          <div className="flex justify-start items-start cursor-pointer">
            <Image
              src={logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="text-white font-semibold text-lg ml-1">SubPrime</p>
          </div>
          <p className="font-poppins text-white font-semibold text-base mt-6">
            Get the latest updates
          </p>
          <div className="flex justify-between items-center md:w-full minlg:w-557 w-357 mt-6 border rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full bg-transparent px-4 rounded-md font-normal text-xs minlg:text-bg outline-none"
            />
            <div className="flex-initial">
              <div className="border text-sm minlg:text-lg py-2 px-6 sm:px-2 minlg:px-8 font-poppins font-semibold text-white cursor-pointer">
                Email Me
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-between gap-4 items-start flex-wrap mx-10 sm:mx-2 md:mt-8">
          <FooterLinks
            heading="SubPrime"
            items={["Explore", "How it Works", "Contact Us"]}
          />
          <FooterLinks
            heading="Support"
            items={[
              "Help Center",
              "Terms of Service",
              "Legal",
              "Privacy Policy",
            ]}
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full sm:px-4 px-16">
        <div className="flex justify-between items-center flex-row w-full minmid:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            Subprime, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
