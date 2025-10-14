import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.header`
  background-color: ${({ theme }) => theme.cores.cabecalho};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.nav`
  a {
    margin: 0 10px;
    font-weight: 500;
  }
`;

export default function Cabecalho() {
  return (
    <Container>
      <h1>Minha Aplicação</h1>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/produtos">Todos os produtos</Link>
      </Menu>
     
    </Container>
  );
}
