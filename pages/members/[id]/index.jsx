import React from "react"
import styles from "../../../styles/members/main.module.scss"
import Head from "next/head"

const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export const getServerSideProps = async (context) => 
{
  const member = await DB.asyncFindOne({_id: context.params.id})

  return {
    props: {
      member: member
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