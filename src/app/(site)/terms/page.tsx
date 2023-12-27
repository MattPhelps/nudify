import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import SectionTitle from "../../../components/Common/SectionTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Terms of Service | ${siteConfig.siteName}`;
const pageDescription = `Explore our Terms of Service to understand the rules and guidelines governing the use of our video download platform. Stay informed about your rights and responsibilities as a user to ensure a compliant and enjoyable experience.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const TermsPage = () => {

  return (
    <>
       <Header />
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px]  mx-auto text-[black]/70 dark:text-[white]/50 px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <SectionTitle title="Terms of Service" paragraph="" />

          <div className="mt-8">
            <p className="text-lg font-bold">ATTENTION:</p>
            <p className="mt-4">THIS IS A LEGALLY-BINDING CONTRACT.</p>
            <p className="mt-4">PLEASE READ THESE TERMS OF SERVICE CAREFULLY. THIS AGREEMENT GOVERNS YOUR RELATIONSHIP WITH {siteConfig.baseSiteName.charAt(0).toUpperCase() + siteConfig.baseSiteName.slice(1)} AND USE OF THE SERVICES PROVIDED THROUGH THE WEBSITE. {siteConfig.baseSiteName.charAt(0).toUpperCase() + siteConfig.baseSiteName.slice(1)} HEREBY REQUESTS THAT YOU ACCEPT THESE TERMS OF SERVICE. YOU MAY USE THE SERVICES PROVIDED THROUGH THE WEBSITE ONLY ON THE CONDITION THAT YOU ACCEPT ALL OF THE TERMS AND CONDITIONS CONTAINED HEREIN. USING THE SERVICES PROVIDED THROUGH THE WEBSITE INDICATES THAT YOU ACCEPT THESE TERMS OF SERVICE. IF YOU DO NOT ACCEPT THESE TERMS OF SERVICE, DO NOT USE THE WEBSITE OR SERVICES.</p>
            <p className="mt-4">THESE TERMS OF SERVICE INCLUDES THE PRIVACY POLICY LOCATED AT <a href={siteConfig.siteURL + "/privacy"}>{siteConfig.siteURL}/privacy</a> WHICH IS INCORPORATED AND MADE A PART OF THESE TERMS OF SERVICE.</p>

            <h2 className="mt-8 text-2xl font-bold">Acceptance of Terms of Service</h2>
            <p className="mt-4">These Terms of Service (the &quot;Agreement&quot; or &quot;Terms of Service&quot;) is a legally-binding agreement between you, either an individual or an entity (&quot;you&quot; or &quot;user&quot;), and {siteConfig.siteName} (&quot;{siteConfig.siteName}&quot;) regarding use of <a style={{ color: "#00BAFF" }} href={siteConfig.siteURL}>{siteConfig.siteURL}</a> and other related websites owned and/or operated by {siteConfig.siteName} (together, the &quot;Website&quot;), products (for example, {siteConfig.siteName}), and Services, as defined below. {siteConfig.baseSiteName} Downloader makes Website, and Services, including all content, information, graphics, documents, text, products, and all other elements and products offered through the Website and Services (collectively, the &quot;Content&quot;) available for your use subject to the terms and conditions set forth in this document. By accessing and using the Website and Services you agree to be bound by and to accept these Terms of Service and all terms and conditions contained and/or referenced herein as well as any additional terms and conditions set forth on the Website.</p>
            <p className="mt-4">If you do NOT agree to all the terms and conditions in these Terms of Service, you should NOT use the Website or Services. If you do NOT agree to any additional specific terms which apply to particular Content or to a particular transaction concluded through the Website or Services, then you should NOT use the part of the Website or Services which contains such Content or through which such transactions are concluded. Also, when you use any current or future {siteConfig.siteName} service or visit {siteConfig.siteName} &apos;s Website or obtain any products or services, whether free of charge or for payment, provided by {siteConfig.siteName}, you will be subject to the guidelines and conditions applicable to such products or services.</p>

            <h2 className="mt-8 text-2xl font-bold">Description of Services</h2>
            <p className="mt-4">You can use our service to download videos and other files from many popular sites.</p>

            <h2 className="mt-8 text-2xl font-bold">Users&apos; Obligations</h2>
            <p className="mt-4">You agree to use the Website and Services only for purposes permitted by these Terms of Service as well as any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions. {siteConfig.baseSiteName.charAt(0).toUpperCase() + siteConfig.baseSiteName.slice(1)} DOWNLOADER IS NOT RESPONSIBLE FOR ANY VIOLATION OF APPLICABLE LAWS, RULES, OR REGULATIONS COMMITTED BY YOU OR A THIRD PARTY AT YOUR BEHEST. IT IS YOUR RESPONSIBILITY TO ENSURE THAT YOUR USE OF THE {siteConfig.siteName.charAt(0).toUpperCase() + siteConfig.siteName.slice(1)} APPLICATION, WEBSITE, AND SERVICES DOES NOT CONTRAVENE APPLICABLE LAWS, RULES, OR REGULATIONS. Specifically, you agree and warrant that in using the Website and Services, your actions do not contravene the laws, rules, or regulations of (1) the country, state, or locality where you reside, or (2) the country, state, or locality where {siteConfig.siteName} is located or operates. This includes complying with applicable export and import restrictions as well as other restrictions.</p>

            <h2 className="mt-8 text-2xl font-bold">Your Use of the Website and Services</h2>
            <p className="mt-4">You agree not to access (or attempt to access) the Services by any means other than through the means provided by {siteConfig.siteName} or its authorized partners. You agree not to access (or attempt to access) the Services by way of automated means and that you will not engage in any activity that interferes with or disrupts the Services (or the servers and networks which are connected to the Services).</p>

            <h2 className="mt-8 text-2xl font-bold">User Account</h2>
            <p className="mt-4">You may sign up for a personalized account (&quot;User Account&quot;) with {siteConfig.siteName} in order to access the full range of features offered by the Website and Services. In creating your User Account, you agree to submit accurate, current and complete information about yourself and keep this information updated. {siteConfig.siteName} reserves the right to suspend or terminate User Accounts which it suspects are used in contradiction to these Terms of Service and/or contain information that is untrue, inaccurate, not current or incomplete.</p>

            <h2 className="mt-8 text-2xl font-bold">User Content</h2>
            <p className="mt-4">User Account holders may upload, store or transfer files, videos, pictures, data, information, and other material through the Website, {siteConfig.siteName} blog and Services (&quot;User Content&quot;). {siteConfig.baseSiteName} Downloader does not own any User Content and does not monitor, edit, or disclose any information regarding you or your User Account without your prior permission, except in accordance with these Terms of Service or Privacy Policy.</p>

            <h2 className="mt-8 text-2xl font-bold">Technical Support</h2>
            <p className="mt-4">{siteConfig.siteName} provides technical support for its users. In order to receive technical support from {siteConfig.siteName}, the user seeking such support must first create an account and submit a detailed description of the issue they are facing via the support section on the website. Our dedicated support team will review the submitted queries and respond within a specified timeframe. We prioritize ensuring that our users have a seamless experience, and any technical glitches or issues are addressed promptly.</p>


          </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
};

export default TermsPage;

