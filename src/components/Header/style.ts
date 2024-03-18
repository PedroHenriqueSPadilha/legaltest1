import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["black-500"]};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
`;

export const ShoppingWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SearchProductHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    border: none;
    border-radius: 20px;
    background: ${(props) => props.theme["black-400"]};
    color: ${(props) => props.theme["white"]};
    padding: 10px;
    width: 300px;
  }
`;
