export const revalidate = 3600;

export function GET() {
  const token =
    process.env.GOOGLE_SITE_VERIFICATION_FILE_CONTENT ??
    "google-site-verification: pending-verification";

  return new Response(token, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
}
