import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { FaProjectDiagram, FaPencilRuler, FaCode, FaCloudUploadAlt } from "react-icons/fa";
import { FaShoppingCart, FaCloud, FaBook, FaHeartbeat, FaChartLine } from "react-icons/fa";
import webAppImg from "../assets/webappbanner.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import projectimage from "../assets/projectimages.jpg";
import ReactImg from "../assets/react.jpg";
import TailwindImage from "../assets/tail.png";
import PhpImg from "../assets/php.jpg";
import MysqlImg from  "../assets/mysql.jpg";
import WebImg from "../assets/web app.jpg";
import BenefitImg from "../assets/benefit.jpg"
import futureImg from "../assets/future.jpg"
import "../components/WebAppDevelopment.css";
import webimg from "../assets/web1.jpg"
import bottomimg from "../assets/chatbot4.jpg"
import SEO from "./seo";



const WebAppDevelopment = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full">

<SEO
        title="Intelligent Web Application Development"
        description="Build Smarter, Deploy Faster, and Innovate Continuously with Intelligent Automation in Web Applications powered by React, PHP, and MySQL."
        keywords="Web App Development, React, PHP, MySQL, Intelligent Automation, Custom Web Applications, software development"
        url="/web-app-development"
        jsonLd={{
          
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Intelligent Web Application Development | Aristo Creative Technologies",
  "description": "Build Smarter, Deploy Faster, and Innovate Continuously with Intelligent Automation in Web Applications powered by React, PHP, and MySQL.",
  "url": "https://www.aristowebtek.com/aristo/web-app-development"

        }}
      />

      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${webAppImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

        <div className="relative z-10 text-center px-6">
        <h1
            className="text-2xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
             Unlock the Future of Web App Development
          </h1>

          <p
            className="text-white text-lg md:text-xl mb-4 italic drop-shadow-lg"
            data-aos="fade-down"
          >
            "Build Smarter, Deploy Faster, and Innovate Continuously with Intelligent Automation in Web Applications powered by<br></br>React, PHP, and MySQL."
          </p>
          
        </div>
      </section>
{/* <section className="bg-blue-50 py-20">
  <div className="max-w-5xl mx-auto px-6 md:px-12 text-center"> */}
    {/* Heading with gradient and underline */}
    {/* <h4 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 relative inline-block">
      Unlock the Future of Web App Development
    </h4> */}

    {/* Subheading / Introduction */}
    {/* <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
      Build Smarter, Deploy Faster, and Innovate Continuously with Intelligent Automation in Web Applications powered by React, PHP, and MySQL.
    </p> */}

    {/* CTA / Highlight
    <p className="text-md md:text-lg text-blue-700 font-semibold">
      Discover how this stack transforms traditional workflows, enhances scalability, 
      and accelerates innovation — empowering businesses to stay ahead in the digital era.
    </p>

    {/* Decorative gradient line */}
     {/* <div className="mt-10 h-1 w-24 bg-gradient-to-r from-blue-200 via-purple-500 to-blue-200 mx-auto rounded-full"></div> */}
  {/* </div>
</section>  */}
<section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-20">
  <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

    {/* Left: Image */}
    <div className="flex justify-center relative flex-shrink-0" data-aos="fade-right">
      {/* Background Blur Circle */}
      <div className="absolute -top-12 right-12 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-blue-300/30 rounded-full blur-3xl -z-10"></div>

      {/* Extra Large Square Image */}
      <img
        src={webimg} // your image
        alt="AI in Web App Development"
        className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] rounded-xl shadow-xl object-cover flex-shrink-0"
      />
    </div>

    {/* Right: Text Content */}
    <div data-aos="fade-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        The Rise of AI-Driven Web App Development
      </h2>

      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full mb-8"></div>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        The landscape of web application development is undergoing a profound transformation,
        driven by the relentless advancements in artificial intelligence (AI). 
        No longer confined to the realm of science fiction, AI automation is rapidly becoming 
        an indispensable tool for developers building sophisticated applications with 
        <span className="font-semibold text-blue-700"> React</span> for dynamic front-ends, 
        <span className="font-semibold text-blue-700"> PHP</span> for robust back-end logic, and 
        <span className="font-semibold text-blue-700"> MySQL</span> for reliable data management.
      </p>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
        By integrating intelligent automation into the web app development lifecycle for projects 
        leveraging this powerful stack, teams can achieve unprecedented levels of efficiency, 
        accelerate time-to-market, and unlock new possibilities for innovation.
      </p>
    </div>
  </div>
</section>


