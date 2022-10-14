import Read from "../components/Read.js"
import { Box } from "@mui/material"

const Crud = () => {
  return (
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
      <Read />
    </Box>
  )
}
export default Crud
