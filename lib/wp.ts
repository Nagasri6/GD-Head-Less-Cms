export async function getHomePage() {
  const res = await fetch(
    "https://dev-gd-headless-cms.pantheonsite.io/graphql", // Use your Pantheon URL from env
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetBanner {
            page(id: "home", idType: URI) {
              bannerSection {
                title
                subTitle
                ctaText
                heroImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `
      })
    }
  );

  const json = await res.json();
  // Return the specific bannerSection object
  return json.data.page.bannerSection;
}