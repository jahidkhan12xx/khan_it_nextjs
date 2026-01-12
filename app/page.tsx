import Hero from "@/components/Hero";
import Result from "@/components/Result";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

function Home() {
  return (
    <div>
      <div className="bg-[#F1F5F966]">
        <Hero />
      </div>
      <Services />
      <div className="bg-[#121C39]">
        <WhyChooseUs />
      </div>
      <div className="bg-[#F1F5F966]">
        <Result />
      </div>
    </div>
  );
}

export default Home;
