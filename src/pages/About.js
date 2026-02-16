import React from 'react';
import styled from 'styled-components';
import * as Ant from 'antd';
import company from '../config/company';
import PageHeader from '../components/PageHeader';
import { useLocation } from 'react-router-dom';

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
    title: '40+ 年專業經驗',
    desc: '深耕金屬粉體烤漆與表面處理產業超過四十年，累積豐富實務經驗，品質穩定、交期可靠。',
  },
  {
    title: '全自動化產線',
    desc: '採用全自動前處理設備與自動噴塗系統，降低人為誤差，確保每批產品品質一致。',
  },
  {
    title: '穩定合作夥伴',
    desc: '長期服務多家上市公司與知名廠商，遷廠後仍維持原有技術與管理團隊，合作不中斷。',
  },
  {
    title: '環保合規・ESG 導向',
    desc: '自建廢水處理系統，符合環保法規，積極落實綠色生產，配合客戶 ESG 政策需求。',
  },
];

export default function About() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      // 等 DOM render 完再滾動
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location]);

  return (
    <>
      <PageHeader title="關於興樺德" />
      <Wrapper>
        <div className="container">
          <Ant.Row justify="space-between" id="content">
            <Ant.Col xs={24} sm={18}>
              <Ant.Space direction="vertical" style={{ width: '100%' }} size={50}>
                <div id="part-1">
                  <h3>基本資訊</h3>
                  <ul className="list">
                    {infos.map((it, idx) => (
                      <li key={idx}>
                        <h4>{it.label}</h4>
                        <p>{it.value}</p>
                      </li>
                    ))}
                  </ul>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1110451941768!2d121.32929537619621!3d24.962336277863024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6051a7d27ab%3A0xfa72e8995b6df327!2z6IiI5qi65b636IiI5qWt5pyJ6ZmQ5YWs5Y-477yI5paw5YyX54Ok5ryGfOWwiOalreeyiemrlOWhl-ijnXznmq7ohpzliY3omZXnkIbvvIk!5e0!3m2!1szh-TW!2stw!4v1769150947912!5m2!1szh-TW!2stw"
                    allowfullscreen=""
                    style={{ width: '100%', aspectRatio: '16/9' }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div id="part-2">
                  <h3>歷史背景</h3>
                  <ul className="list history">
                    {history.map((it) => (
                      <li key={it.year}>
                        <h4>{it.year}</h4>
                        <p>{it.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="part-3" className="advantages">
                  <h3>公司優勢</h3>
                  <Ant.Row gutter={[24, 24]}>
                    {advantages.map((it, idx) => (
                      <Ant.Col key={idx} xs={24} sm={12}>
                        <div className="adv-card">
                          <h4>{it.title}</h4>
                          <p>{it.desc}</p>
                        </div>
                      </Ant.Col>
                    ))}
                  </Ant.Row>
                </div>
              </Ant.Space>
            </Ant.Col>
            <Ant.Col xs={0} sm={4}>
              <Ant.Anchor
                offsetTop={150}
                targetOffset={300}
                items={[
                  {
                    key: 'part-1',
                    href: '#part-1',
                    title: '基本資訊',
                  },
                  {
                    key: 'part-2',
                    href: '#part-2',
                    title: '歷史背景',
                  },
                  {
                    key: 'part-3',
                    href: '#part-3',
                    title: '公司優勢',
                  },
                ]}
              />
            </Ant.Col>
          </Ant.Row>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 50px 0;

  & .advantages {
    & .adv-card {
      height: 100%;
      padding: 28px 24px;
      border-radius: 12px;
      background: #fff;
      border: 1px solid var(--lightBlueColor);
      transition: all 0.25s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
      }

      & h4 {
        font-size: 20px;
        font-weight: 600;
        color: var(--primaryColor);
        margin-bottom: 12px;
      }

      & p {
        font-size: 16px;
        line-height: 1.7;
        color: #555;
        margin: 0;
      }
    }
  }

  & > .container {
    & h3 {
      font-size: 1.75rem;
      margin-bottom: 1em;
      padding-left: 0.5em;
      position: relative;

      &::before {
        content: '';
        width: 5px;
        height: 60%;
        background: var(--primaryColor);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    & .list > li {
      --border: 1px solid var(--lightBlueColor);
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
        color: var(--primaryColor);
      }

      & > p {
        font-size: 18px;
      }
    }

    & .list.history > li {
      & > h4 {
        width: 200px;
        font-size: 52px;
        font-family: 'Abril Fatface', serif;
        color: var(--lightBlueColor);
      }
    }
  }

  @media (min-width: 768px) {
    & > .container {
      & h3 {
        font-size: 2rem;
      }

      & .list > li {
        flex-direction: row;
        align-items: center;

        & > * {
          padding: 16px 24px;
        }

        & > h4 {
        }
      }

      & .list.history > li {
        & > h4 {
          text-align: center;
        }
      }
    }
  }
`;
