import React from "react"
import styles from "../../../styles/members/main.module.scss"

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

const deleteMember = async _memberID =>
{
  // await DB.asyncRemove({_id: _memberID})
}

export default function Member({ member }) 
{
  return(
    <div className={styles.membersItem}>
      <h1 className={styles.membersItemTitle}>{member.name}</h1>
      <p>{member.address}</p>
    </div>
  )
}