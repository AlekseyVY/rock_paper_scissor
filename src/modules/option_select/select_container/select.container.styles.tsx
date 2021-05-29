import styled from 'styled-components';

export const Container = styled.div`
  width: 476px;
  height: 430px;
  position: relative;
`;

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const BotContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Path = styled.div`
  position: absolute;
  top: 90px;
  left: 90px;
  z-index: 1;
`;
