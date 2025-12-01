import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import ScrollToTop from "./components/ScrollToTp";
import AiWebsiteDevPage from "./components/AiAssistedWebsiteDesign";
import WebAppDevelopment from "./components/WebAppDevelopment";
import MobileAppDevelopment from "./components/MobileAppDevelopment";
import SaasDevelopment from "./components/SaasDevelopment";
import AutopilotWebsite from "./components/AutopilotWebsite";
import OnlineInfrastructure from "./components/OnlineInfrastructure";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrivacyPolicy from "./components/PrivacyPolicy";
 import TermsAndConditions from "./components/TermsAndContiditions"
import WhoAreWe from "./components/WhoAreWe";
import WhyChooseUs from "./components/WhyChooseUs";
import RefundPolicy from "./components/RefundPolicy";


/**
 * Vite + React + Tailwind app
 * - Exact menu + dropdowns
 * - React Router pages
 * - SEO: per-route meta + JSON-LD (Organization, WebSite, Breadcrumbs, FAQ)
 * - Sticky CTA
 * - Image slots + PROMPTS wired via <ImgWithPrompt/>
 * - Contact/Quote forms with placeholders for Mailchimp/SendGrid/Gupshup
 */

// Reusable image component with embedded prompt for asset generation
function ImgWithPrompt({ src, alt, prompt, className = "" }) {
  return (
    <figure className={`relative ${className}`}>
      {/* PROMPT: {prompt} */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto object-cover rounded-2xl border border-slate-200"
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <div className="min-h-screen bg-white text-slate-900">
          <Navbar />
          <StickyCTA />
          <ScrollToTop />
          <main className="pt-24 min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AiWebsiteDevPage" element={<AiWebsiteDevPage />} />
              <Route
                path="/WebAppDevelopment"
                element={<WebAppDevelopment />}
              />
              <Route
                path="/MobileAppDevelopment"
                element={<MobileAppDevelopment />}
              />
              <Route
                path="/SaasDevelopment"
                element={<SaasDevelopment />}
              />
                 <Route
                path="/AutopilotWebsite"
                element={<AutopilotWebsite />}
              />
                <Route
                path="/OnlineInfrastructure"
                element={<OnlineInfrastructure />}
              />

              {/* <Route
                path="/ai-assisted-website-design"
                element={
                  <Page title="AI Assisted Website Design" id="ai-assisted" />
                }
              />
              <Route
                path="/web-app-development"
                element={<Page title="Web App Development" id="web-app" />}
              />
              <Route
                path="/mobile-app-development"
                element={
                  <Page title="Mobile App Development" id="mobile-app" />
                }
              />
              <Route
                path="/saas-application-development"
                element={
                  <Page title="SaaS Application Development" id="saas-app" />
                }
              />
              <Route
                path="/ai-autopilot-website"
                element={
                  <Page title="AI Autopilot Website" id="ai-autopilot" />
                }
              />
              <Route
                path="/online-infrastructure"
                element={
                  <Page title="Online Infrastructure" id="infrastructure" />
                }
              /> */}
              <Route
                path="/aristo-academy"
                element={<Page title="Aristo Academy" id="academy" />}
              />
              {/* <Route
                path="/company/who-are-we"
                element={<Page title="Who are we" id="company-who" />}
              /> */}
              {/* <Route
                path="/company/why-choose-us"
                element={<Page title="Why choose us" id="company-why" />}
              /> */}
              <Route path="/company/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
               <Route path="/company/who-are-we" element={<WhoAreWe />} />
               <Route path="/company/why-choose-us"element={<WhyChooseUs/>}/>
               <Route path="/refund-policy"element={<RefundPolicy />} />

                  

              <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
              <Route path="*" element={<NotFound />} />
              
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

/* -------------------- Shared SEO -------------------- */
function SiteSEO() {
  const site = {
    name: "Aristo Webtek",
    url: "https://aristowebtek.com/",
    logo: "https://aristowebtek.com/act25/assets/img/logo.png",
    sameAs: [
      "https://wa.me/918144405577",
      "https://www.linkedin.com/company/aristo-creative-technologies/",
      "https://www.facebook.com/aristocreativetech",
    ],
  };
  const orgJSON = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: site.logo,
    sameAs: site.sameAs,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Assisted Website Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Web App Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobile App Development" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Autopilot Website" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Online Infrastructure" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Aristo Academy" },
      },
    ],
  };
  const webSiteJSON = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: site.url,
    name: site.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <Helmet>
      <link rel="canonical" href={site.url} />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(orgJSON)}</script>
      <script type="application/ld+json">{JSON.stringify(webSiteJSON)}</script>
    </Helmet>
  );
}

/* -------------------- Navbar -------------------- */

// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 6);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const menu = [
//     { label: "AI Assisted Website Design", to: "/ai-assisted-website-design" },
//     { label: "Web App Development", to: "/web-app-development" },
//     { label: "Mobile App Development", to: "/mobile-app-development" },
//     { label: "SaaS Application Development", to: "/saas-application-development" },
//     { label: "AI Autopilot Website", to: "/ai-autopilot-website" },
//     { label: "Online Infrastructure", to: "/online-infrastructure" },
//     { label: "Aristo Academy", to: "/aristo-academy" },
//     {
//       label: "Company",
//       items: [
//         { label: "Who are we", to: "/company/who-are-we" },
//         { label: "Why choose us", to: "/company/why-choose-us" },
//         { label: "Contact", to: "/company/contact" },
//       ],
//     },
//     {
//       label: "Connect",
//       items: [
//         { label: "WhatsApp", to: "https://wa.me/918144405577", external: true },
//         { label: "LinkedIn", to: "https://www.linkedin.com/company/aristo-creative-technologies/", external: true },
//         { label: "Facebook", to: "https://www.facebook.com/aristocreativetech", external: true },
//       ],
//     },
//   ];

//   const baseHeader =
//     "fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70";
//   const borders =
//     "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent border-b border-slate-200/60";
//   const shadow = scrolled ? "shadow-sm" : "";

