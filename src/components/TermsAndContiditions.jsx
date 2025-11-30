// src/components/Terms.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "./seo";

const Terms = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-slate-900">
<SEO
        title="Terms & Conditions"
        description="The official Terms & Conditions of Aristo Creative Technologies covering Project, Digital Marketing, AMC, Payment, Hosting, and Legal terms."
        keywords="Terms and Conditions, Project Terms, Legal Terms, Aristo Creative Technologies, service agreement, payment terms"
        url="/terms-and-conditions"
        jsonLd={{
          
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms & Conditions | Aristo Creative Technologies",
  "description": "The official Terms & Conditions of Aristo Creative Technologies covering Project, Digital Marketing, AMC, Payment, Hosting, and Legal terms.",
  "url": "https://www.aristowebtek.com/aristo/terms-and-conditions"

        }}
      />

      {/* Banner */}
      <header
        className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-14"
        data-aos="fade-down"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm md:text-base opacity-95">
            Project, Digital Marketing, AMC, Payment, Hosting &amp; Legal Terms
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-6">

          {/* Intro card */}
          <section
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600"
            data-aos="fade-up"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Terms &amp; Conditions</h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
{`PROJECT TERMS
All estimates/quotes are based on our understanding of your requirements and as per given time-frame. Any changes to the functionality including micro-improvements, may incur additional costs accordingly. Please ensure and clarify our understanding in a face to face meeting.
By accepting a quote/estimate/SOW, you agree to and accept the terms and conditions of Aristo Creative Technologies.  Acceptance can be verbal, by email, payment of Initiation, signing a quote.
Clients to ensure that we have included all requirements in the quotes/proposals/estimates and that we fully understand their requirements. Clients must provide us with clear guidelines along with the flow or specific details they may require. When such details are not provided, we will proceed with our understanding of the requirements and quote accordingly. At a later stage, if a discrepancy arises, it may lead to additional costs to accommodate the changes. Thus, it is essential that you clarify every aspect of your website development and ensure that you have been quoted on the right requirements.
Any complexity related to specific tasks, must be advised in advance and included in the proposal for costing purposes. We operate in good faith and rely on our clients to disclose the full picture at the time of quotation. Any discrepancy arising due to unclear requirements will not be borne by Aristo Creative Technologies.
There are limited man-hours allocated to each task including Project Management and Digital Strategist/Business Analyst. Minor changes may be included within the allocated hours. This will be analysed on a case-by-case basis.
Aristo Creative Technologies will make every effort to complete the project/changes in the given timeframe. Reasonable delays are accepted if functionalities are redefined or modified.
Any delays at client’s end, may delay the project and proposed timeframes and may incur additional costs.
Any bugs (programming errors) reported during or just after the development does not attract additional charges.
Any re-work on an already completed task will attract additional charges. Any changes in the design after the design approval will incur additional charges.
Any modifications requested during the development or after the Go-Live approval will incur additional charges. All additional work, over and above the estimates is charged separately. Under no circumstances will Aristo Creative Technologies be liable for any delays caused by change in the project brief.
Website/application content and all related materials need to be provided to us within the first two weeks of starting the project. Any delays thereafter may delay the project and may incur additional charges if it goes beyond reasonable timeframe.
Our websites/applications are generally tested on PCs, tabs & mobile devices, and include near recent versions of following browsers: IE, Firefox, Chrome & Safari. If you require testing to be done on any other browser, please let us know in advance.

Responsive/multi-device compatible web pages are tested on iPhone and iPads. If you require testing to be done on any other device, please discuss it in advance.
If your website/application is not hosted on a our server, any additional man-hours that may be required due to any server or network related issues are not covered in our quotes and may be charged separately.
Please note that at any stage during the project, stalling of the project for over two calendar months will incur INR 7500/week administration costs. Furthermore, it may increase the previously approved estimates. If you require the project to be put on hold, please advise us in writing in advance. To put the project on hold without incurring additional charges, we will need the account to be up to date based on the work done. Further details can be discussed if such a situation arises.
Aristo Creative Technologies’ software codes (not including open source software) are copyrights of Aristo Creative Technologies. The codes can be handed over at an additional cost for use once all previous invoices are settled, on the condition that the codes are used only for use or modification for re-use for further development for the specified client or subsequent owners of that legal entity. Under no circumstance, the codes will be allowed to be used for re-selling or duplication purposes.
Aristo Creative Technologies’ CMS & Online Store Platform is a proprietary CMS of Aristo Creative Technologies. Aristo Creative Technologies owns copyrights of all codes written for any client, unless arrangements are made prior to start of the project. Aristo Creative Technologies warrants a license to use any custom built software for the client, for their use only. This license is granted while paying for the hosting. Aristo Creative Technologies CMS & Online Store Platform cannot be transferred to any external host; this includes any access to the software codes.
The website or software application will be designed to be deployed on the web, via using a commercial grade web-server or a similar setup. Based on your website traffic, the website may not perform if deployed on a generic network environment.
Depending upon the functionalities required, there may be 3rd party components such as Third Party Payment Gateways or SSL certificates involved in building a website/application. Although Aristo Creative Technologies does its best in recognising the suitability of any such component, any unforeseen limitations of 3rd party components are beyond our control. Any third-party component purchase costs (such as SSL, Payment gateway, Google Adwords, Plug-in licenses etc) are not included in our quotes.
Aristo Creative Technologies offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.
The client must recognize that at times there may be unforeseen circumstances that will delay the development process, particularly with reference to the integration of third party software. We will try our best to complete the project as agreed in the proposal. As long as it is within a reasonable period, the client agrees not to penalize us for any genuine delay, when every effort to keep the project on the proposed schedule is taken.
Domain registration/renewal and other charges are not included as a part of any project/proposal unless mentioned otherwise. If required, a quote for which will be submitted separately and approved by the client.
Hosting charges are not included in the quotations unless mentioned otherwise. Aristo Creative Technologies can organise an appropriate hosting solution if required, a quote for which will be submitted separately and approved by the client. Where clients decide to organise their own hosting, we should be consulted before finalising the type of hosting and database, as it should meet the requirements of the technology used for the development. Please note that we’ll require full access with hosting support for testing and deploying the application. Aristo Creative Technologies will not be liable for any delays or errors caused by direct or indirect actions of the hosting company.
Aristo Creative Technologies generally builds and tests the websites/applications on our own servers or hosted domains. Aristo Creative Technologies cannot give access to their test servers and test websites to the clients or any third party. The website/application can be transferred-off to a nominated 3rd party server upon full payment of all invoices and dues.
Notwithstanding any other provision in the agreement, in consideration of the Customer entering into this agreement with Aristo Creative Technologies, upon full payment of any outstanding invoices, Aristo Creative Technologies will grant an unconditional license to the Customer to reproduce, publish, communicate, use, exploit, vary, or otherwise deal with the graphics, texts and images used in the published website and associated of form and functionality. This will not include the intellectual property relating to the production of the website including the digital strategies, programming codes, database structures, scripts, forms or functionalities.
All communications/correspondences are generally done via emails and whatsapp messaging. It is client’s responsibility to keep us updated with their relevant email addresses and whatsapp numbers.`}
            </p>
          </section>

         {/* Digital Marketing Terms - Styled Same as Project Terms */}
