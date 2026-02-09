import styles from "./InsurancesAccepted.module.css";
import InsuranceLogo from "@/components/ui/InsuranceLogo/InsuranceLogo";

type Insurance = {
  id: string;
  title: string;
  insuranceFields: {
    logo: string;
  };
};

type Props = {
  insurances: Insurance[];
};

export default function InsurancesAccepted({ insurances }: Props) {
  if (!insurances?.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Insurances Accepted</h2>

        <div className={styles.grid}>
          {insurances.map((item) => (
            <InsuranceLogo
              key={item.id}
              src={item.insuranceFields.logo}
              alt={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
