import React from "react"
import styles from "../../../styles/members/main.module.scss"

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://127.0.0.1:3000/api/members/${context.params.id}`)
  const member = await res.json()

  return {
    props: {
      member: member[0]
    }
  }
}

export default function Member({ member }) {
  return(
    <div className={styles.membersItem}>
      <h1 className={styles.membersItemTitle}>{member.name}</h1>
      <p>{member.address}</p>
    </div>
  )
}