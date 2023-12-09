import { Footer, Navbar } from "@/components";
import Lottie from "lottie-react";
import animationData from '../../public/card.json'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleLender = () => {
    router.push("/lender");
  };  

  const handleBorrower = () => {
    router.push("/borrower");
  }
  return (
    <div>
      <Navbar />

      <div className="min-h-[80vh] mb-8 flex items-center px-20 md:px-12 mds:px-8 sm:px-4">
        <div className=" w-[50%] mt-20 mds:w-[80%] sm:w-full">
          <div className="text-[48px] md:text-[40px] mds:text-[32px] sm:text-[28px] font-bold text-white">
            Get access to the best crypto asset managers in the world
          </div>
          <div className="text-[#989898] text-[20px] mds:text-[16px] sm:text-[14px] mt-4 w-[90%]">
            Valio makes professional crypto asset management available for
            everyone. Deposit and withdraw at any time, no lockups! Get started
            in 2 minutes or less with as little as 50$.
          </div>
          <div className="flex mt-8 gap-8 xs:block xs:space-y-4">
            {/* <div
              onClick={handleLender}
              className="text-white border border-[#676767] hover:border-white py-3 px-5 rounded-lg cursor-pointer text-center"
            >
              Be a Lender
            </div>
            <div onClick={handleBorrower} className="text-white border border-[#676767] hover:border-white py-3 px-5 rounded-lg cursor-pointer text-center">
              Be a Borrower
            </div> */}
          </div>
        </div>
        <div className="w-[50%] justify-center items-center flex mds:hidden z-10">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      <div className="md:flex justify-center items-center px-20 lgm:px-14 md:px-10 mds:px-8 sm:px-4 xs:px-4">
        <div className=" p-8 md:p-6 sm:p-4 xs:p-4 rounded-xl bg-black/40  w-1/2 md:w-[70%] mds:w-[80%] sm:w-full  border">
          <div className="text-[40px] md:text-[32px] mds:text-[26px] sm:text-[20px] font-bold text-white">
            Unleashing Financial Freedom
          </div>
          <div className=" text-[#989898] text-[20px] mds:text-[16px] sm:text-[14px] mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            cumque saepe necessitatibus molestiae. Eius, alias molestias rem,
            animi sed nam laudantium, magni modi aliquid saepe ducimus placeat
            facilis excepturi mollitia doloribus voluptate officiis quidem
            voluptates. Similique repellendus corrupti fuga, ipsam nam eveniet
            dolores numquam illo animi eum ex amet laborum rem, facere atque
            nemo, assumenda beatae ipsum suscipit facilis magnam a ducimus
            adipisci! Vitae, iste voluptate facere nulla voluptatem suscipit?
            Suscipit voluptate modi animi accusantium impedit eveniet esse
            aliquid beatae totam nihil, dignissimos non dolorum accusamus, fuga
            corporis cum corrupti debitis aperiam omnis tempora itaque veniam ea
            distinctio perspiciatis. Consectetur.
          </div>
        </div>
      </div>
      <div className="flex my-10 justify-end  md:justify-center items-center px-20 lgm:px-14 md:px-10 mds:px-8 sm:px-4 xs:px-4">
        <div className="p-8 md:p-6 sm:p-4 xs:p-4 rounded-xl bg-black/40  w-1/2 md:w-[70%] mds:w-[80%] sm:w-full  border">
          <div className="text-[40px] md:text-[32px] mds:text-[26px] sm:text-[20px] font-bold text-white">
            Unleashing Financial Freedom
          </div>
          <div className="text-[#989898] text-[20px] mds:text-[16px] sm:text-[14px] mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            cumque saepe necessitatibus molestiae. Eius, alias molestias rem,
            animi sed nam laudantium, magni modi aliquid saepe ducimus placeat
            facilis excepturi mollitia doloribus voluptate officiis quidem
            voluptates. Similique repellendus corrupti fuga, ipsam nam eveniet
            dolores numquam illo animi eum ex amet laborum rem, facere atque
            nemo, assumenda beatae ipsum suscipit facilis magnam a ducimus
            adipisci! Vitae, iste voluptate facere nulla voluptatem suscipit?
            Suscipit voluptate modi animi accusantium impedit eveniet esse
            aliquid beatae totam nihil, dignissimos non dolorum accusamus, fuga
            corporis cum corrupti debitis aperiam omnis tempora itaque veniam ea
            distinctio perspiciatis. Consectetur.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
