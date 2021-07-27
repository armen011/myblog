import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./commentmsg.modul";

export default function CommentMsg(props) {
  const classes = useStyles();
  const classname = props.isMine ? classes.flexEnd : classes.flexStart;
  return (
    <div className={classes.root + " " + classname}>
      <Paper elevation={3} className={classes.msg}>
        <Typography variant="h5" className={classes.msgHead}>
          {props.user}
        </Typography>
        <Typography variant="p">{props.text} </Typography>
      </Paper>
    </div>
  );
}
