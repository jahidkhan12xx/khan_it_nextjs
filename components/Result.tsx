import Image from "next/image";

const Result = () => {
  return (
    <div className="py-13 container mx-auto px-6">
      <p className="md:text-center text-left">
        <span className=" px-4 py-2 rounded-4xl text-sm bg-[#F0F7FF] text-[#177DEA] font-semibold">
          Proven Results
        </span>
      </p>
      <h1 className="md:text-5xl text-3xl font-bold py-7 md:text-center text-left">
        Results That Speak for Themselves
      </h1>
      <p className="text-[#65758B] md:text-center text-left pb-12">
        We focus on measurable outcomes that directly impact your bottom line.
      </p>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <div className="bg-white px-6 py-8 flex justify-center items-center flex-col rounded-2xl w-full md:w-80">
          <Image src={"/1.png"} alt="1" height={64} width={64} />
          <h1 className="text-[#F97015] pt-3 pb-2 text-5xl font-bold">150%</h1>
          <p className="text-[#65758B]">Average Increase in Online Inquiries</p>
        </div>
        <div className="bg-white px-6 py-8 flex justify-center items-center flex-col rounded-2xl w-full md:w-80">
          <Image src={"/2.png"} alt="1" height={64} width={64} />
          <h1 className="text-[#14B884] pt-3 pb-2 text-5xl font-bold">2.5x</h1>
          <p className="text-[#65758B]">Higher Conversion Rates</p>
        </div>
        <div className="bg-white px-6 py-8 flex justify-center items-center flex-col rounded-2xl w-full md:w-80">
          <Image src={"/3.png"} alt="1" height={64} width={64} />
          <h1 className="text-[#3B79F6] pt-3 pb-2 text-5xl font-bold">70%</h1>
          <p className="text-[#65758B]">New Business from Referrals</p>
        </div>
        <div className="bg-white px-6 py-8 flex justify-center items-center flex-col rounded-2xl w-full md:w-80">
          <Image src={"/4.png"} alt="1" height={64} width={64} />
          <h1 className="text-[#F59E0B] pt-3 pb-2 text-5xl font-bold">4.8/5</h1>
          <p className="text-[#65758B]">Client Satisfaction Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
