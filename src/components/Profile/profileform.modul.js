import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "30px",
    marginBottom: "20px",
  },
  info: {
    fontSize: "18px",
  },
  root: {
    width: "900px",
    flexGrow: 1,
    width: "450px",
    display: "flex",
    flexDirection: "column",

    padding: "10px",
  },

  btn: {
    width: "140px",
    marginBottom: "20px",
  },
  posts: {
    width: "1000px",
    height: "300px",
    minHeight: "300px",
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
  },
}));