{/* Intelligent Automation in Web Development Section */}
<section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Text Content */}
    <div data-aos="fade-right">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        The Dawn of Intelligent Automation in Web Development with React, PHP & MySQL
      </h2>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Traditional web development processes using 
        <span className="font-semibold text-blue-700"> React</span>, 
        <span className="font-semibold text-blue-700"> PHP</span>, and 
        <span className="font-semibold text-blue-700"> MySQL</span> often involve repetitive tasks in 
        component creation, API integration, database schema management, and server configurations.
        These bottlenecks can hinder productivity, increase the risk of human error, and slow down the overall development pace.
      </p>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
        <span className="font-semibold text-purple-700">AI automation</span> steps in as a game-changer, offering intelligent solutions 
        to streamline these processes within this specific technology ecosystem. 
        From automated code generation for React components and PHP modules to intelligent database optimization for MySQL 
        and automated deployment strategies for PHP applications, AI empowers developers to focus on 
        higher-level strategic thinking and creative problem-solving within their chosen tech stack.
      </p>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center relative" data-aos="fade-left">
      {/* Glow Effect */}
      <div className="absolute -top-10 right-10 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl -z-10"></div>

      <img
        src={project2} // 🔹 Replace with your actual image import or path
        alt="AI Automation in Web Development"
        className="w-full max-w-md md:max-w-lg rounded-xl shadow-xl"
      />
    </div>
  </div>
</section>

