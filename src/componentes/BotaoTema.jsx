import { Link } from "react-router-dom";
import styled from "styled-components";
import BotaoTema from "./BotaoTema";

const Container = styled.header`
  background-color: ${({ theme }) => theme.cores.cabecalho};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.nav`
  a {
    margin: 0 1rem;
    font-weight: 500;
  }
`;

export default function Cabecalho({ alternarTema }) {
  return (
    <Container>
      <h1>Minha Aplicação</h1>
      <Menu>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </Menu>
      <BotaoTema alternarTema={alternarTema} />
    </Container>
  );
}
