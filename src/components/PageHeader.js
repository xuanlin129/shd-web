import React from 'react';
import styled from 'styled-components';
import * as Ant from 'antd';
import * as AppActions from '../utils';

export default function PageHeader(props) {
  const { title } = props;
  return (
    <Wrapper>
      <div className="container">
        <Ant.Breadcrumb
          items={[
            {
              title: (
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    AppActions.navigate('/');
                  }}
                >
                  首頁
                </span>
              ),
            },
            {
              title: <span>{title}</span>,
            },
          ]}
        />
        <h2>{title}</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 30px 0;

  & h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    & h2 {
      font-size: 2.25rem;
    }
  }
`;
