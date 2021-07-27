import React from "react";
import Header from "../Header/Header";
import { getLocalStorage, setLocalStorage } from "../Helper/helper";
import ProfileForm from "./ProfileForm";

export class Profile extends React.Component {
  state = {
    name: "",
    surname: "",
    myPosts: [],
  };
  handleDelet = (id) => {
    const posts = this.state.myPosts.filter((elm) => elm.id !== id);
    this.setState({
      myPosts: posts,
    });
    setLocalStorage("posts", posts);
  };

  componentDidMount() {
    const users = getLocalStorage("users");
    const posts = getLocalStorage("posts");
    let user = users.filter(
      (elm) => elm.id === parseInt(this.props.match.params.id)
    );
    let myPost = posts.filter(
      (elm) => elm.userId === parseInt(this.props.match.params.id)
    );
    if (user.length > 0) {
      user = user[0];
      this.setState({
        name: user.name,
        surname: user.surname,
        email: user.email,
        myPosts: myPost,
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <ProfileForm state={this.state} deletePost={this.handleDelet} />
      </div>
    );
  }
}