{/* Key Benefits of AI-Powered Web App Development */}
<section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    
    {/* Heading */}
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Key Benefits of AI-Powered Web App Development with Your Tech Stack
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 mx-auto rounded-full mb-6"></div>
      <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
        Embracing AI automation in web app development using 
        <span className="font-semibold text-blue-700"> React</span>, 
        <span className="font-semibold text-blue-700"> PHP</span>, and 
        <span className="font-semibold text-blue-700"> MySQL</span> yields 
        a multitude of compelling advantages that redefine productivity, efficiency, and innovation.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
      
      {/* Card 1 */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-sm">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          🚀 Accelerated Development Cycles
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          AI-powered tools automate repetitive React components, generate boilerplate code for PHP APIs,
          and streamline front-end to back-end integration — drastically reducing development time
          and speeding up delivery.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-sm">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          ✅ Enhanced Code Quality & Fewer Errors
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          AI-driven analysis identifies React code inconsistencies, PHP vulnerabilities, and MySQL schema flaws.
          Automated testing ensures reliability and robustness across the stack.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-sm">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          ⚙️ Intelligent Deployment & Scaling
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          AI algorithms optimize PHP deployments, predict MySQL resource needs, and auto-scale applications
          to ensure seamless performance and minimal downtime.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-sm">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          💡 Personalized User Experiences
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Using AI insights from MySQL data, React front-ends can deliver adaptive interfaces,
          intelligent search, and dynamic recommendations for each user.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-sm">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          📊 Data-Driven Insights for Continuous Improvement
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          AI analytics evaluate performance in React, PHP, and MySQL layers — guiding teams to refine UX,
          optimize queries, and make informed, data-backed decisions.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition backdrop-blur-sm">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">
          💰 Cost Optimization Across Development
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Automation reduces manual effort, optimizes database usage, and minimizes server overhead,
          delivering substantial long-term cost savings.
        </p>
      </div>
    </div>

    {/* Conclusion / Future Section */}
    <div className="mt-20 text-center" data-aos="fade-up">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        Embracing the Future: Integrating AI into Your Workflow
      </h3>
      <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        Transitioning to AI-powered web app development doesn’t have to happen overnight. 
        Start by integrating AI tools in areas like React code completion, PHP testing, or MySQL optimization.
        As AI continues to evolve, its impact on web development will only grow stronger — empowering developers
        to build intelligent, efficient, and scalable applications for the future.
      </p>
    </div>
  </div>
</section>

      {/* Understanding the stack */}
      {/* <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20 pt-6 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12"> */}
          {/* Heading */}
          {/* <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Understanding the Stack
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-20 h-1 bg-blue-500 rounded-full"></span>
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Together, React, Tailwind CSS, PHP, and MySQL provide a full-stack
            solution that is reliable, future-proof, and globally supported.
          </p>
        </div> */}

        {/* Stack Grid */}
        {/* <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {/* React */}{" "}
          {/* <div
  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-110"
  data-aos="fade-up"> */}

            {/* <div >
              <img src={ReactImg} alt="React" className="w-full object-cover" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                React (Frontend)
              </h4>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>JavaScript library for building interactive UIs.</li>
                <li>Virtual DOM ensures fast rendering.</li>
                <li>Component-based structure encourages reusability.</li>
              </ul>
            </div>
          </div> */} 

              {/* PHP */}
             {/* <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-110"
            data-aos="fade-up"
             >
            <div >
              <img src={PhpImg} alt="React" className="w-full object-cover" />
            </div>
            <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              PHP (Backend)
            </h4>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>Server-side scripting language used for decades.</li>
              <li>
                Large ecosystem with frameworks like Laravel, CodeIgniter.
              </li>
              <li>Handles business logic, authentication, and data flow.</li>
            </ul>
            </div>
          </div> */}

          {/* Tailwind CSS */}
           {/* <div
  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-110"
  data-aos="fade-up">
            <div >
              <img src={TailwindImage} alt="React" className="w-full object-cover" />
            </div>
             <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Tailwind CSS (Styling)
            </h4>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>Utility-first CSS framework.</li>
              <li>Responsive and mobile-friendly design baked in.</li>
              <li>Highly customizable for branding.</li>
            </ul>
            </div>
          </div>
          */}
          {/* MySQL */}
           {/* <div
  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-110"
  data-aos="fade-up"> */}
{/*             
            <div >
              <img src={MysqlImg} alt="React" className="w-full object-cover" />
            </div>
            <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              MySQL (Database)
            </h4>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>Relational database for structured data storage.</li>
              <li>Scales well for small to enterprise-level applications.</li>
              <li>Works seamlessly with PHP.</li>
            </ul>
            </div>
          </div>
        </div>
      </section> */}

{/* Why Businesses Choose This Stack */}
{/* <section className="bg-gradient-to-r from-blue-50 via-white to-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> */}
    
    {/* Left: Text Content */}
    {/* <div>
      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
        Why Businesses Choose This Stack
        <span className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -bottom-2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h4> */}

      {/* Feature List */}
      {/* <ul className="space-y-6">
        <li className="flex items-start gap-4" data-aos="fade-up">
          <span className="text-2xl text-blue-600">💰</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Cost-Effective</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Reduce licensing costs with open-source technologies that deliver enterprise-grade performance.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
          <span className="text-2xl text-green-600">✅</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Proven Reliability</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Trusted by industry leaders, PHP and MySQL have powered platforms like Facebook and WordPress.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
          <span className="text-2xl text-purple-600">⚡</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Scalability</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              React’s component-driven architecture ensures your apps stay fast as user traffic grows.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
          <span className="text-2xl text-pink-600">🚀</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Rapid Development</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Tailwind CSS accelerates UI development, making designs both consistent and responsive.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
          <span className="text-2xl text-red-600">🔒</span>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900">Security</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              With best practices, the stack ensures secure authentication, safe data handling, and reliable transactions.
            </p>
          </div>
        </li>
      </ul>
    </div> */}

    {/* Right: Image */}
    {/* <div className="flex justify-center" data-aos="fade-left">
      <img
        src={WebImg}  // replace with your image path
        alt="Tech Stack Illustration"
        className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
      />
    </div>
  </div>
</section> */}


{/* Benefits Section */}
{/* <section className="py-20 bg-blue-50">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> */}
     {/* Right: Image */}
    {/* <div className="flex justify-center" data-aos="fade-left">
      <img
        src={BenefitImg} // 👉 replace with your image path
        alt="Benefits Illustration"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div> */}
    
    {/* Left: Content */}
    {/* <div data-aos="fade-right">
      <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Benefits of Using React + Tailwind + PHP + MySQL
      </h3>
      <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <li>
          <span className="font-semibold text-blue-600">Separation of Concerns:</span>  
          React handles the frontend while PHP + MySQL manages backend and data.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Scalable UI:</span>  
          React’s virtual DOM ensures performance.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Customizable Styling:</span>  
          Tailwind ensures design consistency without CSS bloat.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Data Management:</span>  
          MySQL’s relational capabilities make it perfect for applications requiring structured storage.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Community Support:</span>  
          Massive developer ecosystem ensures constant innovation.
        </li>
      </ul>
    </div>

   
  </div>
</section> */}

{/* Real-World Use Cases Section
<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
     */}
    {/* Section Heading */}
    {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 relative inline-block">
      Real-World Use Cases
      <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
    </h3> */}

    {/* Use Cases Grid */}
    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
       */}
      {/* Card 1 */}
      {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300" data-aos="fade-up">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">E-commerce Applications</h4>
        <p className="text-gray-600 text-sm">
          Product catalogs, shopping carts, payment gateways.
        </p>
      </div> */}

      {/* Card 2 */}
      {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="100">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">SaaS Platforms</h4>
        <p className="text-gray-600 text-sm">
          Subscription billing, dashboards, analytics.
        </p>
      </div> */}

      {/* Card 3 */}
      {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="200">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Educational Portals</h4>
        <p className="text-gray-600 text-sm">
          Online courses, user accounts, progress tracking.
        </p>
      </div> */}

      {/* Card 4 */}
      {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="300">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Systems</h4>
        <p className="text-gray-600 text-sm">
          Patient records, scheduling, telemedicine.
        </p>
      </div> */}

      {/* Card 5 */}
      {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="400">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Corporate Dashboards</h4>
        <p className="text-gray-600 text-sm">
          Reporting tools, HR management, internal workflows.
        </p>
      </div>

//     </div> */}
 {/* </div> */}
{/*  </section> */}

{/* Features Section */}
{/* <section className="py-16 bg-blue-50" data-aos="fade-up">
  <div className="container mx-auto px-6 text-center">
    <h2
      className="text-3xl md:text-4xl font-bold mb-6"
      data-aos="fade-down"
    >
      Challenges
    </h2>
    <p
      className="text-gray-600 mb-12 max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Tackling modern web development comes with its own set of challenges
      that businesses and developers need to navigate.
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      <div
        className="w-full sm:w-[250px] rounded-xl shadow-lg p-6 flex-1 bg-gradient-to-br from-white-100 via-blue-300 to-white-100"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 className="font-bold text-blue-700 mb-2">
          Skilled Developers Needed
        </h3>
        <p className="text-gray-700">
          Requires developers skilled in both frontend and backend.
        </p>
      </div>
      <div
        className="w-full sm:w-[250px] rounded-xl shadow-lg p-6 flex-1 bg-gradient-to-br from-white-100 via-blue-300 to-white-100"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 className="font-bold text-blue-700 mb-2">
          Database Complexity
        </h3>
        <p className="text-gray-700">
          Maintaining large MySQL databases can become complex.
        </p>
      </div>
      <div
        className="w-full sm:w-[250px] rounded-xl shadow-lg p-6 flex-1 bg-gradient-to-br from-white-100 via-blue-300 to-white-100"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h3 className="font-bold text-blue-700 mb-2">
          Learning Curve
        </h3>
        <p className="text-gray-700">
          Tailwind has a learning curve for new developers.
        </p>
      </div>
    </div>
  </div>
</section> */}

{/* Real-World Use Cases Section */}
{/* <section className="bg-gray-50 py-16 ">
  <div className="max-w-6xl mx-auto px-6 text-center"> */}
    
    {/* Section Heading */}
    {/* <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 relative inline-block">
      Real-World Use Cases
      <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
    </h3> */}

    {/* Use Cases Grid */}
    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"> */}

      {/* Card 1 */}
      {/* <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 text-center" data-aos="fade-up">
        <FaShoppingCart className="text-blue-700 text-4xl mb-4 mx-auto" />
        <h4 className="font-bold text-blue-700 mb-2">E-commerce Applications</h4>
        <p className="text-gray-700 text-sm">
          Product catalogs, shopping carts, payment gateways.
        </p>
      </div> */}

      {/* Card 2 */}
      {/* <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="100">
        <FaCloud className="text-green-700 text-4xl mb-4 mx-auto" />
        <h4 className="font-bold text-green-700 mb-2">SaaS Platforms</h4>
        <p className="text-gray-700 text-sm">
          Subscription billing, dashboards, analytics.
        </p>
      </div> */}

      {/* Card 3 */}
      {/* <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="200">
        <FaBook className="text-purple-700 text-4xl mb-4 mx-auto" />
        <h4 className="font-bold text-purple-700 mb-2">Educational Portals</h4>
        <p className="text-gray-700 text-sm">
          Online courses, user accounts, progress tracking.
        </p>
      </div> */}

      {/* Card 4 */}
      {/* <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="300">
        <FaHeartbeat className="text-pink-700 text-4xl mb-4 mx-auto" />
        <h4 className="font-bold text-pink-700 mb-2">Healthcare Systems</h4>
        <p className="text-gray-700 text-sm">
          Patient records, scheduling, telemedicine.
        </p>
      </div> */}

      {/* Card 5 */}
      {/* <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
        <FaChartLine className="text-yellow-700 text-4xl mb-4 mx-auto" />
        <h4 className="font-bold text-yellow-700 mb-2">Corporate Dashboards</h4>
        <p className="text-gray-700 text-sm">
          Reporting tools, HR management, internal workflows.
        </p>
      </div>

    </div>
  </div>
</section> */}



      {/* Section 2: How Aristo Creative Technologies Helps */}
      {/* <section className="bg-white py-16 px-6 text-center">
       
<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
  How Aristo Creative Technologies Helps
</h2>

<div className="grid md:grid-cols-2 gap-8 justify-center">
  <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 max-w-lg mx-auto" data-aos="fade-right">
    <h3 className="text-xl font-semibold mb-4 text-blue-600">React Frontends</h3>
    <p className="text-gray-700">
      We build modern, responsive frontends using React to provide a seamless user experience for your web applications.
    </p>
  </div>

  <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 max-w-lg mx-auto" data-aos="fade-left">
    <h3 className="text-xl font-semibold mb-4 text-blue-600">Secure Backends</h3>
    <p className="text-gray-700">
      Our PHP/MySQL powered backends ensure security, reliability, and robust data management for your business applications.
    </p>
  </div>

  <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 max-w-lg mx-auto" data-aos="fade-right">
    <h3 className="text-xl font-semibold mb-4 text-blue-600">Tailwind UIs</h3>
    <p className="text-gray-700">
      We design responsive user interfaces with Tailwind CSS to maintain consistency, speed, and a visually appealing layout.
    </p>
  </div>

  <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 max-w-lg mx-auto" data-aos="fade-left">
    <h3 className="text-xl font-semibold mb-4 text-blue-600">Scalable Deployment</h3>
    <p className="text-gray-700">
      We deploy your applications on AWS or VPS, ensuring scalability and smooth performance as your business grows.
    </p>
  </div>
</div>
</section> */}


{/* Section 1: The Future of This Stack */}
{/* <section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12"> */}
    
    {/* Left Side: Image */}
    {/* <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000" >
      <img
        src={futureImg} 
        alt="Future Stack"
        className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105" 
      />
    </div> */}

    {/* Right Side: Content */}
    {/* <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 ">
        The Future of This Stack
      </h2>

      <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
        <li className="transition-transform duration-300 hover:translate-x-2 " data-aos="fade-up" data-aos-delay="200">
          <span className="font-semibold">AI integrations:</span> AI-assisted coding will speed up PHP + React development.
        </li>
        <li className="transition-transform duration-300 hover:translate-x-2 " data-aos="fade-up" data-aos-delay="400">
          <span className="font-semibold">Hybrid databases:</span> MySQL with cloud-managed NoSQL for advanced apps.
        </li>
        <li className="transition-transform duration-300 hover:translate-x-2 " data-aos="fade-up" data-aos-delay="600">
          <span className="font-semibold">Microservices:</span> PHP APIs serving React micro-frontends.
        </li>
      </ul>
    </div>

  </div>
</section> */}

{/* Frequently Asked Questions */}
{/* <section className="w-full py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4 text-left"> */}
      {/* FAQ 1 */}
      {/* <div className="bg-white rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4 flex justify-between items-center cursor-pointer">
          <span className="font-medium text-gray-800">
            Q1. Is this stack good for startups?
          </span>
        </div>
        <div className="px-6 pb-4 text-gray-600">
          A: Yes, it’s cost-efficient, scalable, and fast to develop.
        </div>
      </div> */}

      {/* FAQ 2 */}
      {/* <div className="bg-white rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4 flex justify-between items-center cursor-pointer">
          <span className="font-medium text-gray-800">
            Q2. Can this handle high traffic?
          </span>
        </div>
        <div className="px-6 pb-4 text-gray-600">
          A: With caching, optimized queries, and cloud hosting, it scales to millions of users.
        </div>
      </div> */}

      {/* FAQ 3 */}
      {/* <div className="bg-white rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <div className="px-6 py-4 flex justify-between items-center cursor-pointer">
          <span className="font-medium text-gray-800">
            Q3. How long does it take to build a web app?
          </span>
        </div>
        <div className="px-6 pb-4 text-gray-600">
          A: Depending on complexity, 6–12 weeks is typical for MVPs.
        </div>
      </div>
    </div>
  </div>
</section> */}



      {/* Call-to-Action Section */}
     {/* Call-to-Action Section */}
<section
  className="py-16 text-center bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: `url(${bottomimg})` }}  // replace ctaBgImg with your imported image
  data-aos="fade-up"
>
  {/* Optional overlay to make text readable */}
  <div className="absolute inset-0 bg-blue-500/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl mx-auto px-6">
    <h2
      className="text-3xl md:text-4xl font-bold mb-4 text-white"
      data-aos="fade-down"
    >
      Ready to Build Your Web App?
    </h2>
    <p
      className="text-white mb-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Let Aristo Webtek turn your ideas into a powerful web application.
    </p>
    <button
      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      Get Started Today
    </button>
  </div>
</section>
    </div>
  );
};

export default WebAppDevelopment;
