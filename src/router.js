import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import TopicList from "./Components/TopicList/TopicList";
import Post from "./Components/Post/Post.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={TopicList} />
    <Router path="/post/:id" component={Post} />
  </Switch>
);
