import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImage from '../assets/online banner.jpg'; 
import onlineImg from "../assets/onlineinfra.jpg";
import cardImage from "../assets/table image.jpg"
import buildImage from "../assets/onlineinfrabuild.jpg";
const serverImg = "https://images.unsplash.com/photo-1581091215364-83e4b6b4bbf6?auto=format&fit=crop&w=700&q=80";
const cloudImg = "https://images.unsplash.com/photo-1581091215364-83e4b6b4bbf6?auto=format&fit=crop&w=700&q=80";
const securityImg = "https://images.unsplash.com/photo-1591696331112-2d9f3d6cd63d?auto=format&fit=crop&w=700&q=80";
import awsImg from "../assets/aws.jpg"
import vpsImg from "../assets/cloud.jpg"
import domainImg from "../assets/domain2.jpg"
import googleImg from "../assets/google1.jpg"
import sslImg from "../assets/ssl.jpg"
import networkImg from "../assets/network.jpg"
import SEO from "./seo";



function OnlineInfrastructure() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="font-sans text-gray-800">

      <SEO
        title="Robust Online Infrastructure & Cloud Services"
        description="We deliver robust online infrastructure solutions tailored to your business needs — ensuring your websites, apps, and SaaS platforms stay fast, secure, and scalable."
        keywords="Online Infrastructure, Cloud Hosting, AWS, VPS, Domain, SSL, Network Security, IT Services, web hosting"
        url="/online-infrastructure"
        jsonLd={
          {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Robust Online Infrastructure & Cloud Services | Aristo Creative Technologies",
  "description": "We deliver robust online infrastructure solutions tailored to your business needs — ensuring your websites, apps, and SaaS platforms stay fast, secure, and scalable.",
  "url": "https://www.aristowebtek.com/aristo/online-infrastructure"
}
        }
      />

      {/* ================== Hero Section ================== */}
      <section
        className="relative w-full h-[500px] flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-700/40 to-transparent z-0"></div>
        <div className="relative z-10 text-left px-6 md:px-16 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4" data-aos="fade-right">
            Reliable Online Infrastructure
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6" data-aos="fade-right" data-aos-delay="200">
            Powering Your Online Presence with Secure, Scalable, and High-Performance Infrastructure Solutions
           </p>
        </div>
      </section>


      {/* ================== Introduction Section ================== */}
<section
  className="relative bg-gradient-to-br from-blue-50 via-white to-gray-100 py-16"
  data-aos="fade-up"
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
    
    {/* Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
        Building the Foundation of Your Digital Presence
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        In today's digital landscape, a robust and reliable online infrastructure 
        is paramount for businesses and individuals alike. From hosting your 
        applications and websites to securing your data and ensuring optimal 
        performance, the right infrastructure choices are critical for success.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        We provide a comprehensive suite of online infrastructure services, including 
        leading cloud platforms like AWS, flexible Shared Cloud VPS solutions, seamless 
        Domain Registration, collaborative Google Workspace, essential SSL Certificates, 
        and high-speed CDN services.
      </p>
      </div>
       {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={onlineImg}
        alt="Cloud Infrastructure"
        className="rounded-lg shadow-lg w-full max-w-md h-100 object-cover overflow-hidden"
      />
    </div>
      </div>
      </section>


      {/* ================== Infrastructure Ecosystem Section ================== */}
<section
  className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16"
  data-aos="fade-up"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
      Your Foundation for Online Success
    </h2>
    <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
      We understand that your online needs are unique. That's why we offer a diverse range of infrastructure services to cater to various requirements and budgets.
    </p>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"  >

      {/* AWS */}
{/* AWS */}
<div
  className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-md h-64 transition-all duration-700"
  data-aos="fade-up"
