import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy - Cattledog Advisory"
        description="Privacy Policy for Cattledog Advisory"
        keywords="privacy policy, legal, Cattledog Advisory"
        url="/privacy-policy"
        image="/images/logo.png"
        type="website"
        robots="index, follow"
      />
      <Navbar fadeIn={true} activeSection={null} heroRef={null} />
      <div className="container mx-auto px-4 md:px-6 py-12 pt-24">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">Last updated: October 14, 2025</p>
            
            <div className="mb-8">
              <p>
                This Privacy Notice for Cattledog Advisory, LLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Visit our website at <a href="http://www.cattledogadvisory.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.cattledogadvisory.com</a> or any website of ours that links to this Privacy Notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="mt-4">
                Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:hello@cattledogadvisory.com" className="text-blue-600 hover:underline">hello@cattledogadvisory.com</a>.
              </p>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-light text-gray-900 mb-4">SUMMARY OF KEY POINTS</h2>
              <p className="mb-4">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">What personal information do we process?</p>
                  <p>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <a href="#section-1" className="text-blue-600 hover:underline">Learn more about personal information you disclose to us</a>.</p>
                </div>
                <div>
                  <p className="font-semibold">Do we process any sensitive personal information?</p>
                  <p>Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
                </div>
                <div>
                  <p className="font-semibold">Do we collect any information from third parties?</p>
                  <p>We do not collect any information from third parties.</p>
                </div>
                <div>
                  <p className="font-semibold">How do we process your information?</p>
                  <p>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. <a href="#section-2" className="text-blue-600 hover:underline">Learn more about how we process your information</a>.</p>
                </div>
                <div>
                  <p className="font-semibold">In what situations and with which types of parties do we share personal information?</p>
                  <p>We may share information in specific situations and with specific categories of third parties. <a href="#section-4" className="text-blue-600 hover:underline">Learn more about when and with whom we share your personal information</a>.</p>
                </div>
                <div>
                  <p className="font-semibold">How do we keep your information safe?</p>
                  <p>We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. <a href="#section-6" className="text-blue-600 hover:underline">Learn more about how we keep your information safe</a>.</p>
                </div>
                <div>
                  <p className="font-semibold">What are your rights?</p>
                  <p>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <a href="#section-8" className="text-blue-600 hover:underline">Learn more about your privacy rights</a>.</p>
                </div>
                <div>
                  <p className="font-semibold">How do you exercise your rights?</p>
                  <p>The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                </div>
                <div>
                  <p className="font-semibold">Want to learn more about what we do with any information we collect?</p>
                  <p>Review the Privacy Notice in full.</p>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-light text-gray-900 mb-4">TABLE OF CONTENTS</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><a href="#section-1" className="text-blue-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
                <li><a href="#section-2" className="text-blue-600 hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                <li><a href="#section-3" className="text-blue-600 hover:underline">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#section-4" className="text-blue-600 hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#section-5" className="text-blue-600 hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                <li><a href="#section-6" className="text-blue-600 hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                <li><a href="#section-7" className="text-blue-600 hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                <li><a href="#section-8" className="text-blue-600 hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                <li><a href="#section-9" className="text-blue-600 hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                <li><a href="#section-10" className="text-blue-600 hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                <li><a href="#section-11" className="text-blue-600 hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                <li><a href="#section-12" className="text-blue-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                <li><a href="#section-13" className="text-blue-600 hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
              </ol>
            </section>

            <section id="section-1" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
              
              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">Personal information you disclose to us</h3>
              <p className="font-semibold mb-2">In Short: We collect personal information that you provide to us.</p>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="mb-2 font-semibold">Personal Information Provided by You.</p>
              <p className="mb-4">
                The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
                <li>mailing addresses</li>
                <li>job titles</li>
                <li>contact preferences</li>
                <li>contact or authentication data</li>
                <li>billing addresses</li>
                <li>debit/credit card numbers</li>
              </ul>
              <p className="mb-2 font-semibold">Sensitive Information.</p>
              <p className="mb-4">We do not process sensitive information.</p>
              <p className="mb-4">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">Information automatically collected</h3>
              <p className="font-semibold mb-2">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
              <p className="mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p className="mb-2">The information we collect includes:</p>
              <p className="mb-4">
                <span className="font-semibold">Log and Usage Data.</span> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
              </p>
            </section>

            <section id="section-2" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p className="font-semibold mb-2">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
              <p className="mb-4">
                We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.
              </p>
              <p className="mb-4">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">To deliver and facilitate delivery of services to the user.</span> We may process your information to provide you with the requested service.</li>
                <li><span className="font-semibold">To respond to user inquiries/offer support to users.</span> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                <li><span className="font-semibold">To send administrative information to you.</span> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                <li><span className="font-semibold">To fulfill and manage your orders.</span> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
                <li><span className="font-semibold">To enable user-to-user communications.</span> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
                <li><span className="font-semibold">To request feedback.</span> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                <li><span className="font-semibold">To send you marketing and promotional communications.</span> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.</li>
                <li><span className="font-semibold">To deliver targeted advertising to you.</span> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more. For more information see our Cookie Notice: __________.</li>
                <li><span className="font-semibold">To protect our Services.</span> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                <li><span className="font-semibold">To identify usage trends.</span> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                <li><span className="font-semibold">To determine the effectiveness of our marketing and promotional campaigns.</span> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
                <li><span className="font-semibold">To save or protect an individual's vital interest.</span> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
              </ul>
            </section>

            <section id="section-3" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
              <p className="font-semibold mb-2">In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
              
              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">If you are located in the EU or UK, this section applies to you.</h3>
              <p className="mb-4">
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><span className="font-semibold">Consent.</span> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. <a href="#section-8" className="text-blue-600 hover:underline">Learn more about withdrawing your consent</a>.</li>
                <li><span className="font-semibold">Performance of a Contract.</span> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                <li><span className="font-semibold">Legitimate Interests.</span> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Send users information about special offers and discounts on our products and services</li>
                    <li>Develop and display personalized and relevant advertising content for our users</li>
                    <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                    <li>Support our marketing activities</li>
                    <li>Diagnose problems and/or prevent fraudulent activities</li>
                    <li>Understand how our users use our products and services so we can improve user experience</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Legal Obligations.</span> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                <li><span className="font-semibold">Vital Interests.</span> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
              </ul>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">If you are located in Canada, this section applies to you.</h3>
              <p className="mb-4">
                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
              </p>
              <p className="mb-2">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by the regulations</li>
                <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
              </ul>
            </section>

            <section id="section-4" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p className="font-semibold mb-2">In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</p>
              <p className="mb-4">
                <span className="font-semibold">Vendors, Consultants, and Other Third-Party Service Providers.</span> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
              </p>
              <p className="mb-2">The categories of third parties we may share personal information with are as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Cloud Computing Services</li>
                <li>Communication & Collaboration Tools</li>
                <li>Data Storage Service Providers</li>
                <li>Finance & Accounting Tools</li>
                <li>Order Fulfillment Service Providers</li>
                <li>Payment Processors</li>
                <li>Performance Monitoring Tools</li>
                <li>Sales & Marketing Tools</li>
                <li>Website Hosting Service Providers</li>
              </ul>
              <p className="mb-2">We also may need to share your personal information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><span className="font-semibold">Business Partners.</span> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
              </ul>
            </section>

            <section id="section-5" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p className="font-semibold mb-2">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
              <p className="mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </section>

            <section id="section-6" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p className="font-semibold mb-2">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </section>

            <section id="section-7" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p className="font-semibold mb-2">In Short: We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</p>
              <p>
                We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a href="mailto:hello@cattledogadvisory.com" className="text-blue-600 hover:underline">hello@cattledogadvisory.com</a>.
              </p>
            </section>

            <section id="section-8" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p className="font-semibold mb-2">In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
              <p className="mb-4">
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </p>
              <p className="mb-4">
                We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              <p className="mb-4">
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
              </p>
              <p className="mb-4">
                If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Withdrawing your consent:</span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </p>
              <p className="mb-4">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <p className="mb-4">
                <span className="font-semibold">Opting out of marketing and promotional communications:</span> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you may email us at <a href="mailto:hello@cattledogadvisory.com" className="text-blue-600 hover:underline">hello@cattledogadvisory.com</a>.
              </p>
            </section>

            <section id="section-9" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p className="mb-4">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
              </p>
              <p>
                California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
              </p>
            </section>

            <section id="section-10" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
              <p className="font-semibold mb-2">In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>
              
              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">Categories of Personal Information We Collect</h3>
              <p className="mb-4">
                The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "WHAT INFORMATION DO WE COLLECT?"
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">A. Identifiers</td>
                      <td className="border border-gray-300 px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">B. Personal information as defined in the California Customer Records statute</td>
                      <td className="border border-gray-300 px-4 py-2">Name, contact information, education, employment, employment history, and financial information</td>
                      <td className="border border-gray-300 px-4 py-2">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">C. Protected classification characteristics under state or federal law</td>
                      <td className="border border-gray-300 px-4 py-2">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">D. Commercial information</td>
                      <td className="border border-gray-300 px-4 py-2">Transaction information, purchase history, financial details, and payment information</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">E. Biometric information</td>
                      <td className="border border-gray-300 px-4 py-2">Fingerprints and voiceprints</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">F. Internet or other similar network activity</td>
                      <td className="border border-gray-300 px-4 py-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">G. Geolocation data</td>
                      <td className="border border-gray-300 px-4 py-2">Device location</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">H. Audio, electronic, sensory, or similar information</td>
                      <td className="border border-gray-300 px-4 py-2">Images and audio, video or call recordings created in connection with our business activities</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">I. Professional or employment-related information</td>
                      <td className="border border-gray-300 px-4 py-2">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">J. Education Information</td>
                      <td className="border border-gray-300 px-4 py-2">Student records and directory information</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">K. Inferences drawn from collected personal information</td>
                      <td className="border border-gray-300 px-4 py-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">L. Sensitive personal Information</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
              <p className="mb-4">
                We will use and retain the collected personal information as needed to provide the Services or for:
              </p>
              <p className="mb-4 ml-4">Category B - 1 year</p>
              <p className="mb-4">
                <span className="font-semibold">Sources of Personal Information</span><br />
                <a href="#section-1" className="text-blue-600 hover:underline">Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</a>
              </p>
              <p className="mb-4">
                <span className="font-semibold">How We Use and Share Personal Information</span><br />
                <a href="#section-2" className="text-blue-600 hover:underline">Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</a>
              </p>
              <p className="mb-4 font-semibold">Will your information be shared with anyone else?</p>
              <p className="mb-4">
                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. <a href="#section-4" className="text-blue-600 hover:underline">Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a>
              </p>
              <p className="mb-4">
                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
              </p>
              <p className="mb-4">
                We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
              </p>
              <p className="mb-4 ml-4">(None listed)</p>
              <p className="mb-4">
                The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
              </p>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">Your Rights</h3>
              <p className="mb-4">
                You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Right to know whether or not we are processing your personal data</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request the deletion of your personal data</li>
                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                <li>Right to non-discrimination for exercising your rights</li>
                <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
              </ul>
              <p className="mb-4">
                Depending upon the state where you live, you may also have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
                <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
                <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
              </ul>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">How to Exercise Your Rights</h3>
              <p className="mb-4">
                To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at <a href="mailto:hello@cattledogadvisory.com" className="text-blue-600 hover:underline">hello@cattledogadvisory.com</a>, or by referring to the contact details at the bottom of this document.
              </p>
              <p className="mb-4">
                Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
              </p>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">Request Verification</h3>
              <p className="mb-4">
                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
              </p>
              <p className="mb-4">
                If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
              </p>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">Appeals</h3>
              <p className="mb-4">
                Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:hello@cattledogadvisory.com" className="text-blue-600 hover:underline">hello@cattledogadvisory.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
              </p>

              <h3 className="text-xl font-light text-gray-900 mt-6 mb-3">California "Shine The Light" Law</h3>
              <p className="mb-4">
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
              </p>
            </section>

            <section id="section-11" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p className="font-semibold mb-2">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
              <p>
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            <section id="section-12" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p className="mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:hello@cattledogadvisory.com" className="text-blue-600 hover:underline">hello@cattledogadvisory.com</a> or contact us by post at:
              </p>
              <p className="mb-4 ml-4">
                Cattledog Advisory, LLC<br />
                __________<br />
                __________<br />
                United States
              </p>
            </section>

            <section id="section-13" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-light text-gray-900 mb-4">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              <p>
                You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
