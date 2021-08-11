import React from "react"
import styles from "../../../styles/members/main.module.scss"
import Head from "next/head"

import { server } from "../../../config/server"

export const getServerSideProps = async (context) => 
{
  const data = await fetch(`${server}/api/members/${context.params.id}`)
  const member = await data.json()

  return {
    props: {
      member: member.data
    }
  }
}

export default function Member({ member }) 
{
  return(
    <div>
      <Head>
        <title>{member.name}</title>
        <meta name="keywords" content={`Data ${member.name}`} />
      </Head>
      <div className={styles.membersItem}>
        <h1 className={styles.membersItemTitle}>{member.name}</h1>
        <p>{member.address}</p>
      </div>
    </div>
  )
}