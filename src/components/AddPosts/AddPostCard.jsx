import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "../Login/login.modul";

export default function AddPostCard() {
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
        <div className={classes.inputs}>
          <TextField required id="standard-required" label="Title" />
          <TextField
            id="standard-multiline-flexible"
            label="Your text here"
            multiline
            maxRows={4}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" endIcon={<AddIcon />}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
