import React from 'react';
import styled from 'styled-components';
import { Button, Dropdown, Grid, Select, Space } from 'antd';
import * as AppActions from '../utils';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon } from '@styled-icons/material';
import { EarthAmericas, Xmark } from '@styled-icons/fa-solid';

const { useBreakpoint } = Grid;

const navItems = [
  { path: '/service', label: '服務項目' },
  { path: '/about', label: '公司介紹' },
  { path: '/process', label: '產品製程' },
  { path: '/faq', label: '常見問題' },
  { path: '/contact', label: '聯繫我們' },
];

function Header() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const screens = useBreakpoint();
  const [drawer, setDrawer] = React.useState(false);

  const changeLanguage = React.useCallback(
    async (lang) => {
      if (lang === i18n.language) return;
      AppActions.setLoading(true);
      await AppActions.delay(500);
      i18n.changeLanguage(lang);
      AppActions.setLoading(false);
    },
    [i18n],
  );

  return (
    <Wrapper>
      <div className="">
        <Logo
          src={new URL('@/assets/logo.png', import.meta.url).href}
          alt="Logo"
          onClick={() => {
            AppActions.navigate('/');
          }}
        />

        <nav>
          {!screens.xs && (
            <Space>
              <ul>
                {navItems.map((it) => (
                  <li key={it.label}>
                    <ActionButton
                      type="link"
                      onClick={() => {
                        AppActions.navigate(it.path);
                      }}
                    >
                      {it.label}
                    </ActionButton>
                  </li>
                ))}
              </ul>
              {/* <Divider vertical style={{ borderColor: 'var(--secondary-color)', height: 25 }} />
              <Dropdown
                menu={{
                  items: [
                    { key: 'zh-TW', label: '繁中' },
                    { key: 'en', label: 'EN' },
                  ],
                  selectable: true,
                  defaultSelectedKeys: [i18n.language],
                  onClick: ({ key }) => {
                    changeLanguage(key);
                  },
                  style: { minWidth: 80, borderRadius: 8, textAlign: 'center' },
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    cursor: 'pointer',
                    marginLeft: 'var(--base-padding)',
                  }}
                >
                  <EarthAmericas size={20} color="#333" />
                  {i18n.language === 'en' ? 'EN' : '繁中'}
                </div>
              </Dropdown> */}
            </Space>
          )}

          {screens.xs && <MenuIcon size={35} color="#fff" onClick={() => setDrawer(true)} />}
        </nav>
      </div>

      <Drawer
        title="選單"
        onClose={() => {
          setDrawer(false);
        }}
        className={drawer && 'active'}
      >
        <ul>
          {navItems.map((it) => (
            <li key={it.label}>
              <span
                onClick={() => {
                  AppActions.navigate(it.path);
                  setDrawer(false);
                }}
              >
                {it.label}
              </span>
            </li>
          ))}
        </ul>

        <Xmark
          className="close-btn"
          size={35}
          color="#fff"
          onClick={() => {
            setDrawer(false);
          }}
        />

        <img className="bg-cover" src={new URL('@/assets/spray.png', import.meta.url).href} alt="spray" />

        {/* <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Select
            value={i18n.language}
            style={{ minWidth: 120 }}
            options={[
              { value: 'zh-TW', label: '繁體中文' },
              { value: 'en', label: 'English' },
            ]}
            onChange={(value) => {
              changeLanguage(value);
            }}
          />
        </div> */}
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: var(--navbar-height);
  // box-shadow: 0 1px 8px #ccc;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--primary-color);
  color: #fff;
  z-index: 999;

  & > div {
    height: 100%;
    padding: 0 var(--base-padding);
    display: flex;
    align-items: center;

    & > nav {
      margin-left: auto;

      & ul {
        display: flex;
      }
    }
  }
`;

const Logo = styled.img`
  max-width: 120px;
  object-fit: contain;
  filter: invert(1) brightness(100);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 576px) {
    margin-left: 15px;
  }
`;

const ActionButton = styled(Button)`
  &&& {
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: inherit;
    }
  }
`;

const Drawer = styled.section`
  width: 100vw;
  height: 100vh;
  background: var(--primary-color);
  padding: var(--navbar-height) calc(var(--base-padding) * 3);
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(50%);
  z-index: 999;
  transition: all 0.5s ease-out;
  pointer-events: none;
  overflow: hidden;

  &.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  & > .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
  }

  & > .bg-cover {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(20deg) scaleX(2);
    opacity: 0.5;
    pointer-events: none;
  }

  & > ul {
    background: transparent;
    color: #fff;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export default Header;