<section
  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600"
  data-aos="fade-up"
>
  <h2 className="text-xl md:text-2xl font-semibold mb-3">
    Digital Marketing Terms
  </h2>

  <p className="text-slate-700 leading-relaxed whitespace-pre-line"><br></br>

<span className="font-semibold text-blue-700">Digital Marketing Package or Digital Strategy Package Terms:</span>
  <br></br>


{`All digital marketing/strategy packages are for a minimum of 6 months period. Thereafter, cancel anytime with clear one month email notice.
They are billed monthly and are payable by the 1st of every month.
Packages are designed keeping in mind the Digital Marketing/Strategy requirements of our clients. There are specific man-hours allocated each month and any unused man-hours are not rolled over to the next month. No third-party software or marketing expenses are included.
Aristo Creative Technologies employs a fair use policy, which means that although unused time does not formally roll over, we allow flexibility in good faith as client needs may change monthly.
Any extra hours used may be billed separately. Any urgent tasks will be charged separately.
Support requests must be sent via email to support@aristowebtek.in`}<br></br>

<span className="font-semibold text-blue-700">Payment Terms:</span>
  <br></br>

{`Payable by the 1st of every month. We strongly recommend having a direct debit setup.
An administrative fee of INR 2000 will be charged for any late payments or declined credit card transactions.
There are absolutely no refunds for any fees related to the digital marketing/strategy package.`}
<br></br>

