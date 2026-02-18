import React from 'react';
import styled from 'styled-components';

function RipperButton({
  style,
  onClick,
  primary = 'var(--primary-color)',
  secondary = '#fff',
  width = 'auto',
  children,
  ...rest
}) {
  const handleMouseEnter = (e) => {
    // 確保是針對 button 元素本身定位
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  };

  return (
    <StyledBtn
      onMouseEnter={handleMouseEnter}
      style={style}
      onClick={onClick}
      $primary={primary}
      $secondary={secondary}
      $width={width}
      {...rest}
    >
      <span className="btn-text">{children}</span>
    </StyledBtn>
  );
}

const StyledBtn = styled.button`
  width: ${(props) => props.$width};
  position: relative;
  padding: 12px 48px;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.$primary};
  border: 1px solid ${(props) => props.$primary};
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  transition: color 0.4s ease;
  /* 修復手機版 border-radius 內的溢出裁切問題 */
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  /* 初始變數預設值，避免未 hover 前報錯或位置錯誤 (雖然 scale 0 看不到) */
  --x: 50%;
  --y: 50%;

  .btn-text {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 200%;
    aspect-ratio: 1/1;
    background-color: ${(props) => props.$primary};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
    z-index: 1;
    pointer-events: none;
  }

  &:hover {
    color: ${(props) => props.$secondary};
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1.1);
    transition: transform 0.6s ease-out;
  }
`;

export default RipperButton;
