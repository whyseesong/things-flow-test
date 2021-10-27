import { createContext } from "react";
import { Octokit } from "octokit";

export const OctokitContext = createContext({} as Octokit);
