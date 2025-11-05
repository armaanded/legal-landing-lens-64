import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

// Blog post data
const posts = [
  {
    slug: "OCPA-compliance-review-of-fortune500-series-1",
    title: "How AI Can Accelerate Compliance Reviews of Corporate Privacy Policies Under the Oregon Consumer Privacy Act",
    content: "The data collection policies of Fortune 500 corporations impact hundreds of millions of people worldwide. Consumers, regulators, and advocacy groups alike have long struggled with the confusing realities of commercial terms of service and privacy policies, yet these agreements dictate how personal data is collected, shared, and protected in the United States. Often these agreements are complex, opaque, and difficult to compare, leaving the reader uninformed and ill-equipped to manage their own personal data.\n\nWith the passage of recent U.S. state privacy laws like the Oregon Consumer Privacy Act (OCPA), effective July 2024, the need for transparency and rapid analysis is greater than ever. The OCPA imposes new obligations on companies operating in Oregon that process or control personal data, requiring privacy policies to be easily accessible, clear, and specific about data practices. Companies must ensure their publicly posted policies meet these standards or risk exposure to enforcement action.\n\nThe challenge for consumers of these disclosures? Evaluating even a single corporation's privacy policy and other public disclosures can require hours of manual review by attorneys and compliance teams. Multiply this across hundreds of companies, and the task quickly becomes unmanageable for both organizations and individuals.\n\nEnter AI tools like Legalgraph.ai, designed to expedite the review of dense legal texts and transform them into usable comparisons. By harnessing AI, it is now possible to quickly extract key answers about whether a company's practices align with the OCPA — without drowning in legal jargon.\n\nThis post explores why these developments matter, outlines the new obligations under Oregon law, and demonstrates how AI can streamline compliance analysis of Fortune 500 companies' policies.\n\nWhy Privacy Policies and Terms Matter\n\nCorporations' Expanding Reach\n\nThe largest U.S. corporations don't just generate jobs and revenue — they increasingly shape how digital life operates. Companies like Amazon, Apple, Alphabet, and Walmart govern enormous networks of users whose private data flows through their platforms daily.\n\nCompare this reach to current regulations and the task of sorting out how an individual's personal data is being used becomes murkier. While federal law on privacy remains fragmented in the U.S., a growing number of states, including California, Virginia, Colorado, Connecticut, and now Oregon, impose consumer privacy standards that companies must meet. These requirements directly impact how corporations design, word, and structure their posted privacy policies and terms of service.\n\nFor consumers and regulators, the privacy policy is the critical access point:\n\n• It serves as the single source of declared truth about how a company handles personal data.\n• It is the document regulators will read first in assessing compliance.\n• It is the contract that shapes how disputes may be resolved.\n\nIf these policies are confusing, internally inconsistent, or do not align with required disclosures under laws like OCPA, companies run the risk of regulatory scrutiny or consumer complaints.\n\nThe Oregon Consumer Privacy Act: A Quick Overview\n\nThe OCPA applies to companies operating in Oregon that process the personal data of 100,000 or more residents, or derive 25% of revenue from selling personal data of 25,000 or more consumers.\n\nThe law requires privacy policies to clearly disclose:\n\n• Categories of personal data collected\n• The purposes for collection and processing\n• How consumers can exercise rights (access, correction, deletion, and data portability)\n• Whether data is shared with third parties, and for what purpose\n• How sensitive data (e.g., biometrics, health data, precise location, children's data) is treated\n• Contact information for the designated controller\n• Retention timelines or criteria for data deletion\n\nAdditionally, OCPA prohibits discriminatory treatment of consumers who exercise their rights and imposes opt-in requirements for sensitive data.\n\nFor companies with huge, sprawling operations — like Amazon or Walmart — ensuring that their public-facing policies effectively capture all these requirements is both an operational and reputational challenge.\n\nThe Compliance Review Problem\n\nTraditionally, compliance officers and lawyers would review privacy policies through a manual process:\n\n• Searching through dozens of pages of legal text,\n• Mapping disclosures against OCPA required elements,\n• Preparing summaries or reports for internal audits, and\n• Repeating the process for competitors, vendors, or acquisition targets.\n\nThe bottlenecks are obvious. Privacy policies can exceed 20,000 words, written in prose that is neither consumer-friendly nor regulator-friendly. Clarity varies widely across companies and industries.\n\nConsider the top 10 Fortune 500 companies in 2024:\n\nRank | Company | Privacy Policy Word Count\n1 | Walmart | ~4,500\n2 | Amazon | ~4,500 - 7,500 (layered)\n3 | ExxonMobil | ~6,500\n4 | Apple | ~6,100\n5 | UnitedHealth | ~4,200\n6 | CVS Health | ~7,200\n7 | Berkshire Hathaway | ~2,400\n8 | Alphabet | ~4,000- 7,000 (layered)\n9 | McKesson | ~2,000 – 2,400 (layered)\n10 | Cencora | ~2,300\n\nFor reference, this article is 1900 words. Every one of them must maintain extensive privacy disclosures. Yet each structures its policies differently: Apple's \"Privacy Promise\" looks unlike Walmart's customer data policy, or Google's layered, hyperlink-driven terms. Comparing them side by side without AI is nearly impossible.\n\nHow AI Tools Accelerate the Process\n\nThis is precisely where AI-driven platforms like Legalgraph.ai can transform the compliance task. Using natural language processing (NLP) and large language models (LLMs), AI can automatically:\n\nParse long documents\nBreak a 20,000-word privacy policy into discrete sections (collection, use, sharing, consumer rights, contact info).\n\nMap disclosures to regulatory requirements\n• Highlight whether the company explicitly states categories of personal data collected (OCPA §3).\n• Flag missing elements, such as a clear statement of sensitive data handling.\n\nEnable fast comparisons across companies\nCompare Amazon's disclosures against Walmart's for whether both specify retention timelines.\n\nGenerate structured outputs for quick answers\nInstead of reports full of legal prose, AI systems can produce checklists: ✅ Discloses categories, ❌ Omits retention policy, ⚠ Mentions consumer rights but unclear on appeals process.\n\nIn short, LegalGraph AI cuts the timeline of reviewing one privacy policy from hours to minutes, and those efficiencies scale when looking across hundreds of companies. For example, Legalgraph.ai allowed me to compare and contrast the top ten policies listed above in less than 20 minutes. Compared to ~30-45 minutes each to review the ten policies (and sublayers) individually, this represents over a half-day of worktime freed up to spend on deep analysis and strategy rather than mere evidence gathering.\n\nExample: What an AI Review Could Surface\n\nTake a hypothetical comparison of three Fortune 500 firms' privacy policies under OCPA requirements:\n\nAmazon: Discloses categories of data, emphasizes personalization and advertising purposes, but offers limited specificity on retention periods.\nApple: Provides detailed descriptions about minimizing data collection and protecting sensitive fields (health, biometrics), aligning well with OCPA; strong consumer rights articulation.\nWalmart: Covers collection categories broadly but buries consumer rights instructions deep within general terms of use, raising accessibility concerns.\n\nWhile a manual read would require days, LegalGraph AI can generate this comparison instantly, marking which provisions are missing or at risk under OCPA.\n\nStrategic Benefits for Companies and Regulators\n\nAI-driven compliance review benefits multiple stakeholders:\n\n• Corporate legal teams can monitor competitor approaches and benchmark their own disclosures.\n• Regulators can rapidly identify gaps across industries and prioritize enforcement.\n• Consumers benefit indirectly, as clearer, standardized disclosures become the norm when companies know they are being compared side-by-side.\n• Investors and analysts gain visibility into which companies are ahead or behind in governance and consumer protection practices.\n\nThe Future: Toward Machine-Readable Privacy Policies\n\nThe rise of AI suggests a future where privacy policies evolve from wordy PDFs into machine-readable statements designed for automated compliance checks. Instead of spending human resources parsing opaque legal language, companies could publish structured data feeds listing:\n\n• Data categories collected\n• Legal bases for processing\n• Retention timelines\n• Consumer redress procedures\n\nThis would move policies closer to the \"nutrition label\" model of disclosure — easy to compare, standardized, and enforceable. OCPA compliance could then be monitored continuously, reducing risk for businesses and improving transparency for consumers.\n\nConclusion\n\nThe Oregon Consumer Privacy Act raises the stakes for corporations, requiring greater detail and clarity in privacy policies. For Fortune 500 companies, manual compliance review is no longer sufficient.\n\nAI platforms like Legalgraph.ai provide a practical way forward: dramatically expediting the analysis of lengthy corporate disclosures, mapping them against Oregon requirements, and surfacing gaps with just a fraction of the traditional effort.\n\nAs more states adopt their own consumer privacy statutes, the ability to automate compliance checks and run cross-company comparisons will go from being a helpful advantage to a business necessity.\n\nIn a world where corporate data practices increasingly define consumer trust and regulatory risk, AI doesn't just make document review faster — it makes accountability measurable.\n\nSample OCPA Compliance Checklist for Privacy Policies\n\nBelow is a checklist illustrating how an AI tool like Legalgraph.ai could automate the review of a company's privacy policy for compliance with the Oregon Consumer Privacy Act (OCPA), effective July 1, 2024. Each item aligns with a key disclosure or operational requirement under OCPA. The checklist format enables fast, at-a-glance assessment so legal teams or regulators can focus on gaps.\n\nOCPA Requirement | Status | AI Reasoning with Policy Reference / Excerpt | Notes / Comments | Citations (Page and section where information is located)\nCategories of personal data collected | ✔️ Yes / ❌ No | \"We collect identifiers, contact info...\" | Required to be explicitly listed. | Page 2, Section 4\nPurposes for collection and processing | ✔️ Yes / ❌ No | \"We use data for personalization, fraud prevention...\" | Should match description in OCPA. | Page 2, Section 4.1\nStatement of consumer rights (access, correction, etc.) | ✔️ Yes / ❌ No | \"You may request access to your data...\" | Detail how to exercise rights. | Page 3, Section 5\nAppeals process for right denials | ✔️ Yes / ❌ No | \"You may appeal denial via...\" | OCPA mandates clear instructions. | Page 3, Section 5.2\nData sharing with third parties and purposes | ✔️ Yes / ❌ No | \"Data may be shared for analytics...\" | List partners, sharing reasons. | Page 4, Section 6\nTreatment of sensitive personal data | ✔️ Yes / ❌ No | \"Sensitive data (health, location) requires consent...\" | Opt-in/opt-out must be specified. | Page 5, Section 7\nData retention period or deletion criteria | ✔️ Yes / ❌ No | \"Data retained for 2 years or until request...\" | Specific or criteria-based info. | Page 5, Section 7.3\nDesignated contact for privacy requests | ✔️ Yes / ❌ No | \"Contact privacy@company.com for requests\" | Must be functional and public. | Page 6, Section 8\nNon-discrimination statement | ✔️ Yes / ❌ No | \"We do not discriminate if you exercise your rights\" | Required by OCPA. | Page 6, Section 8.1\nEffective date & update history of policy | ✔️ Yes / ❌ No | \"Last updated: July 1, 2024\" | Shows transparency and recency. | Page 1, Section 1\n\nExample Output for Apple (Hypothetical)\n\nOCPA Requirement | Status | Policy Reference / Excerpt | Notes | Citations (Page and section where information is located)\nCategories of personal data collected | ✔️ | \"Apple collects device, account, usage data...\" | Sufficient list provided | Page 2, Section 4\nPurposes for collection and processing | ✔️ | \"We use your data to improve services...\" | Matches OCPA requirement | Page 2, Section 4.1\nStatement of consumer rights | ✔️ | \"You have the right to access, correct...\" | Clearly outlined | Page 3, Section 5\nAppeals process for right denials | ✔️ | \"Appeal denied requests via support...\" | Present and accessible | Page 3, Section 5.2\nData sharing with third parties | ✔️ | \"We share data with service providers...\" | Described with partners | Page 4, Section 6\nTreatment of sensitive personal data | ✔️ | \"Sensitive data requires explicit consent...\" | Opt-in confirmed | Page 5, Section 7\nData retention period or deletion criteria | ✔️ | \"Retention based on legal and operational needs...\" | Criteria explained | Page 5, Section 7.3\nDesignated contact for privacy requests | ✔️ | \"Contact privacy@apple.com...\" | Accessible contact | Page 6, Section 8\nNon-discrimination statement | ✔️ | \"No discrimination for exercising rights...\" | Meets OCPA standard | Page 6, Section 8.1\nEffective date & update history | ✔️ | \"Last updated: July 1, 2024\" | Transparent and current | Page 1, Section 1\n\nGet Involved and Learn More"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the post by slug
  const post = posts.find(p => p.slug === slug);

  // If post not found, show error message
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Post Not Found"
          description="The requested blog post could not be found."
          keywords="blog, post not found"
          url={`/blog/${slug}`}
          image="/images/logo.png"
          type="article"
          robots="noindex, nofollow"
        />
        <Navbar fadeIn={true} activeSection={null} heroRef={null} />
        <div className="container mx-auto px-4 md:px-6 py-12 pt-24">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={post.title}
        description={`Read about ${post.title.toLowerCase()}`}
        keywords="legal AI, compliance, privacy law, blog"
        url={`/blog/${post.slug}`}
        image="/images/logo.png"
        type="article"
        robots="index, follow"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": `Read about ${post.title.toLowerCase()}`,
          "image": `${import.meta.env.VITE_SITE_URL || 'http://localhost:5173'}/images/logo.png`,
          "author": {
            "@type": "Organization",
            "name": "Cattledog Advisory",
            "url": import.meta.env.VITE_SITE_URL || 'http://localhost:5173'
          },
          "publisher": {
            "@type": "Organization",
            "name": "Cattledog Advisory",
            "logo": {
              "@type": "ImageObject",
              "url": `${import.meta.env.VITE_SITE_URL || 'http://localhost:5173'}/images/logo.png`
            }
          },
          "datePublished": "2024-01-01",
          "dateModified": "2024-01-01",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_SITE_URL || 'http://localhost:5173'}/blog/${post.slug}`
          },
          "articleSection": "Legal Technology",
          "keywords": "legal AI, compliance, privacy law, blog"
        }}
      />
      <Navbar fadeIn={true} activeSection={null} heroRef={null} />
      <div className="container mx-auto px-4 md:px-6 py-12 pt-24">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph contains table data
              if (paragraph.includes('|') && paragraph.includes('Rank') && paragraph.includes('Company')) {
                // Fortune 500 table
                const lines = paragraph.split('\n');
                const tableLines = lines.filter(line => line.includes('|'));
                const rows = tableLines.map(line => line.split('|').map(cell => cell.trim()));
                
                return (
                  <div key={index} className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Privacy Policy Word Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                        {rows.slice(1).map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row[0]}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row[1]}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row[2]}</td>
                          </tr>
                        ))}
                </tbody>
              </table>
            </div>
                );
              } else if (paragraph.includes('|') && paragraph.includes('OCPA Requirement') && paragraph.includes('Status')) {
                // OCPA Compliance Checklist table
                const lines = paragraph.split('\n');
                const tableLines = lines.filter(line => line.includes('|'));
                const rows = tableLines.map(line => line.split('|').map(cell => cell.trim()));
                
                return (
                  <div key={index} className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">OCPA Requirement</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">AI Reasoning with Policy Reference / Excerpt</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Notes / Comments</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Citations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                        {rows.slice(1).map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[0]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[1]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[2]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[3]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[4]}</td>
                          </tr>
                        ))}
                </tbody>
              </table>
            </div>
                );
              } else if (paragraph.includes('|') && paragraph.includes('Apple') && paragraph.includes('Policy Reference')) {
                // Apple Example table
                const lines = paragraph.split('\n');
                const tableLines = lines.filter(line => line.includes('|'));
                const rows = tableLines.map(line => line.split('|').map(cell => cell.trim()));
                
                return (
                  <div key={index} className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">OCPA Requirement</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Policy Reference / Excerpt</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Notes</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Citations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                        {rows.slice(1).map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[0]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[1]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[2]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[3]}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row[4]}</td>
                          </tr>
                        ))}
                </tbody>
              </table>
            </div>
                );
              } else if (paragraph.includes('Get Involved and Learn More')) {
                // Special handling for the end sections with buttons
                return (
                  <div key={index} className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Get Involved and Learn More</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                We would love to hear from you. Let us know which privacy policies or which state's privacy terms you would like us to review next.
              </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-navy text-white p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Contact Us</h3>
                        <p className="mb-4">
                          For any consultancy and advice, reach out to us at <a href="mailto:gerald@cattledogadvisory.com" className="text-gold underline">gerald@cattledogadvisory.com</a>.
                </p>
                <p>
                  For questions about LegalGraph AI, please contact <a href="mailto:info@legalgraph.ai" className="text-gold underline">info@legalgraph.ai</a>.
                </p>
              </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Stay Updated</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                  Follow us as we continue to learn more about additional ways you can assess privacy and compliance using AI tools.
                </p>
                        <button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                          Follow Our Updates
                        </button>
                      </div>
              </div>

                    <div className="bg-gold/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Volunteer</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        If you would like to volunteer and be part of this project where we are reviewing the privacy policies of Fortune 500 companies, write to us at <a href="mailto:gerald@cattledogadvisory.com" className="text-navy hover:text-gold underline">gerald@cattledogadvisory.com</a>.
                </p>
                      <a href="mailto:gerald@cattledogadvisory.com" className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/80 transition-colors text-lg">
                        Join Our Volunteer Team
                      </a>
              </div>
            </div>
                );
              } else {
                // Regular paragraph
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;