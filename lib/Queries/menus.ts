import { gql } from "../graphql/client";

export const MENUS_QUERY = gql`
  query GetMenus {
    menus(first: 10) {
      nodes {
        id
        name
        slug
        menuItems(first: 100) {
          nodes {
            id
            label
            url
            parentId
            childItems(first: 50) {
              nodes {
                id
                label
                url
                parentId
                childItems(first: 50) {
                  nodes {
                    id
                    label
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
