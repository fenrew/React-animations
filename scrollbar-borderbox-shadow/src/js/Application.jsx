import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainContainer from "./Main-page/MainContainer";
import NoScroll from "./No-scroll/NoScroll";

const Application = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/no-scroll" component={NoScroll} />
        <Route exact path="/" component={MainContainer} />
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Application;
