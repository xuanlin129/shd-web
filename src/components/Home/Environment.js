import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const environmentImages = Object.values(
  import.meta.glob('@/assets/environment_*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, as: 'url' }),
);

function Environment() {
  const marqueeRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!marqueeRef.current) return;

      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 25,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper className="wrapper">
      <h2>廠房環境</h2>
      <div className="marquee-container">
        <div ref={marqueeRef}>
          {environmentImages.map((src, i) => (
            <img key={i} src={src} alt="environment" />
          ))}
          {environmentImages.map((src, i) => (
            <img key={`dup-${i}`} src={src} alt="environment" />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  & > h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 50px;
    text-align: center;
  }

  & > .marquee-container {
    width: 100%;
    overflow: hidden;

    & > div {
      display: flex;
      gap: 24px;
      padding-right: 24px;
      width: max-content;

      & img {
        height: 300px;
        width: auto;
        max-width: initial;
        object-fit: contain;
        border-radius: 16px;

        &:nth-child(even) {
          margin-top: 50px;
        }
        &:nth-child(odd) {
          margin-bottom: 50px;
        }
      }
    }
  }
`;

export default Environment;
