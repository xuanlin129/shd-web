import React from 'react';
import styled from 'styled-components';
import { useOutlet } from 'reconnect.js';

export default function GlobalSpinner() {
  const [mounted, setMounted] = React.useState(false); // workaround to handle the initial flash issue
  const [info = {}] = useOutlet('loading');
  const { loading, message } = info;

  React.useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <Backdrop $visible={loading}>
      <Wrapper $visible={loading}>
        <img className="logo" src={new URL('@/assets/logo.png', import.meta.url).href} alt="spinner" />
        <div className="msg">{message || '請稍候...'}</div>
      </Wrapper>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transition: all 100ms;
  backdrop-filter: ${(props) => (props.$visible ? 'blur(8px)' : 'none')};
  z-index: 1001; /* antd modal: 1000 */
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 200px;
  background-color: white;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transition: all 200ms ease-in-out;
  border-radius: 50%;
  box-shadow: ${(props) => (props.$visible ? '1px 2px 8px rgba(0,0,0,0.7)' : 'none')};
  z-index: 2;

  @keyframes infinite-spinning {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(360deg) scale(1.2);
    }
    100% {
      transform: rotate(720deg) scale(1);
    }
  }
  .logo {
    animation: infinite-spinning 1.5s infinite;
  }

  & > img.logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
    margin-bottom: 15px;
    mix-blend-mode: difference;
  }
`;
