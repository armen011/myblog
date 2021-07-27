import React from "react";
import Paper from "@material-ui/core/Paper";
import { TextField, Typography } from "@material-ui/core";
import { useStyles } from "./commentform.modul";
import CommentMsg from "./CommentMsg/CommentMsg";
import { useEffect } from "react";
import { getUserBiId } from "../Helper/helper";
export default function CommentForm(props) {
  useEffect(() => {
    let element = document.getElementById("div");
    element.scrollTop = element.scrollHeight;
  }, [props.comments]);
  const classes = useStyles();
  console.log(props.comments);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.postBar}>
        <Typography variant="h5">{props.title} </Typography>
        <Typography variant="p">{props.text} </Typography>
      </Paper>
      <div className={classes.commentBar} id="div">
        {props.comments.map((elm) => {
          return (
            <CommentMsg
              isMine={elm.isMine}
              text={elm.text}
              user={getUserBiId(elm.userId)}
            />
          );
        })}
      </div>
      <TextField
        id="outlined-textarea"
        label="Write your comment"
        multiline
        value={props.commentText}
        variant="outlined"
        className={classes.input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            props.submit();
          }
        }}
        onChange={(e) => {
          props.metod(e.target.value);
          let element = document.getElementById("div");
          element.scrollTop = element.scrollHeight;
        }}
      />
    </div>
  );
}
