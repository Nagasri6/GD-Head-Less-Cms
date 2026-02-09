import Image from "next/image";
import styles from "./DentalCard.module.css";

type DentalCardProps = {
  image: string;
  alt: string;
  description: string;
};

export default function DentalCard({ image, alt, description }: DentalCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={image} alt={alt} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <p>{description}</p>
      </div>
    </div>
  );
}
