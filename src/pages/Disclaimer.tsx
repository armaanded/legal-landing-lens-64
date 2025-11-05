import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SEO from '@/components/SEO';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Disclaimer - Cattledog Advisory"
        description="Disclaimer for Cattledog Advisory"
        keywords="disclaimer, legal, Cattledog Advisory"
        url="/disclaimer"
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
        
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">Last updated: 14 October 2025</p>
            
            <section>
              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">WEBSITE DISCLAIMER</h2>
              <p>
                The information provided by Cattledog Advisory, LLC ("we," "us," or "our") on{' '}
                <a href="http://www.cattledogadvisory.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  http://www.cattledogadvisory.com
                </a>{' '}
                (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
              <p className="font-semibold mt-4">
                UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">EXTERNAL LINKS DISCLAIMER</h2>
              <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
              </p>
              <p className="font-semibold mt-4">
                WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">PROFESSIONAL DISCLAIMER</h2>
              <p>
                The Site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal advice.
              </p>
              <p className="font-semibold mt-4">
                THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at{' '}
                <a href="mailto:gerald@cattledogadvisory.com" className="text-blue-600 hover:underline">
                  gerald@cattledogadvisory.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
