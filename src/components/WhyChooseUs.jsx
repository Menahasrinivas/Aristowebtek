import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ai from "../assets/aiimage.jpg";
import SEO from "./seo";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 md:px-20">

      <SEO
        title="Why Choose Aristo Creative Technologies"
        description="We combine aesthetics, logic, and customer-first thinking to deliver digital excellence. Learn about our results-driven philosophy, approach, and technology stack."
        keywords="Why Choose Us, Aristo advantages, digital excellence, customer-centric approach, technology stack, company philosophy"
        url="/why-choose-us"
    jsonLd={{
      
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Why Choose Aristo Creative Technologies",
  "description": "We combine aesthetics, logic, and customer-first thinking to deliver digital excellence. Learn about our results-driven philosophy, approach, and technology stack.",
  "url": "https://www.aristowebtek.com/aristo/why-choose-us"

    }}
      />
      
      {/* Section Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Why Aristo Creative Technologies
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          We combine aesthetics, logic & customer-first thinking to deliver digital excellence.
        </p>
      </div>
{/* Why Choose Us Section */}
<section className="bg-gradient-to-r from-blue-50 via-white to-gray-50 py-20">
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Image */}
    <div className="flex justify-center" data-aos="fade-right">
      <img
        src={ai} // replace with your imported image
        alt="Why Choose Us"
        className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
      />
    </div>

    {/* Right: Text Content */}
    <div data-aos="fade-left">
      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative">
        <span className="inline-block">
          Why Choose Us
          <span className="block mt-2 w-28 h-1 bg-blue-600 rounded-full"></span>
        </span>
      </h4>

      {/* Main Paragraph */}
      <p className="text-gray-700 leading-relaxed text-lg mb-5">
        Fueled by the passion for aesthetics and a logical approach to solving issues, 
        Aristo Creative Technologies is committed to delivering beyond customer expectations. 
        Conceptualization, content development, and design are handled with a disciplined 
        yet flexible process that begins and ends with customer satisfaction.
      </p>

      <p className="text-gray-700 leading-relaxed text-lg mb-8">
        By listening deeply and working smarter, our client’s goals become our goals. 
        Our customer-centric approach, user-friendly navigation system, and wallet-friendly pricing 
        keep Aristo Creative Technologies closely connected to our valuable customers.
      </p>

    </div>

  </div>
</section>

      {/* Cards Section */}
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-10"
        data-aos="zoom-in"
      >
        What Sets Us Apart
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Results */}
        <div
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Results</h3>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated team works in tandem with customers to deliver practical, measurable, 
            and sustainable results. We help clients create the right strategies and execute 
            the right solutions.
          </p>
        </div>

        {/* Approach */}
        <div
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Approach</h3>
          <p className="text-gray-600 leading-relaxed">
            Our customer-centric, collaborative, and flexible approach ensures that solutions 
            are uniquely built for each client — never repackaged. We listen, adapt, and work 
            to exceed expectations.
          </p>
        </div>

        {/* Technology */}
        <div
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Technology</h3>
          <p className="text-gray-600 leading-relaxed">
            We design & develop websites that align with industry standards — W3C-compliant 
            HTML/CSS, cross-browser compatibility, Google PageSpeed guidelines, and 
            visitor-focused UI/UX testing.
          </p>
        </div>

      </div>
    </div>
  );
}
