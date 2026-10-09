interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Emits a schema.org script tag. Data is our own content, never user input. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
