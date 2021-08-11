import React, { Component } from "react"
import Loading from "../templates/loading"
import styles from "../../styles/members/main.module.scss"
import Link from "next/link"
import Head from "next/head"

import { server } from "../../config/server"

async function loadMembers() {
  const data = await fetch(`${server}/api/members`)
  const members = await data.json()
  return members
}

export const getStaticProps = async () => {
  const members = await loadMembers()
  return {
    props: {
      members: members.data,
    },
  }
}

export default class Members extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      _isLoading: true,
      _isLogin: false,
      _newMemberFormActive: false,
    }
  }
  componentDidMount() {
    this.setState({
      _isLoading: false,
      members: this.props.members,
    })
  }
  insertMember = async () =>
  {
    const member = {
      name: document.getElementById("new-member-name").value,
      address: document.getElementById("new-member-address").value,
      phone: document.getElementById("new-member-phone").value,
      gender: document.getElementById("new-member-gender").value,
    }
    const request = await fetch(`${server}/api/members`, {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: JSON.stringify(member)
    })
    const response = await request.json()
    // Reset form
    document.getElementById("new-member-form").reset()
    // Push new data at first
    this.setState({
      members: [response.data].concat(this.state.members),
      _newMemberFormActive: false
    })
  }
  removeMember = async _member =>
  {
    await fetch(`${server}/api/members/delete`, {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: JSON.stringify({
        data: _member
      })
    })
    .then(res => res.json())
    .then( async result => {
      const members = await loadMembers()
      this.setState({members: members.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    if (this.state._isLoading) {
      return <Loading />
    } else {
      return (
        <div>
          <Head>
            <title>Members | Rombax</title>
            <meta name="keywords" content="Data member Rombax Family Brebes" />
          </Head>

          <div className={`${styles.newMemberForm} ${this.state._newMemberFormActive ? styles.newMemberFormActive : null}`}>
            <form id="new-member-form" onSubmit={e => e.preventDefault()} action="" method="POST" encType="multipart/form-data">
              <h1 className={styles.newMemberTitle}>Member Baru</h1>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" id="new-member-name" />
              </div>
              <div className={styles.formGroup}>
                <label>Address</label>
                <input type="text" id="new-member-address" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="text" id="new-member-phone" />
              </div>
              <div className={styles.formGroup}>
                <label>Gender</label>
                <input type="text" id="new-member-gender" />
              </div>
              <div className={styles.formGroup} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <button type="button" onClick={() => this.insertMember()}>Simpan</button>
                <button type="button" onClick={() => this.setState({_newMemberFormActive: false})}>Batal</button>
              </div>
            </form>
          </div>
          <div className={styles.newMemberBtn} title="Member baru" onClick={() => this.setState({_newMemberFormActive: true})}></div>

          <div className={styles.membersItemContainer}>
            {this.state.members.length > 0 ? (
              this.state.members.map((data) => {
                return (
                  <div className={styles.membersItem} key={data._id}>
                    <Link href="/members/[id]" as={`/members/${data._id}`}>
                      <a>
                        <div className={styles.membersPhoto}></div>
                        <div className={styles.membersDetail}>
                          <h1 className={styles.membersItemTitle}>{data.name}</h1>
                          <p>{data.address}</p>
                        </div>
                      </a>
                    </Link>
                    {
                      this.state._isLogin == false ? 
                        <button onClick={() => this.removeMember(data)}>Hapus</button> 
                      : null
                    }
                  </div>
                )
              })
            ) : (
              <p className={styles.emptyData}>Masih kosong.</p>
            )}
          </div>
        </div>
      )
    }
  }
}
