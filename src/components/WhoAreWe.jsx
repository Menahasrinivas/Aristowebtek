import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import saasbuild from "../assets/saasbuild.jpg";
import SEO from "./seo";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />  


export default function WhoAreWe() {
  React.useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20 pb-16 px-6 md:px-16">
     <SEO
        title="About Aristo Webtek - Innovating Digital Solutions"
        description="Learn about Aristo Webtek: our mission, vision, commitment to code quality, and the wide spectrum of digital services we offer, from web development to cloud infrastructure."
        keywords="About Aristo Webtek, Aristo Creative Technologies, company mission, code quality, digital services, team"
        url="/who-are-we"
        jsonLd={{
          
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Aristo Webtek - Innovating Digital Solutions",
  "description": "Learn about Aristo Webtek: our mission, vision, commitment to code quality, and the wide spectrum of digital services we offer, from web development to cloud infrastructure.",
  "url": "https://www.aristowebtek.com/aristo/who-are-we"

        }}
      />
     
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600">
          About Aristo Webtek
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Innovating Digital Solutions With Passion & Precision
        </p>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Aristo Creative Technologies is a web technology company based in Chennai, Tamil Nadu, India. We are Aristo Creative Technologies, a web technology company based out of Chennai, Tamil Nadu, India.
            <br /><br />
            We are a 22+ years young tech group with experience and expertise in HTML5, CSS3, JavaScript, jQuery, AJAX, PHP 8, MySQLi, and Android Studio.
            <br /><br />
            As a web development company, we adhere strictly to Google-laid guidelines, UI & UX standards, W3C compliance, OOPS-based development, sanitized coding environments, testing tools, and more.
            <br /><br />
            On request, we implement Google AMP (Accelerated Mobile Pages) and PWA (Progressive Web Applications) to help clients meet growing user needs and performance demands.
            <br /><br />
            In our service horizon, we handle everything from domain registration and web hosting to resource planning and digital marketing.
            <br /><br />
            In web infrastructure, we manage Shared Linux Hosting, Cloud VPS servers, AWS, and Google Cloud Platform servers.
            <br /><br />
            You can rest assured that you have approached the right tech group — Aristo Creative Technologies — to build and uplift your online presence..
          </p>
        </div>

        {/* Image / Card */}
        <div
          className="bg-white shadow-xl rounded-2xl p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-left"
        >
          <img
  src={saasbuild}
  alt="Team Work"
  className="rounded-xl w-full h-96 object-cover"
/>


          <h3 className="text-2xl font-semibold mt-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            Delivering world‑class digital solutions that empower businesses to grow and innovate.
          </p>
        </div>
      </div>
    </div>
  );
}
