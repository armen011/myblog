import React from "react";
import Header from "../Header/Header";
import { getLocalStorage } from "../Helper/helper";
import HomePageForm from "./HomePageForm";

export default class Login extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    const posts = getLocalStorage("posts");
    this.setState({
      posts: posts,
    });
  }
  writeComment = (id) => {
    window.location = "/comments/post_id=" + id;
  };

  render() {
    return (
      <div>
        <Header />
        <HomePageForm
          posts={this.state.posts}
          writeComment={this.writeComment}
        />
      </div>
    );
  }
}
