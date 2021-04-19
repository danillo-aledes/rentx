import React from 'react';

import logoImg from '../../assets/logo.svg';
import groupImg from '../../assets/group.png';
import carImg from '../../assets/car-image1.png';

import Button from '../../components/Button';

import { Container, Title, SubTitle, Logo, Group, CarImg } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="RentX" />
      </Logo>

      <Title>
        <h1>Alugue um carro de maneira simples e fácil</h1>
      </Title>

      <SubTitle>
        <p>Vários modelos para você dirigir seguro, com conforto e segurança.</p>
      </SubTitle>

      <Group>
        <img src={groupImg} alt="Group" />
      </Group>

      <CarImg>
        <img src={carImg} alt="Group" />
      </CarImg>

      <Button type="submit">
        <p>Começar agora</p>
      </Button>
    </Container>
  );
}

export default Dashboard;
