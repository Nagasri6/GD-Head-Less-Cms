import Image from "next/image";
import styles from "./page.module.css";
export default function Card({title, icon, description}: {title: string, icon: string, description: string}) {
    return (
        <>
            <div className={styles.card}>
                <h2>{title}</h2>
                <Image src={icon} alt={title} width={50} height={50} />
                <p >{description}</p>
            </div>
        </>
    )
}