//   return (
//     <header className={`${baseHeader} ${borders} ${shadow}`}>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="h-16 flex items-center justify-between">
//           {/* Brand */}
//           <Link to="/" className="flex items-center gap-3 group" aria-label="Aristo Webtek Home">
//             <img
//               src="https://aristowebtek.com/act25/assets/img/logo.png"
//               alt="Aristo Webtek"
//               className="h-8 w-auto transition-transform group-hover:scale-[1.02]"
//               loading="eager"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
//             {menu.map((m) =>
//               m.items ? (
//                 <div
//                   key={m.label}
//                   className="relative"
//                   onMouseEnter={() => setOpenDropdown(m.label)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <button
//                     className="px-3 py-2 rounded-lg inline-flex items-center gap-1 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//                     aria-haspopup="true"
//                     aria-expanded={openDropdown === m.label}
//                   >
//                     <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all group-hover:after:w-full">
//                       {m.label}
//                     </span>
//                     <svg
//                       className={`w-4 h-4 transition-transform ${openDropdown === m.label ? "rotate-180" : ""}`}
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>

//                   {/* Dropdown */}
//                   <div
//                     className={`absolute left-0 mt-2 min-w-[260px] rounded-2xl border border-slate-200 bg-white/95 shadow-xl p-2 transition
//                     ${openDropdown === m.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
//                   >
//                     {m.items.map((it) =>
//                       it.external ? (
//                         <a
//                           key={it.label}
//                           href={it.to}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block px-3 py-2 rounded-xl hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
//                         >
//                           {it.label} ↗
//                         </a>
//                       ) : (
//                         <NavLink
//                           key={it.label}
//                           to={it.to} /* ✅ use it.to here */
//                           className={({ isActive }) =>
//                             `block px-3 py-2 rounded-xl hover:bg-slate-50 focus:bg-slate-50 focus:outline-none ${
//                               isActive ? "text-sky-600 bg-sky-50" : ""
//                             }`
//                           }
//                         >
//                           {it.label}
//                         </NavLink>
//                       )
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <NavLink
//                   key={m.label}
//                   to={m.to}
//                   className={({ isActive }) =>
//                     `relative px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 hover:text-sky-600 ${
//                       isActive ? "text-sky-700" : ""
//                     }`
//                   }
//                 >
//                   {({ isActive }) => (
//                     <span
//                       className={`after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-sky-500 after:transition-all ${
//                         isActive ? "after:w-[calc(100%-1.5rem)]" : "after:w-0"
//                       }`}
//                     >
//                       {m.label}
//                     </span>
//                   )}
//                 </NavLink>
//               )
//             )}

//             <NavLink
//               to="/company/contact"
//               className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-sm hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//             >
//               <span>Get Quote</span>
//             </NavLink>
//           </nav>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//             onClick={() => setMobileOpen((v) => !v)}
//             aria-expanded={mobileOpen}
//             aria-controls="mobileMenu"
//           >
//             <span className="sr-only">Toggle menu</span>
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         id="mobileMenu"
//         className={`md:hidden border-t border-slate-200 bg-white/95 transition-all ${
//           mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden`}
//       >
//         <ul className="px-4 py-3 text-sm">
//           {menu.map((m) =>
//             m.items ? (
//               <li key={m.label} className="border-b border-slate-100 last:border-0 py-1">
//                 <details>
//                   <summary className="py-2 cursor-pointer list-none flex items-center justify-between">
//                     <span>{m.label}</span>
//                     <span className="text-slate-400">+</span>
//                   </summary>
//                   <div className="pl-3">
//                     {m.items.map((it) =>
//                       it.external ? (
//                         <a
//                           key={it.label}
//                           href={it.to}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block py-2"
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           {it.label} ↗
//                         </a>
//                       ) : (
//                         <NavLink
//                           key={it.label}
//                           to={it.to}
//                           className="block py-2"
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           {it.label}
//                         </NavLink>
//                       )
//                     )}
//                   </div>
//                 </details>
//               </li>
//             ) : (
//               <li key={m.label} className="border-b border-slate-100 last:border-0">
//                 <NavLink to={m.to} className="block py-2" onClick={() => setMobileOpen(false)}>
//                   {m.label}
//                 </NavLink>
//               </li>
//             )
//           )}
//           <li className="pt-2">
//             <NavLink
//               to="/company/contact"
//               className="inline-flex px-3 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white"
//               onClick={() => setMobileOpen(false)}
//             >
//               Get Quote
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }
// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 6);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const services = [
//     { label: "AI Assisted Website", to: "/ai-assisted-website-design", desc: "Faster builds with AI" },
//     { label: "Web App Development", to: "/web-app-development", desc: "Dashboards & portals" },
//     { label: "Mobile App Development", to: "/mobile-app-development", desc: "iOS • Android • PWA" },
//     { label: "SaaS Development", to: "/saas-application-development", desc: "Subscriptions & multi-tenant" },
//     { label: "AI Autopilot Website", to: "/ai-autopilot-website", desc: "Self-optimizing sites" },
//     { label: "Online Infrastructure", to: "/online-infrastructure", desc: "Cloud, CDN, security" },
//   ];

//   const company = [
//     { label: "Who are we", to: "/company/who-are-we" },
//     { label: "Why choose us", to: "/company/why-choose-us" },
//     { label: "Contact", to: "/company/contact" },
//   ];

//   const socials = [
//     { label: "WhatsApp", to: "https://wa.me/918144405577", external: true },
//     { label: "LinkedIn", to: "https://www.linkedin.com/company/aristo-creative-technologies/", external: true },
//     { label: "Facebook", to: "https://www.facebook.com/aristocreativetech", external: true },
//   ];

//   const baseHeader =
//     "fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70";
//   const borders =
//     "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent border-b border-slate-200/60";
//   const shadow = scrolled ? "shadow-sm" : "";

