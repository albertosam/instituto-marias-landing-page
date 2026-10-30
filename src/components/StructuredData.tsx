// src/components/StructuredData.tsx
import { organizacao } from "@/content/site";

/** Injeta o JSON-LD tipo NGO no <head>, lendo do arquivo de conteúdo central. */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: organizacao.razaoSocial,
    url: "https://institutomarias.org.br",
    foundingDate: String(organizacao.anoFundacao),
    address: {
      "@type": "PostalAddress",
      streetAddress: organizacao.endereco,
      addressLocality: organizacao.cidadeSede,
      addressRegion: "CE",
      addressCountry: "BR",
    },
    email: organizacao.email,
    sameAs: [organizacao.instagram],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}