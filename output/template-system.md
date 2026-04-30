# Urban AC SEO Template System

## Coverage

- Services: 6
- Locations: 19
- Total Pages Generated: 120

## URL Formula

- Main service pages: `/service-vadodara/`
- Area pages: `/service-location/`

## Section Template Used On Every Page

1. H1 with service and location
2. 100-150 word localized intro
3. Service details with included tasks and common problems
4. Types of service
5. Why choose us with response time and local coverage
6. Internal links to the main service page and 3-5 nearby locations
7. Booking process
8. Localized FAQs
9. Repeated CTA with call and WhatsApp details

## How Uniqueness Is Created

- Intro templates rotate by seed and service/location pairing.
- Problem lists, benefit phrasing, and detail paragraphs change by service type.
- Response time, landmark references, and nearby links change by location.
- Meta titles and descriptions are varied across both city pages and area pages.

## Business Info Source

- Brand: Urban AC
- Phone: +91 98765 43210
- Address: Vadodara, Gujarat 390001
- Service Hours: 7:00 AM to 10:00 PM
- Note: Replace the address and phone with your exact NAP before publishing if needed.

## Files

- `output/url-list.txt` contains every generated URL.
- `output/page-index.json` contains metadata and internal-link structure.
- `output/pages/*.md` contains all generated pages.
- `output/sample-pages.md` contains three fully written sample pages for review.

## Extend This System

1. Add a new service or location in `src/seo/config.mjs`.
2. Define nearby areas, response time, and one local context line.
3. Run `npm run generate:seo` to rebuild the full system.