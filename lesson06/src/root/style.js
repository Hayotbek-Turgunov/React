import styled, { css } from "styled-components";

const getStyle = ({ type }) => {
  switch (type) {
    case "primary":
      return { color: "white", background: "#2e4ff7", border: 0 };
    case "delete":
      return {
        color: "#ff0000",
        background: "white",
        border: "1px solid red",
      };
    case "warning":
      return { color: "coral", background: "white", border: "1px solid coral" };
    default: {
      return { color: "coral", background: "white", border: "1px solid coral" };
    }
  }
};

const common = css`
  height: 44px;
  width: 120px;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

export const Button = styled.button`
  background-color: ${(props) => getStyle(props).background};
  color: ${(props) => getStyle(props).color};
  border: ${(props) => getStyle(props).border};
  ${common}
`;

export const PrimaryButton = styled.button`
  background-color: #2e4ff7;
  color: white;
  border: 0;
  ${common}
`;

export const DeleteButton = styled(PrimaryButton)`
  background-color: #ffffff;
  color: #d50101;
  border: 1px solid red;
`;

export const WarningButton = styled(DeleteButton)`
  background-color: #ffffff;
  color: coral;
  border: 1px solid coral;
`;
