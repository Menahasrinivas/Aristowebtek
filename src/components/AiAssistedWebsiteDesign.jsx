import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../components/AiAssistedWebsiteDesign.css"
// Import local images
import hero from "../assets/heroimage.jpg"
import technology from "../assets/technology.webp";
import ai from "../assets/aiimage.jpg";
import benefit from "../assets/ognew.webp";
import { FaShoppingCart, FaSeedling, FaUsers, FaLaptop,FaBuilding } from "react-icons/fa";
import tableimage from "../assets/table image.jpg";
import bgsticky from "../assets/future.jpg";
import botttomimg from "../assets/chatbot4.jpg"
import SEO from "./seo";
const AiWebsiteDevPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <SEO
        title="AI Assisted Website Development"
        description="Master AI Assisted Website Development with React.js & Tailwind CSS. Build modern, intelligent, and fully responsive websites with Aristo Academy."
        keywords="AI website development, React, Tailwind CSS, intelligent websites, Aristo Academy, web design automation"
        url="/ai-assisted-website-design"
        jsonLd={
          {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Assisted Website Development | Aristo Creative Technologies",
  "description": "Master AI Assisted Website Development with React.js & Tailwind CSS. Build modern, intelligent, and fully responsive websites with Aristo Academy.",
  "url": "https://www.aristowebtek.com/aristo/ai-assisted-website-design"
}
        }
      />
      
 <section
      className="relative w-full h-[500px] flex items-center bg-cover bg-center overflow-hidden"  
       style={{ backgroundImage: `url(${hero})` }} 
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          data-aos="fade-up"
        >
          Transform Your Ideas with{" "}
          <span className="text-blue-400">AI Assisted Development</span>
        </h1>
        <p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Build smarter, faster, and more efficient websites using React.js and
          AI-powered workflows.
        </p>
        <div data-aos="zoom-in" data-aos-delay="400">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog Content */}
        <div className="md:col-span-2 space-y-10">
          <h2 className="text-2xl font-bold text-blue-800" data-aos="fade-right">
  Your Website Just Got Smarter - Build Faster with AI at the Helm!
</h2>
<h5>AI + Human Ingenuity = Websites That Perform and Convert.</h5>
<p className="text-gray-700" data-aos="fade-right">
  
  Imagine launching a stunning, SEO-optimized, mobile-ready website in days — not weeks. With AI-assisted website development, we make that happen.<br></br>

We combine intelligent algorithms with creative strategy to design and build websites that are not only beautiful but strategic, fast, and user-focused.<br></br>

Whether you’re building a portfolio, eCommerce store, landing page, or business site — AI helps us streamline every step while you stay in control.

</p>

{/* 
          <img
            src={technology}
            alt="AI Web Development Concept"
            className="rounded-lg shadow w-full h-64 object-cover"
            data-aos="zoom-in"
          /> */}
{/* What We Offer Section */}
<section className="w-full bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Text Content */}
    <div data-aos="fade-right">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        What We Offer
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-4">
        <li>
          <strong>AI-Assisted Website Design</strong><br />
          We use AI to suggest layouts, color palettes, typography, and image placements that work best for your industry and audience.
        </li>
        <li>
          <strong>AI-Generated Content & SEO</strong><br />
          From intelligent meta tags to SEO-friendly copy and dynamic CTAs, AI helps you speak Google’s language — naturally.
        </li>
        <li>
          <strong>Lightning-Fast Development</strong><br />
          We automate redundant code blocks, design sections, and integrations using low-code and AI-powered platforms.
        </li>
        <li>
          <strong>Responsive, Accessible & Fast</strong><br />
          100% mobile-first, pixel-perfect, and optimized for load speed, accessibility, and cross-device performance.
        </li>
        <li>
          <strong>Integrated with AI Tools</strong><br />
          Use ChatGPT, Midjourney, Jasper, or your own custom LLMs right inside your website for content generation, support, and UX enhancement.
        </li>
      </ul>
    </div>

    {/* Image */}
    <div className="flex justify-center md:justify-end" data-aos="zoom-in">
      <img
        src={technology}
        alt="AI-Powered Web Development"
        className="rounded-xl shadow-lg w-full max-w-md object-cover"
      />
    </div>
  </div>
