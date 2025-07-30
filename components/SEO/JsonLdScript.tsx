'use client';

import Script from 'next/script';

interface JsonLdScriptProps {
  schema: object | object[];
}

export default function JsonLdScript({ schema }: JsonLdScriptProps) {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(schema) ? schema : [schema]),
      }}
      strategy="afterInteractive"
    />
  );
}