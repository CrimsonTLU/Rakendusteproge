import React, { useState } from "react"
import Auth from "../backend/Auth"
import AuthContext from "../backend/contexts/userContext.js"

const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [authstatus, setauthstatus] = useState(false)
  const login = () => {
    setauthstatus(true)
  }
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  )
}
export default App
