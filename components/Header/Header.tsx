"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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

      <Button text="Book Now" href="/book-now" />
    </header>
  );
}
