import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "700px",
    minHeight: "100px",
    position: "absolute",
    right: 0,
    left: 0,
    top: "80px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "10px",
    border: ".5px solid grey",
    marginBottom: "50px",
  },
  postBar: {
    maxWidth: "300px",
    padding: "10px",
    marginBottom: "20px",
  },
  commentBar: {
    width: "95%",
    height: "300px",
    border: "1px solid grey",
    marginBottom: "20px",
    overflow: "auto",
  },
  input: {
    width: "95%",
    minHeight: "50px",
  },
}));
