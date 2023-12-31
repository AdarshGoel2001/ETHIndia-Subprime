import { AllInvestorCard, LenderNav } from "@/components";
import InterestedRes from "@/components/Card/InterestedPeople";
const {auth, resolver, protocol} = require('@iden3/js-iden3-auth')

const InterestedPeople = () => {
  const createQuery = (e) => {
    const age = e.age;
    const salary = e.salary;
    const credit = e.credit;
    const proofRequest: protocol.ZKPRequest = {
      id: 1,
      circuitId: "credentialAtomicQuerySigV2",
      query: {
        allowedIssuers: ["*"],
        type: "custom",
        context: "ipfs://QmXvKFKRf2ryQvYZMhNDBDJqnFVDqhFWVsYU7phM8BpjBP",
        credentialSubject: {
          creditScore: {
            $gt: credit,
          },
          age: {
            $gt: age,
          },
          minSal: {
            $gt: salary,
          },
        },
      },
    };
    request.body.scope = [...scope, proofRequest];
  };
  
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
      <LenderNav />
      <div className="text-[48px] md:text-[40px] mds:text-[32px] sm:text-[28px] xs:text-[24px] font-bold text-white text-center pt-10">
        People Interested
      </div>
      <div className="mt-10 px-10 sm:px-4 space-y-4">
        {data.map((item, key) => (
          <div key={key}>
            <InterestedRes item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestedPeople;
