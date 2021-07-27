import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "375px",
    position: "fixed",
    left: 0,
    right: 0,
    top: "100px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    textAlign: "center",
  },
  smallInp: {
    width: "180px",
    marginBottom: "20px",
  },
  bigInp: {
    width: "350px",
  },
});
