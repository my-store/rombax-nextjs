import Head from 'next/head'
import styles from "../../styles/contact/main.module.scss"

export default function Contact() 
{
  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Rombax | Contact</title>
        <meta name="keywords" content="Rombax Family Blog" />
      </Head>

      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis mattis nunc sed tellus scelerisque, sed sodales ante pharetra. 
        Integer bibendum imperdiet ipsum, vitae efficitur dolor pharetra a. 
        Donec leo erat, porta a pharetra nec, sagittis dictum risus. 
        Praesent tincidunt fermentum libero, facilisis efficitur sem auctor ut. 
        Donec eros lacus, facilisis vitae velit at, aliquam semper orci. 
        Aliquam sapien felis, ultrices vel condimentum at, sodales sit amet elit. 
        Pellentesque ac venenatis velit. 
      </p>
    </div>
  )
}