<span className="font-semibold text-blue-700">Termination:</span>
  <br></br>

{`All digital marketing/strategy packages are for a minimum of 6 months period. Thereafter, cancel anytime with clear one month email notice.
Aristo Creative Technologies reserves the right to terminate at any time with written notice to the Client.`}
  </p>
</section>

        {/* Annual Maintenance Terms - Same Design */}
<section
  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600"
  data-aos="fade-up"
>
  <h2 className="text-xl md:text-2xl font-semibold mb-3">
    Annual Maintenance Terms
  </h2>

  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
    <br />

    <span className="font-semibold text-blue-700">Basic Annual Maintenance Package Terms:</span>
    <br />

{`All maintenance packages are for a minimum of 12 months period.
Maintenance packages are billed annually, however are paid monthly via direct debit on the 1st of every month.
Packages may include 12 months basic website hosting, email hosting and DNS hosting.
Packages are designed to serve website maintenance tasks only. The hours may not be used for projects such as full redesign or major functionality add-ons.
Does-not include any Digital Strategy, Business Analysis, Solution Architect, SEO and Digital Marketing work.
Work-hours are tracked in 15minutes blocks. The support time is used once every month to take a full backup of your website. After that, we work on updating your CMS and plugin versions along-with any website fixes that may arise as a result of the updates. Any remaining hours can be used to make changes to the website. Any additional workhours are requested for your approval.
Aristo Creative Technologies employs fair use policy, which means that although we don’t formally transfer over any unused time to the next month or formally accumulate unused man-hours, we do understand that your needs may change from month to month, and we allow flexibility in good faith sometimes.
Any extra hours used will be billed separately @INR 5000/hour incl GST.
Support requests need to be sent via email to support@aristowebtek.in
Any urgent tasks will be charged separately.
The package is auto renewed every year on its anniversary date.`}

    <br /><br />

    <span className="font-semibold text-blue-700">Payment Terms for AMC:</span>
    <br />

{`Monthly maintenance package fees will be charged on file on the 1st day of every month.
An administrative fee of INR 2000 will be charged to the clients account for any late payments.
More than three missed payments in a year may attract termination of the package and the client will need to pay immediately the entire remaining amount on the package.
There are absolutely no refunds for any fees related to the monthly maintenance package.`}

    <br /><br />

    <span className="font-semibold text-blue-700">Termination:</span>
    <br />

{`In case Client need to cancel the auto annual renewal, please inform us in writing (email) at least one month prior to the renewal date.
Ongoing term: For any reason if the Client decides to terminate an on-going maintenance package then they will need to pay the balance amount of the remaining months.
Aristo Creative Technologies reserves the right to terminate annual maintenance at anytime with written notice to the Client.`}
  </p>
</section>

{/* GENERAL APPROACH - Same Styled Section */}
<section
  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600"
  data-aos="fade-up"
>
  <h2 className="text-xl md:text-2xl font-semibold mb-3">
    General Approach
  </h2>

  <p className="text-slate-700 leading-relaxed whitespace-pre-line">

    <span className="font-semibold text-blue-700">
      GENERAL APPROACH:
    </span>
    <br />

