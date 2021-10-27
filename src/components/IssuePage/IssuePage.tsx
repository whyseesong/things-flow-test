import React from "react";
import styled from "styled-components";
import useIssue from "./useIssue";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Logo from "../Logo/Logo";
import Loading from "../Loading/Loading";

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
    width: 56px;
    height: 56px;
  `;
  const PageContentSection = styled.section`
    width: 80vw;
  `;
  const HorizontalLine = styled.hr`
    width: 80vw;
  `;

  return issue.no === 0 ? (
    <Loading />
  ) : (
    <IssuePageWrapper>
      <PageHeaderSection>
        {issue.profileUrl === "" ? <Logo /> : <ProfileImage />}
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
      <HorizontalLine />
      <PageContentSection>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issue.contents}
        </ReactMarkdown>
      </PageContentSection>
    </IssuePageWrapper>
  );
};

export default IssuePage;
