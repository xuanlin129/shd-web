import React from 'react';
import styled from 'styled-components';
import { UserTie, HandHoldingHeart, ShippingFast } from 'styled-icons/fa-solid';
import { Row, Col } from 'antd';

const advantages = [
  {
    icon: <UserTie size={32} />,
    title: '專業',
    desc: '針對產品的材質，提供好的建議及製程方式，為客戶的產品品質嚴格把關',
  },
  {
    icon: <HandHoldingHeart size={32} />,
    title: '用心',
    desc: '依照個別客戶需求，完善產品包裝及出貨',
  },
  {
    icon: <ShippingFast size={32} />,
    title: '快速',
    desc: '產品交期預計3-7個工作天，急單可以預先告知',
  },
];

function Advantage() {
  return (
    <Wrapper>
      <div className="container">
        <Row gutter={[32, 16]} justify="center">
          {advantages.map((it, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Item>
                <div className="icon">{it.icon}</div>
                <div className="content">
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </Item>
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  & > .container {
    & > .ant-row {
      width: 100%;
      box-shadow: 0 0 5px rgb(from var(--primary-color) r g b / 0.2);
      border-radius: 2rem;
      margin: auto !important;
      padding: 30px 0;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 24px;
  border-radius: 12px;
  transition: all 0.3s ease;

  & > .icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--bg-light-color);
    color: var(--primary-color);
    margin-bottom: 24px;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  & > .content {
    & > h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: var(--primaryColor);
      letter-spacing: 1.5px;
    }

    & > p {
      color: #666;
      font-size: 16px;
      line-height: 1.8;
      text-align: justify;
      text-align-last: center;
      margin: 0;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export default Advantage;
