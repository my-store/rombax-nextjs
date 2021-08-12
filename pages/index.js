import Head from "next/head"
import React, { Component } from "react"
import styles from "../styles/home/main.module.scss"
import Loading from "./templates/loading"

export default class Home extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      _isLoading: true
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({_isLoading: false}), 500)
  }
  render() {
    return (
      <div className={styles.homepageContainer}>
        <Head>
          <title>Beranda | Rombax</title>
          <meta name="keywords" content="Rombax Family Blog" />
        </Head>

        {this.state._isLoading ? <Loading /> : null}

        <h1>Home</h1>
        <p>Rombax Family | Homepage</p>
      </div>
    )
  }
}