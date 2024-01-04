import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PricingGrids from "@/components/Pricing/PricingGrids";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingFaqs from "@/components/PricingFaqs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | AI Tool - Next.js Template for AI Tools",
  description: "This is Pricing page for AI Tool",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
    <Header />
      <section className="pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-20 lg:pb-25">
        <PricingGrids />
      </section>
      <PricingFaqs />
      <Footer />
    </>
  );
};

export default PricingPage;
