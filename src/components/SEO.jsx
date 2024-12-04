import { Helmet } from 'react-helmet-async';

// Create a reusable SEO component
const SEO = ({ title, description, keywords, image, article }) => {
  const siteURL = 'https://davianalbarran.github.io';
  const defaultDescription = 'Software engineer and physics enthusiast sharing insights about technology, science, and engineering. Exploring the intersection of software development and physics.';
  const defaultKeywords = 'software engineering, physics, web development, React, science communication, tech blog';
  const defaultImage = `${siteURL}/profile-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | DVN` : 'DVN | Forever Curious'}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph Tags */}
      <meta property="og:url" content={siteURL} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional SEO Tags */}
      <link rel="canonical" href={siteURL} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;