import styled from 'styled-components';

// Images
import logImg from '../../assets/logo.svg';
import groupImg from '../../assets/group.png';
import backgroundImg from '../../assets/car-image1.png';

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`;

export const Logo = styled.div`
  position: absolute;
  width: 426px;
  height: 162px;
  left: 160px;
  top: 110px;

  background: url(${logImg}) no-repeat;
`;

export const Title = styled.div`
  position: absolute;
  width: 426px;
  height: 162px;
  left: 160px;
  top: 282px;

  h1 {
    font-family: 'Archivo', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 54px;
  }
`;

export const SubTitle = styled.div`
  position: absolute;
  width: 331px;
  height: 60px;
  left: 160px;
  top: 476px;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Group = styled.div`
  position: absolute;
  width: 477px;
  height: 612.59px;
  left: 737px;
  top: 104px;

  background: url(${groupImg}) no-repeat;
`;

export const CarImg = styled.div`
  position: absolute;
  width: 608px;
  height: 398px;
  left: 672px;
  top: 211px;

  background: url(${backgroundImg}) no-repeat center;
`;
