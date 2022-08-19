import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background-color: #91c90e;
  color: white;
  margin: 10px auto;
  transition: background 0.3s;
  padding: 12px 60px;
  border-radius: 6px;
  border-width: 1px;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 700;

  &:hover {
    background-color: #81b013;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: no-drop;
  }
`;
