import Nav from "./Nav"
import Footer from "./Footer"

import styles from "../styles/layout.module.scss"

export default function Layout({children})
{
    return(
        <div id="root">
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}