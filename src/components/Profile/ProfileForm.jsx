import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PostCard from "./PostCard/PostCartd";
import { useStyles } from "./profileform.modul";

export default function ProfileForm(props) {
  const classes = useStyles();
  const myPosts = props.state.myPosts.map((elm) => {
    return (
      <PostCard
        title={elm.title}
        text={elm.text}
        delete={() => props.deletePost(elm.id)}
        postId={elm.id}
      />
    );
  });
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {props.state.name + " " + props.state.surname}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => (window.location = "/addPosts")}
        className={classes.btn}
      >
        AddPosts
      </Button>
      <div className={classes.posts}>{myPosts}</div>
    </div>
  );
}
