import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import { Profile } from "./Profile/Profile";
import { AddPosts } from "./AddPosts/AddPosts";
import { Comments } from "./Comments/Comments";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/profile/id=:id" component={Profile} />
      <Route path="/addPosts" component={AddPosts} />
      <Route path="/comments/post_id=:id" component={Comments} />
    </BrowserRouter>
  );
}