//   return (
//     <header className={`${baseHeader} ${borders} ${shadow}`}>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="h-16 flex items-center justify-between">
//           {/* Brand */}
//           <Link to="/" className="flex items-center gap-3 group" aria-label="Aristo Webtek Home">
//             <img
//               src="https://aristowebtek.com/act25/assets/img/logo.png"
//               alt="Aristo Webtek"
//               className="h-8 w-auto transition-transform group-hover:scale-[1.02]"
//               loading="eager"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
//             {/* Services mega menu */}
//             <div
//               className="relative"
//               onMouseEnter={() => setOpenDropdown("Services")}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <button
//                 className="px-3 py-2 rounded-lg inline-flex items-center gap-1 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//                 aria-haspopup="true"
//                 aria-expanded={openDropdown === "Services"}
//               >
//                 <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all group-hover:after:w-full">
//                   Services
//                 </span>
//                 <svg
//                   className={`w-4 h-4 transition-transform ${openDropdown === "Services" ? "rotate-180" : ""}`}
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {/* Mega dropdown */}
//               <div
//                 className={`absolute left-0 mt-2 w-[560px] rounded-2xl border border-slate-200 bg-white/95 shadow-xl p-3 transition
//                 ${openDropdown === "Services" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
//               >
//                 <div className="grid grid-cols-2 gap-2">
//                   {services.map((s) => (
//                     <NavLink
//                       key={s.label}
//                       to={s.to}
//                       className={({ isActive }) =>
//                         `flex items-start gap-3 rounded-xl px-3 py-2 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none ${
//                           isActive ? "bg-sky-50 text-sky-600" : ""
//                         }`
//                       }
//                     >
//                       {/* tiny icon bullet */}
//                       <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" />
//                       <span className="flex-1 leading-tight">
//                         <span className="font-medium">{s.label}</span>
//                         <span className="block text-xs text-slate-500">{s.desc}</span>
//                       </span>
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Academy */}
//             <NavLink
//               to="/aristo-academy"
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-lg hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 ${
//                   isActive ? "text-sky-700" : ""
//                 }`
//               }
//             >
//               Aristo Academy
//             </NavLink>

//             {/* Company dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setOpenDropdown("Company")}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <button
//                 className="px-3 py-2 rounded-lg inline-flex items-center gap-1 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//                 aria-haspopup="true"
//                 aria-expanded={openDropdown === "Company"}
//               >
//                 Company
//                 <svg
//                   className={`w-4 h-4 transition-transform ${openDropdown === "Company" ? "rotate-180" : ""}`}
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
//                 </svg>
//               </button>
//               <div
//                 className={`absolute left-0 mt-2 min-w-[220px] rounded-2xl border border-slate-200 bg-white/95 shadow-xl p-2 transition
//                 ${openDropdown === "Company" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
//               >
//                 {company.map((c) => (
//                   <NavLink
//                     key={c.label}
//                     to={c.to}
//                     className={({ isActive }) =>
//                       `block px-3 py-2 rounded-xl hover:bg-slate-50 ${isActive ? "text-sky-600 bg-sky-50" : ""}`
//                     }
//                   >
//                     {c.label}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             {/* Connect dropdown (socials) */}
//             <div
//               className="relative"
//               onMouseEnter={() => setOpenDropdown("Connect")}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <button
//                 className="px-3 py-2 rounded-lg inline-flex items-center gap-1 hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//                 aria-haspopup="true"
//                 aria-expanded={openDropdown === "Connect"}
//               >
//                 Connect
//                 <svg
//                   className={`w-4 h-4 transition-transform ${openDropdown === "Connect" ? "rotate-180" : ""}`}
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
//                 </svg>
//               </button>
//               <div
//                 className={`absolute left-0 mt-2 min-w-[220px] rounded-2xl border border-slate-200 bg-white/95 shadow-xl p-2 transition
//                 ${openDropdown === "Connect" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
//               >
//                 {socials.map((s) => (
//                   <a
//                     key={s.label}
//                     href={s.to}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block px-3 py-2 rounded-xl hover:bg-slate-50"
//                   >
//                     {s.label} ↗
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* CTA */}
//             <NavLink
//               to="/company/contact"
//               className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-sm hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//             >
//               <span>Get Quote</span>
//             </NavLink>
//           </nav>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
//             onClick={() => setMobileOpen((v) => !v)}
//             aria-expanded={mobileOpen}
//             aria-controls="mobileMenu"
//           >
//             <span className="sr-only">Toggle menu</span>
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         id="mobileMenu"
//         className={`md:hidden border-t border-slate-200 bg-white/95 transition-all ${
//           mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden`}
//       >
//         <ul className="px-4 py-3 text-sm">
//           <li className="border-b border-slate-100 last:border-0 py-1">
//             <details>
//               <summary className="py-2 cursor-pointer list-none flex items-center justify-between">
//                 <span>Services</span>
//                 <span className="text-slate-400">+</span>
//               </summary>
//               <div className="pl-3">
//                 {services.map((s) => (
//                   <NavLink
//                     key={s.label}
//                     to={s.to}
//                     className="block py-2"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {s.label}
//                   </NavLink>
//                 ))}
//               </div>
//             </details>
//           </li>
//           <li className="border-b border-slate-100 last:border-0">
//             <NavLink to="/aristo-academy" className="block py-2" onClick={() => setMobileOpen(false)}>
//               Aristo Academy
//             </NavLink>
//           </li>
//           <li className="border-b border-slate-100 last:border-0 py-1">
//             <details>
//               <summary className="py-2 cursor-pointer list-none flex items-center justify-between">
//                 <span>Company</span>
//                 <span className="text-slate-400">+</span>
//               </summary>
//               <div className="pl-3">
//                 {company.map((c) => (
//                   <NavLink
//                     key={c.label}
//                     to={c.to}
//                     className="block py-2"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {c.label}
//                   </NavLink>
//                 ))}
//               </div>
//             </details>
//           </li>
//           <li className="border-b border-slate-100 last:border-0 py-1">
//             <details>
//               <summary className="py-2 cursor-pointer list-none flex items-center justify-between">
//                 <span>Connect</span>
//                 <span className="text-slate-400">+</span>
//               </summary>
//               <div className="pl-3">
//                 {socials.map((s) => (
//                   <a
//                     key={s.label}
//                     href={s.to}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block py-2"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     {s.label} ↗
//                   </a>
//                 ))}
//               </div>
//             </details>
//           </li>
//           <li className="pt-2">
//             <NavLink
//               to="/company/contact"
//               className="inline-flex px-3 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white"
//               onClick={() => setMobileOpen(false)}
//             >
//               Get Quote
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState({
    Services: true,
    Company: false,
    Connect: false,
  });
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer open + Escape to close
  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e) => e.key === "Escape" && setDrawerOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [drawerOpen]);

  const services = [
    { label: "AI Assisted Website", to: "/AiWebsiteDevPage" },
    { label: "Web App Development", to: "/WebAppDevelopment" },
    { label: "Mobile App Development", to: "/MobileAppDevelopment" },
    { label: "SaaS Development", to: "/SaasDevelopment" },
    { label: "AI Autopilot Website", to: "/AutopilotWebsite" },
    { label: "Online Infrastructure", to: "/OnlineInfrastructure" },
  ];

  const company = [
    { label: "Who are we", to: "/company/who-are-we" },
    { label: "Why choose us", to: "/company/why-choose-us" },
    { label: "Contact", to: "/company/contact" },
  ];

  const socials = [
    { label: "WhatsApp", to: "https://wa.me/918144405577", external: true },
    {
      label: "LinkedIn",
      to: "https://www.linkedin.com/company/aristo-creative-technologies/",
      external: true,
    },
    {
      label: "Facebook",
      to: "https://www.facebook.com/aristocreativetech",
      external: true,
    },
  ];

  const baseHeader = `fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
    drawerOpen ? "bg-white !backdrop-blur-none" : ""
  }`;
  const borders =
    "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent border-b border-slate-200/60";
  const shadow = scrolled ? "shadow-sm" : "";

  return (
    <header className={`${baseHeader} ${borders} ${shadow}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Aristo Webtek Home"
          >
            <img
              src="https://aristowebtek.com/act25/logo/AW25SEP.png"
              alt="Aristo Webtek"
              className="h-12 w-auto transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center justify-center px-3 py-2  bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
              // rounded-lg border border-slate-300
              aria-controls="offcanvas"
              aria-expanded={drawerOpen}
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {/* <span className="ml-2 hidden sm:inline">Menu</span> */}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-slate-900/50 transition-opacity ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden
      />

      {/* Offcanvas panel */}
      <aside
        id="offcanvas"
        className={`fixed inset-y-0 right-0 z-[100] w-[90%] max-w-md bg-white border-l border-slate-200 shadow-2xl
  transition-transform duration-300 ${
    drawerOpen ? "translate-x-0" : "translate-x-full"
  }`}
        role="dialog"
        aria-label="Main menu"
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200">
          <span className="font-semibold">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-lg border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-4rem)] px-4 py-3">
          {/* Services */}
          <section className="py-2 border-b border-slate-100">
            <button
              className="w-full flex items-center justify-between py-2 text-left font-semibold"
              onClick={() =>
                setSectionsOpen((s) => ({ ...s, Services: !s.Services }))
              }
              aria-expanded={sectionsOpen.Services}
            >
              <span>Services</span>
              <span
                className={`transition-transform ${
                  sectionsOpen.Services ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`${
                sectionsOpen.Services ? "grid" : "hidden"
              } grid-cols-1 gap-1 pb-2`}
            >
              {services.map((s) => (
                <NavLink
                  key={s.label}
                  to={s.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 hover:bg-slate-50 ${
                      isActive ? "text-sky-600 bg-sky-50" : ""
                    }`
                  }
                >
                  {s.label}
                </NavLink>
              ))}
            </div>
          </section>

          {/* Academy */}
          <section className="py-2 border-b border-slate-100">
            <NavLink
              to="/aristo-academy"
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 hover:bg-slate-50 ${
                  isActive ? "text-sky-600 bg-sky-50" : ""
                }`
              }
            >
              Aristo Academy
            </NavLink>
          </section>

          {/* Company */}
          <section className="py-2 border-b border-slate-100">
            <button
              className="w-full flex items-center justify-between py-2 text-left font-semibold"
              onClick={() =>
                setSectionsOpen((s) => ({ ...s, Company: !s.Company }))
              }
              aria-expanded={sectionsOpen.Company}
            >
              <span>Company</span>
              <span
                className={`transition-transform ${
                  sectionsOpen.Company ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`${
                sectionsOpen.Company ? "grid" : "hidden"
              } grid-cols-1 gap-1 pb-2`}
            >
              {company.map((c) => (
                <NavLink
                  key={c.label}
                  to={c.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 hover:bg-slate-50 ${
                      isActive ? "text-sky-600 bg-sky-50" : ""
                    }`
                  }
                >
                  {c.label}
                </NavLink>
              ))}
            </div>
          </section>

          {/* Connect */}
          <section className="py-2 border-b border-slate-100">
            <button
              className="w-full flex items-center justify-between py-2 text-left font-semibold"
              onClick={() =>
                setSectionsOpen((s) => ({ ...s, Connect: !s.Connect }))
              }
              aria-expanded={sectionsOpen.Connect}
            >
              <span>Connect</span>
              <span
                className={`transition-transform ${
                  sectionsOpen.Connect ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`${
                sectionsOpen.Connect ? "grid" : "hidden"
              } grid-cols-1 gap-1 pb-2`}
            >
              {socials.map((s) =>
                s.external ? (
                  <a
                    key={s.label}
                    href={s.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-3 py-2 hover:bg-slate-50"
                  >
                    {s.label} ↗
                  </a>
                ) : (
                  <NavLink
                    key={s.label}
                    to={s.to}
                    className="block rounded-lg px-3 py-2 hover:bg-slate-50"
                  >
                    {s.label}
                  </NavLink>
                )
              )}
            </div>
          </section>

          {/* CTA */}
          <div className="pt-4">
            <NavLink
              to="/company/contact"
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-sm hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
            >
              Get a Quote          </NavLink>
          </div>
        </div>
      </aside>
    </header>
  );
}

/* -------------------- Sticky CTA -------------------- */

function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp button */}
      <a
        href="https://wa.me/918144405577"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-green-600 transition-all hover:scale-105"
      >
        <FaWhatsapp className="text-lg animate-pulse group-hover:animate-none" />
       
      </a>

      {/* Get Quote button */}
      <Link
        to="/company/contact"
        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:brightness-110 transition-all hover:scale-105"
      >
        <HiOutlineDocumentText className="text-lg" />
       
      </Link>
    </div>
  );
}

/* -------------------- Pages -------------------- */
function Home() {
  const title =
    "Aristo Webtek — eCommerce, Websites, Mobile/Web Apps, AI & Infrastructure";
  const desc =
    "We design and ship AI‑assisted websites, SaaS and mobile/web apps, with secure online infrastructure.";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aristowebtek.com/" />
        <meta
          property="og:image"
          content="https://aristowebtek.com/act25/assets/img/logo.png"
        />
      </Helmet>
      <SiteSEO />
      <Hero />
      <SectionGrid />
    </>
  );
}

function Page({ title, id }) {
  const loc = useLocation();
  const canonical = `https://aristowebtek.com${loc.pathname}`;
  const crumbs = [
    { name: "Home", url: "https://aristowebtek.com/" },
    { name: title, url: canonical },
  ];
  const breadcrumbJSON = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
  return (
    <>
      <Helmet>
        <title>{`${title} – Aristo Webtek`}</title>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJSON)}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Add your service copy for{" "}
              <span className="font-semibold">{title}</span>. Include benefits,
              features, tech stack, timelines, pricing and FAQs.
            </p>
            <div id={id} className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold mb-2">Key Capabilities</h3>
                <ul className="text-slate-600 list-disc ml-5 space-y-1 text-sm">
                  <li>
                    Modern stack (React/Tailwind, PHP/Laravel/Node,
                    MySQL/Postgres)
                  </li>
                  <li>SEO, performance, security best practices</li>
                  <li>CI/CD, backups, monitoring</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-2 00 p-6">
                <h3 className="font-semibold mb-2">Get a Quote</h3>
                <MiniQuoteForm defaultService={title} />
              </div>
            </div>
          </div>
          <div>
            <ImgWithPrompt
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
              alt={`${title} banner illustration`}
              prompt={`Hero/banner for service: ${title}. Clean white background, isometric UI panels showing relevant features; brand blue/emerald accents; soft shadow; minimal style`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function ContactPage() {
  const loc = useLocation();
  const canonical = `https://aristowebtek.com${loc.pathname}`;
  const faqJSON = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide hosting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, managed deployments on AWS/Contabo with SSL, CDN and backups.",
        },
      },
      {
        "@type": "Question",
        name: "Typical timelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Landing sites in 2 weeks; eCommerce/apps vary by scope (4–8+ weeks).",
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Contact – Aristo Webtek</title>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(faqJSON)}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Tell us about your project
          </h1>
          <p className="mt-3 text-slate-600">
            We’ll respond with a plan, timeline and quote.
          </p>
          <ul className="mt-4 text-slate-600 space-y-2 text-sm">
            <li>✉️ hello@aristowebtek.com</li>
            <li>📞 +91 81444 05577</li>
            <li>📍 Chennai, India</li>
          </ul>
          <div className="mt-6">
            <h3 className="font-semibold">Or ping us</h3>
            <div className="mt-2 flex gap-2">
              <a
                className="px-3 py-2 rounded-lg border"
                href="https://wa.me/918144405577"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="px-3 py-2 rounded-lg border"
                href="https://www.linkedin.com/company/aristo-creative-technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="px-3 py-2 rounded-lg border"
                href="https://www.facebook.com/aristocreativetech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <ImgWithPrompt
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Contact / collaboration illustration"
            prompt="Professional team collaboration in modern office; laptops on desk; clean lighting; white-tech theme; trustworthy tone"
            className="mb-4"
          />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">
      <Helmet>
        <title>404 – Not found | Aristo Webtek</title>
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex px-4 py-2 rounded-xl bg-sky-500 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}

/* -------------------- Home sections -------------------- */
// function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden">
//       <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
//       <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
//       <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Build high‑performance digital experiences with Aristo</h1>
//           <p className="mt-4 text-lg text-slate-600">From AI‑assisted websites to SaaS and mobile apps—design, development, and secure online infrastructure under one roof.</p>
//           <div className="mt-6 flex gap-3">
//             <Link to="/company/contact" className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold">Start a Project</Link>
//             <Link to="/web-app-development" className="px-6 py-3 rounded-xl border border-slate-300 font-semibold">See Work</Link>
//           </div>
//         </div>
//         <div>
//           <ImgWithPrompt
//             src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
//             alt="Futuristic workspace with AI design interfaces"
//             prompt="Futuristic office workspace with glowing holographic web interfaces, developers collaborating, abstract AI circuits in background; clean tech brand look; white background accents; blue and emerald tones; cinematic light; 3:2 composition"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- Modern Hero Slider (drop-in) ---------- */
// function Hero() {
//   const slides = [
//     {
//       title: "Build high-performance digital experiences with Aristo",
//       subtitle:
//         "From AI-assisted websites to SaaS and mobile apps—design, development, and secure online infrastructure under one roof.",
//       cta1: { label: "Start a Project", to: "/company/contact", primary: true },
//       cta2: { label: "See Work", to: "/web-app-development" },
//       img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
//       prompt:
//         "Futuristic office workspace with glowing holographic web interfaces, developers collaborating, abstract AI circuits; white + sky/emerald accents; cinematic light; 16:9",
//     },
//     {
//       title: "AI-Assisted Website Design",
//       subtitle:
//         "Launch faster with AI content, layouts, and A/B ideas that learn from your visitors.",
//       cta1: { label: "Get AI Website", to: "/ai-assisted-website-design", primary: true },
//       cta2: { label: "Talk to Us", to: "/company/contact" },
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
//       prompt:
//         "Isometric UI wireframes + AI glow lines; minimalist white background; blue/teal gradients; premium tech aesthetic; 16:9",
//     },
//     {
//       title: "SaaS & Web Apps that Scale",
//       subtitle:
//         "Multi-tenant, subscriptions, analytics, and secure infra — ready for growth.",
//       cta1: { label: "Build SaaS", to: "/saas-application-development", primary: true },
//       cta2: { label: "Our Process", to: "/company/why-choose-us" },
//       img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
//       prompt:
//         "Dashboard UI floating cards with charts and metrics; cloud/serverless hints; white background; subtle glassmorphism; 16:9",
//     },
//   ];

//   const [index, setIndex] = useState(0);
//   const [drag, setDrag] = useState({ active: false, startX: 0, deltaX: 0 });
//   const [paused, setPaused] = useState(false);
//   const slideCount = slides.length;
//   const AUTOPLAY_MS = 5500;

//   // Auto-play
//   useEffect(() => {
//     if (paused) return;
//     const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), AUTOPLAY_MS);
//     return () => clearInterval(id);
//   }, [paused, slideCount]);

//   // Keyboard arrows
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slideCount);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slideCount) % slideCount);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [slideCount]);

