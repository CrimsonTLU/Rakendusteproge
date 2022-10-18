import React, { useState, createContext } from "react"
import Box from "@mui/material/Box"

import "./App.css"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"
import { Button } from "@mui/material"

export const UserContext = createContext()

const App = () => {
  const [show, setShow] = useState(true)
  const [currentUser, setCurrentUser] = useState("Chris")

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "25px",
          height: "100vh"
        }}
      >
        <Counter />
        {show && <Toggle />}
        <Button
          color="error"
          variant="contained"
          onClick={() => setShow(!show)}
        >
          Toggle toggle
        </Button>
      </Box>
    </UserContext.Provider>
  )
}

export default App
