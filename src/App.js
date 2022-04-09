import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./route/home.js";
import MyBlogs from "./route/myBlogs.js";
import AddBlog from "./route/addBlog.js";
import Blogs from "./route/blogs.js";
import { useAuthentication } from "./service/authService";

function App() {
  const user = useAuthentication();
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {user ? <Route path="/myBlogs" component={MyBlogs} /> : null}
          {user ? <Route path="/addBlog" component={AddBlog} /> : null}
          {user ? <Route path="/blogs" component={Blogs} /> : null}
        </Switch>
      </Router>
    </>
  );
}
