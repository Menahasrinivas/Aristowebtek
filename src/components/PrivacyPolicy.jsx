// src/components/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "./seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-slate-900">

    <SEO
        title="Privacy Policy for Aristo Creative Technologies"
        description="Read the official Privacy Policy for all group websites of Aristo Creative Technologies (Aristo Webtek) regarding data collection, usage, and protection."
        keywords="Privacy Policy, Aristo Creative Technologies, Aristo Webtek, Data Protection, Data Usage"
        url="/privacy-policy"
        jsonLd={
          {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy for Aristo Creative Technologies | Aristo Creative Technologies",
  "description": "Read the official Privacy Policy for all group websites of Aristo Creative Technologies (Aristo Webtek) regarding data collection, usage, and protection.",
  "url": "https://www.aristowebtek.com/aristo/privacy-policy"
         } }
      />

      {/* Banner */}
      <header
        className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-16"
        data-aos="fade-down"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-lg md:text-xl opacity-95">
            Protecting your privacy is important to Aristo Webtek
          </p>
        </div>
      </header>

      {/* Main container */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Intro card */}
        <section
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border-l-4 border-blue-600"
          data-aos="fade-up"
        >
          

          <p className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
            {`This privacy policy applies to the visitor, user and client of all of the group websites of Aristo Creative Technologies except otherwise explicitly mentioned. As used in this Privacy Policy, Aristo Webtek and  refers to websites of the company Aristo Creative Technologies.  The means Aristo Creative Technologies website https://www.aristowebtek.in/ , any successor URLs, mobile or localized versions and related domains and subdomains), and the Services means Aristo Creative Technologies products, applications and services, in each case in whatever format they may be offered now or in the future. The Website and Services are collectively referred to herein as the Offerings.`}
          </p>
        </section>

       
        {/* Sections - keep every line intact */}
        <article className="space-y-6">
          {/* Information we collect */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">Information we collect</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`We collect information to provide better services to all of our users, existing clients and potential new clients from figuring out basic stuff like finding out your IP (Internet Protocol) which guides us about your country/location, to more complex things like knowing your referral URL which helps us to figure out which website sent you to us. Aristo Creative Technologies respects the privacy rights and data protection rights of its users and recognizes the importance of protecting the personal information we collect about you. Our Privacy Policy is designed to help you understand what information we collect and how we use and share that information. This Privacy Policy applies to our websites, applications, products and services.`}
            </p>
          </section>

          {/* Information you give us */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">Information you give us</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`In order to send us your Request for Proposal (RFP), Request for Quote (RFQ), Request for Information (RFI) or any other project requirement inquiry or just to simply contact us using our contact us form/page, you will be asked for personal information, like your name, email address, messaging services handles (Skype, Google Hangout), telephone number, location etc. In case you are buying one of our ready-made product or service online from our website, we may ask you about your credit card information as well, which is securely processed and transferred, using high level encryption, to our 3rd party payment gateway processor partners Razorpay, as we do not store any credit card details on our website or server(s).`}
            </p>
          </section>

          {/* Information we get from your use of our services */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">
              Information we get from your use of our services
            </h4>

            <p className="text-slate-700 leading-relaxed mb-4">
              {`We may collect information about the services that you use and how you use them. This information includes:`}
            </p>

            <div className="bg-gray-50 p-4 rounded-md border">
              <h5 className="font-semibold mb-2">Log information</h5>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {`When you use our services or view content, we may automatically collect and store certain information in server logs. This may include:`}
              </p>

              <ul className="list-disc list-inside mt-3 text-slate-700 space-y-2">
                <li>Details of how you used our service, such as your search queries</li>
                <li>Internet protocol (IP) address</li>
                <li>Device event information such as browser type, browser language, the date and time of your request and referral URL</li>
                <li>Cookies that may uniquely identify your browser or session</li>
              </ul>
            </div>
          </section>

          {/* Cookies and anonymous identifiers */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">
              Cookies and anonymous identifiers
            </h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`We use various technologies to collect and store information when you visit a Aristo Creative Technologies service, and this may include sending one or more cookies or anonymous identifiers to your device.`}
            </p>
          </section>

          {/* Third Party Platforms */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">Third Party Platforms</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`We may collect information about you when you interact (in the form of like, comment, follow, subscribe, tweet, message or any other similar actions) with us on any online social media networks such as Facebook, , Instagram, WhatsApp, LinkedIn, Twitter, Telegram, YouTube etc. where we maintain our official profiles. The information such as your social media profile ID, name and other related information publicly available on your social profile may be collected.`}
            </p>
          </section>

          {/* Other Information */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">Other Information</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`Our sales and marketing teams may collect other publicly available information about you from online sources. We do this after you have primarily contacted us, either directly through one of our websites, apps or indirectly through one of our partner/affiliate channel, to supplement our background knowledge about you in order to provide you better solutions that would fit your overall needs.`}
            </p>
          </section>

          {/* How we use the information that we collect */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">
              How we use the information that we collect
            </h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`We use the information that we collect for our internal review, tracking and for contact. The information is then archived in our server(s). We study the information that we collect to understand user/visitor trends in order to improve our services, content, website and products quality etc. and ultimately to improve user and customer experience. We use your email address, phone number(s), third party and other information to directly communicate with you. Our business development team uses this information to connect with you and discuss your business requirement in order to provide you with a relevant solution. Our marketing team uses this information to send you periodic promotional, non-promotional and other marketing related information and material that we think may be useful to you and could add value to your business.`}
            </p>
          </section>

          {/* Payment Information */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">Payment Information</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`Your confidential financial information including credit card details are not stored in any of our servers and are rather securely transferred to our payment partners, as mentioned above under 'Information you give us', to process the charge, except for your name, email, phone number and other relevant contact details. We use your contact details to send you invoice receipts, reminders and other related transactional emails.`}
            </p>
          </section>

          {/* Your data is safe with us */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">Your data is safe with us</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`None of the information that we collect is sold to any 3rd party organization not part of the Aristo creative Technologies group and/or sister concerns, subsidiaries. We may, however, share your information with our sister concerns, subsidiary companies and affiliates.`}
            </p>
          </section>

          {/* Sharing with third parties */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">Sharing with third parties</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`We may share your personal information with third-party service providers (including but not limited to MailChimp https://mailchimp.com/legal/privacy/, HubSpot https://legal.hubspot.com/privacy-policy) to permit such parties to provide services that help us with our business activities, which may include assisting us with marketing, advertising our product/service offerings, business intelligence, or providing, maintaining and improving the features and functionality of the Offerings, among other things. For example, we may provide personal information to our service providers for direct emailing of our newsletters or notifications of our product/service offerings. The data shared can include name, job title, email address, company information, phone number. All third parties are engaged under contract and obliged to meet appropriate security requirements and comply with all applicable legislation.`}
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">Your Rights and Choices</h4>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold">Unsubscribe</h5>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {`We may provide you with the opportunity to 'Unsubscribe' - the unsubscribe link can be found at the bottom of every promotional or marketing newsletter email that you receive from us. If you decide to opt-out, we may not be able to provide certain features of the Offerings to you.`}
                </p>
              </div>

              <div>
                <h5 className="font-semibold">Opt-Out</h5>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {`Unsubscribing immediately removes you from our marketing list(s), however an individual key contact from our sales, marketing and/or business development team may still connect with you. If you wish not to be contacted by any of our individual team members as well, please kindly reply to the individual with 'opt-out' in your email subject or body.`}
                </p>
              </div>

              <div>
                <h5 className="font-semibold">Blocking Cookies</h5>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {`You can remove or block certain cookies using the settings in your browser but the Offerings may cease to function properly if you do so.`}
                </p>
              </div>

              <div>
                <h5 className="font-semibold">How We Respond to Do Not Track Signals</h5>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {`Your Web browser may have a do not tracksetting which, when enabled, causes your browser to send a do not track HTTP header file or ~signalto each site you visit. At present, the Offerings do not respond to this type of signal.`}
                </p>
              </div>

              <div>
                <h5 className="font-semibold">Data Subject Rights</h5>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {`You can access, rectify, erase, restrict or export your personal information at any time by emailing us at support@aristowebtek.in You can object to our processing of your personal information at any time. Contact our Data Protection Officer with requests or concerns at supportl@aristowebtek.in If you are unsatisfied with the response you have the right to lodge a complaint with your supervisory authority.`}
                </p>
              </div>
            </div>
          </section>

          {/* Accessing and Updating Your Personal Information */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">
              Accessing and Updating Your Personal Information
            </h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`When you use the Offerings, we make good faith efforts to provide you with access to your personal information upon your request and either provide you the means to correct this information if it is inaccurate or to delete such information at your request if it is not otherwise required to be retained by law or for legitimate business purposes. You may access, review, correct, update, change or delete your information at any time. To do so, please contact us at legal@aristowebtek.in with your name and email ID and the information requested to be accessed, corrected or removed. If you are using the Service (any of our product demo), log in to your account, go to Your Account Settings, and make the desired changes. We may decline to process requests that are unreasonably repetitive or systematic, require disproportionate technical effort (for instance, requests concerning information residing on backup tapes), jeopardize the privacy of others, would be extremely impractical, or for which access is not otherwise required. In any case where we provide information access and correction, we perform this service free of charge, except if doing so would require a disproportionate effort.`}
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line">
              {`Please note that if you cease using the Service or we terminate your access to the Service in accordance with your Terms Of Website Use, you may no longer have the ability to access or request to update your information.`}
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line">
              {`We may retain your information as necessary to support the Offerings, comply with our legal obligations or resolve disputes. Note that content you post on our Offerings may remain on the Offerings even if you cease using the Offerings or we terminate your access to the Offerings.`}
            </p>
          </section>

          {/* No Children under Age 16 */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">No Children under Age 16</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`The Offerings are not intended for use by anyone under the age of 16, nor does Aristo Creative Technologies knowingly collect or solicit personal information from anyone under the age of 16. If you are under 16, you may not attempt to register for the Offerings or send any information about yourself to us, including your name, address, telephone number, or email address. In the event that we confirm that we have collected personal information from someone under the age of 16 without verification of parental consent, we will delete that information promptly. If you are a parent or legal guardian of a child under 16 and believe that we might have any information from or about such child, please contact us at the email or mailing address provided at the end of this Privacy Policy.`}
            </p>
          </section>

          {/* Security */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">Security</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`The security of your personal information is important to us. We maintain a variety of appropriate technical and organizational safeguards to protect your personal information. We limit access to personal information about you to employees who we believe reasonably need to come into contact with that information to provide products or services to you or in order to do their jobs. Further, we have implemented reasonable physical, electronic, and procedural safeguards designed to protect personal information about you. We encrypt certain confidential and sensitive information in transit using industry-standard encryption technology. Most of our websites are also secured using 128 bit SSL certificates. While we strive to use reasonable efforts to protect your personal information, we cannot guarantee its absolute security.`}
            </p>
          </section>

          {/* Data Storage */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-right"
          >
            <h4 className="text-xl font-semibold mb-3">Data Storage</h4>

            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p className="whitespace-pre-line">
                {`Location
The host servers on which Aristo Creative Technologies processes and stores its databases are located in The United States of America, Germany & India. Our business development and marketing teams may use and process the information that is collected from our local servers and systems within our office premises or from official portal devices only in India and European Union.`}
              </p>

              <p className="whitespace-pre-line">
                {`Data Breach
Aristo Creative Technologies will inform you within 48 hours, to the extent we are legally authorised to do so, in case of any application or order originating from an administrative or judicial authority relating to your personal data and/or inn case of an unfortunate data breach or threat of such data breach that may compromise your perfonal information collected by us.`}
              </p>
            </div>
          </section>

          {/* Changes */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-500"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold mb-3">Changes</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`We may change part of or full privacy policy document without any prior consent or permission. You may please contact us using our standard contact form should you have any further queries or seek clarification regarding any of the privacy points and declaration mentioned above.`}
            </p>
          </section>

          {/* Contact Us */}
          <section
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-green-500"
            data-aos="zoom-in"
          >
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {`If you have questions or need to contact us about this Privacy Policy, please email us at aristo.webtek@gmail.com`}
            </p>
          </section>
        </article>
      </main>

     
    </div>
  );
};

export default PrivacyPolicy;
