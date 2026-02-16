import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Wrapper>
      <Hero>
        <div className="slogan">
          <h1>興樺德興業有限公司</h1>
          <p>在耐用與環保之間，找到最好的平衡</p>
          <p>專業粉體塗裝｜無溶劑製程｜穩定品質 | 值得信賴</p>
          <div className="bg-cover">
            <img src={new URL('@/assets/print.png', import.meta.url).href} style={{ width: '100%' }} />
          </div>
        </div>
        <div className="image">
          <img src="https://picsum.photos/1920/1080/?random=1" />
        </div>
      </Hero>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.section`
  width: 100%;
  height: 60vh;
  padding: calc(var(--navbar-height) + var(--base-padding)) var(--base-padding) var(--base-padding);
  margin-top: calc(var(--navbar-height) * -1);
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  background: linear-gradient(0deg, #fff 50%, transparent 50%);

  &::before {
    content: '';
    width: 150%;
    height: 90%;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(5deg);
    transform-origin: top;
    background: var(--primary-color);
    pointer-events: none;
  }

  & > .slogan {
    width: 90%;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 20%;
    z-index: 1;
    transform: translateX(-50%);
    padding: var(--base-padding);
    text-align: center;

    & h1 {
      font-size: 1.75rem;
      font-weight: 900;
      letter-spacing: 0.25rem;
      margin-bottom: 1.5rem;
    }

    & p {
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    & .bg-cover {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scaleX(1.2);
      z-index: -1;
      opacity: 0.3;
      filter: contrast(0.5);
    }
  }

  & > .image {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
    }

    & > img,
    & > video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-left: auto;
    }
  }

  @media (min-width: 576px) {
    height: 100vh;

    & > .slogan {
      width: fit-content;
      left: 10%;
      transform: translateX(0%);

      & > h1 {
        font-size: 3rem;
      }

      & > p {
        font-size: 1.25rem;
      }

      & > .bg-cover {
        transform: translate(-50%, -45%) scaleX(1.5);
      }
    }
    & > .image {
      width: 80%;
      height: 90%;
    }
  }
`;

export default Home;