{`For general website design & development projects we employ the following steps:
Upon quote acceptance/signoff, initiation payment is processed to start the project. As required by the project, we may hold a Scoping Workshop to discuss the requirements in detail.
Once we have the brand details such as logo, images, branding materials etc, we will have a mock-up for your review within 5 to 10 working days.
You can review the design and suggest improvements accordingly. Depending upon your project, generally up to 3 to 5 design modifications that can be done within the given estimates. Please refer to your allocated design and development hours for details.
Once design is finalised & approved, we’ll proceed with the HTML development. At this stage we generally need around 3 to 5 banner text and/or images for rotation.
Once, HTML is done, if CMS is included in your project, we will proceed to setup your website on your selected Content Management System (CMS). Please provide all content and copy prior to the development phase.
Depending upon the time and resources allocated to your project, we’ll transfer as much content as possible from the old website to the new website. Remaining content can be transferred via the CMS by your designated staff. We can provide the instructions needed to help you do this.
Once the site is ready from our end, we generally hand it over to you for further review, test and/or to upload/change contents as necessary.
At this stage you need to give us a Go-Live date for us to make the new website/project live.
Your website can be made live within 3 to 5 working days of a Go Live approval, assuming that the accounts are clear. Kindly note that we require full payment prior to transferring the website on any external servers.
Kindly note, there are limited man-hours allocated on the project. The estimates for all website under $5000 are based on an assumption that projects will be completed over eight to twelve working weeks depending upon the size of your project. Any further delays may increase the project management costs. If you do not believe the project to be completed within this time frame, please do let us know prior to starting the project.
Also, generally speaking, going-back and forth takes a lot of time. We encourage you to provide all necessary details, at the start of the project to ensure that the project team’s time is efficiently utilised on your project and you do not incur any unnecessary additional costs.
You will be kept updated via emails and/or telephone calls as the project demands. However, please do not hesitate to contact us any time you require a project status. Also, please always keep us updated with your relevant email addresses/contact details.
Once the website/application has been made live on the client’s domain, it is their responsibility to take regular full back-ups and to update all components and third party softwares.
We consider ourselves to be very flexible and adaptable and approach all requests with a ‘can do’ attitude. If you require something changed, please feel free to discuss with us. Please contact us if you require further details or have any questions. We look forward to working together with you on your project!`}
  </p>
</section>
{/* PAYMENT / REFUND TERMS - Same Styled Section */}
<section
  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600"
  data-aos="fade-up"
>
  <h2 className="text-xl md:text-2xl font-semibold mb-3">
    Payment / Refund Terms
  </h2>

  <p className="text-slate-700 leading-relaxed whitespace-pre-line">

    <span className="font-semibold text-blue-700">
      PAYMENT / REFUND TERMS:
    </span>
    <br />

{`All prices are quoted in Indian Rupees are inclusive of GST unless specified.
All invoices are to be processed as per the schedule via your preferred method of payment.
Milestone payments must be made within 5 working days of each milestone/schedule, unless mutually agreed otherwise. Final payment must be made prior to website/application/project going live.
Receipt of payment is deemed as acceptance of the quote, milestone, delivery, project and terms & conditions.

Aristo Creative Technologies reserves the right to negotiate and refund appropriate portion of the amount paid by customer towards the requested service. If you cancel your order after making the payment, but the work has not commenced, we will refund 75% of the payment that you have already made. If the order is cancelled after the commencement of work, the maximum refund or charge will be 50% of the invoice. There will be no refund or adjustments if cancellation is called when more than 50% of the work has been completed. All cancellations must be received in writing and can be sent via regular mail, email or fax. Telephone requests on cancellations will not be accepted.

For minor or once-off works, payments need to be made either in advance or as per the terms mentioned in the invoice/proposal. If you require any changes to the terms, you must inform us in writing (emails accepted) within two working days of the receipt of the same.

Late fees and charges: All outstanding invoices will incur a late payment fee of 10% of the pending amount and an administration fee of $5.50 per month, from the due date.
Due date: Is the date on which the payment is due as per the terms on the invoice/proposal
Outstanding Invoice: An invoice is deemed to be outstanding if the payment is still due after 14 days of the expiry of the due date.

Debt Collection: Client is provided a further 7 days after late payment fee is applied to pay the invoice. Failure to pay will result in the outstanding amount referred to a debt collector. Aristo Creative Technologies will not be liable for any costs or charges associated with the recovery of the outstanding amount. Any charges associated with the recovery of the outstanding amount (debt collectors, administration charges, legal fees) will be referred to the client for processing.

If you are late with a payment or have any queries regarding the Invoice, please contact Accounts Manager immediately on receiving the invoice or reminder emails.
All communications/correspondences are generally done via emails. It is client’s responsibility to keep us updated with their relevant email addresses.

Any payment relating to the domain name registration renewal or hosting or any 3rd party products or service purchased on behalf of the client will have to be paid in full and is non-refundable. In case of all renewal cancellations, we must be notified atleast 30 days before the renewal date.

Aristo Creative Technologies generally builds and tests the websites/applications on our own servers or hosted domains. The website/application will be transferred-off to the nominated 3rd party server upon full payment of all invoices and dues.`}

  </p>
