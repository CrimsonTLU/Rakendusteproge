import { Box, TextField, Typography, Button } from "@mui/material"
import React, { useState, useMemo, useRef } from "react"
import PropTypes from "prop-types"
import { useEffect } from "react"

const Login = props => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const user = useMemo(() => ({ name }), [])

  const nameRef = useRef(null)
  const PasswordRef = useRef(null)
}

export default Login