</section>
{/* How It Works Section */}
<section className="bg-gradient-to-r from-blue-50 via-white to-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Image */}
    <div className="flex justify-center" data-aos="fade-right">
      <img
        src={ai} // replace with your image path
        alt="How It Works Illustration"
        className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
      />
    </div>

    {/* Right: Text Content */}
    <div>
      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
        How It Works
        <span className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -bottom-2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h4>

      {/* Feature List */}
      <ul className="space-y-6">
        <li className="flex items-start gap-4" data-aos="fade-up">
          <span className="text-2xl text-blue-600">💬</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Consultation & Briefing</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We understand your brand, goals, and audience.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
          <span className="text-2xl text-green-600">🎨</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">AI Design Drafting</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Layouts and styles suggested by AI and reviewed by humans.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
          <span className="text-2xl text-purple-600">🧠</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Smart Content Structuring</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Headlines, sections, and SEO tags auto-generated and polished.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
          <span className="text-2xl text-pink-600">⚡</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Rapid Dev & Testing</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Code built using AI-assisted frameworks and manual quality control.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
          <span className="text-2xl text-red-600">🚀</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Launch & Monitor</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Site goes live with built-in analytics, SEO tracking & support.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>



{/* Benefits Section */}
{/* <section className="benefits-section py-12" data-aos="fade-up">
  <div className="content flex flex-col md:flex-row items-center w-full max-w-6xl px-6 md:px-20 mx-auto gap-8">
     */}
    {/* Right: Text */}
    {/* <div className="text-side w-full md:w-1/2">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">Benefits of AI Web Development</h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        AI-assisted web development improves speed, accuracy, and efficiency. Businesses can launch better products faster, saving time and costs.
      </p>
    </div>

    <div className="image-side w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:pr-12">
      <img
        src={benefit}
        alt="AI Web Development Benefits"
        className="w-full h-auto max-w-md md:max-w-full object-contain"
        data-aos="zoom-in"
      />
    </div>
  </div>
</section> 
 */}


{/* Challenges & Misconceptions */}
<section
  className="w-full py-20 bg-gray-100" // light gray background
  id="challenges"
>
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Title */}
    <h2
      className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Challenges & Misconceptions
    </h2>

    {/* Challenges Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Challenge 1 */}
      <div
        className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-100 transform transition-all duration-300"
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          AI will replace developers
        </h3>
        <p className="text-gray-700">
          Not true. AI enhances human creativity and efficiency—it assists
          developers instead of replacing them.
        </p>
      </div>

      {/* Challenge 2 */}
      <div
        className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-100 transform transition-all duration-300"
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          AI-generated code is unreliable
        </h3>
        <p className="text-gray-700">
          AI provides tested patterns and best practices, reducing repetitive
          errors and speeding up development.
        </p>
      </div>

      {/* Challenge 3 */}
      <div
        className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-100 transform transition-all duration-300"
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          Websites become generic
        </h3>
        <p className="text-gray-700">
          Human designers and developers still customize branding, features, and
          logic to keep sites unique.
        </p>
      </div>

      {/* Challenge 4 */}
      <div
        className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-100 transform transition-all duration-300"
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          AI tools are too expensive
        </h3>
        <p className="text-gray-700">
          Many AI-powered platforms and open-source tools are cost-effective,
          reducing development time and expenses.
        </p>
      </div>

      {/* Challenge 5 */}
      <div
        className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-100 transform transition-all duration-300"
        data-aos="flip-left"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          AI integration is complicated
        </h3>
        <p className="text-gray-700">
          Modern APIs, plugins, and frameworks make it simple to embed AI
          features for content, UX, and automation.
        </p>
      </div>
    </div>
  </div>
</section>




