import Image from "next/image";
import styles from "./page.module.css";
import Button from "../../ui/Button/page";

export default function NewPatientOffer() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Image
                    src="https://www.gentledental.com/themes/custom/gentledentaldptheme/images/new-patients-bg.jpg"
                    alt="Welcoming new patients offer"
                    fill
                    priority
                    className={styles.bgImage}
                />
                <div className={styles.content}>

                    {/*left-content*/}
                    <div className={styles.left}>
                        <h2>Welcoming<br></br>
                            New Patients</h2>
                        <p>
                            We're proud to always welcome patients into our practices. Whether you're new to town, need to restart your dental care, or are looking for a more convenient dentist, our New Patient Offer is a great introduction to our practice. New patients receive an exam, all necessary x-rays, a cleaning, and a personalized treatment plan for $79.
                        </p>
                    </div>

                    {/*right-content*/}
                    <div className={styles.right}>
                        <div className={styles.wrapper}>
                            <div className={styles.lhsWrap}>
                                <sup>$</sup>
                                <h3 className={styles.count}>79</h3>
                            </div>

                            <div className={styles.rhsWrap}>
                                <p>
                                    EXAM <br />
                                    X-RAYS <br />
                                    CLEANING <br />
                                    TREATMENT PLAN
                                </p>
                            </div>

                            <p className={styles.subtitle}>A $400+ VALUE</p>
                            <div className={styles.primaryCta}>
                                <Button text="LEARN MORE" href="#" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className={styles.bottomButton}>
                <Button text="VIEW ALL OFFERS" href="#" />
            </div>
        </section>
    );
}
