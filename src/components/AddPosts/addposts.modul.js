import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  inputs: {
    width: 275,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "red",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
