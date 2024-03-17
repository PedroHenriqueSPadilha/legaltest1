import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${(props) => props.theme["black-400"]};
  color: ${(props) => props.theme["white"]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 390px;
  height: 420px;
  margin: 10px;
`;

export const ImageContent = styled.div`
  img {
    width: 300px;
    heigth: auto;
    min-width: 300px;
    max-width: 400px;
  }
`;

export const ButtonPrice = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  button {
    border-radius: 999px;
    border: 1px solid gray;
    background: ${(props) => props.theme["black-400"]};
    color: ${(props) => props.theme["white"]};
    display: flex;
    align-items: center;
    width: 240px;
    top: 320px;
    left: 32px;
    justify-content: space-between;
    height: 48px;

    span {
      border-radius: 999px;
      background: ${(props) => props.theme["blue-400"]};
      padding: 2px;
      width: 83px;
      height: 40px;
      display: table;
      line-height: 40px;
    }

    p {
      padding: 10px;
    }
  }
`;
