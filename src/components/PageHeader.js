import React from 'react';
import styled from 'styled-components';

function PageHeader({ title, subtitle, bgText = 'HEADER' }) {
  return (
    <Wrapper $bgText={bgText}>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 100px 20px 140px;
  background: linear-gradient(135deg, var(--bg-light-color) 0%, #fff 100%);
  overflow: hidden;
  text-align: center;

  &::before {
    content: '${(props) => props.$bgText}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15vw;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.03);
    pointer-events: none;
    z-index: 0;
    white-space: nowrap;
  }

  /* 裝飾性圓圈 */
  .circle {
    position: absolute;
    border-radius: 50%;
    background: var(--primary-color);
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
  }
  .circle-1 {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  .circle-2 {
    width: 60px;
    height: 60px;
    top: 60%;
    right: 15%;
    animation-delay: 1s;
    background: var(--secondary-color);
  }
  .circle-3 {
    width: 40px;
    height: 40px;
    bottom: 20%;
    left: 20%;
    animation-delay: 2s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  h2 {
    position: relative;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 16px;
    z-index: 1;
    letter-spacing: 2px;
  }

  .subtitle {
    position: relative;
    color: #666;
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    z-index: 1;
    line-height: 1.6;
  }
`;

export default PageHeader;
