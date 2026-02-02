import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title = "ECK Filmworks - Professional Photography Portfolio",
  description = "Professional photography services specializing in portraits, weddings, events, and commercial photography. Capturing your most precious moments with artistic excellence.",
  image = "/og-image.jpg",
  url = "https://eckfilmworks.com",
  type = "website"
}) => {
  const siteTitle = "ECK Filmworks";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="ECK Filmworks" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
