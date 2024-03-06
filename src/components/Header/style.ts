import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #FFFF;
  padding: 24px 24px;
`

export const Helper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    padding: 10px 32px 10px 32px;
    cursor: pointer;
    color: #018762;
  }

  button {
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    padding: 10px 32px 10px 32px;
    border-radius: 8px;
    background-color: #018762;
    color: #FFFF;
    border: none;
  }
`