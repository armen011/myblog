import React from "react";
import {
  genarateId,
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  genarateData,
} from "../Helper/helper";
import AddPostCard from "./AddPostCard";
export class AddPosts extends React.Component {
  state = {
    userId: "",
    title: "",
    text: "",
    data: "",
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
  handleChange = (field, value) => {
    if (field === "title") {
      this.setState((prevState) => ({
        title: value,
      }));
    }
    if (field === "text") {
      this.setState((prevState) => ({
        text: value,
      }));
    }
  };
  handleSubmit = () => {
    if (getLocalStorage("posts")) {
      let posts = getLocalStorage("posts");
      posts.push({
        id: genarateId(posts),
        title: this.state.title,
        text: this.state.text,
        userId: this.state.userId,
        data: genarateData(),
      });
      setLocalStorage("posts", posts);
      window.location = "/profile/id=" + this.state.userId;
    } else {
      const posts = [
        {
          id: genarateId([]),
          title: this.state.title,
          text: this.state.text,
          userId: this.state.userId,
        },
      ];
      setLocalStorage("posts", posts);
      window.location = "/profile/id=" + this.state.userId;
    }
  };
  render() {
    return (
      <AddPostCard
        state={this.state}
        metod={this.handleChange}
        submit={this.handleSubmit}
      />
    );
  }
}
