import { Box, TextField, Typography, Button } from "@mui/material"

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
      <Typography variant="h3">Address</Typography>
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
