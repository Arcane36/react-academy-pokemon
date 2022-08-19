import styled, { css } from "styled-components";

interface CardProps {
  isLoading?: boolean;
}

export const CardStyled = styled.div<CardProps>`
  text-align: center;
  padding: 15px;
  border: 1px solid #d2dceb;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
  background-color: #fff;
  transition: border-color 0.3s;
  cursor: pointer;

  ${({ isLoading }) =>
    isLoading &&
    css`
      filter: blur(5px);
    `}

  &:hover {
    border-color: #006;
  }
`;

export const CardTitleStyled = styled.div`
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const CardImageStyled = styled.img`
  margin-bottom: 20px;
  max-height: 100px;
`;

export const CardTextStyled = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
