export async function getHomePage() {
  const res = await fetch(
    "https://dev-gd-headless-cms.pantheonsite.io/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetHomePage {
            page(id: "/", idType: URI) {
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

            insurances {
              nodes {
                id
                title
                insuranceFields {
                  logo
                }
              }
            }
          }
        `,
      }),
      cache: "no-store",
    }
  );

  const json = await res.json();

  return {
    banner: json?.data?.page?.bannerSection ?? null,
    insurances: json?.data?.insurances?.nodes ?? [],
  };
}
