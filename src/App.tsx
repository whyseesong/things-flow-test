import React from "react";

import { Octokit } from "octokit";
import { OctokitContext } from "./contexts/OctokitContext";

function App() {
  const auth = "***";

  return (
    <OctokitContext.Provider value={new Octokit({ auth })}>
      {123}
    </OctokitContext.Provider>
  );
}

export default App;