{/* ================== Who It’s For ================== */}
<section
  className="py-16 bg-gray-50 bg-fixed bg-center bg-cover relative"
  style={{ backgroundImage: `url(${bgsticky})` }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/30"></div> {/* slightly darker overlay */}

  <div className="relative max-w-7xl mx-auto px-6 text-center mb-12 z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12" data-aos="fade-down">
      Who It’s For
    </h2>
  </div>

  <div className="relative max-w-4xl mx-auto px-6 z-10">
    {/* Vertical line */}
    <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

    <div className="space-y-12">
      {/* Startups */}
      <div className="relative pl-14" data-aos="fade-right" data-aos-delay="100">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-white mb-2">Startups</h3>
        <p className="text-white text-sm md:text-base">Startups looking to launch fast</p>
      </div>

      {/* Agencies */}
      <div className="relative pl-14" data-aos="fade-right" data-aos-delay="200">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-white mb-2">Agencies</h3>
        <p className="text-white text-sm md:text-base">Tired of delays and manual processes</p>
      </div>

      {/* Tech Businesses */}
      <div className="relative pl-14" data-aos="fade-right" data-aos-delay="300">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-white mb-2">Tech Businesses</h3>
        <p className="text-white text-sm md:text-base">Building scalable, AI-powered platforms</p>
      </div>

      {/* Professionals */}
      <div className="relative pl-14" data-aos="fade-right" data-aos-delay="400">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-white mb-2">Professionals</h3>
        <p className="text-white text-sm md:text-base">Needing intelligent personal websites</p>
      </div>

      {/* E-commerce */}
      <div className="relative pl-14" data-aos="fade-right" data-aos-delay="500">
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-white mb-2">E-commerce</h3>
        <p className="text-white text-sm md:text-base">Brands looking to stand out in SERPs</p>
      </div>
    </div>
  </div>
</section>

    </div>
  
</section>
{/* ================== Features That Make It Awesome - Card Style ================== */}
<div className="w-full flex flex-col items-center py-16 bg-gray-50" data-aos="fade-up" data-aos-delay="100">
  <h4 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center max-w-4xl">
    Features That Make It Awesome
  </h4>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
    {/* Card 1 */}
    <div className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="text-blue-600 text-4xl mb-4">🤖</div>
      <h5 className="text-xl font-semibold mb-2">AI-Driven Layout & UI Logic</h5>
      <p className="text-gray-600 flex-grow">Faster builds, smarter design suggestions</p>
    </div>

    {/* Card 2 */}
    <div className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="text-green-500 text-4xl mb-4">✍️</div>
      <h5 className="text-xl font-semibold mb-2">Real-Time Copy Optimization</h5>
      <p className="text-gray-600 flex-grow">SEO-ready headlines, smart paragraph structuring</p>
    </div>

    {/* Card 3 */}
    <div className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="text-purple-500 text-4xl mb-4">🖼️</div>
      <h5 className="text-xl font-semibold mb-2">Auto Image Sourcing & Tagging</h5>
      <p className="text-gray-600 flex-grow">On-brand visuals with relevant alt text</p>
    </div>

    {/* Card 4 */}
    <div className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="text-red-500 text-4xl mb-4">💻</div>
      <h5 className="text-xl font-semibold mb-2">Code Suggestions & Bug Checks</h5>
      <p className="text-gray-600 flex-grow">Faster dev time and fewer launch-day surprises</p>
    </div>

    {/* Card 5 */}
    <div className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="text-yellow-500 text-4xl mb-4">💬</div>
      <h5 className="text-xl font-semibold mb-2">Chatbots & Smart Forms</h5>
      <p className="text-gray-600 flex-grow">Embedded GPT or NLP bots for engagement & automation</p>
    </div>

    {/* Card 6 */}
    <div className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col">
      <div className="text-indigo-500 text-4xl mb-4">📑</div>
      <h5 className="text-xl font-semibold mb-2">CMS + AI Content Integration</h5>
      <p className="text-gray-600 flex-grow">Update content with AI help (WordPress, Custom CMS, etc.)</p>
    </div>
  </div>
</div>


 {/* ================== Ready to Join Section ================== */}
<section className="bg-blue-50 py-10 px-6">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
    
    {/* ===== Left Side Image ===== */}
    <div className="md:w-1/3 w-2/3 flex justify-center" data-aos="zoom-in">
      <img
        src={botttomimg} // replace with your image import
        alt="Join With Us"
        className="w-60 h-50 rounded-xl shadow-md object-cover"
      />
    </div>

    {/* ===== Right Side Content ===== */}
    <div className="md:w-2/3 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Ready to Join with Us!
      </h2>
      <p className="text-lg text-gray-700 mb-3">
        AI assisted website development using{" "}
        <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Tailwind</span> is not just a trend — 
        it’s the future of web development.
      </p>
      <p className="text-lg text-gray-700">
        Faster builds, reduced costs, better SEO, and scalable performance make it 
        the go-to choice for businesses worldwide. If you’re ready to future-proof 
        your business,{" "}
        <span className="font-semibold text-indigo-600">
          Aristo Creative Technologies
        </span>{" "}
        is here to make it happen.
      </p>
    </div>

  </div>
</section>



 

    </>
  );
};

export default AiWebsiteDevPage;
