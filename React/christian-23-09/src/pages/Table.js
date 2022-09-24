import * as React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Box from "@mui/material/Box"

const Table = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "left",
        justifyContent: "top",
        flexDirection: "column",
        gap: "25px",
        height: "100vh",
        width: "50vw"
      }}
    >
      <ListItem>
        <ListItemButton>
          <ListItemText>Tere</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText>Hi</ListItemText>
        </ListItemButton>
      </ListItem>
    </Box>
  )
}

export default Table
