import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 700px;
    height: 90%;
    background-color: #fff;
    border-radius: 10px;
    overflow-y: scroll;
    overflow-x: hidden;

    .line {
    height: 3px;
    width: 110%;
    margin-bottom: 10px;
    background-color: var(--background);
    }

    .close {
    width: 100%;
    text-align: end;
    height: fit-content;
    position: relative;
    font-size: 25px;
    color: red;
    
    svg {
      cursor: pointer;
      transition: 0.2s;
      :hover {
        transform: scale(1.2)
      }
    }
  }

`

export const Card = styled.div`

    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 35px;
    padding: 5px;
    text-align: start;
    border-radius: 8px;
    margin-bottom: 10px;

    .price, .type {
        width: 10%;
    }

    .title {
        font-weight: bolder;
        font-size: 1.3rem;
    }

`