import React from 'react';
import styled from 'styled-components';

function Hero() {
  return (
    <Wrapper>
      <div className="content">
        <h1>興樺德興業有限公司</h1>
        <p>
          <font>在耐用與環保之間，找到最好的平衡</font>
          <font>專業粉體塗裝｜無溶劑製程｜穩定品質 | 值得信賴</font>
        </p>
        <img src={new URL('@/assets/paint.png', import.meta.url).href} className="bg-paint" />
      </div>
      <VideoWrapper>
        <video src={new URL('@/assets/banner.mp4', import.meta.url).href} autoPlay muted playsInline loop />
      </VideoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 60vh;
  padding: var(--base-padding);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 85%);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  & > .content {
    width: 100%;
    max-width: 600px;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    & > h1 {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: 0.25rem;
      margin-bottom: 1.5rem;
    }

    & > p {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & > .bg-paint {
      width: 100%;
      object-fit: contain;
      filter: opacity(0.3);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scaleX(1.2);
      z-index: -1;
    }
  }

  @media (min-width: 576px) {
    height: calc(100vh - var(--navbar-height));
    justify-content: end;
    align-items: center;

    & > .content {
      top: initial;
      bottom: 20%;
      left: 10%;
      transform: translateX(0%);

      & > h1 {
        font-size: 3rem;
      }

      & > p {
        font-size: 1.25rem;
      }

      & > .bg-paint {
        transform: translate(-50%, -50%) scaleX(1.5);
      }
    }
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 576px) {
    width: 80%;
    height: 90%;
  }
`;

export default Hero;
