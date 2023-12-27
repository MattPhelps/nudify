import CallToAction from "@/components/CallToAction";
import Head from 'next/head';
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import siteConfig from '../../../siteConfig';
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Comparison from "@/components/Home/Comparison";

const pageTitle = `${siteConfig.siteTitle}`;
const pageDescription = `${siteConfig.siteDescription}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Comparison />
      <Features />
      <Footer /> 
    </>
  );
}
