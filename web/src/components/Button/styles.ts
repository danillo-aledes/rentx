import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  position: absolute;
  width: 292px;
  height: 80px;
  left: 160px;
  top: 680px;

  background: #DC1637;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #fff;
  }

  &:hover {
    background: ${shade(0.2, '#e02041')};
  }
`;
