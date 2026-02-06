import Image from "next/image";
import styles from "./page.module.css";
import Button from "../../ui/Button/page";

const services = [
  {
    title: "Preventive Care",
    description:
      "Routine dental checkups are important for a healthy and confident smile.",
    image: "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg",
    link: "#",
  },
  {
    title: "Emergency Dental Care",
    description:
      "Routine dental checkups are important for a healthy and confident smile.",
    image: "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg",
    link: "#",
  },
  {
    title: "Orthodontics",
    description:
      "Routine dental checkups are important for a healthy and confident smile.",
    image: "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg",
    link: "#",
  },
  {
    title: "Oral Surgery",
    description:
      "Routine dental checkups are important for a healthy and confident smile.",
    image: "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg",
    link: "#",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Routine dental checkups are important for a healthy and confident smile.",
    image: "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg",
    link: "#",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Routine dental checkups are important for a healthy and confident smile.",
    image: "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg",
    link: "#",
  },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>   
          <div className={styles.content}>
            <h2>Our Services</h2>
            <p>
              Gentle Dental dentists provide award-winning care. From cleanings and exams to more specialized services such as root canals and crowns, we provide all dental services under one roof saving you time and money. All Gentle Dental practices offer orthodontics for both adults and children including traditional braces and Invisalign® clear aligners.
            </p>
            <Button text="VIEW ALL SERVICES" href="#" />
          </div>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <a key={index} href={service.link} className={styles.card}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
                <div className={styles.baseOverlay}>
                  <span>{service.title}</span>
                </div>
                {service.description && (
                  <div className={styles.hoverOverlay}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className={styles.learnMore}>LEARN MORE →</span>
                  </div>
                )}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
