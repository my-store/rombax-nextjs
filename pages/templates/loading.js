import Loading from "react-loading"
import React from "react"

export default function Loader() 
{
  return(
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Loading type="bars" color="#165473" width={50} height={50} />
    </div>
  )
}
