export async function getHomePage(lang: "EN" | "ES") {
  const res = await fetch(
    "https://dev-gd-headless-cms.pantheonsite.io/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetHomePage($language: LanguageCodeEnum!) {
            pages(where: { language: $language }) {
              nodes {
                slug
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
          }
        `,
        variables: {
          language: lang,
        },
      }),
      cache: "no-store",
    }
  );

  const json = await res.json();


  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    return null;
  }


  const pages = json?.data?.pages?.nodes;

  if (!pages || pages.length === 0) {
    console.warn(`No pages found for language: ${lang}`);
    return null;
  }

 
  const homePage = pages.find(
    (page: any) => page.slug === "home" || page.slug === "home-2"
  );

  if (!homePage) {
    console.warn(`Home page not found for language: ${lang}`);
    return null;
  }

 
  return homePage.bannerSection ?? null;
}
