export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_CHENNAI = [
  "Adyar",
  "Velachery",
  "Anna Nagar",
  "T. Nagar",
  "Tambaram",
  "Porur",
  "Madipakkam",
  "Thiruvanmiyur",
  "Mylapore",
  "Nungambakkam",
  "Sholinganallur",
  "Medavakkam",
  "Chromepet",
  "Perungudi",
  "Pallikaranai",
  "Guindy",
  "Kodambakkam",
  "K.K. Nagar",
  "Ashok Nagar",
  "Vadapalani",
];

export const CITIES_ANDHRA_PRADESH = CITIES_CHENNAI; // Backwards compatibility alias

export const ALL_18_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Nets",
  "Sports Nets",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Balcony Invisible Grills",
  "Window Invisible Grills",
  "Staircase Invisible Grills",
  "Custom Invisible Grills",
  "Ceiling Cloth Hangers",
  "Balcony Cloth Hangers",
  "Wall Mounted Cloth Hangers",
  "Pull Down Cloth Hangers",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ram Enterprises",
    "url": "https://ramenterpriseschennai.com",
    "logo": "https://ramenterpriseschennai.com/images/logo/ram-enterprises-logo-light.svg",
    "image": "https://ramenterpriseschennai.com/images/og-image.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 90305 05683",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 90309 05683",
        "contactType": "technical support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Telugu", "Hindi"],
      },
    ],
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_CHENNAI;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `https://ramenterpriseschennai.com/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `Ram Enterprises - ${areaName}` : "Ram Enterprises",
    "url": areaName
      ? `https://ramenterpriseschennai.com/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : "https://ramenterpriseschennai.com",
    "telephone": "+91 90305 05683",
    "alternatePhone": "+91 90309 05683",
    "email": "info.ramenterpriseschennai@gmail.com",
    "image": "https://ramenterpriseschennai.com/images/og-image.webp",
    "logo": "https://ramenterpriseschennai.com/images/logo/ram-enterprises-logo-light.svg",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": areaName ? `${areaName}, Chennai, Tamil Nadu` : "Chennai, Tamil Nadu",
      "addressLocality": areaName || "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707,
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Chennai, Tamil Nadu`,
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Hangers Installation Services",
      "itemListElement": ALL_18_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Ram Enterprises",
          },
        },
        "position": idx + 1,
      })),
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "385",
      "bestRating": "5",
      "worstRating": "1",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
    "sameAs": [
      "https://facebook.com/ramenterpriseschennai",
      "https://instagram.com/ramenterpriseschennai",
      "https://wa.me/919030505683",
    ],
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} Installation in Chennai`,
    "description": `Top-rated ${serviceName.toLowerCase()} and certified installation by Ram Enterprises across Chennai, Tamil Nadu.`,
    "brand": {
      "@type": "Brand",
      "name": "Ram Enterprises",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15",
      "highPrice": "180",
      "offerCount": "100+",
      "availability": "https://schema.org/InStock",
      "url": `https://ramenterpriseschennai.com/services/${serviceSlug}`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.95",
      "reviewCount": "240",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ram Enterprises",
    "url": "https://ramenterpriseschennai.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ramenterpriseschennai.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `https://ramenterpriseschennai.com${crumb.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": categoryName || serviceName,
    "name": serviceName,
    "description": description || `${serviceName} by Ram Enterprises in Chennai, Tamil Nadu.`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Ram Enterprises",
      "telephone": "+91 90305 05683",
      "email": "info.ramenterpriseschennai@gmail.com",
      "url": "https://ramenterpriseschennai.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chennai, Tamil Nadu",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": "Chennai, Tamil Nadu",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "180",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateServiceAreaSchema(serviceName: string, areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": `${serviceName} in ${areaName}, Chennai`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Ram Enterprises",
      "telephone": "+91 90305 05683",
      "email": "info.ramenterpriseschennai@gmail.com",
      "url": "https://ramenterpriseschennai.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${areaName}, Chennai, Tamil Nadu`,
        "addressLocality": areaName,
        "addressRegion": "Tamil Nadu",
        "postalCode": "600001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": `${areaName}, Chennai, Tamil Nadu`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export const generateFAQPageSchema = generateFAQSchema;

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ram Enterprises",
    "url": "https://ramenterpriseschennai.com",
    "image": "https://ramenterpriseschennai.com/images/og-image.webp",
    "telephone": "+91 90305 05683",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chennai, Tamil Nadu",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "385",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateArticleSchema(
  articleOrTitle:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        datePublished: string;
        authorName?: string;
        image?: string;
      },
  description?: string,
  image?: string,
  datePublished?: string
) {
  if (typeof articleOrTitle === "object") {
    const article = articleOrTitle;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "mainEntityOfPage": article.slug ? `https://ramenterpriseschennai.com/blog/${article.slug}` : "https://ramenterpriseschennai.com",
      "datePublished": article.datePublished,
      "dateModified": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || "Ram Enterprises",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ram Enterprises",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ramenterpriseschennai.com/images/logo/ram-enterprises-logo-light.svg",
        },
      },
      "image": article.image || "https://ramenterpriseschennai.com/images/og-image.webp",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleOrTitle,
    "description": description || "",
    "mainEntityOfPage": "https://ramenterpriseschennai.com",
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Ram Enterprises",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ram Enterprises",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ramenterpriseschennai.com/images/logo/ram-enterprises-logo-light.svg",
      },
    },
    "image": image || "https://ramenterpriseschennai.com/images/og-image.webp",
  };
}
