import useOctokit from "../../hooks/useOctokit";
import { useEffect, useState } from "react";

type IssueCard = {
  no: number;
  title: string;
  author: string;
  date: string;
  comments: number;
  id: string;
};

const useIssueList = () => {
  const octokit = useOctokit();
  const [issues, setIssue] = useState<IssueCard[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollRatio =
        (window.scrollY + window.innerHeight) / document.body.clientHeight;
      if (scrollRatio >= 0.8) {
        setPage((prev) => prev + 1);
      }
    });
  }, [setPage]);

  useEffect(() => {
    octokit.rest.issues
      .listForRepo({
        owner: "angular",
        repo: "angular-cli",
        sort: "comments",
        state: "open",
        page,
      })
      .then((response) => {
        setIssue((prev) => [
          ...prev,
          ...response.data.map((issue) => ({
            no: issue.number,
            title: issue.title,
            author: issue.user?.login || "",
            date: issue.created_at,
            comments: issue.comments,
            id: `${issue.id}-${new Date().getTime()}`,
          })),
        ]);
      });
  }, [octokit, page]);

  return { issues };
};

export default useIssueList;
