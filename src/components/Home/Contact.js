import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import RipperButton from '../RipperButton';
import * as AppActions from '../../utils';

function Contact() {
  return (
    <Wrapper id="contact">
      <div className="container">
        <Row align="middle" justify="space-between" gutter={[{ xs: 24, md: 48 }, 48]}>
          <Col xs={24} md={14}>
            <div className="content">
              <h2>與興樺德攜手，開啟您的卓越產品旅程。</h2>
              <p className="subtitle">
                無論是粉體烤漆服務、產品製程諮詢，或是其他合作需求，興樺德專業團隊隨時準備為您提供最佳解決方案。
              </p>
            </div>
          </Col>

          <Col xs={24} md={10}>
            <div className="action-area">
              <RipperButton
                onClick={() => {
                  AppActions.navigate('/contact');
                }}
                style={{ width: '100%', maxWidth: '300px' }}
              >
                立即聯絡我們
              </RipperButton>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: linear-gradient(135deg, var(--bg-light-color) 0%, #fff 100%);
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  /* 背景裝飾圓形 */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, #e1f0ff 0%, transparent 70%);
    z-index: 0;
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 24px;
    color: var(--primary-color);
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 40px;
  }

  .contact-methods {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .method-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #333;
    text-decoration: none;
    padding: 12px 24px;
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      color: var(--primary-color);
    }

    .icon {
      color: var(--primary-color);
      display: flex;
      align-items: center;
    }

    span {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .action-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 60px 0;

    h2 {
      font-size: 2rem;
    }

    .contact-methods {
      justify-content: center;
      margin-bottom: 40px;
    }
  }
`;

export default Contact;
