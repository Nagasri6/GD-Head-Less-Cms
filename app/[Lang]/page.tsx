import styles from "./page.module.css";
import Banner from "@/components/ui/Banner/page";
import CardSection from "@/components/sections/cardSection/page";
import PatientFirst from "@/components/sections/patientFirst/page";
import Services from "@/components/sections/Services/page";
import Welcoming from "@/components/sections/Welcoming/page";
import { getHomePage } from "@/lib/wp";
import LocationsSlider from "@/components/sections/LocationsSlider/LocationsSlider";
import DentalCards from "@/components/sections/DentalCards/page";
import Newsletter from "@/components/sections/Newsletter/Newsletter";
import InsurancesAccepted from "@/components/sections/InsurancesAccepted/InsurancesAccepted";

export default async function Home({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang === "es" ? "ES" : "EN";
  const bannerData = await getHomePage(lang);

  const imageUrl = bannerData?.heroImage?.node?.sourceUrl || null;

  return (
    <>
      <Banner
        title={bannerData?.title || "Quality Dental Care"}
        subTitle={bannerData?.subTitle || ""}
        heroImage={imageUrl}
        ctaText={bannerData?.ctaText || "Search"}
      />
      <CardSection />
      <PatientFirst />
      <Services />
      <Welcoming />
      <LocationsSlider/>
      <DentalCards/>
      <Newsletter/>
      <InsurancesAccepted insurances={bannerData?.insurances || []} />
    </>
  );
}
