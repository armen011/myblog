import React from "react";
import { getLocalStorage } from "../Helper/helper";
import ProfileForm from "./ProfileForm";

export class Profile extends React.Component {
  state = {
    name: "",
    surname: "",
    myPosts: [],
  };

  componentDidMount() {
    const users = getLocalStorage("users");
    console.log(this.props.match.params.id);
    let user = users.filter((elm) => elm.id == this.props.match.params.id);
    if (user.length > 0) {
      user = user[0];
      this.setState({
        name: user.name,
        surname: user.surname,
        email: user.email,
      });
    }
  }
  render() {
    return <ProfileForm state={this.state} />;
  }
}
