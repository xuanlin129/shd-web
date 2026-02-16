import React from 'react';
import styled from 'styled-components';
import company from '../config/company';
import { Row, Col, Divider, Grid } from 'antd';
import { Facebook, Line } from 'styled-icons/fa-brands';
import { LocationDot as LocationIcon, Phone as PhoneIcon, Envelope as MailIcon } from 'styled-icons/fa-solid';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/service', label: '服務項目' },
  { path: '/about-us', label: '關於我們' },
  { path: '/process', label: '服務流程' },
  { path: '/faq', label: '常見問題' },
  { path: '/contact', label: '聯絡我們' },
];

const { useBreakpoint } = Grid;

function Footer() {
  const screens = useBreakpoint();

  return (
    <Wrapper>
      <div className="container">
        <Row gutter={[64, 48]}>
          <Col xs={24} lg={9}>
            <BrandSection>
              <img src={new URL('../assets/logo.png', import.meta.url).href} alt={company.name} />
              <p className="description">
                興樺德興業有限公司專注於高品質粉體塗裝服務，我們以環保無溶劑製程與嚴格品質控管，為您的產品提供最完美的表面處理方案。
              </p>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook size={24} />
                </a>
                <a href={company.line} target="_blank" rel="noopener noreferrer">
                  <Line size={24} />
                </a>
              </div>
            </BrandSection>
          </Col>

          {!screens.xs && (
            <Col xs={24} sm={12} lg={6}>
              <LinkSection>
                <h4>網站地圖</h4>
                <ul>
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </LinkSection>
            </Col>
          )}

          <Col xs={24} sm={12} lg={9}>
            <ContactSection>
              <h4>聯絡資訊</h4>
              <ul>
                <li>
                  <LocationIcon className="icon" size={20} />
                  <div className="content">
                    <span>地址</span>
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
                  <PhoneIcon className="icon" size={20} />
                  <div className="content">
                    <span>電話</span>
                    <a href={`tel:${company.tel}`}>{company.tel}</a>
                  </div>
                </li>
                <li>
                  <MailIcon className="icon" size={20} />
                  <div className="content">
                    <span>信箱</span>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </li>
              </ul>
            </ContactSection>
          </Col>
        </Row>

        <Divider className="footer-divider" />

        <BottomBar>
          <p className="copyright">
            © {new Date().getFullYear()} {company.name} All Rights Reserved.
          </p>
          {/* <div className="links">
            <Link to="/privacy">隱私權政策</Link>
            <Link to="/terms">服務條款</Link>
          </div> */}
        </BottomBar>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  color: #fff;
  background-color: var(--primary-color);
  padding: 80px 0 30px;
  position: relative;

  /* 背景紋理 (可選) */
  // background-image:
  //   linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
  //   linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  // background-size: 30px 30px;

  .footer-divider {
    border-color: rgba(255, 255, 255, 0.15);
    margin: 60px 0 30px;
  }
`;

const BrandSection = styled.div`
  img {
    width: 220px;
    height: auto;
    filter: brightness(0) invert(1);
    margin-bottom: 24px;
    opacity: 0.95;
  }

  .description {
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 32px;
    font-size: 15px;
    text-align: justify;
  }

  .social-links {
    display: flex;
    gap: 16px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: #fff;
      transition: all 0.3s ease;

      &:hover {
        background: #fff;
        color: var(--primary-color);
        transform: translateY(-3px);
      }
    }
  }
`;

const LinkSection = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #fff;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 16px;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
        font-size: 15px;

        &::before {
          content: '›';
          margin-right: 8px;
          opacity: 0;
          transition: 0.3s;
          position: relative;
          right: 5px;
        }

        &:hover {
          color: #fff;
          padding-left: 5px;

          &::before {
            opacity: 1;
            right: 0;
          }
        }
      }
    }
  }
`;

const ContactSection = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #fff;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      display: flex;
      gap: 16px;

      .icon {
        color: var(--secondary-color); /* 如果沒有次要色，可以用 rgba(255, 255, 255, 0.6) 代替 */
        flex-shrink: 0;
        margin-top: 2px;
        opacity: 0.8;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 4px;

        span {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
        }

        a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          line-height: 1.5;
          font-size: 15px;
          transition: color 0.3s;

          &:hover {
            color: #fff;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    margin: 0;
  }

  .links {
    display: flex;
    gap: 24px;

    a {
      color: rgba(255, 255, 255, 0.5);
      font-size: 13px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #fff;
      }
    }
  }

  @media (max-width: 576px) {
    justify-content: center;
    text-align: center;

    .links {
      justify-content: center;
    }
  }
`;

export default Footer;
