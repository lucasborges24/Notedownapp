import styled from 'styled-components';

function ButtonDark({ children, width }) {
  return (
    <>
      <ButtonDarkStyle width={width}>{children}</ButtonDarkStyle>
    </>
  );
}

function ButtonLight({ children, width }) {
  return (
    <>
      <ButtonLightStyle width={width}>{children}</ButtonLightStyle>
    </>
  );
}

const ButtonDarkStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ width }) => width};
  width: 100%;
  height: 48px;
  border-radius: 20px;
  background-color: rgb(255, 101, 0);
  border: 1px solid #ff6500;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s, border-width 0.1s ease;
  border-radius: 0.25rem;
  cursor: pointer;
  ion-icon {
    font-size: 30px;
    margin-right: 7px;
  }
  :hover {
    background-color: #ff8b1f;
  }
  :focus {
    border-width: 2px;
    border-radius: 0.3rem;
    outline: currentColor;
  }
`;

const ButtonLightStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ width }) => width};
  width: 100%;
  height: 48px;
  background-color: #502E7E;
  border: none;
  color: #D9D9D9;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s, border-width 0.1s ease;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    filter: brightness(1.1);
  }
  :focus {
    border: 1px solid #D9D9D9;
    outline: currentColor;
  }
`;

export { ButtonDark, ButtonLight };