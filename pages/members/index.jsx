import React, { Component } from "react"
import Loading from "../templates/loading"
import styles from "../../styles/members/main.module.scss"
import Link from "next/link"

const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export const getStaticProps = async () => 
{
  const members = await DB.asyncFind({}, [['limit', 100]])

  return {
    props: {
      members: members,
    },
  }
}

export default class Members extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      _isLoading: true,
    }
  }
  componentDidMount() {
    this.setState({
      _isLoading: false,
      members: this.props.members,
    })
  }
  render() 
  {
    if (this.state._isLoading) {
      return <Loading />
    }
    else {
      return (
        <div className={styles.membersItemContainer}>
          {
            this.state.members.length > 0 ?
              this.state.members.map((data) => {
                return (
                  <div className={styles.membersItem} key={data._id}>
                    <Link href="/members/[id]" as={`/members/${data._id}`}>
                      <a>
                        <h1 className={styles.membersItemTitle}>{data.name}</h1>
                        <p>{data.address}</p>
                      </a>
                    </Link>
                  </div>
                )
              })
            : <p className={styles.emptyData}>Masih kosong.</p>
          }
        </div>
      )
    }
  }
}
