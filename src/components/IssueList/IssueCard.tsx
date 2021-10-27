import React from "react";
import styled from "styled-components";

type IssueCardType = {
  no: number;
  title: string;
  author: string;
  date: string;
  comments: number;
};

const IssueCard = (issue: IssueCardType) => {
  const IssueCardWrapper = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    border: 1px solid black;
  `;
  const IssueCardContents = styled.div`
    width: 60vw;
  `;
  const IssueCardComment = styled.div`
    width: 10vw;
    text-align: center;
  `;

  return (
    <IssueCardWrapper>
      <IssueCardContents>
        <h3>
          <label>#{issue.no}</label>
          <label> {issue.title}</label>
        </h3>
        <p>
          <label>작성자 : {issue.author}</label>
          <label> 작성일 : {issue.date}</label>
        </p>
      </IssueCardContents>
      <IssueCardComment>
        <label>코멘트 : {issue.comments}</label>
      </IssueCardComment>
    </IssueCardWrapper>
  );
};

export default IssueCard;
