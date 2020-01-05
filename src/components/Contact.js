import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default class Contact extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Name" />
          <TextField id="standard-basic" label="Email" />
          <TextField id="standard-basic" label="Message" />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
