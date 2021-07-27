import React from "react";
import { getSessionStorage } from "../Helper/helper";
import AddPostCard from "./AddPostCard";

export class AddPosts extends React.Component {
  state = {
    userId: "",
    title: "",
    text: "",
  };
  componentDidMount() {
    if (getSessionStorage("id")) {
      this.setState({
        userId: getSessionStorage("id"),
      });
    } else {
      window.location = "/login";
    }
  }
  render() {
    return <AddPostCard />;
  }
}
