import React from 'react';
import styled from 'styled-components';
import { Button, Divider, Drawer, Dropdown, Grid, Menu, Select, Space } from 'antd';
import * as AppActions from '../utils';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon } from '@styled-icons/material';
import { EarthAmericas } from '@styled-icons/fa-solid';

const { useBreakpoint } = Grid;

const navItems = [
  { path: '/about', label: '關於' },
  { path: '/contact', label: '聯絡' },
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
      <div className="container">
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
              <Divider vertical style={{ borderColor: 'var(--secondary-color)', height: 25 }} />
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
              </Dropdown>
            </Space>
          )}

          {screens.xs && <MenuIcon size={30} color="var(--secondary-color)" onClick={() => setDrawer(true)} />}
        </nav>
      </div>

      <Drawer
        title="選單"
        onClose={() => {
          setDrawer(false);
        }}
        open={drawer}
      >
        <Menu
          mode="vertical"
          style={{ border: 'none' }}
          selectedKeys={location.pathname}
          onClick={(e) => {
            AppActions.navigate(e.key);
            setDrawer(false);
          }}
          items={navItems.map((it) => ({ key: it.path, label: it.label }))}
        />
        {/* <Divider style={{ borderColor: 'var(--secondary-color)', opacity: 0.3 }} /> */}

        <div style={{ textAlign: 'center', marginTop: 30 }}>
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
        </div>
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: var(--navbar-height);
  box-shadow: 0 1px 8px #ccc;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;

  & > .container {
    height: 100%;
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
  max-width: 150px;
  object-fit: contain;
  mix-blend-mode: difference;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ActionButton = styled(Button)`
  &&& {
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export default Header;
