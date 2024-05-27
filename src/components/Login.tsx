import React from "react"
import { navigate } from "gatsby"
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event:any) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event:any) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <View title="Log In">
        <Form
          handleUpdate={(e:any) => this.handleUpdate(e)}
          handleSubmit={(e:any) => this.handleSubmit(e)}
        />
      </View>
    )
  }
}

export default Login