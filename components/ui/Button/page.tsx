
import Styles  from "./page.module.css";
import Link from "next/link";
export default function Button({ text, href }: { text: string; href: string }) {
    return (
      <Link className={Styles.cta} href={href}>{text}</Link>
    )
}