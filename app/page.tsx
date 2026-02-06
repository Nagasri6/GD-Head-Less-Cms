import Image from "next/image";
import styles from "./page.module.css";
import WhyGentleDental from "@/components/home/WhyGentleDental";
import PatientsComeFirst from "@/components/home/PatientsComeFirst";

import OfferBanner from "@/components/home/OfferBanner";
import Locations from "@/components/home/Locations";
import Banner from "@/components/ui/Banner/page";
import { getHomePage } from "@/lib/wp";
import CardSection from "@/components/sections/cardSection/page";
import PatientFirst from "@/components/sections/patientFirst/page";
import Services from "@/components/sections/Services/page";
export default async function Home() {
  const bannerData = await getHomePage();
  const imageUrl = bannerData?.heroImage?.node?.sourceUrl || null;
  return (
     <>
      <Banner title={bannerData?.title || "Quality Dental Care"} 
        subTitle={bannerData?.subTitle || ""} 
        heroImage={imageUrl} 
        ctaText={bannerData?.ctaText || "Search"}
      />
      <CardSection />
      <PatientFirst />
      <Services/>
      {/* <WhyGentleDental />
      <PatientsComeFirst />
      <Services />
      <OfferBanner />
      <Locations /> */}
    </>
  );
}
