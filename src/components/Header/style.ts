import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["black-500"]};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
`;

export const ShoppingWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
