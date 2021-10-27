import styled from "styled-components";

const HOMEPAGE_URL = "https://thingsflow.com/ko/home";

const AdBanner = () => {
  const AdBannerWrapper = styled.a.attrs({
    href: HOMEPAGE_URL,
  })`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <AdBannerWrapper>
      <img src="http://placehold.it/500x100?text=ad" alt="ad-banner" />
    </AdBannerWrapper>
  );
};

export default AdBanner;
