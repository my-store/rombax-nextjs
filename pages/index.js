import Head from "next/head"
import React, { Component } from "react"

export default class Home extends Component
{
  constructor(props) {
    super(props)
  }
  render() 
  {
    return (
      <div>
        <Head>
          <title>Rombax | Home</title>
          <meta name="keywords" content="Rombax Family Blog" />
        </Head>

        <h1>Home</h1>
      </div>
    )
  }
}