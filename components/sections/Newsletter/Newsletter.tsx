import Image from "next/image";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section id="Newsletter" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.newsletterWrap}>
          <div className={styles.blockWrap}>
            <div className={styles.mediaWrap}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/know-the-eight-warning-signs.png"
                  alt="Newsletter"
                  width={250}
                  height={250}
                />
              </div>

              <div className={styles.textWrap}>
                <h3 className={styles.desktopTitle}>Download Now</h3>
                <h4>Know the 8 Warning Signs of Gum Disease</h4>
                <p>
                  It’s never too early to protect your smile. Download to learn more!
                </p>
              </div>
            </div>
            <div className={styles.formWrap}>
              <form className={styles.form}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                />
                <button type="submit">Download</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
