import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: "33px",
    fontWeight: "600",
    flexGrow: 1,
    cursor: "pointer",
  },
}));
