import PostCard from "./PostCard/PostCard";
import { useStyles } from "./homepage.modul";

export default function HomePageForm(props) {
  const classes = useStyles();
  const posts = props.posts.map((elm) => (
    <PostCard
      title={elm.title}
      text={elm.text}
      metod={() => props.writeComment(elm.id)}
    />
  ));
  return <div className={classes.root}>{posts}</div>;
}
