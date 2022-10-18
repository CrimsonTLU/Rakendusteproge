import React from "react"
import { Box, Typography } from "@mui/material"
import Header from "../components/Header"

const Todo = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "80vh"
        }}
      >
        <Typography>Todo list</Typography>
      </Box>
    </>
  )
}

export default Todo