//   // Drag + swipe
//   const onPointerDown = (e) => {
//     const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//     setDrag({ active: true, startX: x, deltaX: 0 });
//     setPaused(true);
//   };
//   const onPointerMove = (e) => {
//     if (!drag.active) return;
//     const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//     setDrag((d) => ({ ...d, deltaX: x - d.startX }));
//   };
//   const endDrag = () => {
//     if (!drag.active) return;
//     const THRESH = 80;
//     if (drag.deltaX > THRESH) setIndex((i) => (i - 1 + slideCount) % slideCount);
//     else if (drag.deltaX < -THRESH) setIndex((i) => (i + 1) % slideCount);
//     setDrag({ active: false, startX: 0, deltaX: 0 });
//     setPaused(false);
//   };

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* background blobs */}
//       <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
//       <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

//       {/* Slider viewport */}
//       <div
//         className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20"
//         onMouseDown={onPointerDown}
//         onMouseMove={onPointerMove}
//         onMouseUp={endDrag}
//         onMouseLeave={endDrag}
//         onTouchStart={onPointerDown}
//         onTouchMove={onPointerMove}
//         onTouchEnd={endDrag}
//       >
//         {/* Slides */}
//         <div className="relative h-[520px] md:h-[560px] lg:h-[600px] rounded-3xl overflow-hidden border border-slate-200">
//           {slides.map((s, i) => {
//             const active = i === index;
//             return (
//               <div
//                 key={s.title}
//                 className={`absolute inset-0 grid lg:grid-cols-2 items-stretch transition-opacity duration-700 ease-out
//                 ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//               >
//                 {/* Left: copy */}
//                 <div className="relative z-10 flex items-center bg-white/80 backdrop-blur-sm p-8 md:p-10">
//                   <div>
//                     <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
//                       {s.title}
//                     </h1>
//                     <p className="mt-4 text-base md:text-lg text-slate-600">{s.subtitle}</p>
//                     <div className="mt-6 flex flex-wrap gap-3">
//                       {s.cta1 && (
//                         <Link
//                           to={s.cta1.to}
//                           className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:brightness-105"
//                         >
//                           {s.cta1.label}
//                         </Link>
//                       )}
//                       {s.cta2 && (
//                         <Link
//                           to={s.cta2.to}
//                           className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-50"
//                         >
//                           {s.cta2.label}
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right: image with overlay */}
//                 <div className="relative h-full">
//                   <ImgWithPrompt
//                     src={s.img}
//                     alt={s.title}
//                     prompt={s.prompt}
//                     className="absolute inset-0 h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:object-cover !rounded-none !border-0"
//                   />
//                   {/* gradient overlay for energy */}
//                   <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-emerald-400/20 mix-blend-multiply" />
//                 </div>
//               </div>
//             );
//           })}

