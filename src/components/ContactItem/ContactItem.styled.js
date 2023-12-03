import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 10px;
  border-bottom: 2px solid black;
`;

export const ButtonRemove = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  border: 2px solid black;
  border-radius: 10px;
  font-weight: 500px;
  background-color: grey;
  &:hover {
    background-color: white;
  }
`;
