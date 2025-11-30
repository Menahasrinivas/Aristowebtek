import { Helmet } from "react-helmet";

export default function SEO({
  title = "Aristo Webtek",
  description = "Aristo Creative Technologies",
  keywords = "",
  image = "/default-og.jpg",
  url = "",
  jsonLd = {},
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const canonical = url ? `${siteUrl}${url}` : siteUrl;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
  };

  return (
    <Helmet>
      {/* Title */}
      <title>{title} | Aristo Creative Technologies</title>

      {/* Basic SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aristo Creative Technologies" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Object.keys(jsonLd).length ? jsonLd : defaultJsonLd),
        }}
      />
    </Helmet>
  );
}
