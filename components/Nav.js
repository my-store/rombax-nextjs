import Link from "next/link"
import styles from "../styles/templates/nav/main.module.scss"

export default function Nav()
{
    return(
        <nav className={styles.nav}>
            <h1 className={styles.navTitle}>Rombax Family</h1>
            <div>
                <Link className={styles.navLinks} href="/">Homepage</Link>
                <Link className={styles.navLinks} href="/members">Members</Link>
                <Link className={styles.navLinks} href="/contact">Contact</Link>
                <Link className={styles.navLinks} href="/about">About</Link>
            </div>
        </nav>
    )
}