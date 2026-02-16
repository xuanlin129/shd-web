import React from 'react';
import styled from 'styled-components';
import company from '../config/company';
import { Row, Col, Divider, Space } from 'antd';
import { Phone, Envelope, LocationDot } from 'styled-icons/fa-solid';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/service', label: '服務項目' },
  { path: '/about-us', label: '關於我們' },
  { path: '/process', label: '服務流程' },
  { path: '/faq', label: '常見問題' },
  { path: '/contact', label: '聯絡我們' },
];

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <Row gutter={[48, 48]} justify="space-between">
          <Col xs={24} md={8}>
            <LogoSection>
              <img
                src={new URL('../assets/logo.png', import.meta.url).href}
                alt={company.name}
              />
              <p className="slogan">在耐用與環保之間，找到最好的平衡</p>
            </LogoSection>
          </Col>

          <Col xs={24} md={8}>
            <Title>快速連結</Title>
            <NavList>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </NavList>
          </Col>
          
          <Col xs={24} md={8}>
            <Title>聯絡資訊</Title>
            <ContactList>
              <li>
                <div className="icon"><Phone size={16} /></div>
                <div className="text">
                  <span>電話：</span>
                  <a href={`tel:${company.tel}`}>{company.tel}</a>
                </div>
              </li>
              <li>
                <div className="icon"><LocationDot size={16} /></div>
                <div className="text">
                  <span>地址：</span>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${company.address}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {company.address}
                  </a>
                </div>
              </li>
              <li>
                <div className="icon"><Envelope size={16} /></div>
                <div className="text">
                  <span>信箱：</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
            </ContactList>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '40px 0 24px' }} />

        <div className="copyright">
          <p>© {new Date().getFullYear()} {company.name} All Rights Reserved.</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  color: #fff;
  background: var(--primary-color);
  padding: 80px 0 24px;
  font-size: 15px;

  .copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;

const LogoSection = styled.div`
  img {
    width: 200px;
    filter: brightness(0) invert(1);
    margin-bottom: 24px;
  }
  
  .slogan {
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 12px;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 40px;
    height: 3px;
    background-color: var(--secondary-color); /* Assuming you have this var, if not use a complementary color or white */
    border-radius: 2px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
    position: relative;
    padding-left: 0;

    &:hover {
      color: #fff;
      padding-left: 8px;
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    color: rgba(255, 255, 255, 0.8);
  }

  .icon {
    margin-top: 4px;
    color: var(--secondary-color);
  }
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export default Footer;
