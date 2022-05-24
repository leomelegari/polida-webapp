import styled from "styled-components";

export const InputArea = styled.input`
  color: var(--button);
  padding-left: 10px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  ::placeholder {
    opacity: 0.4;
    color: var(--button);
  }
`;
