import React from 'react';
import styled from 'styled-components';
import * as Ant from 'antd';
import * as AppActions from '../utils';
import { useLocation } from 'react-router-dom';
import { Menu } from '@styled-icons/material';

const { useBreakpoint } = Ant.Grid;

const navItems = [
  { path: '/about', label: '關於' },
  { path: '/contact', label: '聯絡' },
];

function Header() {
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawer, setDrawer] = React.useState(false);

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
          )}

          {screens.xs && <Menu size={30} color="var(--secondary-color)" onClick={() => setDrawer(true)} />}
        </nav>
      </div>

      <Ant.Drawer
        title="選單"
        onClose={() => {
          setDrawer(false);
        }}
        open={drawer}
      >
        <Ant.Menu
          mode="vertical"
          style={{ border: 'none' }}
          selectedKeys={location.pathname}
          onClick={(e) => {
            AppActions.navigate(e.key);
            setDrawer(false);
          }}
          items={navItems.map((it) => ({ key: it.path, label: it.label }))}
        />
      </Ant.Drawer>
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

      & > ul {
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

const ActionButton = styled(Ant.Button)`
  &&& {
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export default Header;
