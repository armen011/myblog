import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "60px",
    display: "flex",
    boxSizing: "border-box",
    padding: "7px",
  },
  flexEnd: {
    justifyContent: "flex-end",
    paddingRight: "10px",
  },
  flexStart: {
    justifyContent: "flex-start",
    paddingLeft: "10px",
  },
  msgHead: {
    fontSize: "12px",
    fontWeight: "600",
  },
  msg: {
    fontSize: "15px",
    padding: "10px",
    maxWidth: "45%",
    overflow: "hidden",
  },
}));
