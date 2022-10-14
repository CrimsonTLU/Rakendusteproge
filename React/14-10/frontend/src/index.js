import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Main from "./pages/Main"
import Table from "./pages/Table"
import ContactForm from "./pages/ContactForm"
import Crud from "./pages/Crud"
import Login from "./pages/Login"
import Todo from "./pages/Todo"
import NoPage from "./pages/NoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="todo"
            element={<Todo />}
          />
          <Route
            path="main"
            element={<Main />}
          />
          <Route
            path="table"
            element={<Table />}
          />
          <Route
            path="contactform"
            element={<ContactForm />}
          />
          <Route
            path="crud"
            element={<Crud />}
          />
          <Route
            path="*"
            element={<NoPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
