# SEO after deploying to Cloudflare Pages

The canonical domain is https://imakshat.com. The build exports robots.txt, sitemap.xml, and 404.html. Only the homepage belongs in the sitemap: the legacy section routes redirect to homepage anchors. Cloudflare processes public/_redirects after deployment; a plain local static server does not apply these rules.

After deployment:

1. Check /robots.txt and /sitemap.xml return 200, and an unknown path returns 404.
2. Check /about, /projects, /experience, /skills, and /contact return 301 with their homepage section in the Location header. Check /resume redirects to /resume.pdf.
3. In Google Search Console, verify the imakshat.com domain property using the TXT record Google provides, then submit https://imakshat.com/sitemap.xml. Inspect the homepage using the live URL test.
4. Review Cloudflare Security events if the live URL test reports a blocked request. Allow verified search crawlers where appropriate; keep other protections enabled.
5. If the pages.dev address or other domains also serve the site, use Cloudflare's domain redirect settings to send them to https://imakshat.com. The canonical tag is already present.
6. Run PageSpeed Insights against the deployed homepage. Look at mobile LCP, CLS, and INP; the local build does not establish a production speed score.

The contact form retains the existing FormSubmit endpoint. It uses native required/email validation and only confirms delivery on the provider's page. No test messages were sent.
