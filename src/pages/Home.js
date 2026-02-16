import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimatedNumber({ end, duration = 2 }) {
  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: end,
        duration: duration,
        ease: 'power3.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  }, [end, duration]);

  return (
    <span ref={ref} className="num">
      0
    </span>
  );
}

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
          <video
            src={new URL('@/assets/banner.mp4', import.meta.url).href}
            style={{ width: '100%' }}
            autoplay=""
            muted=""
            playsinline=""
            loop=""
          ></video>
        </div>
      </Hero>

      <Intro>
        <div className="container">
          <Row gutter={[48, 48]} wrap align="middle" justify="space-between">
            <Col xs={{ span: 24, order: 2 }} md={{ span: 10, order: 0 }} lg={10}>
              <div className="pic-area">
                <img src="https://picsum.photos/1920/1080/?random=2" />
                <img src="https://picsum.photos/1920/1080/?random=3" />
              </div>
            </Col>
            <Col xs={24} md={14} lg={12}>
              <div className="content">
                <h2>新北專業烤漆廠 – 興樺德粉體塗裝</h2>
                <p>
                  我們始終以創新與品質為核心，持續精進專業技術與製程管理，確保每一項服務都穩定可靠。
                  <br />
                  在快速變動的市場中，我們以客戶需求為出發點，專注於細節與效率，不只完成任務，更致力於為客戶創造長期價值。
                  <br />
                  我們不只是服務供應商，而是值得信賴、能並肩前行的合作夥伴。
                </p>
              </div>
              <div className="status">
                <InfoCard>
                  <AnimatedNumber end={new Date().getFullYear() - 1984} />
                  <span className="title">年經驗</span>
                </InfoCard>
                <InfoCard>
                  <AnimatedNumber end={670} />
                  <span className="title">坪廠房</span>
                </InfoCard>
              </div>
            </Col>
          </Row>
        </div>
      </Intro>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  section {
    padding: 90px 0;
  }
`;

const Hero = styled.section`
  width: 100%;
  height: 60vh;
  padding: calc(var(--navbar-height) + var(--base-padding)) var(--base-padding) var(--base-padding) !important;
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

const Intro = styled.section`
  background: #fff;

  & .pic-area {
    --gap: 30px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    img {
      width: 90%;
      aspect-ratio: 2/1;
      object-fit: cover;
      display: block;
      border-radius: 10rem;

      &:last-child {
        margin-left: auto;
      }
    }
  }

  & .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    h2 {
      margin-bottom: 24px;
      font-size: 2rem;
      font-weight: 500;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #444;
      margin-bottom: 48px;
    }
  }

  & .status {
    width: 100%;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 576px) {
    & .pic-area {
      flex-direction: row;

      img {
        width: calc(50% - var(--gap) / 2);
        aspect-ratio: 1/2;

        &:first-child {
          margin-bottom: 30%;
        }

        &:last-child {
          margin-top: 30%;
        }
      }
    }
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;

  .num {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1;
    position: relative;
    color: var(--primary-color);
    padding-right: 12px;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 5px;
      height: 60%;
      width: 1px;
      background-color: #e7e7e7;
      transform: rotate(15deg);
      transform-origin: bottom center;
    }
  }

  .title {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    & > .num {
      font-size: 4rem;
    }

    & > .title {
      font-size: 1.5rem;
    }
  }
`;

export default Home;
