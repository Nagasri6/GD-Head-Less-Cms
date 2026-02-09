import styles from "./page.module.css";
import DentalCard from "../../ui/DentalCard/DentalCard";
export const dentistCards = [
  {
    id: 1,
    image: "/images/boston-university-awards.jpg",
    alt: "Dentist",
    description:
      "Dentists at Gentle Dental are graduates of top universities including Harvard, Tufts, Boston University, and UCONN.",
  },
  {
    id: 2,
    image: "/images/top-dentist-home-page.webp",
    alt: "Dentist",
    description:
      "Our dentists participate in continuing education to stay current with the latest dental techniques.",
  },
  {
    id: 3,
    image: "/images/readers-choice-2020.jpg",
    alt: "Dentist",
    description:
      "We focus on patient comfort and use modern technology to deliver excellent care.",
  },
];

export default function DentalCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Gentle Dental Dentists</h2>

        <div className={styles.grid}>
          {dentistCards.map((card) => (
           <DentalCard key={card.id}
              image={card.image}
              alt={card.alt}
              description={card.description}/>
          ))}
        </div>
      </div>
    </section>
  );
}
