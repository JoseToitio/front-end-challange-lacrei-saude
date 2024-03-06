import styled from "styled-components";

export const Title = styled.h1`
  font-size: 120px;
  line-height: 120px;
  letter-spacing: -2px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0 6px 6px #00000066;

`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #014687, #018383 );
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10rem;
  display: flex;
  gap: 65px;
  justify-content: center;
  align-items: center;
`