>
  {/* Background image - hidden initially, fades in on hover */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-20
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-700 ease-out"
    style={{ backgroundImage: `url(${awsImg})` }}
  ></div>

  {/* Overlay for slight tint */}
  <div className="absolute inset-0 bg-blue-700/40 group-hover:bg-blue-700/30 transition-all duration-700 ease-out"></div>

  {/* Content - always visible */}
  <div
    className="relative z-10 p-8 text-left text-white flex flex-col justify-end h-full"
  >
    <h3 className="text-2xl font-semibold mb-3">Amazon Web Services (AWS)</h3>
    <p className="text-gray-100">
      Leverage the power and scalability of AWS to build and scale your applications
      with flexibility, reliability, and advanced security.
    </p>
  </div>
</div>

      {/* VPS */}
      <div
        className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-md h-64 transition-all duration-700 ease-out" data-aos="fade-up">
 <div
    className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-20
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-700 ease-out"
     style={{ backgroundImage: `url(${vpsImg})` }}
  ></div>

          
        {/* {overlay} */}
        <div className="absolute inset-0 bg-blue-700/40 group-hover:bg-blue/50 transition-all duration-700 ease-out"></div>
{/* content */}
        <div className="relative z-10 p-8 text-left text-white flex flex-col justify-end h-full ">
          <h3 className="text-2xl font-semibold mb-3">Shared Cloud VPS</h3>
          <p className="text-gray-1200">
            Cost-effective and powerful hosting with dedicated resources in a shared infrastructure — perfect balance of performance and affordability.
          </p>
        </div>
      </div>


{/* Domain */}
<div
  className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-md h-64 transition-all duration-700"
  data-aos="fade-up"
>
  {/* Background image - hidden initially, fades up when hovered */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-12
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-700 ease-out"
    style={{ backgroundImage: `url(${domainImg})` }}
  ></div>

  {/* Overlay tint */}
  <div className="absolute inset-0 bg-blue-700/40 group-hover:bg-black/50 transition-all duration-700 ease-out"></div>

  {/* Content - always visible */}
  <div className="relative z-10 p-8 text-left text-white flex flex-col justify-end h-full">
    <h3 className="text-2xl font-semibold mb-3">Domain Registration</h3>
    <p className="text-gray-200">
      Secure your brand’s identity with easy domain registration and management,
      building a trusted presence online.
    </p>
  </div>
</div>

     {/* Google Workspace */}
<div
  className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-md h-64 transition-all duration-700"
  data-aos="fade-up"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-12
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-700 ease-out"
    style={{ backgroundImage: `url(${googleImg})` }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-700/40 group-hover:bg-black/50 transition-all duration-700 ease-out"></div>

  {/* Content */}
  <div className="relative z-10 p-8 text-left text-white flex flex-col justify-end h-full">
    <h3 className="text-2xl font-semibold mb-3">Google Workspace</h3>
    <p className="text-gray-200">
      Collaborate seamlessly with Gmail, Drive, Docs, Sheets, and Meet — all integrated to boost team productivity.
    </p>
  </div>
</div>

{/* SSL Certificates */}
<div
  className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-md h-64 transition-all duration-700"
  data-aos="fade-up"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-12
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-700 ease-out"
    style={{ backgroundImage: `url(${sslImg})` }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-700/40 group-hover:bg-black/50 transition-all duration-700 ease-out"></div>

  {/* Content */}
  <div className="relative z-10 p-8 text-left text-white flex flex-col justify-end h-full">
    <h3 className="text-2xl font-semibold mb-3">SSL Certificates</h3>
    <p className="text-gray-200">
      Protect your site and users’ data with our trusted SSL certificates, ensuring encryption and secure transactions.
    </p>
  </div>
</div>

{/* CDN */}
<div
  className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-md h-64 transition-all duration-700"
  data-aos="fade-up"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-12
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-700 ease-out"
    style={{ backgroundImage: `url(${networkImg})` }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-700/40 group-hover:bg-black/50 transition-all duration-700 ease-out"></div>

  {/* Content */}
  <div className="relative z-10 p-8 text-left text-white flex flex-col justify-end h-full">
    <h3 className="text-2xl font-semibold mb-3">Content Delivery Network (CDN)</h3>
    <p className="text-gray-200">
      Speed up your website with a global CDN that ensures fast and reliable content delivery for users anywhere.
    </p>
  </div>
</div>


    </div>
  </div>
</section>
{/* ================== Scalable & Secure Section ================== */}
<section
  className="relative bg-gradient-to-br from-blue-50 via-white to-gray-100 py-16"
  data-aos="fade-up"
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
    
    {/* Image */}
    <div className="md:w-1/2">
      <img
        src={buildImage}
        alt="Scalable and Secure Infrastructure"
        className="rounded-lg shadow-lg w-full h-100 object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
        Building a Scalable and Secure Online Presence
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Whether you are launching a new website, deploying a complex application, 
        or seeking to optimize your existing online infrastructure, we provide 
        the expertise and services you need to build a scalable, secure, and 
        high-performing online presence.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our tailored solutions ensure that you have the right foundation to achieve 
        your online goals efficiently and reliably.
      </p>
    </div>
  </div>
</section>

      {/* ================== What is Online Infrastructure ================== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row gap-8" data-aos="fade-up">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Online Infrastructure?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Online infrastructure refers to the technological backbone that supports websites, applications, and digital platforms. It includes:
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Servers & Hosting (cloud, VPS, dedicated)</li>
            <li>Databases (MySQL, PostgreSQL, NoSQL)</li>
            <li>Networking & DNS</li>
            <li>Content Delivery Networks (CDNs)</li>
            <li>SSL Certificates & Encryption</li>
            <li>Monitoring & Backups</li>
            <li>Security (firewalls, DDoS protection)</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Without it, even the best-designed apps and websites cannot function reliably.
          </p>
        </div>
        <div className="md:w-1/3 sticky top-32">
          <img src={serverImg} alt="Servers" className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
      </section> */}

      {/* ================== Components ================== */}
      {/* <section className="bg-blue-50 py-12" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Components of Online Infrastructure</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">1. Hosting & Servers</h3>
              <ul className="list-disc ml-5">
                <li>Shared Hosting: Cheap but limited.</li>
                <li>VPS (Virtual Private Server): Better performance, scalable.</li>
                <li>Cloud Hosting (AWS, Azure, GCP, Contabo): Highly scalable, global.</li>
                <li>Dedicated Servers: Full control for enterprises.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Domain & DNS Management</h3>
              <ul className="list-disc ml-5">
                <li>Domain names are your brand’s online identity.</li>
                <li>DNS ensures traffic reaches the right server quickly.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Databases</h3>
              <ul className="list-disc ml-5">
                <li>MySQL & PostgreSQL for structured data.</li>
                <li>NoSQL (MongoDB) for large-scale unstructured data.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Content Delivery Network (CDN)</h3>
              <p>Distributes content worldwide, reduces latency, boosts site speed.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">5. SSL & Security</h3>
              <p>SSL certificates for encrypted communication. Firewalls, anti-DDoS systems for protection.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">6. Monitoring & Backup</h3>
              <p>Real-time monitoring to detect issues. Daily/weekly backups to prevent data loss.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================== Why Businesses Need ================== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-12 py-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Businesses Need Strong Online Infrastructure</h2>
        <ul className="list-disc ml-8 space-y-2 text-gray-700">
          <li>Uptime & Reliability – Downtime = lost revenue.</li>
          <li>Scalability – Handle sudden traffic spikes.</li>
          <li>Performance – Faster sites rank higher on Google.</li>
          <li>Security – Protect customer data and build trust.</li>
          <li>Cost Optimization – Avoid overpaying for unused resources.</li>
        </ul>
      </section> */}

      {/* ================== Industries ================== */}
      {/* <section className="bg-blue-50 py-12" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Industries Relying on Online Infrastructure</h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700">
            <li>E-commerce: For seamless shopping experiences.</li>
            <li>Banking & Finance: For secure transactions.</li>
            <li>Healthcare: For patient data and telemedicine.</li>
            <li>Education: For online learning platforms.</li>
            <li>Media & Entertainment: For streaming apps.</li>
          </ul>
        </div>
      </section> */}

      {/* ================== Traditional vs Modern ================== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 overflow-x-auto" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Traditional vs Modern Infrastructure</h2>
        <table className="min-w-full border border-gray-300 text-gray-700">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 border">Feature</th>
              <th className="py-2 px-4 border">Traditional (On-Premise)</th>
              <th className="py-2 px-4 border">Modern (Cloud)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-2 px-4 border">Scalability</td>
              <td className="py-2 px-4 border">Limited</td>
              <td className="py-2 px-4 border">On-demand scaling</td>
            </tr>
            <tr className="text-center bg-blue-50">
              <td className="py-2 px-4 border">Cost</td>
              <td className="py-2 px-4 border">High upfront</td>
              <td className="py-2 px-4 border">Pay-as-you-go</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4 border">Maintenance</td>
              <td className="py-2 px-4 border">In-house IT teams</td>
              <td className="py-2 px-4 border">Cloud provider managed</td>
            </tr>
            <tr className="text-center bg-blue-50">
              <td className="py-2 px-4 border">Security</td>
              <td className="py-2 px-4 border">Manual</td>
              <td className="py-2 px-4 border">AI-driven automated</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4 border">Deployment</td>
              <td className="py-2 px-4 border">Weeks/Months</td>
              <td className="py-2 px-4 border">Minutes/Hours</td>
            </tr>
          </tbody>
        </table>
      </section> */}

      {/* ================== Best Practices ================== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-12 py-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Best Practices in Online Infrastructure</h2>
        <ul className="list-disc ml-8 space-y-2 text-gray-700">
          <li>Use multi-region cloud hosting.</li>
          <li>Implement load balancers for high availability.</li>
          <li>Secure with WAF (Web Application Firewall).</li>
          <li>Monitor with tools like Prometheus, Grafana.</li>
          <li>Backup with automated scripts & cloud snapshots.</li>
        </ul>
      </section> */}

      {/* ================== Future Trends ================== */}
      {/* <section className="bg-blue-50 py-12 flex flex-col md:flex-row gap-8 items-center px-6 md:px-12" data-aos="fade-up">
        <div className="md:w-1/2">
          <img src={cloudImg} alt="Future trends" className="rounded-xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Future Trends</h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700">
            <li>AI-Powered Infrastructure Management</li>
            <li>Serverless Architectures for cost savings</li>
            <li>Edge Computing for faster content delivery</li>
            <li>Zero Trust Security Models</li>
          </ul>
        </div>
      </section> */}

      {/* ================== How We Build ================== */}
      {/* <section className="max-w-6xl mx-auto px-6 md:px-12 py-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How Aristo Creative Technologies Builds Online Infrastructure</h2>
        <ul className="list-disc ml-8 space-y-2 text-gray-700">
          <li>AWS/Contabo cloud setups with auto-scaling.</li>
          <li>Secure SSL & firewall integration.</li>
          <li>CDN setup (CloudFront, Cloudflare).</li>
          <li>Database optimization for speed & scalability.</li>
          <li>Monitoring dashboards for 24/7 visibility.</li>
        </ul>
      </section> */}

      {/* ================== FAQs ================== */}
      {/* <section className="bg-blue-100 py-12 px-6 md:px-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">FAQs</h2>
        <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
          <div>
            <p className="font-semibold">Q1. What’s the difference between shared hosting and cloud infrastructure?</p>
            <p>A: Shared hosting is cheap but limited; cloud hosting is scalable and reliable, ideal for growing businesses.</p>
          </div>
          <div>
            <p className="font-semibold">Q2. How do I know if my business needs infrastructure upgrades?</p>
            <p>A: Slow performance, frequent downtime, and rising traffic are signs you need better infrastructure.</p>
          </div>
          <div>
            <p className="font-semibold">Q3. Is online infrastructure expensive?</p>
            <p>A: Not necessarily. With cloud pay-as-you-go models, businesses only pay for what they use.</p>
          </div>
        </div>
      </section> */}

      {/* ================== Conclusion ================== */}
      <section className="bg-blue-600 text-white py-12 px-6 md:px-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build?</h2>
        <h5 className="mb-6 leading-relaxed">
          Online infrastructure is the digital backbone of every business. From hosting and CDN to security and backups, it ensures your websites, apps, and SaaS platforms stay fast, secure, and scalable.
        </h5>
        <p className="leading-relaxed">
          At Aristo Creative Technologies, we deliver robust online infrastructure solutions tailored to your business needs — ensuring you’re always ready for growth.
        </p>
      </section>

    </div>
  );
}

export default OnlineInfrastructure;
