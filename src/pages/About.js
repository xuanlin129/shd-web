import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Descriptions } from 'antd';
import { History, Cogs, Handshake, Leaf } from 'styled-icons/fa-solid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import company from '../config/company';
import PageHeader from '../components/PageHeader';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const infos = [
  {
    label: '公司名稱',
    value: company.name,
  },
  // {
  //   label: '負責人',
  //   value: company.president,
  // },
  {
    label: '電話',
    value: company.tel,
  },
  {
    label: '傳真',
    value: company.fax,
  },
  {
    label: '地點',
    value: company.address,
  },
  {
    label: '統編',
    value: company.uni_no,
  },
];

const history = [
  {
    year: '1984',
    content: '成立信豪企業社',
  },
  {
    year: '1994',
    content: '搬遷於泰山，更名為恆德興業有限公司',
  },
  {
    year: '2004',
    content: '遷廠於五股，更名為興樺德興業有限公司',
  },
  {
    year: '2024',
    content: '正式遷廠至新北市鶯歌區',
  },
];

const advantages = [
  {
    icon: <History size={48} />,
    title: '40+ 年專業經驗',
    desc: '深耕金屬粉體烤漆與表面處理產業超過四十年，累積豐富實務經驗，品質穩定、交期可靠。',
  },
  {
    icon: <Cogs size={48} />,
    title: '全自動化產線',
    desc: '採用全自動前處理設備與自動噴塗系統，降低人為誤差，確保每批產品品質一致。',
  },
  {
    icon: <Handshake size={48} />,
    title: '穩定合作夥伴',
    desc: '長期服務多家上市公司與知名廠商，遷廠後仍維持原有技術與管理團隊，合作不中斷。',
  },
  {
    icon: <Leaf size={48} />,
    title: '環保合規・ESG 導向',
    desc: '自建廢水處理系統，符合環保法規，積極落實綠色生產，配合客戶 ESG 政策需求。',
  },
];

const { useBreakpoint } = Grid;

