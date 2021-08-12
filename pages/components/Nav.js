import Link from "next/link"
import styles from "../../styles/templates/nav/main.module.scss"

export default function Nav()
{
    return(
        <nav className={styles.nav}>
            <h1 className={styles.navTitle}>Rombax Family</h1>
            <div className={styles.navLinks}>
                <Link href="/">
                    <a>Homepage</a>
                </Link>
                <Link href="/members">
                    <a>Members</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </nav>
    )
}