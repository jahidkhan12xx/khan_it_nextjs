import Image from "next/image";
import ActionButton from "./Button";
import { FaArrowUpLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-full py-12 px-6 container mx-auto">
      <div className=" p-2">
        <h1 className="md:text-6xl text-4xl max-w-lg md:font-semibold font-bold md:leading-22 leading-14  pb-5">
          Digital{" "}
          <span className="relative inline-block">
            Marketing
            {/* This is the orange accent image */}
            <Image
              src={"/spark.png"}
              alt="spark"
              className="absolute -top-1 -right-8 object-contain"
              height={40}
              width={40}
            />
          </span>
          <br />
          Agency in <br />
          Bangladesh
        </h1>
        <p className="text-[#65758B] pb-8   max-w-xl">
          Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150%{" "}
          more leads and 2.5x higher conversions through integrated digital{" "}
          marketing and web design.
        </p>

        <div className="">
          <ActionButton>Book Your Free Consultation</ActionButton>
        </div>
      </div>
      <div className=" sm:flex gap-5 hidden  ">
        <div className="flex flex-col gap-5">
          <div className="bg-linear-to-br from-[#F1F1FD] to-[#F5E9FB] p-7 rounded-3xl border border-[#C7D2FE4D]">
            <Image
              className="pb-5"
              src={"/Group.png"}
              alt="group"
              height={56}
              width={56}
            />
            <h1 className="flex items-center pb-2 ">
              <span className="text-5xl font-bold">200%</span>{" "}
              <span className="text-[#01BC49]">
                <FaArrowUpLong size={40} />
              </span>
            </h1>
            <p className="font-semibold pb-1">More Conversions</p>
            <p className="text-[#060606B2] text-sm">Than Industry Average</p>
          </div>

          <div className="relative w-full  max-w-lg mx-auto">
            <Image
              src="/man.png"
              alt="man"
              height={230}
              width={300}
              className="object-cover rounded-3xl z-10"
            />
            <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
              <Image
                src="/grid.png"
                alt="grid overlay"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="absolute bottom-2 left-4 z-50 ">
              <h1 className="text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-700"></span> Watch
                Case Study
              </h1>
              <p className="text-[#CCCCCC] text-[12px]">2:45 min</p>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col gap-5">
          <div className="bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-5 rounded-3xl border border-[#B4D5F9]">
            <h1 className="text-lg font-bold pb-2">Our Track Record</h1>
            <div className="bg-white p-3 flex gap-3 items-center rounded-2xl border border-[#B4D5F9] mb-3">
              <Image src={"/user.png"} alt="user" height={40} width={40} />
              <div>
                <h1>
                  <span className="text-xl font-bold">500+</span>
                  <span className="text-lg"> Clients</span>
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 flex gap-3 items-center rounded-2xl border border-[#B4D5F9] mb-3">
              <Image src={"/circle.png"} alt="user" height={40} width={40} />
              <div>
                <h1>
                  <span className="text-xl font-bold">98%</span>
                  <span className="text-lg"> Success</span>
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 flex gap-3 items-center rounded-2xl border border-[#B4D5F9]">
              <Image src={"/thunder.png"} alt="user" height={40} width={40} />
              <div>
                <h1>
                  <span className="text-xl font-bold">24h</span>
                  <span className="text-lg"> Support</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br relative from-[#FEEFDB] to-[#FCF2F2] p-5 rounded-3xl border border-[#FDE1BF]  overflow-hidden flex flex-col gap-3">
            <div className="h-14 w-14 bg-[#F459250F] absolute -right-2 -top-2 flex justify-center items-center">
              <Image src={"/svg.png"} height={32} width={32} alt="quote" />
            </div>
            <Image src={"/walton.png"} height={41} width={62} alt="walton" />
            <Image src={"/star.png"} height={20} width={132} alt="walton" />
            <h1 className="text-xl font-semibold">
              "Their marketing strategies <br /> are simply outstanding"
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
