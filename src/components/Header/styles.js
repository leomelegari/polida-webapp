import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 0 15px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    .logo{
        img {
            width: 150px;
        }
    }

    .buttons {
        display: flex;
        width: 50%;
        justify-content: space-between;
        button {
            width: 150px;
            height: 40px;
            background-color: var(--primary-one);
            color: white;
            font-size: 15px;
            border-radius: 8px;
            transition: 0.3s;

            :hover {
                background-color: var(--primary-three);
            }
        }
        .logout {
            background-color: firebrick;

            :hover {
                background-color: red;
            }
        }
    }
`