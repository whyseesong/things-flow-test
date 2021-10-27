import { Octokit } from "octokit";
import { useContext } from "react";
import { OctokitContext } from "../contexts/OctokitContext";

export type OctokitInstance = InstanceType<typeof Octokit>;

const useOctokit = (): OctokitInstance => {
  const octokit = useContext(OctokitContext);
  if (octokit === null) {
    throw new Error("add Octokit Provider!");
  }

  return octokit;
};

export default useOctokit;
