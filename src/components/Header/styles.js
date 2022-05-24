import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;

    img {
        width: 150px;
    }

    button {
        width: 150px;
        height: 40px;
        background-color: var(--primary-one);
        color: white;
        font-size: 15px;
        border-radius: 8px;
    }
`