import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";


const pageTitle = `Contact | ${siteConfig.siteName}`;
const pageDescription = `Get in touch with us easily for any inquiries or support regarding our video download service. Visit our Contact page for quick assistance and customer service. We're here to help you with your video downloading needs.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};


const ContactPage = () => {

  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default ContactPage;
