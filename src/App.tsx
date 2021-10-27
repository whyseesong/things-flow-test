import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Octokit } from "octokit";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { OctokitContext } from "./contexts/OctokitContext";

function App() {
  const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const auth = "**";

  return (
    <OctokitContext.Provider value={new Octokit({ auth })}>
      <BrowserRouter>
        <AppWrapper>
          <Link to="/">
            <Header />
          </Link>
          <Switch>
            <Route exact path={"/"}>
                <Link to='/1'>1</Link>
                <Link to='/2'>2</Link>
                <Link to='/3'>3</Link>
            </Route>
            <Route path={"/:no"} children={<div>page</div>} />
          </Switch>
        </AppWrapper>
      </BrowserRouter>
    </OctokitContext.Provider>
  );
}

export default App;
