export function SeoJsonLd({ data, id = "seo-jsonld" }) {
  const entries = (Array.isArray(data) ? data : [data]).filter(Boolean);

  if (!entries.length) {
    return null;
  }

  return entries.map((entry, index) => (
    <script
      key={`${id}-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
    />
  ));
}
