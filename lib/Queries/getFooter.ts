import { gql } from "../graphql/client";

/**
 * Footer data query. WordPress backend should provide:
 * - A menu with slug "footer" (or "Footer") for main footer links (Locations, Dental Services, etc.)
 * - A menu with slug "footer-legal" (or "Footer Legal") for bottom links (Sitemap, Privacy Policy, etc.)
 * Optional: theme/ACF options for partner logos, social URLs, and copyright text can be added later.
 */
export const FOOTER_QUERY = gql`
  query GetFooter {
    menus(first: 20) {
      nodes {
        id
        name
        slug
        menuItems(first: 50) {
          nodes {
            id
            label
            url
            parentId
          }
        }
      }
    }
  }
`;

export interface FooterMenuItem {
  id: string;
  label: string;
  url: string;
  parentId: string | null;
}

export interface FooterMenuNode {
  id: string;
  name: string;
  slug: string;
  menuItems: { nodes: FooterMenuItem[] };
}

export interface FooterQueryData {
  menus: { nodes: FooterMenuNode[] };
}

/** Partner/association logo for footer (can later come from ACF options or CPT) */
export interface FooterPartner {
  logo: string;
  alt: string;
  url?: string;
}

/** Social link (can later come from theme/ACF options) */
export interface FooterSocialLink {
  platform: "facebook" | "twitter" | "youtube";
  url: string;
}

/** Default partner logos – replace with WordPress media URLs when ACF/options are available */
export const DEFAULT_FOOTER_PARTNERS: FooterPartner[] = [
  { logo: "/images/ada-footer-logo.png", alt: "ADA" },
  { logo: "/images/invisalign-logo.png", alt: "Invisalign" },
  { logo: "/images/mds-footer-logos.png", alt: "MDS" },
];

/** Default social links – replace with WordPress theme options when available */
export const DEFAULT_FOOTER_SOCIAL: FooterSocialLink[] = [
  { platform: "facebook", url: "https://www.facebook.com/GentleDental" },
  { platform: "twitter", url: "https://twitter.com/gentledentalne" },
  { platform: "youtube", url: "https://www.youtube.com/user/GentleDental1" },
];
