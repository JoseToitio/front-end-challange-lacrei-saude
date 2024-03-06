import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  flex-wrap: wrap;
  align-items: center;
  gap: 46px;
`;

export const Socials = styled.div`
  display: flex;
  gap: 56px;
  flex-direction: column;
`;

export const HelpersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Helpers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #131313;
  }
  span {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #2d2d2d;
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #b2dfd0;
  height: 2px;
  border-radius: 4px;
`;

export const Copyright = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 56px 0 0 0;
  margin-bottom: 1.5rem;
  :last-child {
    margin-top: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #515151;
  }
`;
