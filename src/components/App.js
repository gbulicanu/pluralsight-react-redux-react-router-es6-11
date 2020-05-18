import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import SiteHeader from "./common/SiteHeader";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage"

function App() {
  return (
    <div className="container-fluid">
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
