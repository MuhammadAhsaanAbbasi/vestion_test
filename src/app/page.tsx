import EcoSystem from "@/components/root/EcoSystem";
import Hero from "@/components/root/Hero";
import Success from "@/components/root/Success";
import UniqueEcoSystem from "@/components/root/UniqueEcoSystem";


export default function Home() {
  return (
    <main>
      <Hero />
      <EcoSystem />
      <Success />
      <UniqueEcoSystem />
    </main>
  );
}
