import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #a54caf;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #a0455c;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;