import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    width: "450px",
    fontSize: "30px",
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
    width: "450px",
    position: "fixed",
    top: "80px",
    right: "0",
    left: "0",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "10px",
  },

  big: {
    width: "425px",
    marginBottom: "20px",
  },
}));
