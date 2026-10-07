import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // The other routes are redirects to sections, not separate content pages.
  return [{ url: `${SITE_URL}/` }];
}
