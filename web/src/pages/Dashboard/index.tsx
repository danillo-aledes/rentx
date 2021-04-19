import React from 'react';

import Button from '../../components/Button';

import { Container, Logo, Title, SubTitle, Group, CarImg } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Logo />

      <Title>
        <h1>Alugue um carro de maneira simples e fácil</h1>
      </Title>

      <SubTitle>
        <p>Vários modelos para você dirigir seguro, com conforto e segurança.</p>
      </SubTitle>

      <Group />

      <CarImg />

      <Button type="submit">
        <p>Começar agora</p>
      </Button>
    </Container>
  );
}

export default Dashboard;
