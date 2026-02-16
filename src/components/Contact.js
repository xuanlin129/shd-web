import React from 'react';
import styled from 'styled-components';
import * as Ant from 'antd';
import { MailOutline } from 'styled-icons/material';
import * as AppActions from '../utils';
import RippleButton from './RippleButton';

export default function Contact() {
  return (
    <Wrapper>
      <div className="container">
        <Ant.Row gutter={24} align="middle">
          <Ant.Col sm={24} md={12}>
            <h4>聯絡我們</h4>
            <p>如果您有任何疑問或需要報價，請隨時與我們聯繫。</p>
          </Ant.Col>
          <Ant.Col sm={24} md={8}>
            <Ant.Space vertical verticalsize={20}>
              <div>
                <h5>電話：02-8292-1781</h5>
                <p>營業時間：08:30 ～ 18:30（ 一 ～ 五 ）</p>
              </div>
              <RippleButton
                style={{ width: '100%', primary: '#fff', secondary: 'var(--primary-color)' }}
                onClick={() => {
                  AppActions.navigate('/contact');
                }}
              >
                <MailOutline size={20} /> 聯絡我們
              </RippleButton>
            </Ant.Space>
          </Ant.Col>
        </Ant.Row>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--secondary-color);
  color: #fff;
  text-align: center;
  padding: 100px 0;

  & > .container {
    height: 100%;
    display: flex;

    & > .ant-row {
      flex: 1;
      gap: 20px;
      justify-content: center;
    }

    & h4,
    & h5 {
      font-weight: 500;
    }

    & h4 {
      font-size: 44px;

      & + p {
        width: 70%;
        font-size: 14px;
        line-height: 1.6;
        margin: auto;
      }
    }

    & h5 {
      font-size: 24px;

      & + p {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 768px) {
    text-align: left;

    & > .container {
      & > .ant-row {
        justify-content: space-between;
      }

      & h4 {
        font-size: 44px;

        & + p {
          font-size: 14px;
          margin: initial;
        }
      }
    }
  }
`;
