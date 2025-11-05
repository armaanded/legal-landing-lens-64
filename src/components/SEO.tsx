import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  robots?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url,
  image,
  type = 'website',
  robots = 'index, follow',
  structuredData
}) => {
  // Default values
  const siteUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';
  const defaultImage = `${siteUrl}/images/logo.png`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags - Always Required */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags - Always Required */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Cattledog Advisory" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags - Always Required */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CattledogAdvisory" />
      <meta name="twitter:creator" content="@CattledogAdvisory" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO Tags */}
      <meta name="author" content="Cattledog Advisory" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data JSON-LD - Optional */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
