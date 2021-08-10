import Head from 'next/head'
import styles from "../../styles/about/main.module.scss"

export default function About()
{
    return(
      <div className={styles.aboutContainer}>
        <Head>
          <title>Rombax | About</title>
          <meta name="keywords" content="Rombax Family Blog" />
        </Head>
  
        <h1>About</h1>
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