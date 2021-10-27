import useOctokit from "../../hooks/useOctokit";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type IssuePageType = {
    no: number;
    title: string;
    author: string;
    date: string;
    comments: number;
    profileUrl: string;
    contents: string;
};

const useIssue = () => {
  const octokit = useOctokit();
  const { no } = useParams<{ no: string }>();

  const [issue, setIssue] = useState<IssuePageType>({
    no: 0,
    title: "",
    author: "",
    date: "",
    comments: 0,
    profileUrl: "",
    contents: "",
  });
  useEffect(() => {
    octokit.rest.issues
      .get({
        owner: "angular",
        repo: "angular-cli",
        issue_number: parseInt(no),
      })
      .then((response) => {
        const issue = response.data;
        setIssue({
          no: issue.number,
          title: issue.title,
          author: issue.user?.login || "",
          date: issue.created_at,
          comments: issue.comments,
          profileUrl: issue.assignee?.avatar_url || "",
          contents: issue.body || "",
        });
      });
  }, [no, octokit]);

  return { issue };
};

export default useIssue;
