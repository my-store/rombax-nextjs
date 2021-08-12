import React, { useEffect, useState } from "react"
import styles from "../../styles/members/main.module.scss"
import Head from "next/head"
import Loading from "../templates/loading"
import { server } from "../../config/server"

export default function Member({ member }) 
{
  const [loading, setLoading] = useState(true)
  useEffect(() => setTimeout(() => setLoading(false), 500))

  return(
    <div>
      <Head>
        <title>{member.name}</title>
        <meta name="keywords" content={`Data ${member.name}`} />
      </Head>

      {loading ? <Loading /> : null}

      <div className={styles.membersItem}>
        <h1 className={styles.membersItemTitle}>{member.name}</h1>
        <p>{member.address}</p>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => 
{
  const request = await fetch(`${server}/api/members`)
  const members = await request.json()
  const paths = members.map(_mbr => {
    return {
      params: { id: _mbr.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => 
{
  const request = await fetch(`${server}/api/members/${params.id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "User-Agent": "*"
    }
  })
  const member = await request.json()

  return {
    props: {
      member: member
    }
  }
}