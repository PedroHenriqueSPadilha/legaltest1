import styled from "styled-components";

export const CartShoppingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TotalAndCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 10px 10px auto;

  background: ${(props) => props.theme["black-400"]};
  color: ${(props) => props.theme["white"]};
  padding: 20px;
  width: 500px;
  height: 200px;
`;

export const TotalDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 25px;
    color: #67e8f9;
  }
`;

export const CheckoutButton = styled.button`
  background-color: #67e8f9;
  color: ${(props) => props.theme["black-500"]};
  padding: 15px 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #67e8f9;
  }
`;
