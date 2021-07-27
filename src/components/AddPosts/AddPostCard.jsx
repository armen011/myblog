import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./addposts.modul";

export default function AddPostCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Create your post
        </Typography>
        <TextField
          required
          id="standard-required"
          label="Title"
          className={classes.smallInp}
          value={props.state.title}
          onChange={(e) => props.metod("title", e.target.value)}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Your text here"
          multiline
          maxRows={4}
          className={classes.bigInp}
          value={props.state.text}
          onChange={(e) => props.metod("text", e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddIcon />}
          onClick={props.submit}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