</section>


       {/* DISPUTES, LIABILITY & INDEMNITY SECTION */}
<section
  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-600"
  data-aos="fade-up"
>
  <h2 className="text-xl md:text-2xl font-semibold mb-3">
    Disputes, Liability & Indemnity
  </h2>

  <p className="text-slate-700 leading-relaxed whitespace-pre-line">

    {/* DISPUTES, LIABILITY & INDEMNITY */}
    <span className="font-semibold text-blue-700">DISPUTES, LIABILITY & INDEMNITY:</span>
    <br />

{`In an event of a dispute, Aristo Creative Technologies reserves the right to charge the client in full for the work done as well as for the resources spent in managing the dispute. In such an event, Aristo Creative Technologies reserves the right to charge the client without honoring any discounts that were previously honored in good faith. Under no circumstances will Aristo Creative Technologies be liable for any damages arising from misrepresentation or misinformation.
Aristo Creative Technologies reserves the right to refuse service to any client, if these are not aligned with our business operating principles and policies.
Aristo Creative Technologies provides its services as is, without any guarantees on security or other issues leading to loss of data, sale or reputation. We ensure to the best of our ability that our systems and servers are protected from hackers, viruses, intruders and other online and offline problems, however we will not be held liable for any disruption of services if such situation arises.
Relationship of Aristo Creative Technologies with its suppliers, partners and sub-contractors is of an independent nature. None of the parties have any power, right or authority to interfere or bind the other or assume or create any obligation or responsibility, whether expressed or implied, on behalf of the other or in the other’s name.
Client will indemnify and hold Aristo Creative Technologies, its licensors, content providers, service providers, employees, agents, officers, directors, contractors and sub-contractors (the “Indemnified Parties”) harmless from your breach of any of these Terms And Conditions or any other terms, conditions, policies or procedures herein, including, without limitation, any use of content other than as expressly authorized in these Terms and Conditions. Client agrees that the indemnified parties will have no liability in connection with any such breach or unauthorized use, and you agree to indemnify and hold harmless the Indemnified Parties from any and all resulting loss, damages, judgments, awards, costs, expenses, and attorneys’ fees in connection therewith. You will also indemnify and hold the Indemnified Parties harmless from and against any claims brought by third parties arising out of your use of the information obtained from Aristo Creative Technologies.
Aristo Creative Technologies will not be liable for any breach of the agreement which is caused by a matter beyond its reasonable control including but not limited to Act of God, fire, lightning, explosion, war, disorder, flood, earth quake, industrial disputes (whether or not involving their employees), extremely severe weather, or acts of local or central government or other competent authorities.`}

    <br /><br />

    {/* HOSTING */}
    <span className="font-semibold text-blue-700">Hosting:</span>
    <br />

{`Hosting is an annual charge which must be paid in advance for the whole year. Except if the client is under one of our Maintenance packages.
It is the client’s responsibility to renew the hosting in time ie., before the expiry date. Failure to renew in time can lead to loss of files, data, emails, backups etc. All unpaid hostings are disabled or deleted from the server.
All renewals must be paid by seven working days prior to the expiry date. Aristo Creative Technologies will not be responsible for issues relating to delayed payment.
Hosting are on shared and non-shared servers hosted via third party providers. Aristo Creative Technologies ensures best to our ability that our systems and servers are protected from hackers, viruses, intruders and other online and offline problems, however we will not be held liable for any disruption of services if such situation arises.
Client is solely responsible for the content stored on and served by the hosting service purchased and the activity of any scripts or email services created under the hosting service. The Customer must maintain the security of all account passwords and applications or scripts and ensure all scripts under the hosting service are free from malicious content that may harm any part of the Server, other client accounts hosted, or the external systems of visitors viewing the hosted content.
In case of a malware attack, Aristo Creative Technologies reserves the right to delete files on the hosting service without giving any prior notice.`}

    <br /><br />

    {/* HOSTING CANCELLATION */}
    <span className="font-semibold text-blue-700">Cancellation / Termination:</span>
    <br />

