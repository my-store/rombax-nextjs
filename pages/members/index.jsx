import React, { Component } from "react"
import Loading from "../templates/loading"
import styles from "../../styles/members/main.module.scss"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/members")
  const members = await res.json()

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
  render() {
    if (this.state._isLoading) {
      return <Loading />
    } 
    else {
      return(
        <div className={styles.membersItemContainer}>
          {this.state.members.map((data, index) => {
            return (
              <Link href="/members/[id]" as={`/members/${data._id}`}>
                <div className={styles.membersItem}>
                  <h1 className={styles.membersItemTitle}>{data.name}</h1>
                  <p key={index}>{data.address}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )
    }
  }
}
