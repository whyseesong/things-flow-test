import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useIssueList from "./useIssueList";
import AdBanner from "../AdBanner/AdBanner";

const IssueList = () => {
  const { issues } = useIssueList();

  const IssueCard = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    border: 1px solid black;
  `;
  const IssueCardContents = styled.div`
    width: 60vw;
  `;
  const IssueCardComment = styled.div`
    width: 10vw;
    //align-items: center;
    //justify-content: center;
  `;

  return (
    <section>
      <ul>
        {issues.slice(0, 5).map((issue) => (
          <li key={issue.id}>
            <Link to={`/${issue.no}`}>
              <IssueCard>
                <IssueCardContents>
                  <h3>
                    <label>#{issue.no}</label>
                    <label>{issue.title}</label>
                  </h3>
                  <p>
                    <label>{issue.author}</label>
                    <label>{issue.date}</label>
                  </p>
                </IssueCardContents>
                <IssueCardComment>{issue.comments}</IssueCardComment>
              </IssueCard>
            </Link>
          </li>
        ))}
        <li key='banner'>
            <AdBanner/>
        </li>
          {issues.slice(5).map((issue) => (
              <li key={issue.id}>
                  <Link to={`/${issue.no}`}>
                      <IssueCard>
                          <IssueCardContents>
                              <h3>
                                  <label>#{issue.no}</label>
                                  <label>{issue.title}</label>
                              </h3>
                              <p>
                                  <label>{issue.author}</label>
                                  <label>{issue.date}</label>
                              </p>
                          </IssueCardContents>
                          <IssueCardComment>{issue.comments}</IssueCardComment>
                      </IssueCard>
                  </Link>
              </li>
          ))}
      </ul>
    </section>
  );
};

export default IssueList;
