import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: radial-gradient(#1F3757, #131537);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 1366px;
  height: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const RulesContainer = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
`;
