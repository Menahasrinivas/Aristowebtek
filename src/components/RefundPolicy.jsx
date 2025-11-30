import React from "react";
import { Link } from "react-router-dom";
import SEO from "./seo";

const RefundPolicy = () => {
  return (
    <div className="bg-blue-50 min-h-screen pt-28 pb-16">

      <SEO
        title="Refund Policy for Services"
        description="Our complete refund policy defines the situations, procedure, and responsibility for claiming a refund for services from Aristo Creative Technologies. Please read carefully."
        keywords="Refund Policy, Aristo Creative Technologies, service refund, cancellation policy, money back guarantee"
        url="/refund-policy"
        jsonLd={{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Refund Policy for Services | Aristo Creative Technologies",
  "description": "Our complete refund policy defines the situations, procedure, and responsibility for claiming a refund for services from Aristo Creative Technologies. Please read carefully.",
  "url": "https://www.aristowebtek.com/aristo/refund-policy"
}
}/>

      {/* Page Header */}
      <div
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl font-bold text-blue-600">Refund Policy</h1>
        <p className="text-gray-600 mt-3">
          Please read our complete refund policy carefully.  
          All points below are included without any reduction.
        </p>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-8">

        {/* Section Wrapper */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            Our refund policy has been devised to define the situations under which Aristo Creative Technologies will provide a refund, the procedure for claiming a refund and the responsibility of Aristo Creative Technologies in circumstances resulting in such a claim. By registering for any of our services you are declaring that you accept and agree with all the terms and conditions outlined in the refund policy.

            All the information that we collect is utilized for bettering our web site’s content, to notify the clients about our website updates or to look into the problem with their request. In case you do not want to receive any email from us in the future, please inform us by writing in to us either through e-mail or letter.
          </p>
        </div>

        {/* Coverage & Scope */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Coverage & Scope</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            Our refund policy covers the refunds by Aristo Creative Technologies and/or a website owned and managed by Aristo Creative Technologies. This policy does not have any application for companies which are not owned or controlled by Aristo Creative Technologies or for persons not employed or managed by Aristo Creative Technologies. This includes any third party service and/or product providers bound by contract and also, any third-party websites to which Aristo Creative Technologies website link.
          </p>
        </div>

        {/* Filing a Complaint */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Filing a Complaint</h2>
          <p className="text-gray-700 whitespace-pre-line">
            At Aristo Creative Technologies we take every project with the final product in sight. It is as much our responsibility as the client’s. So, we believe that every effort should be made to reach a solution that is fully acceptable reciprocally in case of any situation where dissatisfaction related to services comes. Only when things are completely out of hand that refund should be considered.

            Our final aim is to come to a mutually acceptable solution. Even then if for some reason you are not satisfied and think about going for a refund claim, it is our request that you take out a few precious minutes to write to us at support@aristowebtek.in for a final dialogue prior to requesting a refund.

            Only if we are unable to reach a common ground with you after talks should a refund claim be filed.
          </p>
        </div>

        {/* Eligibility for Refund */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Eligibility for Refund</h2>
          <p className="text-gray-700 whitespace-pre-line">
            At Aristo Creative Technologies every project is important to us and we make sure that we handle each project with utmost care and professionalism. Our aim is to provide the results as per the terms and conditions of the proposal. However, despite every measure if the client is not satisfied with the results and chooses to go for the dispute resolution process, we consider refund requests as per the following program in which our services and refund policy related to each service is very clearly listed:
          </p>

          {/* Subsection: Website Designing */}
          <h3 className="font-semibold text-blue-500 mt-4">Website Designing</h3>
          <p className="text-gray-700 whitespace-pre-line">
            Full refund: In cases where the project has not been started or if the initial design style has not been approved. The Full Refund policy will initiate after receive the upfront payment date and will take 180 Days to refund the amount.

            Partial refund: If there is a failure to deliver as per our delivery policy after the approval of the initial design style. The partial refund will be in proportion to the work completed.

            No refunds: If the project has been completed and uploaded on the server.
          </p>

          {/* Subsection: Web & Mobile Application Development */}
          <h3 className="font-semibold text-blue-500 mt-4">Web & Mobile Application Development</h3>
          <p className="text-gray-700 whitespace-pre-line">
            Full refund: If the project has not been initiated.
            There is an agreement for every web programming project. However, if there is no agreement and no clear discussion of refund policy, the following delivery policy will hold true.

            Partial refund will be issued as per the judgement of the service provider if we fail to complete the project in accordance with the delivery policy and contract of agreement. The amount will be calculated by Aristo Creative Technologies taking into account the proportion of the project completed and the proportion yet to be completed as per the pre-defined scope of the project.
          </p>
        </div>

        {/* Applicability of Delivery Policy */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Applicability of the Delivery Policy</h2>
          <p className="text-gray-700 whitespace-pre-line">
            Aristo Creative Technologies delivery commitment is subject to:
            A project is not taken to be void unless the agreed upon payments are clear.

            Refund policy is not applicable if the required information for the successful completion of the project is not given to us at proper time. If there is delay or failure in completion of the project due to improper communication from client, it cannot be attributed to Aristo Creative Technologies.

            If the information provided by the client is incomplete and/or complete information regarding the project is not provided at the initiation of the project, Aristo Creative Technologies is not liable to follow its delivery or refund commitments.

            There is no provision for compensation for the delay of delivery under any conditions, until and unless there is an agreement signed with a penalty clause for delay in delivery.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Limitation of Liability</h2>
          <p className="text-gray-700 whitespace-pre-line">
            Aristo Creative Technologies liability is bound by the value of the chunk of the project (as per our proposal) which remains incomplete at a given point point of time. Aristo Creative Technologies is not obligated for losses due to the services provided/ not provided or the delay in the same at any point of time. The liability to refund holds only if the project has been cancelled by the client and such cancellation has been communicated to Aristo Creative Technologies in writing.
          </p>
        </div>

        {/* Processing of Refunds */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Processing of Refunds</h2>
          <p className="text-gray-700 whitespace-pre-line">
            The partial refunds will be processed and mailed within 180 business days of the date of cancellation and will be brought about using the method of payment agreed upon in the beginning of the project i.e.; refund by check or refund by credit card.

            And The full refunds will be processed and mailed within 50 business days of the date of cancellation and will be brought about using the method of payment agreed upon in the beginning of the project i.e.; refund by check or refund by credit card.
          </p>
        </div>

        {/* Changes */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Changes</h2>
          <p className="text-gray-700 whitespace-pre-line">
            Aristo Creative Technologies may at any time, without prior notice under its sole discretion, amend this policy from time to time. You are therefore requested to review this policy periodically. Your continued use of Aristo Creative Technologies website after any such amendments automatically implies your acceptance of the same thereof.
          </p>
        </div>

        {/* Contact */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Contacting Us
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            If you have queries or suggestions regarding our refund policies kindly e–mail us at support@aristowebtek.in
          </p>

          {/* Footer link */}
          <div className="mt-6">
            <Link
              to="/terms-and-conditions"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <i className="fas fa-file-contract"></i> Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
