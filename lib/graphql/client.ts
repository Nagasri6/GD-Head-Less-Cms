import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.WORDPRESS_GRAPHQL_URL || "https://dev-gd-headless-cms.pantheonsite.io/graphql";

export const graphqlClient = new GraphQLClient(endpoint, {
  fetch: (url, options) =>
    fetch(url, { ...options, next: { revalidate: 1 } } as RequestInit),
});

// Export gql for query definitions
export { gql };
