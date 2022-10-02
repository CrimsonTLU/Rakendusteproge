import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "@mui/material"

const Read = props => {
  async function componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json()
    return {
      response
    }
  }
  const [data, showData] = useState("")
  const loadData = response => showData(data + response)

  return (
    <Button
      color="success"
      variant="contained"
      onClick={loadData}
    >
      Loe andmed
    </Button>
  )
}

Read.propTypes = {}

export default Read
