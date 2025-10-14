import styled from "styled-components";

const Container = styled.main`
  padding: 2rem;
`;

export default function Home() {
  return (
    <Container>
      <h2>Bem-vindo à Página Inicial</h2>
      <p>Esta é a página principal da aplicação feita com Styled Components.</p>
    </Container>
  );
}
