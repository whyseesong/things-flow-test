import React from "react";
import styled from "styled-components";
import useIssue from "./useIssue";

const IssuePage = () => {
  const { issue } = useIssue();

  const IssuePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const PageHeaderSection = styled.section`
    display: flex;
    width: 80vw;
    justify-content: space-around;
    align-items: center;
  `;

  const ProfileImage = styled.img.attrs({
    src: issue.profileUrl,
    rel: "profileImage",
  })`
    width: 100px;
    height: 100px;
  `;

  return (
    <IssuePageWrapper>
      <PageHeaderSection>
        <ProfileImage />
        <div>
          <h3>
            <label>#{issue.no}</label>
            <label> {issue.title}</label>
          </h3>
          <p>
            <label>작성자 : {issue.author}</label>
            <label>작성일 : {issue.date}</label>
          </p>
        </div>
        <div>코멘트 : {issue.comments}</div>
      </PageHeaderSection>
      <section>
        {issue.contents}
      </section>
    </IssuePageWrapper>
  );
};

export default IssuePage;
