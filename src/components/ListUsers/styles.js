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
  overflow-y: auto;
  overflow-x: hidden;

  .line {
    height: 3px;
    width: 110%;
    margin-bottom: 10px;
    background-color: var(--background);
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  line-height: 35px;
  padding: 5px;
  text-align: start;
  border-radius: 8px;
  margin-bottom: 10px;

  .name,
  .contact,
  .order {
    width: 33%;
  }

  .title {
    font-weight: bolder;
    font-size: 1.3rem;
  }
`;
