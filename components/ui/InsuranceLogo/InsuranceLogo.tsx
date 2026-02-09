import Image from "next/image";
import styles from "./InsuranceLogo.module.css";

type Props = {
  src: string;
  alt: string;
};

export default function InsuranceLogo({ src, alt }: Props) {
  if (!src) return null;

  return (
    <div className={styles.logoCard}>
      <Image
        src={src}
        alt={alt}
        width={180}
        height={80}
        className={styles.logo}
      />
    </div>
  );
}
