import styled from 'styled-components';

export const Container = styled.div`
  width: 128px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: Barlow Semi Condensed, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
`;
