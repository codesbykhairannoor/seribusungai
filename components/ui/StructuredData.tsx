import React from "react";
import { DestinationSummary } from "@/content/types";

interface StructuredDataProps {
  destination: DestinationSummary;
}

export default function StructuredData({ destination }: StructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": destination.name.id,
    "description": destination.shortDescription.id,
    "image": destination.heroImage.src,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Banjarmasin",
      "addressRegion": "Kalimantan Selatan",
      "addressCountry": "ID"
    },
    "openingHours": destination.operatingHours.id
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
