import React from "react";
import Header from "../Header/Header";
import {
  genarateData,
  genarateId,
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
} from "../Helper/helper";
import CommentForm from "./CommentForm";

export class Comments extends React.Component {
  state = {
    userId: "",
    postId: "",
    postTitle: "",
    postText: "",
    postComments: [],
    commentText: "",
  };

  handleChangeCommentText = (value) => {
    this.setState({
      commentText: value,
    });
  };
  handleSubmit = () => {
    let comments = [];
    if (getLocalStorage("comments")) {
      comments = getLocalStorage("comments");
      comments.push({
        id: genarateId(comments),
        postId: this.state.postId,
        userId: this.state.userId,
        text: this.state.commentText,
        data: genarateData(),
      });
      setLocalStorage("comments", comments);
    } else {
      comments.push({
        id: genarateId(comments),
        postId: this.state.postId,
        userId: this.state.userId,
        text: this.state.commentText,
        data: genarateData(),
      });
      setLocalStorage("comments", comments);
    }
    const currentComments = comments
      .filter((elm) => elm.postId === this.state.postId)
      .map((elm) => {
        if (elm.userId === this.state.userId) {
          elm.isMine = true;
          return elm;
        } else {
          elm.isMine = false;
          return elm;
        }
      });

    this.setState({
      postComments: currentComments,
      commentText: "",
    });
  };

  componentDidMount() {
    const userId = parseInt(getSessionStorage("id"));
    const postId = parseInt(this.props.match.params.id);
    const posts = getLocalStorage("posts");
    const currentPost = posts.filter((elm) => elm.id === postId)[0];
    let currentPostComments = [];
    if (getLocalStorage("comments")) {
      const comments = getLocalStorage("comments");
      currentPostComments = comments
        .filter((elm) => elm.postId === postId)
        .map((elm) => {
          if (elm.userId === userId) {
            elm.isMine = true;
            return elm;
          } else {
            elm.isMine = false;
            return elm;
          }
        });
    }
    if (getSessionStorage("id")) {
      this.setState({
        userId: userId,
        postId: postId,
        postTitle: currentPost.title,
        postText: currentPost.text,
        postComments: currentPostComments,
      });
    } else {
      window.location = "/login";
    }
  }
  render() {
    return (
      <div>
        <Header />
        <CommentForm
          title={this.state.postTitle}
          text={this.state.postText}
          comments={this.state.postComments}
          commentText={this.state.commentText}
          metod={this.handleChangeCommentText}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}
