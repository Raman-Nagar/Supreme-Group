import ContactSection from "@/components/contact";
import Features from "@/components/features/feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ContactSection />
      <Footer />
    </>
  );
}