//           {/* Drag indicator (subtle translate on drag) */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               transform: `translateX(${drag.deltaX * 0.05}px)`,
//               transition: drag.active ? "none" : "transform 300ms ease",
//             }}
//           />

//           {/* Controls */}
//           <button
//             onClick={() => setIndex((i) => (i - 1 + slideCount) % slideCount)}
//             aria-label="Previous slide"
//             className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 border border-slate-200 shadow hover:bg-white"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() => setIndex((i) => (i + 1) % slideCount)}
//             aria-label="Next slide"
//             className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 border border-slate-200 shadow hover:bg-white"
//           >
//             ›
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 aria-label={`Go to slide ${i + 1}`}
//                 className={`h-2.5 rounded-full transition-all ${
//                   index === i ? "w-7 bg-sky-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
function AnimatedTitle({ text }) {
  const words = text.split(" ");
  return (
    <>
      <style>{`
        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>

      <h1
        className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
        style={{
          textShadow: "0 6px 16px rgba(0,0,0,0.65)", // stronger shadow for readability
        }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-block will-change-transform"
            style={{
              animation: "riseIn 800ms ease forwards",
              animationDelay: `${i * 100}ms`,
              opacity: 0,
              marginRight: "0.4ch",
            }}
          >
            {w}
          </span>
        ))}
      </h1>
    </>
  );
}

function Hero() {
  const slides = [
    {
      title: "Elevate digital presence",
      subtitle:
        "From AI-assisted websites to SaaS and mobile apps — design, development, and secure online infrastructure under one roof.",
      cta1: { label: "Start a Project", to: "/company/contact", primary: true },
      cta2: { label: "See Work", to: "/web-app-development" },
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "AI-Assisted Website Design",
      subtitle:
        "Launch faster with AI content, layouts, and ideas that learn from your visitors.",
      cta1: {
        label: "Get AI Website",
        to: "/ai-assisted-website-design",
        primary: true,
      },
      cta2: { label: "Talk to Us", to: "/company/contact" },
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "SaaS & Web Apps that Scale",
      subtitle:
        "Multi-tenant, subscriptions, analytics, and secure infra — built for growth.",
      cta1: {
        label: "Build SaaS",
        to: "/saas-application-development",
        primary: true,
      },
      cta2: { label: "Our Process", to: "/company/why-choose-us" },
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  // 🔹 “Text above banner” – animated ticker messages
  const tickerMsgs = [
    "AI Assisted Website Design",
    "Web & Mobile App Development",
    "SaaS Application Development",
    "Online Infrastructure & DevOps",
  ];
  const [tickIndex, setTickIndex] = useState(0);
  const [tickVisible, setTickVisible] = useState(true);

  // Ticker animation: fade/slide every 2.5s
  useEffect(() => {
    const id = setInterval(() => {
      setTickVisible(false);
      setTimeout(() => {
        setTickIndex((i) => (i + 1) % tickerMsgs.length);
        setTickVisible(true);
      }, 240); // match transition duration
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = slides.length;

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 6000);
    return () => clearInterval(id);
  }, [paused, slideCount]);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* FULL-BLEED SLIDER (no radius anywhere) */}
      <div className="relative h-[78vh] min-h-[520px] w-full">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.title}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                active ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              {/* Background image */}
              <ImgWithPrompt
                src={s.img}
                alt={s.title}
                className="absolute inset-0 h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:object-cover !rounded-none !border-0"
              />

              {/* Strong overlay so text pops */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/55 to-transparent" />

              {/* Copy: left-center, no extra background */}
              <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <div className="max-w-3xl">
                  {/* Use the component directly (no surrounding <h1>) */}
                  <AnimatedTitle text={s.title} />

                  <p className="mt-6 text-lg md:text-2xl text-slate-100 drop-shadow">
                    {s.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {s.cta1 && (
                      <Link
                        to={s.cta1.to}
                        className="px-8 py-4 rounded-xl bg-sky-500 text-white font-semibold text-lg hover:brightness-110"
                      >
                        {s.cta1.label}
                      </Link>
                    )}
                    {s.cta2 && (
                      <Link
                        to={s.cta2.to}
                        className="px-8 py-4 rounded-xl border border-white/70 text-white font-semibold text-lg hover:bg-white/10"
                      >
                        {s.cta2.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Controls
        <button
          onClick={() => setIndex((i) => (i - 1 + slideCount) % slideCount)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % slideCount)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow"
          aria-label="Next slide"
        >
          ›
        </button> */}

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-40">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition-all ${
                index === i
                  ? "w-8 bg-sky-500"
                  : "w-3 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* 🔹 Animated text strip ABOVE the banner */}
        {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
          <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm">
            <div
              className={`text-[13px] font-semibold tracking-wide text-slate-700 uppercase transition-all duration-200
                ${tickVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
            >
              {tickerMsgs[tickIndex]}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function SectionGrid() {
  const blocks = [
    {
      to: "/AiWebsiteDevPage",
      title: "AI Assisted Website Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      prompt:
        "Minimal illustration of AI assisting website design; abstract UI wireframes; blue/teal gradient on white; vector, clean, tech",
    },
    {
      to: "/WebAppDevelopment",
      title: "Web App Development",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      prompt:
        "Modern web dashboard UI on laptop; charts and components; gradient glow; clean white desk; product photo style",
    },
    {
      to: "/MobileAppDevelopment",
      title: "Mobile App Development",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
      prompt:
        "Smartphone mockups with app screens; floating cards; subtle shadows; white background; brand blues/greens",
    },
    {
      to: "/SaasDevelopment",
      title: "SaaS Application Development",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      prompt:
        "Cloud SaaS concept, serverless icons and dashboards in the clouds; minimalist, gradient accents, white",
    },
    {
      to: "/AutopilotWebsite",
      title: "AI Autopilot Website",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      prompt:
        "Autopilot metaphor: paper plane/jet guiding website UI panels; AI glow lines; white background, sky blue",
    },
    {
      to: "/aristo-academy",
      title: "Aristo Academy",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
      prompt:
        "Academy learning concept: graduation cap over laptop; course cards; friendly, bright, white background",
    },
  ];
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blocks.map((b) => (
            <Link
              key={b.title}
              to={b.to}
              className="rounded-2xl border border-slate-200 p-4 hover:-translate-y-1 transition block bg-white"
            >
              <ImgWithPrompt
                src={b.img}
                alt={`${b.title} illustration`}
                prompt={b.prompt}
                className="mb-3"
              />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-slate-600 mt-1">
                Learn more about our {b.title.toLowerCase()} offering.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Forms + Integrations (placeholders) -------------------- */
function MiniQuoteForm({ defaultService }) {
  const [msg, setMsg] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("Thanks! We'll email your quote shortly.");
    // TODO: integrate with your backend. Example stubs below.
    // await sendToSendGrid({ name, email, phone, service, brief })
    // await subscribeMailchimp({ email })
    // await sendWhatsAppViaGupshup({ to: phone, template: 'lead_ack' })
  };
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
      <input
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="Full name"
        required
      />
      <input
        type="email"
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="you@company.com"
        required
      />
      <input
        type="tel"
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="+91 9xxxxxxxxx"
      />
      <select
        className="rounded-lg border border-slate-300 px-3 py-2"
        defaultValue={defaultService || "AI Assisted Website Design"}
      >
        <option>AI Assisted Website Design</option>
        <option>Web App Development</option>
        <option>Mobile App Development</option>
        <option>SaaS Application Development</option>
        <option>AI Autopilot Website</option>
        <option>Online Infrastructure</option>
        <option>Aristo Academy</option>
      </select>
      <textarea
        className="md:col-span-2 rounded-lg border border-slate-300 px-3 py-2"
        rows={3}
        placeholder="Goals, features, timeline…"
      />
      <button className="md:col-span-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold">
        Get My Quote
      </button>
      {msg && <p className="text-emerald-600 md:col-span-2 text-sm">{msg}</p>}
    </form>
  );
}

function ContactForm() {
  const [msg, setMsg] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("Message sent. We'll reach out within a business day.");
    // Example: await sendToSendGrid(payload)
    // Example: await subscribeMailchimp({ email })
    // Example: await sendWhatsAppViaGupshup({ to: phone, template: 'lead_ack' })
  };
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
      <input
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="Email"
        required
      />
      <input
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="Company"
      />
      <input
        className="rounded-lg border border-slate-300 px-3 py-2"
        placeholder="Phone"
      />
      <textarea
        className="md:col-span-2 rounded-lg border border-slate-300 px-3 py-2"
        rows={4}
        placeholder="Tell us about your project…"
        required
      />
      <button className="md:col-span-2 px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold">
        Send Message
      </button>
      {msg && <p className="text-emerald-600 md:col-span-2 text-sm">{msg}</p>}
    </form>
  );
}

// --- Placeholder integration helpers (replace with your server/API calls) ---
// async function sendToSendGrid(payload){
//   return fetch('/api/sendgrid', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
// }
// async function subscribeMailchimp({ email }){
//   return fetch('/api/mailchimp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
// }
// async function sendWhatsAppViaGupshup({ to, template }){
//   return fetch('/api/gupshup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ to, template }) });
// }



function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo Only */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 group mb-4"
            aria-label="Aristo Webtek Home"
          >
            <img
              src="https://aristowebtek.com/act25/logo/AW25SEP.png"
              alt="Aristo Webtek"
              className="h-14 w-auto transition-transform group-hover:scale-105"
              loading="eager"
            />
          </Link>
          <p>We transform ideas into powerful digital solutions with cutting-edge technology and innovative design.</p>
        </div>

        {/* The Company + Our Policies (Same Column) */}
        <div>
          {/* The Company */}
          <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
            The Company
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
  <Link to="/company/who-are-we" className="flex items-center gap-2">
    <i className="fas fa-user text-blue-400"></i>
    Who Are We
  </Link>
</li>
           <Link to="/company/why-choose-us"className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
           <i className="fas fa-user text-blue-400"></i> Why Choose Us
           </Link>

            <li className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
              <i className="fas fa-credit-card text-blue-400"></i> To Pay Us
            </li>
          <li className="flex items-center gap-2 text-gray-300 hover:text-blue-400">
  <i className="fas fa-map-marker-alt text-blue-400"></i> Get Connected
</li>
          </ul>
</div>
          {/* Our Policies */}
          <div>
          <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
            Our Policies
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
          </h3>
          <ul className="space-y-3">
            
<li>
  <Link
    to="/privacy-policy"
    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
  >
    <i className="fas fa-shield-alt text-blue-400"></i>
    Privacy Policy
  </Link>
</li>

            <li>
  <Link
    to="/terms-and-conditions"
    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
  >
    <i className="fas fa-file-contract text-blue-400"></i>
    Terms & Conditions
  </Link>
</li>

<li>
  <Link
    to="/refund-policy"
    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
  >
    <i className="fas fa-file-invoice text-blue-400"></i>
    Refund Policy
  </Link>
</li>

   
          </ul>
          
        </div>

      {/* Payment + Follow Us On (Same Column) */}
<div>
  <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
    Pay Us With
    <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
  </h3>

  {/* Payment Icons Only */}
<div className="flex items-center flex-wrap gap-5 text-gray-300 text-3xl">

  <i className="fas fa-credit-card hover:text-blue-400 transition-colors duration-200 cursor-pointer"></i>

  <i className="fas fa-university hover:text-blue-400 transition-colors duration-200 cursor-pointer"></i>

  <i className="fas fa-wallet hover:text-blue-400 transition-colors duration-200 cursor-pointer"></i>

  <i className="fas fa-mobile-alt hover:text-blue-400 transition-colors duration-200 cursor-pointer"></i>

  <i className="fas fa-hand-holding-usd hover:text-blue-400 transition-colors duration-200 cursor-pointer"></i>

</div>


  <h3 className="text-white font-bold text-lg mt-8 mb-4">
    Follow Us On
  </h3>

  {/* Social Icons Only */}
  <div className="flex gap-3">
    <a href="https://www.linkedin.com/in/aristowebtek/" className="hover:scale-110 transition">
      <i className="fab fa-linkedin text-2xl text-blue-500"></i>
    </a>
    
    <a href="https://www.instagram.com/aristowebtek/" className="hover:scale-110 transition">
      <i className="fab fa-instagram text-2xl text-pink-500"></i>
    </a>
    <a href="https://www.facebook.com/Aristocreativetechnologies" className="hover:scale-110 transition">
      <i className="fab fa-facebook text-2xl text-blue-600"></i>
    </a>
    <a href="https://medium.com/@aristo.webtek" className="hover:scale-110 transition">
      <i className="fab fa-medium text-2xl text-gray-300"></i>
    </a>
    <a href="https://www.youtube.com/c/AristoWebtek" className="hover:scale-110 transition">
      <i className="fab fa-youtube text-2xl text-red-500"></i>
    </a>
    
    <a href="https://wa.me/8144405577" target="_blank" rel="noopener noreferrer"
   className="hover:scale-110 transition">
  <i className="fab fa-whatsapp text-2xl text-green-500"></i>
</a>
<a href="mailto:aristo.webtek@gmail.com" className="hover:scale-110 transition">
  <i className="fas fa-envelope text-2xl text-red-500"></i>
</a>

  </div>
</div>


  {/* <div className="flex items-center gap-4 text-3xl">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin text-blue-500 hover:text-blue-400 cursor-pointer"></i>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook text-blue-500 hover:text-blue-400 cursor-pointer"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram text-pink-500 hover:text-blue-400 cursor-pointer"></i>
    </a>
    <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-medium text-white hover:text-blue-400 cursor-pointer"></i>
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-youtube text-red-600 hover:text-blue-400 cursor-pointer"></i>
    </a>
  
    </div> */}
    </div>


      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
      © {new Date().getFullYear()} Aristo Webtek. All rights reserved.
      <br className="block md:hidden" />
      Powered by Google AMP
      <br />
      Illustrations and vectors by Freepik, Storyset, Vecteezy, and Flaticon |
      <br className="block md:hidden" />
      Stock Images by Unsplash and Pexels
    </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="hover:text-blue-400 transition-colors">
             Refund Policy
                </Link>

            
            <Link to="/sitemap" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
