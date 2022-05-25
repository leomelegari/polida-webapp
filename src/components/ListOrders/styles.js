import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 10px;
    width: 700px;
    height: 750px;
    background-color: #fff;
    border-radius: 10px;
    overflow-y: scroll;
    overflow-x: hidden;

`

export const Card = styled.div`

    width: 100%;
    height: 65px;
    display: flex;
    background-color: var(--gray-one);
    justify-content: space-between;
    align-items: center;
    line-height: 35px;
    padding: 5px;
    text-align: start;
    border-radius: 8px;
    margin-bottom: 10px;

    .name, .contact, .order, .unit, .type {
        width: 20%;
    }

`