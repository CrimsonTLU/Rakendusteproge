import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Divider, FormControl, TextField } from "@mui/material"

export default function Todo() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Divider>Add To-Do</Divider>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl>
            <TextField
              value={formValue.title}
              inputRef={titleRef}
              onChange={e => handleFormChange(e)}
              required
              id="title"
              name="title"
              label="Title"
              autoComplete="none"
              type="text"
              margin="dense"
            />
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={et}
            >
              <DatePicker
                id="date"
                name="date"
                label="Date"
                invalidDateMessage="Date error"
                inputFormat="DD.MM.YYYY"
                value={formValue.date}
                inputRef={dateRef}
                onChange={e => handleFormChange(e)}
                renderInput={params => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              value={formValue.importance}
              inputRef={importanceRef}
              onChange={e => handleFormChange(e)}
              id="importance"
              name="importance"
              label="Importance"
              autoComplete="none"
              type="text"
              margin="dense"
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              margin="normal"
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
