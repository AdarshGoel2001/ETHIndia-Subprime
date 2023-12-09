import { BorrowerNav } from "@/components";

const {
  default: InvestorDetailCard,
} = require("@/components/Card/InvestorDetailCard");

const BorrowerHome = () => {
  const data = [
    {
      id: 123,
      name: "John Doe",
      amount: 1000,
      interest: 10,
      duration: 12,
      genesisTime: Date.now(),
      emi: 100,
      totalDue: 1100,
    },
    {
      id: 123,
      name: "John Doe",
      amount: 1000,
      interest: 10,
      duration: 12,
      genesisTime: Date.now(),
      emi: 100,
      totalDue: 1100,
    },
    {
      id: 123,
      name: "John Doe",
      amount: 1000,
      interest: 10,
      duration: 12,
      genesisTime: Date.now(),
      emi: 100,
      totalDue: 1100,
    },
  ];


  return (
    <div>
      <BorrowerNav />
      <div className="text-[48px] md:text-[40px] mds:text-[32px] sm:text-[28px] xs:text-[24px] font-bold text-white text-center pt-10">
        Lenders Requests
      </div>
      <div className="mt-10 px-10 md:px-6 sm:px-4 space-y-4">
        {data.map((item, key) => (
          <div key={key}>
            <InvestorDetailCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowerHome;
