import styled from 'styled-components';

function Contact() {
  return (
    <Wrapper>
      <h1>聯絡頁</h1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  & > h1 {
    font-size: 3rem;
  }
`;

export default Contact;
