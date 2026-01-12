import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col justify-center items-center">
      <p className="">
        <span className=" px-4 py-2 rounded-4xl text-sm bg-[#0271E833] text-[#177DEA] font-semibold">
          Why Choose Us
        </span>
      </p>
      <h1 className=" md:text-5xl text-3xl font-bold py-7 text-white">
        Why 100+ Businesses Choose Khan IT
      </h1>
      <p className=" text-[#65758B] pb-12 max-w-2xl text-center">
        You have options. So why do so many businesses in Bangladesh choose Khan
        IT? Simple — we deliver real results, not buzzwords.
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 cursor-pointer">
        <div className="border rounded-2xl border-[#F8FAFC1A] p-5 bg-[#3399FF0D]   hover:bg-[#3399FF1A] hover:border-[#0271E8] transition-all duration-200  group">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2 text-white max-w-sm group-hover:text-[#0271E8]">
            Expert-Led by a Proven SEO Specialist
          </h1>
          <p className="text-[#CBD5E1] max-w-md">
            Khan IT is founded and led by Md Faruk Khan, a certified SEO expert
            with over 10 years of experience and more than 8,000 trained
            professionals.
          </p>
        </div>
        <div className="border rounded-2xl border-[#F8FAFC1A] p-5 bg-[#3399FF0D]   hover:bg-[#3399FF1A] hover:border-[#0271E8] transition-all duration-200  group">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2 text-white group-hover:text-[#0271E8]">
            Specialized in What Works
          </h1>
          <p className="text-[#CBD5E1] max-w-md">
            We specialize in digital marketing and web design. This focus
            enables faster delivery, higher quality, and stronger ROI.
          </p>
        </div>
        <div className="border rounded-2xl border-[#F8FAFC1A] p-5 bg-[#3399FF0D]   hover:bg-[#3399FF1A] hover:border-[#0271E8] transition-all duration-200  group">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2 text-white group-hover:text-[#0271E8]">
            Transparent Pricing
          </h1>
          <p className="text-[#CBD5E1] max-w-md">
            You will always know exactly what you are paying for, with clear
            pricing, no hidden fees, and flexible packages.
          </p>
        </div>
        <div className="border rounded-2xl border-[#F8FAFC1A] p-5 bg-[#3399FF0D]   hover:bg-[#3399FF1A] hover:border-[#0271E8] transition-all duration-200  group">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2 text-white group-hover:text-[#0271E8]">
            Proven, Measurable Results
          </h1>
          <p className="text-[#CBD5E1] max-w-md">
            Our clients experience an average 150% increase in inquiries and a
            higher conversion rate with a 4.8/5 satisfaction rating.
          </p>
        </div>
        <div className="border rounded-2xl border-[#F8FAFC1A] p-5 bg-[#3399FF0D]   hover:bg-[#3399FF1A] hover:border-[#0271E8] transition-all duration-200  group">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2 text-white group-hover:text-[#0271E8]">
            AI-First, Data-Driven Approach
          </h1>
          <p className="text-[#CBD5E1] max-w-md">
            We utilize Al and real-world data to inform marketing decisions.
            Every campaign is meticulously designed.
          </p>
        </div>
        <div className="border rounded-2xl border-[#F8FAFC1A] p-5 bg-[#3399FF0D]   hover:bg-[#3399FF1A] hover:border-[#0271E8] transition-all duration-200  group">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2 text-white group-hover:text-[#0271E8]">
            Full-Stack Digital Marketing
          </h1>
          <p className="text-[#CBD5E1] max-w-md">
            Our SEO, advertising, content, design, and branding services work
            together as a cohesive system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
