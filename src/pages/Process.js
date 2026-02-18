import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { ClipboardList, Cogs, HandHoldingUsd, Flask, PaintRoller, CheckDouble, Truck } from 'styled-icons/fa-solid';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const processSteps = [
  {
    icon: <ClipboardList size={40} />,
    title: '需求確認',
    content: '客戶提供圖面、樣品與規格需求。',
  },
  {
    icon: <Cogs size={40} />,
    title: '製程評估',
    content: '分析材質特性，設定專屬前處理與烘烤條件。',
  },
  {
    icon: <HandHoldingUsd size={40} />,
    title: '報價與交期確認',
    content: '透明化報價與明確的交付時程。',
  },
  {
    icon: <Flask size={40} />,
    title: '表面前處理',
    content: [
      { label: '內容', text: '包含除油清潔與酸洗皮膜處理。' },
      { label: '目的', text: '徹底去除表面雜質，極大化塗層附著力。' },
    ],
  },
  {
    icon: <PaintRoller size={40} />,
    title: '精準粉體塗裝',
    content: '依據標準參數進行噴塗，確保膜厚均勻。',
  },
  {
    icon: <CheckDouble size={40} />,
    title: '品質檢驗',
    content: [{ label: '檢查項目', text: '外觀巡檢、膜厚精密量測、基本附著力測試。' }],
  },
  {
    icon: <Truck size={40} />,
    title: '包裝與準時出貨',
    content: '妥善防護包裝，確保產品抵達時完好無損。',
  },
];

const equipments = [
  {
    title: '全自動前處理設備',
    desc: '從除油、除鏽到磷化，全程標準化控制，提升表面處理穩定性。',
    img: new URL('@/assets/auto-front.jpg', import.meta.url).href,
  },
  {
    title: '自動/手動噴塗設備',
    desc: '配備自動噴塗設備，粉體均勻附著，減少色差與厚薄不均。邊角部分則由手動噴塗補強。',
    img: new URL('@/assets/spray-process.jpg', import.meta.url).href,
  },
  {
    title: '自家廢水處理系統',
    desc: '符合環保法規，合法合規無疑慮。積極落實綠色生產，符合客戶ESG政策需求。',
    img: new URL('@/assets/environment_2.JPG', import.meta.url).href,
  },
];

function Process() {
  return (
    <>
      <PageHeader title="產品製程" bgText="PROCESS" />
      <Wrapper>
        <div className="container">
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className={`icon-box ${step.highlight ? 'highlight' : ''}`}>{step.icon}</div>
                  <div className={`text-box ${step.highlight ? 'highlight-box' : ''}`}>
                    <h3>
                      <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
                      {step.title}
                      {step.highlight && <span className="badge">關鍵步驟</span>}
                    </h3>

                    {Array.isArray(step.content) ? (
                      <ul className="detail-list">
                        {step.content.map((item, i) => (
                          <li key={i}>
                            <strong>{item.label}：</strong>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{step.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <EquipmentSection>
            <h2>設備介紹</h2>
            <Row gutter={[40, 40]}>
              {equipments.map((item, index) => (
                <Col key={index} xs={24} md={8}>
                  <EquipmentCard>
                    <div className="img-box">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </EquipmentCard>
                </Col>
              ))}
            </Row>
          </EquipmentSection>
        </div>
      </Wrapper>
      <Contact />
    </>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  // background-color: #f9f9f9;
  overflow: hidden;

  .timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 0;

    &::after {
      content: '';
      position: absolute;
      width: 4px;
      background-color: #e0e0e0;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
      border-radius: 2px;
    }
  }

  .timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 50%;

    &.left {
      left: 0;
      text-align: right;
      padding-right: 60px;

      .timeline-content {
        flex-direction: row-reverse;
      }

      .icon-box {
        right: -100px; // Center on line: 60px (padding) + 40px (half icon width)
      }

      .text-box {
        align-items: flex-end;

        h3 {
          flex-direction: row-reverse;
        }
      }
    }

    &.right {
      left: 50%;
      padding-left: 60px;

      .timeline-content {
        flex-direction: row;
      }

      .icon-box {
        left: -100px; // Center on line: 60px (padding) + 40px (half icon width)
      }

      .text-box {
        align-items: flex-start;
      }
    }
  }

  .timeline-content {
    display: flex;
    // gap: 30px;
    align-items: center;
    position: relative;
  }

  .icon-box {
    position: absolute;
    top: 0;
    min-width: 80px;
    height: 80px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    z-index: 2;
    transition: all 0.3s ease;
    border: 4px solid white;

    &.highlight {
      background: var(--primary-color);
      color: white;
      transform: scale(1.1);
      box-shadow: 0 10px 30px rgba(255, 77, 79, 0.3);
    }
  }

  .timeline-item:hover .icon-box {
    transform: scale(1.1);

    &.highlight {
      transform: scale(1.2);
    }
  }

  .text-box {
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    width: 100%;

    &.highlight-box {
      border-color: var(--primary-color);
      box-shadow: 0 10px 40px rgba(255, 77, 79, 0.1);
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;

      .step-num {
        font-family: 'Alfa Slab One', serif;
        color: var(--bg-light-color);
        font-size: 2rem;
        line-height: 1;
        opacity: 0.5;
      }

      .badge {
        font-size: 0.85rem;
        background: #ff4d4f;
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-weight: 500;
      }
    }

    p,
    .detail-list {
      color: #666;
      font-size: 1.1rem;
      line-height: 1.8;
      margin: 0;
      text-align: left;
    }

    .detail-list {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;

        strong {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 4px;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .timeline::after {
      left: 40px;
    }

    .timeline-item {
      width: 100%;
      // padding-left: 80px;
      padding-right: 0;

      &.left,
      &.right {
        left: 0;
        text-align: left;
        padding-left: 100px;
        padding-right: 20px;

        .icon-box {
          left: -100px; /* Align with timeline line at 40px (padding 100px - 60px offset needed? No. Left edge at 0 means center at 40px) */
          right: auto;
        }

        .timeline-content {
          flex-direction: row;
        }

        .text-box {
          align-items: flex-start;

          h3 {
            flex-direction: row;
          }

          p,
          .detail-list {
            text-align: left;
          }
        }
      }
    }

    .text-box {
      padding: 20px;

      h3 {
        font-size: 1.25rem;
        .step-num {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

const EquipmentSection = styled.div`
  margin-top: 100px;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 50px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      display: block;
      width: 60%;
      height: 4px;
      background: var(--primary-color);
      margin: 10px auto 0;
      border-radius: 2px;
    }
  }
`;

const EquipmentCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .img-box {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .img-box img {
    transform: scale(1.1);
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-color);
    margin: 24px 20px 12px;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin: 0 20px 24px;
    text-align: left;
  }
`;

export default Process;
