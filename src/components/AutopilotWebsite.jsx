import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImage from '../assets/aiautopilot banner.jpeg'; 
import autopilotImg from "../assets/saasfuture2.jpg"
import chatbotImg from "../assets/chatbot1.jpg"
import chatbot2 from "../assets/chatbot2.jpg";
import chatbot3 from "../assets/chatbot3.jpg";
import chatbot4 from "../assets/chatbot4.jpg";
import chatbot5 from "../assets/chatbot5.jpg";
import chatbot6 from "../assets/chatbot6.jpg";
import techImg from "../assets/tech.jpg";
import { Code, Server, Mail, Bot, Calendar, BarChart, MessageCircle, Building2 } from "lucide-react";
import SEO from "./seo";


function AutopilotWebsite() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="font-sans text-gray-800">

      <SEO
        title="AI Autopilot Websites for 24/7 Business Growth"
        description="Put your website on autopilot with intelligent chatbots, automated lead generation, and continuous conversion. We build websites that work while you sleep."
        keywords="AI Autopilot Website, automated lead generation, chatbot integration, 24/7 business, automated website development, Aristo"
        url="/autopilot-website"
        jsonLd={{
          
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Autopilot Websites for 24/7 Business Growth",
  "description": "Put your website on autopilot with intelligent chatbots, automated lead generation, and continuous conversion. We build websites that work while you sleep.",
  "url": "https://www.aristowebtek.com/aristo/autopilot-website"

        }}
      />

      {/* ================== Hero Section ================== */}
      <section
        className="relative w-full h-[500px] flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-700/40 to-transparent z-0"></div>
        <div className="relative z-10 text-left px-6 md:px-16 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4" data-aos="fade-right">
            AI Autopilot Website
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6" data-aos="fade-right" data-aos-delay="200">
            Let your digital business website attract leads, answer queries, book appointments, and close sales — while you sleep.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="400">
            Get Your AI Website Now 
          </button>
        </div>
      </section>


