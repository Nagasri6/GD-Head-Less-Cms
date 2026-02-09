"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Button from "../ui/Button/page";
import { graphqlClient } from "@/lib/graphql/client";
import { MENUS_QUERY } from "@/lib/Queries/menus";

interface MenuItem {
  id: string;
  label: string;
  url: string;
  parentId: string | null;
  childItems?: {
    nodes: MenuItem[];
  };
}

interface MenuData {
  menus: {
    nodes: Array<{
      name: string;
      menuItems: {
        nodes: MenuItem[];
      };
    }>;
  };
}

export default function Header() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const data = await graphqlClient.request<MenuData>(MENUS_QUERY);
      setMenuItems(data.menus.nodes[0].menuItems.nodes);
    };

    fetchMenus();
  }, []);
  const router = useRouter();
  const pathname = usePathname();

  // get current language from URL
  const currentLang = pathname?.split("/")[1] || "en";

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;

    // remove existing language from path
    const pathWithoutLang = pathname.replace(/^\/(en|es)/, "");

    router.push(`/${newLang}${pathWithoutLang}`);
  };


  const topLevelItems = menuItems.filter(
    (item) => item.parentId === null
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            width={270}
            height={70}
            src="https://www.gentledental.com/themes/custom/gentledentaldptheme/logo.svg"
            alt="Gentle Dental"
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        {topLevelItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <Link href={item.url}>{item.label}</Link>

            {item.childItems?.nodes.length ? (
              <div className={styles.megaMenu}>
                <div className={styles.megaGrid}>
                  {item.childItems.nodes.map((child) => (
                    <div key={child.id} className={styles.megaColumn}>
                      <Link
                        href={child.url}
                        className={styles.columnTitle}
                      >
                        {child.label}
                      </Link>

                      {child.childItems?.nodes.length ? (
                        <ul>
                          {child.childItems.nodes.map((grand) => (
                            <li key={grand.id}>
                              <Link href={grand.url}>{grand.label}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}

      </nav>

      <div className={styles.rightActions}>
        <div className={styles.languageWrapper}>
          <Globe size={19} />

          <select
            value={currentLang}
            onChange={handleLanguageChange}
            className={styles.langSelect}
            aria-label="Select language"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>

        {/* <Button text="Book Now" href={`/${currentLang}/book-now`} /> */}
      </div>



      <Button text="Book Now" href="/book-now" />
    </header>
  );
}
