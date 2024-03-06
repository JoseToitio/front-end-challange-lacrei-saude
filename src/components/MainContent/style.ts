import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 48px;
  margin-bottom: 64px;
  gap: 226px;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin: 80px 0 80px 0;
  flex-direction: column;
  width: 488px;
`;
export const Title = styled.h1`
  font-size: 48px;
  line-height: 57.6px;
  text-align: start;
`;
export const DescriptionTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #2d2d2d;
  margin-bottom: 32px;
`;

export const Rectangle = styled.div`
  width: 160px;
  background-color: #018762;
  height: 2px;
  border-radius: 4px;
  margin: 16px 0 16px 0;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 24px;
`;

export const Buttons = styled.button<{ background: boolean }>`
  width: 232px;
  height: 48px;
  padding: 10px 32px 10px 32px;
  border: ${({ background }) => (background ? "none" : " 1px solid #018762")};
  cursor: pointer;
  background-color: ${({ background }) => (background ? "#018762" : " #FFFF")};
  color: ${({ background }) => (background ? "#FFFF" : "#018762")};
  border-radius: 8px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`;
