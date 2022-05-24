import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    min-width: 250px;
    height: 20vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 5px;

    input,
    button {
      width: 100%;
      height: 20%;
    }
  }

  /* @media only screen and (max-width: 768px) {
    form {
      width: 80vw;
    }
  } */
`;

export const Form = styled.div`
  background-color: var(--primary-two);
  padding: 30px;
  margin-top: 50px;
  color: var(--secondary-two);
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
  }

  label {
    text-align: left;
    font-size: 0.9rem;
  }

  span {
    font-size: 0.7rem;
    color: var(--secondary-three);
    a {
      color: var(--secondary-three);
    }
  }
`;
