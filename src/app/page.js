import Footer from "@/Components/Footer";
import HomeLaptopSection from "@/Components/HomeLaptopSection";
import HomePhoneSection from "@/Components/HomePhoneSection";
import HomeTablet from "@/Components/HomeTablet";
import InfoSection from "@/Components/InfoSection";
import MainBanner from "@/Components/MainBanner";
import NavBar from "@/Components/NavBar";
import OurServics from "@/Components/OurServics";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <OurServics />
      <HomePhoneSection />
      <HomeLaptopSection />
      <HomeTablet />
      <InfoSection />
      <Footer />
    </>
  );
}
