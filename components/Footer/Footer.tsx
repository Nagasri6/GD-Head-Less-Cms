"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { graphqlClient } from "@/lib/graphql/client";
import {
  FOOTER_QUERY,
  type FooterQueryData,
  type FooterMenuItem,
  type FooterPartner,
  type FooterSocialLink,
  DEFAULT_FOOTER_PARTNERS,
  DEFAULT_FOOTER_SOCIAL,
} from "@/lib/Queries/getFooter";
import styles from "./Footer.module.css";
import { ChevronUp, Facebook, Youtube } from "lucide-react";

// Utility to check external URLs
function isExternal(url: string) {
  return /^https?:\/\//.test(url);
}

// Component for a single link
function FooterLink({ item }: { item: FooterMenuItem }) {
  if (isExternal(item.url)) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }
  return <Link href={item.url}>{item.label}</Link>;
}

// Icon mapping
function SocialIcon({ platform }: { platform: FooterSocialLink["platform"] }) {
  switch (platform) {
    case "facebook":
      return <Facebook size={18} />;
    case "youtube":
      return <Youtube size={18} />;
    default:
      return null;
  }
}

export default function Footer() {
  const [mainMenu, setMainMenu] = useState<FooterMenuItem[]>([]);
  const [legalMenu, setLegalMenu] = useState<FooterMenuItem[]>([]);
  const [partners] = useState<FooterPartner[]>(DEFAULT_FOOTER_PARTNERS);
  const [socialLinks] = useState<FooterSocialLink[]>(DEFAULT_FOOTER_SOCIAL);

  // Default links if fetch fails
  const defaultMainLinks: FooterMenuItem[] = [
    { id: "1", label: "Locations", url: "/dental-offices", parentId: null },
    { id: "2", label: "Dental Services", url: "/dental-services", parentId: null },
    { id: "3", label: "Payment Options", url: "/dental-payment-plans", parentId: null },
    { id: "4", label: "Patient Resources", url: "/patient-resources", parentId: null },
    { id: "5", label: "About Us", url: "/about-us", parentId: null },
    { id: "6", label: "Health & Safety", url: "/health-safety", parentId: null },
  ];

  const defaultLegalLinks: FooterMenuItem[] = [
    { id: "l1", label: "Sitemap", url: "/sitemap", parentId: null },
    { id: "l2", label: "Privacy Policy", url: "/privacy-policy", parentId: null },
    { id: "l3", label: "Disclaimer", url: "/disclaimer", parentId: null },
    { id: "l4", label: "Terms of Use", url: "/terms-of-use", parentId: null },

  ];

  // Fetch menus from GraphQL
  useEffect(() => {
    async function loadMenus() {
      try {
        const data = await graphqlClient.request<FooterQueryData>(FOOTER_QUERY);
        const menus = data?.menus?.nodes ?? [];

        const footerMain = menus.find(
          (m) => m.slug === "footer" || m.name?.toLowerCase() === "footer"
        );
        const footerLegal = menus.find(
          (m) => m.slug === "footer-legal" || m.name?.toLowerCase() === "footer legal"
        );

        if (footerMain?.menuItems?.nodes) {
          setMainMenu(footerMain.menuItems.nodes.filter((i) => !i.parentId));
        }
        if (footerLegal?.menuItems?.nodes) {
          setLegalMenu(footerLegal.menuItems.nodes.filter((i) => !i.parentId));
        }
      } catch (err) {
        console.warn("Could not fetch footer menus:", err);
      }
    }

    loadMenus();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();
  const mainLinksToShow = mainMenu.length ? mainMenu : defaultMainLinks;
  const legalLinksToShow = legalMenu.length ? legalMenu : defaultLegalLinks;

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>
        {/* Main menu */}
        <nav className={styles.menuSection}>
          <ul className={styles.linkList}>
            {mainLinksToShow.map((link) => (
              <li key={link.id}>
                <FooterLink item={link} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Partners */}
        <section className={styles.partnerSection}>
          <div className={styles.partnerSectionContent}>

            <h3 className={styles.partnerSectionTitle}>Partners and Associations</h3>
            <div className={styles.partnerList}>
              {partners.map((p, idx) =>
                p.url ? (
                  <a key={idx} href={p.url} target="_blank" rel="noopener noreferrer">
                    <img src={p.logo} alt={p.alt} />
                  </a>
                ) : (
                  <img key={idx} src={p.logo} alt={p.alt} />
                )
              )}
            </div>

          </div>
        </section>

        {/* Social links */}
        <section className={styles.socialSection}>
          <h3>Follow Us</h3>
          <ul className={styles.socialList}>
            {socialLinks.map((s, idx) => (
              <li key={idx}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  <SocialIcon platform={s.platform} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer bottom */}
        <div className={styles.footerBottom}>
          <p>©{year} Gentle Dental – All rights reserved.</p>
          <p className={styles.footerBottomText}>Gentle Dental is a 42 North Dental Care, PLLC practice and is owned and operated by licensed dentists.</p>
          <ul className={styles.legalList}>
            {legalLinksToShow.map((link) => (
              <li key={link.id}>
                <FooterLink item={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
