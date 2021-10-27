import React from "react";
import { Link } from "react-router-dom";
import useIssueList from "./useIssueList";
import AdBanner from "../AdBanner/AdBanner";
import IssueCard from "./IssueCard";
import Loading from "../Loading/Loading";

const IssueList = () => {
  const { issues } = useIssueList();

  return (
    <section>
      {issues.length === 0 ? (
        <Loading />
      ) : (
        <ul>
          {issues.slice(0, 5).map((issue) => (
            <li key={issue.id}>
              <Link to={`/${issue.no}`}>
                <IssueCard {...issue} />
              </Link>
            </li>
          ))}
          <AdBanner />
          {issues.slice(5).map((issue) => (
            <li key={issue.id}>
              <Link to={`/${issue.no}`}>
                <IssueCard {...issue} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default IssueList;