export default function About() {
  const screens = useBreakpoint();
  const sectionRefs = useRef([]);
  const [activeHash, setActiveHash] = useState(0);
  const navItems = ['創辦人的話', '歷史背景', '公司優勢', '公司簡介'];

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60%',
          end: 'bottom 60%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveHash(index);
            }
          },
        });
      });
    });
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const handleClick = (index) => {
    const section = sectionRefs.current[index];
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: section, offsetY: 200 },
        ease: 'power2.out',
      });
    }
  };

  return (
    <>
      <PageHeader title="關於興樺德" bgText="ABOUT" />
      <Wrapper className="wrapper">
        <div className="container">
          <Row gutter={[64, 0]}>
            <Col span={24} lg={18}>
              <div ref={(el) => (sectionRefs.current[0] = el)} className="content-item">
                <h3>創辦人的話</h3>
                <div className="greeting">
                  <p className="description">
                    我們的使命是在塗層與表面處理領域，
                    <br />
                    提供卓越的品質與創新解決方案，
                    <br />
                    確保客戶在每一個環節都能獲得成功與滿意。
                  </p>
                  <div>
                    <img src={new URL('@/assets/founder.png', import.meta.url).href} style={{ width: 200 }} />
                    <p className="founder">
                      <font>創辦人</font>
                      <font>蕭見忠</font>
                    </p>
                  </div>
                </div>
              </div>

              <div ref={(el) => (sectionRefs.current[1] = el)} className="content-item">
                <h3>歷史沿革</h3>
                <ul className="history">
                  {history.map((it) => (
                    <li key={it.year}>
                      <h4>{it.year}</h4>
                      <p>{it.content}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div ref={(el) => (sectionRefs.current[2] = el)} className="content-item">
                <h3>公司優勢</h3>
                <Row gutter={[40, 32]}>
                  {advantages.map((it, idx) => (
                    <Col span={24} md={12}>
                      <AdvantageCard key={idx}>
                        <div className="icon-box">{it.icon}</div>
                        <h4>{it.title}</h4>
                        <p>{it.desc}</p>
                      </AdvantageCard>
                    </Col>
                  ))}
                </Row>
              </div>

              <div ref={(el) => (sectionRefs.current[3] = el)} className="content-item">
                <h3>公司簡介</h3>
                <CompanyList>
                  {infos.map((it, idx) => (
                    <li key={idx}>
                      <h4>{it.label}</h4>
                      <p>{it.value}</p>
                    </li>
                  ))}
                </CompanyList>
              </div>
            </Col>
            {screens.lg && (
              <Col span={6}>
                <div className="nav-aside">
                  <h4>目次</h4>
                  <ol>
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className={activeHash === index ? 'active' : ''}
                        onClick={() => handleClick(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </Col>
            )}
          </Row>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  counter-reset: content-section;

  & .content-item {
    margin-bottom: 90px;

    & > h3 {
      font-size: 1.75rem;
      font-weight: 500;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      counter-increment: content-section;

      &::before {
        content: counter(content-section, decimal-leading-zero);
        color: var(--primary-color);
        transition: color 0.3s ease;
        --letter-spacing: 0;
        font-weight: 700;
        font-size: 1.1em;
      }
    }
  }

  & .greeting {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & .description {
      font-size: 1.25rem;
      line-height: 2;
    }

    & .founder {
      display: flex;
      align-items: center;

      & font:last-child {
        font-family: 'hand-drawn';
        font-size: 2.5rem;
        letter-spacing: 5px;
        margin: auto;
      }
    }
  }

  @media (min-width: 768px) {
    & .greeting {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      & .description {
        font-size: 1.5rem;
        line-height: 2.5;
      }
    }
  }

  & .history > li {
    --border: 1px solid var(--bg-light-color);
    border-top: var(--border);
    display: flex;
    flex-direction: column;

    &:last-child {
      border-bottom: var(--border);
    }

    & > * {
      padding: 8px 12px;
    }

    & > h4 {
      width: 200px;
      font-size: 52px;
      font-family: 'Alfa Slab One', serif;
      // font-weight: bold;
      color: var(--bg-light-color);
    }

    & > p {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;

      & > * {
        padding: 16px 24px;
      }

      & > h4 {
        text-align: center;
      }
    }
  }

  & .nav-aside {
    position: sticky;
    top: 20%;

    &::before {
      content: '';
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, var(--primary-color) 20%, var(--bg-light-color) 20%);
      position: absolute;
      top: 0;
      left: 0;
    }

    & > h4 {
      font-size: 20px;
      font-weight: 900;
      padding: 16px 0;
    }

    & > ol {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      counter-reset: section;

      & > li {
        font-size: 18px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        counter-increment: section;
        transition: color 0.3s ease;
        cursor: pointer;

        &::before {
          content: counter(section, decimal-leading-zero);
          width: 16px;
          color: var(--bg-light-color);
          transition: color 0.3s ease;
          font-weight: 700;
          font-size: 0.9em;
        }

        &.active,
        &:hover {
          color: var(--primary-color);
          font-weight: 700;

          &::before {
            color: var(--primary-color);
          }
        }
      }
    }
  }
`;

const AdvantageCard = styled.div`
  position: relative;
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-bottom: 3px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;

  .icon-box {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: white;
    border: 2px solid var(--bg-light-color);
    color: var(--primary-color);
    margin-bottom: 24px;
    transition: all 0.4s ease;
    z-index: 1;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--primary-color);
    position: relative;
    z-index: 1;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin: 0;
    position: relative;
    z-index: 1;
    font-size: 1rem;
    flex-grow: 1;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);

      .icon-box {
        transform: scale(1.1) rotate(5deg);
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }
    }
  }
`;

const CompanyList = styled.ul`
  li {
    --border: 1px solid var(--bg-light-color);
    border-top: var(--border);
    display: flex;
    flex-direction: column;

    &:last-child {
      border-bottom: var(--border);
    }

    & > * {
      padding: 8px 12px;
    }

    & > h4 {
      width: 150px;
      font-weight: bold;
      font-size: 18px;
      color: var(--primary-color);
    }

    & > p {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;

      & > * {
        padding: 16px 24px;
      }
    }
  }
`;
