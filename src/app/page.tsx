import Benefits from "@/components/root/Benefits";
import EcoSystem from "@/components/root/EcoSystem";
import FrequentAnswerQuestion from "@/components/root/Faqs";
import Hero from "@/components/root/Hero";
import Success from "@/components/root/Success";
import Testimonials from "@/components/root/Testimonials";
// import Tokenomics from "@/components/root/Tokenomics";
import UniqueEcoSystem from "@/components/root/UniqueEcoSystem";


export default function Home() {
  return (
    <main>
      <Hero />
      <EcoSystem />
      <Success />
      <UniqueEcoSystem />
      <Benefits />
      {/* <Tokenomics /> */}
      <Testimonials />
      <FrequentAnswerQuestion />
    </main>
  );
}
