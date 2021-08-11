import Head from "next/head"
import React, { Component } from "react"

import styles from "../styles/home/main.module.scss"

export default class Home extends Component
{
  constructor(props) {
    super(props)
  }
  render() 
  {
    return (
      <div className={styles.homepageContainer}>
        <Head>
          <title>Beranda | Rombax</title>
          <meta name="keywords" content="Rombax Family Blog" />
        </Head>

        <h1>Home</h1>
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
}