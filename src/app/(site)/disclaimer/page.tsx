import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import SectionTitle from "../../../components/Common/SectionTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Disclaimer | ${siteConfig.siteName}`;
const pageDescription = `Read our comprehensive disclaimer to understand the legal boundaries and usage terms of our video download service. We clarify our responsibilities and user obligations to ensure informed and lawful use of our website.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const DisclaimerPage = () => {

  return (
    <>
    <Header />
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          
          <SectionTitle title="Affiliate Disclaimer" paragraph="" />
          
          <div className="mt-8">
            <p>At {siteConfig.siteName}, we believe in transparency on the web. Therefore, we&apos;re disclosing that certain products and links to those products on this site will earn us an affiliate commission for any purchases you make. Our goal with this website is to help educate you on the possibilities that exist in various fields, but please understand we are doing this as a for-profit business.</p>
            
            <p className="mt-4">Furthermore, while our primary income comes from affiliate programs, this website may also earn money by displaying advertisements from third-party companies.</p>
            
            <h2 className="mt-8 text-2xl font-bold">Here are some key points to note:</h2>
            <ul className="mt-4 list-disc pl-6">
              <li><strong>Third-Party Products:</strong> We promote products that are not owned by us. When you click on a link that we recommend, and make a purchase, we may receive a commission. However, we only recommend products that we believe will add value to our users.</li>
              <li className="mt-4"><strong>No Extra Cost to You:</strong> If you decide to purchase a product based on our recommendation, we want to make it clear that we&apos;ll earn a commission from that purchase. Importantly, you won&apos;t be charged any extra for this. In fact, in many cases, our affiliate links can offer discounts or special bonuses.</li>
              <li className="mt-4"><strong>Genuine Recommendations:</strong> While we do earn money from affiliate links, we only promote products that we&apos;ve either used ourselves or have done extensive research on. Our reputation is important to us, and we want to ensure that we&apos;re recommending the best products to our audience.</li>
              <li className="mt-4"><strong>Advertisements:</strong> You may also see advertisements on this website from third-party companies. We earn money from these ads, but they are not linked to the affiliate products we promote. These ads are clearly marked and are separate from our product recommendations.</li>
            </ul>
            
            <p className="mt-4">We believe in honesty and transparency on the web, so we felt it would be important to disclose this to you. If you have any questions, concerns, or feedback regarding this disclaimer or our affiliations, please don&apos;t hesitate to contact us.</p>
            
            <p className="mt-4">Thank you for your trust in us. We look forward to serving you and providing valuable content.</p>
          </div>
           <br></br>
           <br></br>
           <br></br>
          {/* DMCA Copyright Infringement Notification */}
          <SectionTitle title="Official DMCA Copyright Infringement Notification" paragraph="Updated: October 9th, 2023" />
          <div className="mt-8">
            <p>Our website follows the safe harbor provisions of 17 U.S.C. §512, otherwise known as Digital Millennium Copyright Act (“DMCA”). To file a copyright infringement notification with us, you will need to send a written communication that includes substantially the following:</p>
            
            <ul className="mt-4 list-disc pl-6">
              <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material. Providing URLs in the body of an email is the best way to help us locate content quickly.</li>
              <li>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.</li>
              <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed (Note that under Section 512(f) any person who knowingly and materially misrepresents that material or activity is infringing may be subject to liability for damages. In other words, DON’T MAKE FALSE CLAIMS!)</li>
            </ul>
            
            <p className="mt-4">Then Send the infringement notice via email to <a href="mailto:matt@leandme.com">matt@leandme.com</a>.</p>
          </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
};

export default DisclaimerPage;
