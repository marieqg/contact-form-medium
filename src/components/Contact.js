import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const endpoints = {
  contact: "/.netlify/functions/sendEmail",
}
const axios = require("axios")

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value

    this.setState(statesToUpdate)
  }

  handleSubmit = e => {
    let { name, email, message } = this.state
    let data = { name, email, message }
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        this.handleError()
      } else {
        this.handleSuccess()
      }
    })
    e.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      loading: false,
      error: false,
    })
  }

  handleError = msg => {
    this.setState({
      loading: false,
      error: true,
      msg,
    })
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            id="standard-basic"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <TextField
            id="standard-basic"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <TextField
            id="standard-basic"
            label="Message"
            value={this.state.message}
            onChange={this.handleChange}
            name="message"
          />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
