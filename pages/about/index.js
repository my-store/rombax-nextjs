import React, { useState, useEffect } from "react"
import Head from "next/head"
import styles from "../../styles/about/main.module.scss"
import Loading from "../templates/loading"

export default function About() 
{
  const [loading, setLoading] = useState(true)
  useEffect(() => setTimeout(() => setLoading(false), 500))

  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>Rombax | About</title>
        <meta name="keywords" content="Rombax Family Blog" />
      </Head>

      {loading ? <Loading /> : null}

      <h1>About</h1>
      <p>Rombax Family | About</p>
    </div>
  )
}
