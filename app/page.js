import Delicious from "./components/Delicious";
import Footer from "./components/Footer";
import HandPicked from "./components/HandPicked";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Newsletter from "./components/Newsletter";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Header />
      <main class="container mx-auto px-4 mt-[100px]">
        <Hero />
        <Delicious/>
        <Popular/>
        <Newsletter/>
        <HandPicked/>
        <Latest/>
      </main>
      <Footer/>
    </div>
  );
}
