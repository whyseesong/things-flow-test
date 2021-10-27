import React  from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Octokit } from "octokit";
import styled from "styled-components";
import IssueList from "./components/IssueList/IssueList";
import IssuePage from "./components/IssuePage/IssuePage";
import Header from "./components/Header/Header";
import {OctokitContext} from "./contexts/OctokitContext";

function App() {
  const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const auth = process.env.REACT_APP_GITHUB_PERSONAL_API_KEY;

  return (
    <OctokitContext.Provider value={new Octokit({ auth })}>
      <BrowserRouter>
        <AppWrapper>
          <Link to="/">
            <Header />
          </Link>
          <Switch>
            <Route exact path={"/"} children={<IssueList />} />
            <Route path={"/:no"} children={<IssuePage />} />
          </Switch>
        </AppWrapper>
      </BrowserRouter>
    </OctokitContext.Provider>
  );
}

export default App;
