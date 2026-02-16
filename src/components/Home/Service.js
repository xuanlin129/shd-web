import React from 'react';
import styled from 'styled-components';
import * as AppActions from '../../utils';
import { Row, Col, Card } from 'antd';
import RipperButton from '../RipperButton';

const services = ['粉體烤漆服務', '金屬表面前處理', '多種色系與材質選擇', '客製化服務'];

function Service() {
  return (
    <Wrapper className="wrapper">
      <div className="container">
        <h2>我們的服務</h2>
        <Row gutter={[16, 16]}>
          {services.map((it, idx) => (
            <Col xs={12} sm={6} key={idx}>
              <ServiceCard
                hoverable
                cover={<img draggable={false} alt={it} src={`https://picsum.photos/500/500/?random=${idx}`} />}
              >
                <Card.Meta title={it} />
              </ServiceCard>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <RipperButton
            onClick={() => {
              AppActions.navigate('/service');
            }}
          >
            查看服務細節
          </RipperButton>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: linear-gradient(0deg, var(--bg-light-color) 50%, transparent 50%);

  & > .container {
    & > h2 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 50px;
      text-align: center;
    }
  }
`;

const ServiceCard = styled(Card)`
  && {
    background: #fff;
    border: none;
    box-shadow: 0 0 1px #ccc;
    border-radius: 0;
    overflow: hidden;
    transition: transform 0.3s;
    cursor: initial;

    & img {
      border-radius: 0;
    }

    & .ant-card-meta-title {
      color: var(--primary-color);
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
        z-index: 1;
      }
    }
  }
`;

export default Service;
