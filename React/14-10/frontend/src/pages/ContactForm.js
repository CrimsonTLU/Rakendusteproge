import { Box, TextField, Typography, Button, FormControl } from "@mui/material"
import React, { useState, useMemo, useRef } from "react"
import PropTypes from "prop-types"
import { useEffect } from "react"

const ContactForm = () => {
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

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
  }, [name])
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email))
  }, [email])
  useEffect(() => {
    localStorage.setItem("message", JSON.stringify(message))
  }, [message])

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
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
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        ></TextField>
        <Typography variant="h3">Email</Typography>
        <TextField
          label="Email"
          value={email}
          inputRef={emailRef}
          onChange={e => setEmail(e.target.value)}
        ></TextField>
        <Typography variant="h3">Message</Typography>
        <TextField
          label="Write your message"
          value={message}
          inputRef={messageRef}
          onChange={e => setName(e.target.value)}
        ></TextField>
        <Button
          color="success"
          variant="contained"
        >
          Send
        </Button>
      </FormControl>
    </form>
  )
}

export default ContactForm