{`Hosting Cancellation requests must be sent in writing or by email one month prior to the expiry of the same. Once the hosting has been renewed, it cannot be cancelled and must be paid for the full year.
If the hosting is not paid and renewed before the expiry date. We reserve the right to disable the hosting and all associated services including emails and dns records. Additional charges will be applicable to re-enable the hosting. Aristo Creative Technologies will not be responsible for any loss of data, files, emails, backups, restoration costs etc.
If a hosting has been cancelled / disabled then all files, emails, databases and backups will be deleted from the server without any notification to the client.
Once all invoices are paid, it is client’s responsibility to request for the files subject to the below:
– Aristo Creative Technologies CMS & Online Store Platform are the proprietary products of Aristo Creative Technologies. Aristo Creative Technologies owns copyrights of all codes written for any client, unless arrangements are made prior to start of the project. Aristo Creative Technologies warrants a license to use any custom built software for the client, for their use only. This license is granted while paying for the hosting. Aristo Creative Technologies CMS & Online Store Platform cannot be transferred to any external host; this includes any access to the software codes. FTP and Control panel access is not provided if the website is using Aristo Creative Technologies CMS & Online store Platform.`}

    <br /><br />

    {/* EMAILS */}
    <span className="font-semibold text-blue-700">Emails:</span>
    <br />

{`All emails are to be downloaded on the client’s computer periodically. Email boxes must be kept within their quota limits. Periodical maintenance may be carried out on the email box and emails older than 6 months are deleted.
Client’s must not use the email hosting for inappropriate content and other undesired emails which can result in spamming or infecting the server. Under such circumstances, immediate action will be taken and the required files and data will be deleted without any prior notice.
Aristo Creative Technologies offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.`}

    <br /><br />

    {/* DOMAINS */}
    <span className="font-semibold text-blue-700">Domains:</span>
    <br />

{`All domain registrations and renewals are to be paid in advance.
Expiration of a domain can result in service disruption and loss of domain.
Aristo Creative Technologies will not be responsible if a domain expires due to non-payment / late payment of the charges. All payments must be made by seven working days before the expiry date.
It is client’s responsibility to renew their domain names with us.
All invoices and dues must be paid in full before we release the requested domain name.
Aristo Creative Technologies holds the domains in the customer’s account and domain control panel. It’s the sole responsibility of the customer to maintain confidentiality of the credentials with due safety.
Aristo Creative Technologies offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.`}

    <br /><br />

    {/* IP */}
    <span className="font-semibold text-blue-700">Intellectual Property:</span>
    <br />

{`All content of this website is a property of the customer assigned, and Aristo Creative Technologies does not possess/claim any ownership unless otherwise specified.
The project related copyrights can be transferred to the client at an additional cost, after the full payment of the project and upon signing the Certificate of Acceptance. Aristo Creative Technologies reserves the rights to refuse the transfer of ownership if irregular circumstances arise.
Copyrights handed over to the client do not include rights to re-use the code for another website or re-sell the programming codes for any commercial or non-commercial purposes. In the case of business restructuring or ownership change, ownership of the website may be transferred from one owner to another. New owners are not allowed to re-sell or re-use for any commercial or non-commercial purpose.
In an event of a Webmaster change, site owners are not allowed to display the credits to the new website, unless such time that the website functionality and appearance is changed by over 50% of our original work.
“Aristo Webtek” is a trade mark of Aristo Creative Technologies of India. Clients, Partners, Suppliers, Sub-contractors and any other 3rd party organisation or individual are not allowed to use Aristo Creative Technologies trademarks including the name, logo and symbol in any way shape or form without a written permission from us.

Please note Aristo Creative Technologies reserves the right to change the terms and conditions without notice.`}

  </p>
</section>

        </div>
      </main>

     
    </div>
  );
};

export default Terms;
