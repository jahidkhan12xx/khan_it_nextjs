import Image from "next/image";

const Services = () => {
  return (
    <div className="my-16 px-6 container mx-auto">
      <p className="md:text-center text-left">
        <span className=" px-4 py-2 rounded-4xl text-sm bg-[#F0F7FF] text-[#177DEA] font-semibold">
          Our Services
        </span>
      </p>
      <h1 className="md:text-center text-left md:text-5xl text-3xl font-bold py-7">
        Full-stack Digital Marketing Services
      </h1>
      <p className="md:text-center text-left text-[#65758B] pb-12">
        We manage your complete digital presence so you can focus on your core
        business.
      </p>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 cursor-pointer">
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/seo.png"} alt="SEO" height={56} width={56} />
          <h1 className="text-2xl font-semibold pt-5 pb-2">SEO Service</h1>
          <p className="text-[#65758B]">
            Improve Google rankings and gain consistent, long-term traffic.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/web.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Web Design
          </h1>
          <p className="text-[#65758B]">
            Create websites that convert visitors into customers.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5  hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/fb.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Facebook Ads
          </h1>
          <p className="text-[#65758B]">
            Connect with your target audience on their preferred platforms.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/google.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Google Ads
          </h1>
          <p className="text-[#65758B]">
            Reach customers actively searching for your services.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/content.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Content Writing
          </h1>
          <p className="text-[#65758B]">
            Build trust and improve Google rankings with compelling content.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/brand.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Branding
          </h1>
          <p className="text-[#65758B]">
            Differentiate your business and build customer loyalty.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/ui.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Ul/UX Design
          </h1>
          <p className="text-[#65758B]">
            Design user experiences that increase Conversions.
          </p>
        </div>
        <div className="border rounded-2xl border-[#E8EAED] p-5   hover:bg-[#F0F7FF] hover:border-[#177DEA] transition-all duration-200">
          <Image src={"/graphics.png"} alt="SEO" height={56} width={56} />
          <h1 className="md:text-2xl text-xl font-semibold pt-5 pb-2">
            Graphic Design
          </h1>
          <p className="text-[#65758B]">
            Develop professional visuals to enhance trust and credibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
