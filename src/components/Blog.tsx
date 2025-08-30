
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [stagger, setStagger] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      [0, 1, 2, 3].forEach((i) => {
        setTimeout(() => {
          setStagger((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 180);
      });
    } else {
      setStagger([false, false, false, false]);
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`font-salaryman text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight transition-all duration-700 ${stagger[0] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            How AI Can Accelerate Compliance Reviews
          </h2>
          <p className={`font-salaryman text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto transition-all duration-700 ${stagger[1] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            Corporate Privacy Policies Under the Oregon Consumer Privacy Act
          </p>
        </div>

        <div className={`max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 mb-12 transition-all duration-700 ${stagger[2] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
          <div className="prose prose-lg max-w-none font-salaryman">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Introduction</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The data collection policies of Fortune 500 corporations impact hundreds of millions of people worldwide. Consumers, regulators, and advocacy groups alike have long struggled with the confusing realities of commercial terms of service and privacy policies, yet these agreements dictate how personal data is collected, shared, and protected in the United States. Often these agreements are complex, opaque, and difficult to compare, leaving the reader uninformed and ill-equipped to manage their own personal data.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              With the passage of recent U.S. state privacy laws like the Oregon Consumer Privacy Act (OCPA), effective July 2024, the need for transparency and rapid analysis is greater than ever. The OCPA imposes new obligations on companies operating in Oregon that process or control personal data, requiring privacy policies to be easily accessible, clear, and specific about data practices. Companies must ensure their publicly posted policies meet these standards or risk exposure to enforcement action.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The challenge for consumers of these disclosures? Evaluating even a single corporation's privacy policy and other public disclosures can require hours of manual review by attorneys and compliance teams. Multiply this across hundreds of companies, and the task quickly becomes unmanageable for both organizations and individuals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Enter AI tools like Legalgraph.ai, designed to expedite the review of dense legal texts and transform them into usable comparisons. By harnessing AI, it is now possible to quickly extract key answers about whether a company's practices align with the OCPA — without drowning in legal jargon.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This post explores why these developments matter, outlines the new obligations under Oregon law, and demonstrates how AI can streamline compliance analysis of Fortune 500 companies' policies.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">Why Privacy Policies and Terms Matter</h3>

            <h4 className="text-xl font-medium text-gray-900 mb-4">Corporations' Expanding Reach</h4>

            <p className="text-gray-700 leading-relaxed mb-6">
              The largest U.S. corporations don't just generate jobs and revenue — they increasingly shape how digital life operates. Companies like Amazon, Apple, Alphabet, and Walmart govern enormous networks of users whose private data flows through their platforms daily.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Compare this reach to current regulations and the task of sorting out how an individual's personal data is being used becomes murkier. While federal law on privacy remains fragmented in the U.S., a growing number of states, including California, Virginia, Colorado, Connecticut, and now Oregon, impose consumer privacy standards that companies must meet. These requirements directly impact how corporations design, word, and structure their posted privacy policies and terms of service.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">For consumers and regulators, the privacy policy is the critical access point:</p>

            <ul className="text-gray-700 mb-6 ml-6 space-y-2">
              <li>• It serves as the single source of declared truth about how a company handles personal data.</li>
              <li>• It is the document regulators will read first in assessing compliance.</li>
              <li>• It is the contract that shapes how disputes may be resolved.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              If these policies are confusing, internally inconsistent, or do not align with required disclosures under laws like OCPA, companies run the risk of regulatory scrutiny or consumer complaints.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">The Oregon Consumer Privacy Act: A Quick Overview</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The OCPA applies to companies operating in Oregon that process the personal data of 100,000 or more residents, or derive 25% of revenue from selling personal data of 25,000 or more consumers.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">The law requires privacy policies to clearly disclose:</p>

            <ul className="text-gray-700 mb-6 ml-6 space-y-2">
              <li>• Categories of personal data collected</li>
              <li>• The purposes for collection and processing</li>
              <li>• How consumers can exercise rights (access, correction, deletion, and data portability)</li>
              <li>• Whether data is shared with third parties, and for what purpose</li>
              <li>• How sensitive data (e.g., biometrics, health data, precise location, children's data) is treated</li>
              <li>• Contact information for the designated controller</li>
              <li>• Retention timelines or criteria for data deletion</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Additionally, OCPA prohibits discriminatory treatment of consumers who exercise their rights and imposes opt-in requirements for sensitive data.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              For companies with huge, sprawling operations — like Amazon or Walmart — ensuring that their public-facing policies effectively capture all these requirements is both an operational and reputational challenge.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">The Compliance Review Problem</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Traditionally, compliance officers and lawyers would review privacy policies through a manual process:
            </p>

            <ul className="text-gray-700 mb-6 ml-6 space-y-2">
              <li>• Searching through dozens of pages of legal text,</li>
              <li>• Mapping disclosures against OCPA required elements,</li>
              <li>• Preparing summaries or reports for internal audits, and</li>
              <li>• Repeating the process for competitors, vendors, or acquisition targets.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              The bottlenecks are obvious. Privacy policies can exceed 20,000 words, written in prose that is neither consumer-friendly nor regulator-friendly. Clarity varies widely across companies and industries.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">Consider the top 10 Fortune 500 companies in 2024:</p>

            <div className="bg-white p-6 rounded-lg border mb-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Rank</th>
                    <th className="text-left py-2">Company</th>
                    <th className="text-left py-2">Privacy Policy Word Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-2">1</td><td className="py-2">Walmart</td><td className="py-2">~4,500</td></tr>
                  <tr className="border-b"><td className="py-2">2</td><td className="py-2">Amazon</td><td className="py-2">~4,500 - 7,500 (layered)</td></tr>
                  <tr className="border-b"><td className="py-2">3</td><td className="py-2">ExxonMobil</td><td className="py-2">~6,500</td></tr>
                  <tr className="border-b"><td className="py-2">4</td><td className="py-2">Apple</td><td className="py-2">~6,100</td></tr>
                  <tr className="border-b"><td className="py-2">5</td><td className="py-2">UnitedHealth</td><td className="py-2">~4,200</td></tr>
                  <tr className="border-b"><td className="py-2">6</td><td className="py-2">CVS Health</td><td className="py-2">~7,200</td></tr>
                  <tr className="border-b"><td className="py-2">7</td><td className="py-2">Berkshire Hathaway</td><td className="py-2">~2,400</td></tr>
                  <tr className="border-b"><td className="py-2">8</td><td className="py-2">Alphabet</td><td className="py-2">~4,000- 7,000 (layered)</td></tr>
                  <tr className="border-b"><td className="py-2">9</td><td className="py-2">McKesson</td><td className="py-2">~2,000 – 2,400 (layered)</td></tr>
                  <tr><td className="py-2">10</td><td className="py-2">Cencora</td><td className="py-2">~2,300</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              For reference, this article is 1900 words. Every one of them must maintain extensive privacy disclosures. Yet each structures its policies differently: Apple's "Privacy Promise" looks unlike Walmart's customer data policy, or Google's layered, hyperlink-driven terms. Comparing them side by side without AI is nearly impossible.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">How AI Tools Accelerate the Process</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              This is precisely where AI-driven platforms like Legalgraph.ai can transform the compliance task. Using natural language processing (NLP) and large language models (LLMs), AI can automatically:
            </p>

            <div className="bg-white p-6 rounded-lg border mb-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Parse long documents</h4>
              <p className="text-gray-700 mb-4">Break a 20,000-word privacy policy into discrete sections (collection, use, sharing, consumer rights, contact info).</p>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">Map disclosures to regulatory requirements</h4>
              <ul className="text-gray-700 mb-4 ml-4 space-y-2">
                <li>• Highlight whether the company explicitly states categories of personal data collected (OCPA §3).</li>
                <li>• Flag missing elements, such as a clear statement of sensitive data handling.</li>
              </ul>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">Enable fast comparisons across companies</h4>
              <p className="text-gray-700 mb-4">Compare Amazon's disclosures against Walmart's for whether both specify retention timelines.</p>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">Generate structured outputs for quick answers</h4>
              <p className="text-gray-700">Instead of reports full of legal prose, AI systems can produce checklists: ✅ Discloses categories, ❌ Omits retention policy, ⚠ Mentions consumer rights but unclear on appeals process.</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              In short, LegalGraph AI cuts the timeline of reviewing one privacy policy from hours to minutes, and those efficiencies scale when looking across hundreds of companies. For example, Legalgraph.ai allowed me to compare and contrast the top ten policies listed above in less than 20 minutes. Compared to ~30-45 minutes each to review the ten policies (and sublayers) individually, this represents over a half-day of worktime freed up to spend on deep analysis and strategy rather than mere evidence gathering.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">Example: What an AI Review Could Surface</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Take a hypothetical comparison of three Fortune 500 firms' privacy policies under OCPA requirements:
            </p>

            <div className="bg-white p-6 rounded-lg border mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Amazon:</h4>
                  <p className="text-gray-700">Discloses categories of data, emphasizes personalization and advertising purposes, but offers limited specificity on retention periods.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Apple:</h4>
                  <p className="text-gray-700">Provides detailed descriptions about minimizing data collection and protecting sensitive fields (health, biometrics), aligning well with OCPA; strong consumer rights articulation.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Walmart:</h4>
                  <p className="text-gray-700">Covers collection categories broadly but buries consumer rights instructions deep within general terms of use, raising accessibility concerns.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              While a manual read would require days, LegalGraph AI can generate this comparison instantly, marking which provisions are missing or at risk under OCPA.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">Strategic Benefits for Companies and Regulators</h3>

            <p className="text-gray-700 leading-relaxed mb-4">AI-driven compliance review benefits multiple stakeholders:</p>

            <ul className="text-gray-700 mb-8 ml-6 space-y-2">
              <li>• Corporate legal teams can monitor competitor approaches and benchmark their own disclosures.</li>
              <li>• Regulators can rapidly identify gaps across industries and prioritize enforcement.</li>
              <li>• Consumers benefit indirectly, as clearer, standardized disclosures become the norm when companies know they are being compared side-by-side.</li>
              <li>• Investors and analysts gain visibility into which companies are ahead or behind in governance and consumer protection practices.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">The Future: Toward Machine-Readable Privacy Policies</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The rise of AI suggests a future where privacy policies evolve from wordy PDFs into machine-readable statements designed for automated compliance checks. Instead of spending human resources parsing opaque legal language, companies could publish structured data feeds listing:
            </p>

            <ul className="text-gray-700 mb-6 ml-6 space-y-2">
              <li>• Data categories collected</li>
              <li>• Legal bases for processing</li>
              <li>• Retention timelines</li>
              <li>• Consumer redress procedures</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              This would move policies closer to the "nutrition label" model of disclosure — easy to compare, standardized, and enforceable. OCPA compliance could then be monitored continuously, reducing risk for businesses and improving transparency for consumers.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">Conclusion</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Oregon Consumer Privacy Act raises the stakes for corporations, requiring greater detail and clarity in privacy policies. For Fortune 500 companies, manual compliance review is no longer sufficient.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              AI platforms like Legalgraph.ai provide a practical way forward: dramatically expediting the analysis of lengthy corporate disclosures, mapping them against Oregon requirements, and surfacing gaps with just a fraction of the traditional effort.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As more states adopt their own consumer privacy statutes, the ability to automate compliance checks and run cross-company comparisons will go from being a helpful advantage to a business necessity.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              In a world where corporate data practices increasingly define consumer trust and regulatory risk, AI doesn't just make document review faster — it makes accountability measurable.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">Sample OCPA Compliance Checklist for Privacy Policies</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Below is a checklist illustrating how an AI tool like Legalgraph.ai could automate the review of a company's privacy policy for compliance with the Oregon Consumer Privacy Act (OCPA), effective July 1, 2024. Each item aligns with a key disclosure or operational requirement under OCPA. The checklist format enables fast, at-a-glance assessment so legal teams or regulators can focus on gaps.
            </p>

            <div className="bg-white p-6 rounded-lg border mb-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2">OCPA Requirement</th>
                    <th className="text-left py-2 px-2">Status</th>
                    <th className="text-left py-2 px-2">AI Reasoning</th>
                    <th className="text-left py-2 px-2">Notes</th>
                    <th className="text-left py-2 px-2">Citations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-2">Categories of personal data collected</td>
                    <td className="py-2 px-2">✔️ Yes / ❌ No</td>
                    <td className="py-2 px-2">"We collect identifiers, contact info..."</td>
                    <td className="py-2 px-2">Required to be explicitly listed.</td>
                    <td className="py-2 px-2">Page 2, Section 4</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Purposes for collection and processing</td>
                    <td className="py-2 px-2">✔️ Yes / ❌ No</td>
                    <td className="py-2 px-2">"We use data for personalization, fraud prevention..."</td>
                    <td className="py-2 px-2">Should match description in OCPA.</td>
                    <td className="py-2 px-2">Page 2, Section 4.1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Statement of consumer rights</td>
                    <td className="py-2 px-2">✔️ Yes / ❌ No</td>
                    <td className="py-2 px-2">"You may request access to your data..."</td>
                    <td className="py-2 px-2">Detail how to exercise rights.</td>
                    <td className="py-2 px-2">Page 3, Section 5</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Appeals process for right denials</td>
                    <td className="py-2 px-2">✔️ Yes / ❌ No</td>
                    <td className="py-2 px-2">"You may appeal denial via..."</td>
                    <td className="py-2 px-2">OCPA mandates clear instructions.</td>
                    <td className="py-2 px-2">Page 3, Section 5.2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Data sharing with third parties</td>
                    <td className="py-2 px-2">✔️ Yes / ❌ No</td>
                    <td className="py-2 px-2">"Data may be shared for analytics..."</td>
                    <td className="py-2 px-2">List partners, sharing reasons.</td>
                    <td className="py-2 px-2">Page 4, Section 6</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-lg border mb-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Example Output for Apple (Hypothetical)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-2">OCPA Requirement</th>
                      <th className="text-left py-2 px-2">Status</th>
                      <th className="text-left py-2 px-2">Policy Reference</th>
                      <th className="text-left py-2 px-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-2">Categories of personal data collected</td>
                      <td className="py-2 px-2">✔️</td>
                      <td className="py-2 px-2">"Apple collects device, account, usage data..."</td>
                      <td className="py-2 px-2">Sufficient list provided</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-2">Consumer rights statement</td>
                      <td className="py-2 px-2">✔️</td>
                      <td className="py-2 px-2">"You have the right to access, correct..."</td>
                      <td className="py-2 px-2">Clearly outlined</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-2">Sensitive data treatment</td>
                      <td className="py-2 px-2">✔️</td>
                      <td className="py-2 px-2">"Sensitive data requires explicit consent..."</td>
                      <td className="py-2 px-2">Opt-in confirmed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mb-6 mt-12">Get Involved and Learn More</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              We would love to hear from you. Let us know which privacy policies or which state's privacy terms you would like us to review next.
            </p>

            <h4 className="text-xl font-medium text-gray-900 mb-4">Resources</h4>
            <p className="text-gray-700 leading-relaxed mb-4">Sample Privacy Policy: Here is an example privacy policy that you can use as a baseline.</p>
            
            <p className="text-gray-700 leading-relaxed mb-2">Privacy Policy Templates:</p>
            <ul className="text-gray-700 mb-6 ml-6 space-y-2">
              <li>• Termly</li>
              <li>• Shopify</li>
              <li>• PrivacyPolicies.com</li>
            </ul>

            <h4 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any consultancy and advice, reach out to us at <a href="mailto:gerald@cattledogadvisory.com" className="text-navy underline">gerald@cattledogadvisory.com</a>. For questions about LegalGraph AI, please contact info@legalgraph.ai.
            </p>

            <h4 className="text-xl font-medium text-gray-900 mb-4">Stay Updated</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Follow us as we continue to learn more about additional ways you can assess privacy and compliance using AI tools.
            </p>

            <div className="bg-navy text-white p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-4">Volunteer</h4>
              <p className="mb-4">
                If you would like to volunteer and be part of this project where we are reviewing the privacy policies of Fortune 500 companies, write to us at <a href="mailto:gerald@cattledogadvisory.com" className="text-gold underline">gerald@cattledogadvisory.com</a> with heading "How AI Can Accelerate Compliance Reviews of Corporate Privacy Policies Under the Oregon Consumer Privacy Act".
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="mailto:gerald@cattledogadvisory.com">
            <Button 
              variant="outline" 
              className={`border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-none font-medium px-8 py-3 transition-all duration-700 ${stagger[3] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
              Contact Us for More Insights
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
