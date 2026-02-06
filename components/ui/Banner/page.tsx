import Image from "next/image";
import styles from "./page.module.css";
import Button from "../Button/page";

type HeroProps = {
  title: string;
  subTitle: string;
  heroImage: string;
  ctaText: string;
};

export default function Hero({ title, subTitle, heroImage, ctaText }: HeroProps) {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.bgWrapper}>
        <Image 
          src={heroImage} 
          alt={title} 
          fill 
          priority 
          className={styles.bgImage}
        />
        {/* Adds a slight tint to make the white text easier to read */}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subTitle}</p>

        <div className={styles.searchBar}>
          <div className={styles.inputWrapper}>
            <span className={styles.locationIcon}>Icon</span> 
            <input 
              className={styles.input} 
              placeholder="Search by City, State or ZIP code" 
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button text={ctaText} href="/search" />
          </div>
        </div>
        
      </div>
    </section>
  );
}