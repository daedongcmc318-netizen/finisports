import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Categories from "@/components/Categories";
import Trust from "@/components/Trust";
import Bestsellers from "@/components/Bestsellers";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Categories />
        <Trust />
        <Bestsellers />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
