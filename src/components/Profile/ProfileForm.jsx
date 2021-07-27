import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function ProfileForm(props) {
  return (
    <div>
      <Typography variant="h3">
        {props.state.name + " " + props.state.surname}
      </Typography>
      <Typography variant="h6">{"Email `" + props.state.email}</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => (window.location = "/addPosts")}
      >
        AddPosts
      </Button>
    </div>
  );
}
