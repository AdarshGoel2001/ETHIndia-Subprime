import { BorrowerNav, InterestedReqCard } from "@/components";

const Interested = () => {
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
        Interested Lenders Requests
      </div>
      <div className="mt-10 px-10 sm:px-4 space-y-4">
        {data.map((item, key) => (
          <div key={key}>
            <InterestedReqCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interested;
