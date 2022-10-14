import { Box, TextField, Typography, Button } from "@mui/material"
import React, { useState, useMemo, useRef } from "react"
import PropTypes from "prop-types"
import { useEffect } from "react"

const Form = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const user = useMemo(() => ({ name }), [])

  useEffect(() => {
    console.log({ user })
  }, [user])

  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log({ name, email, message })

    console.log({
      emailRef: emailRef.current.value,
      messageRef: messageRef.current.value
    })
  }
}

const ContactForm = () => {
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
      <Typography variant="h2">Contact Form</Typography>
      <Typography variant="h3">Name</Typography>
      <TextField></TextField>
      <Typography variant="h3">Email</Typography>
      <TextField></TextField>
      <Typography variant="h3">Message</Typography>
      <TextField></TextField>
      <Button
        color="success"
        variant="contained"
      >
        Send
      </Button>
    </Box>
  )
}

export default ContactForm