{/* ================== What is AI Autopilot ================== */}
<section
  className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-100 py-20"
  data-aos="fade-up"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-0 md:gap-0 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
    
    {/* Left Content */}
    <div className="md:w-1/2 p-10 md:p-14" data-aos="fade-right">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-400 bg-clip-text text-transparent leading-tight">
        What is an <span className="text-blue-800">AI Autopilot</span> Website?
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
        An AI Autopilot Website is your business’s smartest digital partner — it runs 24/7,
        automating key processes like lead generation, follow-ups, and customer engagement
        without manual effort.
      </p>

      <ul className="space-y-3 text-gray-700 text-base">
        {[
          "AI Chatbots – Answer queries instantly.",
          "Lead Generation Forms – Capture visitor details automatically.",
          "Email & WhatsApp Automation – Send timely follow-ups.",
          "CRM Integration – Store and manage leads.",
          "Personalization Engines – Tailor content based on user behavior.",
        ].map((point, i) => (
          <li key={i} className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
            <span className="text-green-600 text-lg">✅</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-800 mt-6 font-medium italic">
        It transforms your site into a self-operating marketing and sales engine.
      </p>
    </div>

   {/* Right Image */}
<div className="md:w-1/2 flex justify-center md:justify-end relative" data-aos="fade-left">
  <img
    src={autopilotImg}
    alt="AI Autopilot"
    className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] rounded-xl shadow-xl object-cover flex-shrink-0"
  />
  {/* Glow Layer */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-200/30 via-transparent to-transparent pointer-events-none rounded-xl"></div> */}
</div>


  </div>
</section>

{/* Right Image */}
<section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-100" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-8">
      🧩 Tech Stack for Seamless Automation
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      {[
        { func: "Frontend", tools: "React JS + Tailwind", icon: <Code className="w-6 h-6 text-orange-500" /> },
        { func: "Backend", tools: "Node.js + MongoDB / Postgres", icon: <Server className="w-6 h-6 text-yellow-500" /> },
        { func: "Email Marketing", tools: "Mailchimp / Brevo / ConvertKit", icon: <Mail className="w-6 h-6 text-red-500" /> },
        { func: "CRM", tools: "HubSpot / Zoho CRM", icon: <Building2 className="w-6 h-6 text-teal-500" /> },
        { func: "Chatbot", tools: "ChatGPT API / Dialogflow CX",  icon: <Bot className="w-6 h-6 text-pink-600" /> },
        { func: "Booking", tools: "Calendly / TidyCal (iframe/API)", icon: <Calendar className="w-6 h-6 text-amber-600" />  },
        { func: "WhatsApp Automation", tools: "AiSensy / WATI / Twilio", icon: <MessageCircle className="w-6 h-6 text-lime-600" />  },
        { func: "Analytics", tools: "Google Analytics + Hotjar", icon: <BarChart className="w-6 h-6 text-rose-800" /> },
      ].map((item, i) => (
        <div
          key={i}
          className="relative bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >

 {/* 🔹 Folded corner */}
    <div className="absolute top-0 left-0 w-10 h-10 bg-blue-500 rounded-tr-lg overflow-hidden">
  <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rotate-45 origin-bottom-right"></div>
</div>


          {/* 🔹 Icon positioned at top-left */}
          <div className="absolute top-4 right-4 bg-blue-50 p-2 rounded-lg">
            {item.icon}
          </div>

          {/* <div className="absolute bg-red-400 top-0 left-0 h-10 w-10">
            h
          </div> */}

          <h3 className="text-lg font-semibold text-blue-700 mt-10 mb-2">{item.func}</h3>
          <p className="text-gray-700">{item.tools}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  

  {/* ================== Features of an Autopilot Website ================== */}
<section
  className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden"
  data-aos="fade-up"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent">
      Features of an Autopilot Website for Digital Business
    </h2>
    <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
      Transform your website into a self-operating system that attracts, nurtures, and converts customers — even while you sleep.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          num: "1",
          title: "Smart Lead Forms with Instant Notifications",
          desc: "Capture leads with intelligent forms that auto-validate, store data, send alerts, and push to your CRM or email.",
          img: chatbot2,
        },
        {
          num: "2",
          title: "AI Chatbot Integration",
          desc: "Answer client questions 24/7 with an AI-powered chatbot trained on your services and pricing.",
          img: chatbotImg,
        },
        {
          num: "3",
          title: "WhatsApp Lead Automation",
          desc: "Instantly redirect leads to WhatsApp with pre-filled messages and automate your follow-ups seamlessly.",
          img: chatbot3,
        },
        {
          num: "4",
          title: "Appointment Booking System",
          desc: "Allow visitors to book a call, consultation, or demo — integrated with your Google Calendar.",
          img: chatbot4,
        },
        {
          num: "5",
          title: "Email Marketing Workflows",
          desc: "Trigger automated welcome sequences, nurturing drips, reminders, and promotions.",
          img: chatbot5,
        },
        {
          num: "6",
          title: "Admin Dashboard (Optional Add-on)",
          desc: "Track leads, bookings, conversions, and revenue from a custom React-based backend panel.",
          img: chatbot6,
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer transition-all duration-500 hover:-translate-y-2"
          data-aos="zoom-in"
          data-aos-delay={idx * 100}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75 group-hover:brightness-50 transition-all duration-500"
            style={{ backgroundImage: `url(${feature.img})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 p-8 text-left text-white">
            <span className="absolute top-4 right-5 text-sm font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md text-blue-200">
              #{feature.num}
            </span>
            <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">
              {feature.title}
            </h3>
            <p className="text-gray-100 leading-relaxed">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Decorative background glow */}
  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
</section>


{/* ================== Benefits ================== */}
{/* <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-700">
      Benefits for Businesses
    </h2>

    <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-12 relative" data-aos="fade-up"> */}
      {/* Main Starting Icon */}
      {/* <div className="flex flex-col items-center text-center group relative md:w-auto ">
       
      </div>
   */}
      {/* Other benefit icons */}
      {/* {[
         { title: "Data Insights", desc: "Track performance and improve campaigns.", icon: "📊" },
        { title: "24/7 Lead Capture", desc: "Never lose a customer inquiry.", icon: "📞" },
        { title: "Reduced Manual Effort", desc: "Automation handles repetitive tasks.", icon: "🤖" },
        { title: "Higher Conversion Rates", desc: "Personalized follow-ups nurture prospects.", icon: "📈" },
        { title: "Scalability", desc: "Works for startups and enterprises alike.", icon: "📊" },
        { title: "Better Customer Experience", desc: "Instant responses build trust.", icon: "💬" },
       
      ].map((benefit, idx) => (
        <div key={idx} className="flex-1 min-w-[150px] max-w-[180px] flex flex-col items-center text-center group relative"> */}
          {/* Smaller Icon */}
          {/* <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-blue-200 to-blue-600 text-white text-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
            {benefit.icon}
          </div> */}

          {/* Title */}
          {/* <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[3rem]">{benefit.title}</h3> */}

          {/* Description */}
          {/* <p className="text-gray-700">{benefit.desc}</p> */}

          {/* Connecting Dotted Line */}
          {/* {idx < 5 && (
            <div className="hidden md:block absolute top-8 right-[-50%] w-[100%] border-t-2 border-dotted border-blue-300 z-0"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section> */}


{/* ==================Why Go Autopilot?================== */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12" data-aos="fade-down">
      Why Go Autopilot?
    </h2>
  </div>

  <div className="relative max-w-4xl mx-auto px-6">
    {/* Vertical line */}
    <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

    <div className="space-y-12">
      {/* Item 1 */}
      <div
        className="relative pl-14"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Save time on daily tasks</h3>
        <p className="text-gray-700 text-sm md:text-base">Just content only, own text here.</p>
      </div>

      {/* Item 2 */}
      <div
        className="relative pl-14"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">📈 Boost conversions with instant engagement</h3>
        <p className="text-gray-700 text-sm md:text-base">Just content only, own text here.</p>
      </div>

      {/* Item 3 */}
      <div
        className="relative pl-14"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">🤖 Be present 24/7 without being online</h3>
        <p className="text-gray-700 text-sm md:text-base">Just content only, own text here.</p>
      </div>

      {/* Item 4 */}
      <div
        className="relative pl-14"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">💰 Close more deals with follow-up automation</h3>
        <p className="text-gray-700 text-sm md:text-base">Just content only, own text here.</p>
      </div>

      {/* Item 5 */}
      <div
        className="relative pl-14"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 shadow-lg transition-transform duration-300 hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">🔄 Scale easily without increasing workload</h3>
        <p className="text-gray-700 text-sm md:text-base">Just content only, own text here.</p>
      </div>
    </div>
  </div>
</section>


   
{/* Frequently Asked Questions */}
<section className="w-full py-20 bg-blue-100">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4 text-left">
      {/* FAQ 1 */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4 flex justify-between items-center cursor-pointer">
          <span className="font-medium text-gray-800">
            Q: Can you integrate this into my existing React website?
          </span>
        </div>
        <div className="px-6 pb-4 text-gray-600">
          A: Absolutely! We specialize in custom-coded React JS websites.
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4 flex justify-between items-center cursor-pointer">
          <span className="font-medium text-gray-800">
            Q: Do I need a WhatsApp Business Account?
          </span>
        </div>
        <div className="px-6 pb-4 text-gray-600">
          A: Yes. We’ll help you set it up with AiSensy or Twilio API.
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4 flex justify-between items-center cursor-pointer">
          <span className="font-medium text-gray-800">
            Q: How long does it take to go live?
          </span>
        </div>
        <div className="px-6 pb-4 text-gray-600">
          A: Typically 5-10 days, depending on complexity.
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ================== Conclusion ================== */}
      {/* <section className="bg-blue-600 text-white py-12 px-6 md:px-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build?</h2>
        <p className="mb-6">
          An AI Autopilot Website is the next step in digital evolution. By combining chatbots, lead capture, automation, and personalization, businesses can run smarter, convert faster, and operate continuously.
        </p>
        <p>
          At Aristo Creative Technologies, we design autopilot websites that grow your business 24/7, even while you sleep.
        </p>
      </section> */}

{/* ================== Ready to Put Your Website on Autopilot ================== */}

<section className="bg-blue-600 text-white py-12 px-6 text-center" data-aos="fade-up">
  <h2 className="text-2xl font-bold mb-4">Ready to Go Autopilot?</h2>
  <p className="mb-4">
    Let your website generate leads, book appointments, and sell automatically — 24/7.
  </p>
  <p>
    At Aristo Creative Technologies, we make digital businesses run smarter and grow continuously.
  </p>
</section>


    </div>
  );
}

export default AutopilotWebsite;
