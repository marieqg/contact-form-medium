import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
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
