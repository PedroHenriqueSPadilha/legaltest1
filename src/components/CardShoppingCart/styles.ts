import styled from "styled-components";

export const CardShoppingCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  background: ${(props) => props.theme["black-400"]};
  color: ${(props) => props.theme["white"]};
  padding: 20px;
  height: 420px;
  margin: 10px;
`;

export const InformationShoppingCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 300px;
    heigth: auto;
    min-width: 300px;
    max-width: 400px;
  }
`;

export const PriceShoppingCart = styled.div`
  p {
    font-size: 18px;
  }

  span {
    font-size: 25px;
    color: #67e8f9;
  }
`;

export const DeleteItemShoppingcart = styled.div`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    color: red;
  }
`;
