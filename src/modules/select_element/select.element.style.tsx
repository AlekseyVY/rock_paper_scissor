import styled from 'styled-components';

export const HoverShadow = styled.div`
  display: none;
  position: absolute;
  top: -22px;
  left: -25px;
`;

export const Container = styled.div`
  position: relative;
  &:hover ${HoverShadow}{
    display: block;
    cursor: pointer;
  }
`;
