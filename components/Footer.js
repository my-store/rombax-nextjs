import styles from "../styles/templates/footer/main.module.scss"

export default function Footer()
{
    return(
        <div className={styles.footer}>
            <div className={styles.footerContact}>
                <h1 className={styles.footerTitle}>Contact</h1>
                <p className={styles.footerLink}>asdasd</p>
            </div>
            <div className={styles.footerAbout}>
                <h1 className={styles.footerTitle}>About</h1>
            </div>
            <div className={styles.footerSocial}>
                <h1 className={styles.footerTitle}>Social</h1>
            </div>
        </div>
    )
}