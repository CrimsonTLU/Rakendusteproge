import React from "react"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: "25px",
        height: "20vh"
      }}
    >
      <Link to={`/`}>Main</Link>
      <Link to={`/table`}>Table</Link>
      <Link to={`/contactform`}>Contact Form</Link>
      <Link to={`/users`}>Users</Link>
      <Link to={`/todo`}>Todo</Link>
    </Box>
  )
}

export default Header
