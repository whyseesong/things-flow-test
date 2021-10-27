import useOctokit from "../../hooks/useOctokit";
import { useEffect, useRef, useState } from "react";

type IssueType = {
  no: number;
  title: string;
  author: string;
  date: string;
  comments: number;
  id: string;
};

const useIssueList = () => {
  const octokit = useOctokit();
  const [issues, setIssue] = useState<IssueType[]>([]);
  const [page, setPage] = useState(1);
  const throttle = useRef(false);

  useEffect(() => {
    const fetchTrigger = () => {
      const scrollRatio =
        (window.scrollY + window.innerHeight) / document.body.clientHeight;
      if (scrollRatio >= 0.8 && !throttle.current) {
        setPage((prev) => prev + 1);

        // 요청 트리거 시 throttle true로 변경. 3초후에 원복
        throttle.current = true;
        setTimeout(() => {
          throttle.current = false;
        }, 3);
      }
    };
    document.addEventListener("scroll", fetchTrigger);

    return () => {
      document.removeEventListener("scroll", fetchTrigger);
    };
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
