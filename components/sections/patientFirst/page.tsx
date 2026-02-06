import styles from "./page.module.css";
import Image from "next/image";
import Stats from "../../ui/Stats/page";
import Button from "../../ui/Button/page";

export default function PatientFirst() {
    const imgUrl = 
        "https://www.gentledental.com/sites/default/files/2020-03/gentle-dental-patients-come-first.jpg";

    return (
        <section className={styles.patientFirst}>
            <div className={styles.containerRow}>
                <div className={styles.leftImgWrapper}>
                    <Image
                        src={imgUrl}
                        alt="Patients Come First"
                        fill
                        className={styles.leftImg}
                    />
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.blockWrapper}>
                        <h2>Patients Come First</h2>
                        <p>
                            Healthy, confident smiles for life is our mission at Gentle Dental. Since 1971, we have been leading the way in dental care. Our founding dentists believed that taking care of your health should fit your busy schedule. That’s why they built dental practices in convenient locations with convenient hours. We’re here when you need us.
                        </p>
                        <p>
                            Patients receive award-winning dental care from dentists who are graduates from top dental schools. Along with general dentistry, each location has specialty services which allows for high quality, coordinated care.
                        </p>
                        <p>
                            All Gentle Dentals are newly built or renovated and outfitted with the latest in dental technology including <a href="/resources/articles/are-dental-x-rays-safe">digital low radiation x-rays</a>, 3D scanning, intraoral cameras, and even CERC same-day crowns at select locations.
                        </p>

                        <div className={styles.statsWrapper}>
                            <Stats  />

                        </div>
                        

                        <div className={styles.btnWrapper}>
                            <Button text="LEARN MORE" href="/learn-more" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}