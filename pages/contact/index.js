import React, { useState, useEffect } from "react"
import Head from "next/head"
import styles from "../../styles/contact/main.module.scss"
import Loading from "../templates/loading"

export default function Contact() 
{
  const [loading, setLoading] = useState(true)
  useEffect(() => setTimeout(() => setLoading(false), 500))

  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Rombax | Contact</title>
        <meta name="keywords" content="Rombax Family Blog" />
      </Head>

      {loading ? <Loading /> : null}

      <h1>Contact</h1>
      <p>Rombax Family | Contact</p>
    </div>
  )
}