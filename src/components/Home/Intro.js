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
          start: 'top 75%',
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

function Intro() {
  return (
    <Wrapper className="wrapper">
      <div className="container">
        <Row gutter={[48, 48]} wrap align="middle" justify="space-between">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 10, order: 0 }} lg={10}>
            <div className="image-area">
              <img src="https://picsum.photos/1920/1080/?random=2" />
              <img src="https://picsum.photos/1920/1080/?random=3" />
            </div>
          </Col>
          <Col xs={24} md={14} lg={12}>
            <div className="content">
              <h2>
                <font className="paint">新北專業烤漆廠</font>
                <font className="divider"> – </font>
                <font className="name">興樺德粉體塗裝</font>
              </h2>
              <p>我們始終以創新與品質為核心，持續精進專業技術與製程管理，確保每一項服務都穩定可靠。</p>
              <p>
                在快速變動的市場中，我們以客戶需求為出發點，專注於細節與效率，不只完成任務，更致力於為客戶創造長期價值。
              </p>
              <p>我們不只是服務供應商，而是值得信賴、能並肩前行的合作夥伴。</p>
            </div>

            <div className="digital">
              <DigitalItem>
                <AnimatedNumber end={new Date().getFullYear() - 1984} />
                <span className="label">年經驗</span>
              </DigitalItem>
              <DigitalItem>
                <AnimatedNumber end={670} />
                <span className="label">坪廠房</span>
              </DigitalItem>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #fff;

  & .image-area {
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
      display: block
      text-align: center;
      border-radius: 10rem;

      &:last-child {
        margin-left: auto;
      }
    }
  }

  & .content {
    & > h2 {
      font-size: 1.75rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      text-align: center;

      & > font {
        &.paint {
          display: inline-block;
          border-bottom: 5px solid var(--primary-color);
          margin-bottom: 1rem;
        }

        &.divider {
          display: none;
        }

        &.name {
          display: block;
          font-size: 2rem;
        }
      }
    }

    & > p {
      font-size: 1.25rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }

  & .digital {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 576px) {
    & .image-area {
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

    & .content {
      & > h2 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        text-align: left;

        & > font {
          display: inline !important;
          
          &.paint {
            border-bottom: none;
          }
        }
      }

      & > p {
        line-height: 2;
      }
    }
  }
`;

const DigitalItem = styled.div`
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

  .label {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    & > .num {
      font-size: 4rem;
    }

    & > .label {
      font-size: 1.5rem;
    }
  }
`;

export default Intro;
