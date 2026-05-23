import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Series from "@/components/Series";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import StarField from "@/components/StarField";

export default function Home() {
  return (
    <main className="bg-black">
      <StarField />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Series />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
