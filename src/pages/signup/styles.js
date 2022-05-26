import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  img {
    width: 200px;
    -moz-box-shadow: 0px 6px 5px #ccc;
    -webkit-box-shadow: 0px 6px 5px #ccc;
    box-shadow: 0px 0px 15px #ccc;
    -moz-border-radius: 180px;
    -webkit-border-radius: 190px;
    border-radius: 190px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    min-width: 250px;
    height: 40vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 5px;

    input {
      width: 100%;
      border-radius: 30px;
      height: 10%;
      border: none;
      padding: 10px;
      box-shadow: 1px 1px #666;
    }
    input::placeholder {
      color: var(--primary-two);
    }
    input:focus,
    textarea:focus {
      color: #000;
      background-color: var(--secondary-one);
      border: 2px solid var(--secondary-two);
    }
    button {
      border-radius: 5px;
      border: none;
      height: 50px;
      color: #fff;
      background-color: var(--button);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 10%;
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
    text-shadow: 1px 1px 2px black;
    font-size: 1.5rem;
  }

  label {
    padding-left: 10px;
    text-align: left;
    text-shadow: 1px 1px 2px black;
    font-size: 0.9rem;
  }

  span {
    text-shadow: 1px 1px 2px black;
    font-size: 0.7rem;
    color: var(--secondary-three);
    a {
      color: var(--secondary-three);
    }
    a.bold {
      font-weight: 700;
    }
  }
`;
