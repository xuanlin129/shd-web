import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <div className="container"></div>
      <p className="copyright">© {new Date().getFullYear()} Xuan. All rights reserved.</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  color: #fff;
  background: var(--secondary-color);
  padding: var(--base-padding) 0;

  & > .copyright {
    font-size: 14px;
    text-align: center;
  }
`;

export default Footer;
