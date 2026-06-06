import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pravesh-theta.vercel.app/";

  const routes = [
    "",
    "/about",
    "/admission",
    "/aicte",
    "/BBA",
    "/BCA",
    "/BTECH",
    "/MBA",
    "/ITI",
    "/POLYTECHNIC",
    "/courses",
    "/placement",
    "/career",
    "/contact",
    "/vision",
    "/secretary",
    "/procedure",
    "/brochure",
    "/guest-lectures",
    "/guestLecture",
    "/industry-visits",
    "/technical-training",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}