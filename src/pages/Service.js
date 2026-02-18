import React from 'react';
import styled from 'styled-components';
import * as AppActions from '../utils';
import { Row, Col } from 'antd';
import { Cogs, ClipboardList, Clock, Handshake, Infinity } from 'styled-icons/fa-solid';
import PageHeader from '../components/PageHeader';
import RipperButton from '../components/RipperButton';

const services = [
  {
    id: '01',
    title: '粉體塗裝加工',
    subtitle: 'Powder Coating',
    features: ['金屬外殼粉體烤漆', '電源盒外殼塗裝', '機構件與工業零件表面塗裝', '批量穩定生產'],
    characteristics: ['耐磨耗', '防鏽防蝕', '附著力佳', '適用長期使用環境'],
  },
  {
    id: '02',
    title: '客製顏色塗裝',
    subtitle: 'Custom Color',
    features: ['依 RAL 色卡指定顏色', '特殊色需求評估', '同批次色差控管'],
    desc: '我們針對批量生產進行色差管理，確保產品外觀一致性，符合客戶品牌與產品標準。',
  },
  {
    id: '03',
    title: '表面前處理作業',
    subtitle: 'Pre-treatment',
    features: ['除油清潔處理', '表面酸洗皮膜處理', '提升塗層附著力'],
    desc: '前處理為塗裝品質關鍵環節，我們依材質特性規劃適合之處理流程，確保塗裝穩定性。',
  },
  {
    id: '04',
    title: '小量打樣與試產配合',
    subtitle: 'Sample & Pilot Run',
    features: ['新產品開發試產', '小量測試訂單', '製程可行性評估'],
    desc: '可配合研發與工程單位進行打樣與條件調整，協助產品順利量產。',
  },
  {
    id: '05',
    title: '品質檢驗與控管',
    subtitle: 'Quality Control',
    features: ['外觀檢查', '膜厚量測', '基本附著力測試'],
    desc: '每批產品皆經品質檢查後出貨，降低後段組裝與客訴風險。',
  },
];

const advantages = [
  { icon: <Cogs size={32} />, text: '穩定產線規劃' },
  { icon: <ClipboardList size={32} />, text: '標準化製程流程' },
  { icon: <Clock size={32} />, text: '交期控管能力' },
  { icon: <Handshake size={32} />, text: '長期配合彈性' },
  { icon: <Infinity size={32} />, text: '適合持續性量產訂單' },
];

export default function Service() {
  return (
    <>
      <PageHeader title="服務項目" bgText="SERVICE" />
      <Wrapper>
        <div className="container">
          <ServiceGrid>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                <div className="card-top">
                  <h3>
                    {service.title}
                    <span>{service.subtitle}</span>
                  </h3>
                </div>

                <div className="card-content">
                  <ul className="feature-list">
                    {service.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {service.characteristics && (
                    <div className="characteristics">
                      <h4>特性說明：</h4>
                      <div className="tags">
                        {service.characteristics.map((tag, i) => (
                          <span key={i}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.desc && <p className="description">{service.desc}</p>}
                </div>
              </ServiceCard>
            ))}
          </ServiceGrid>

          <AdvantageSection>
            <h2>我們的塗裝優勢</h2>
            <p className="subtitle">
              興樺德以穩定製程為核心，協助客戶降低後段組裝風險與品質變異，提供可長期合作之塗裝解決方案。
            </p>
            <Row gutter={[24, 24]} justify="center">
              {advantages.map((item, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={4}>
                  <AdvantageBadge>
                    <div className="icon">{item.icon}</div>
                    <span>{item.text}</span>
                  </AdvantageBadge>
                </Col>
              ))}
            </Row>
          </AdvantageSection>
        </div>
      </Wrapper>

      <ProcessCTA>
        <div className="container cta-content">
          <div className="text-content">
            <h3>想了解詳細製程？</h3>
            <p>深入了解我們的粉體塗裝流程與品質控管標準</p>
          </div>
          <RipperButton primary="#fff" secondary="var(--primary-color)" onClick={() => AppActions.navigate('/process')}>
            查看詳細製程
          </RipperButton>
        </div>
      </ProcessCTA>
    </>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: var(--primary-color);
  }

  .card-top {
    margin-bottom: 24px;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
      margin: 0;
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.9rem;
        font-weight: 400;
        color: #999;
        font-family: sans-serif;
        margin-top: 4px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      font-size: 1.05rem;
      color: #555;
      line-height: 1.5;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        width: 6px;
        height: 6px;
        background-color: var(--primary-color);
        border-radius: 50%;
      }
    }
  }

  .characteristics {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;

    h4 {
      font-size: 0.95rem;
      color: #888;
      margin-bottom: 12px;
      font-weight: 600;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      span {
        background-color: #f0f2f5;
        color: #666;
        padding: 4px 12px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 500;
      }
    }
  }

  .description {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;
    color: #666;
    line-height: 1.6;
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

const AdvantageSection = styled.div`
  text-align: center;
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 1.15rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto 50px auto;
    line-height: 1.6;
  }
`;

const AdvantageBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    .icon {
      background: var(--primary-color);
      color: white;
      transform: rotate(360deg);
    }
  }

  .icon {
    width: 60px;
    height: 60px;
    background: rgba(var(--primary-rgb), 0.1);
    background: var(--bg-light-color); // Fallback
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 1.5rem;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #444;
  }
`;

const ProcessCTA = styled.section`
  background: var(--secondary-color);
  color: #fff;
  padding: 80px 0;

  .cta-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }

    .text-content {
      h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #fff;
      }

      p {
        font-size: 1.1rem;
        margin: 0;
        opacity: 0.9;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
    }
  }
`;
