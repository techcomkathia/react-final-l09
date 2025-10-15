import { TemaProvider } from "./TemaContext";
import { ProdutosProvider } from "./ProdutosContext";
import { UsuariosProvider } from "./UsuariosContext";
import { CarrinhoProvider } from "./CarrinhoContexto";

export default function AppProvider({ children }) {
  return (
    <TemaProvider>
      <UsuariosProvider>
        <ProdutosProvider>
          <CarrinhoProvider>
             {children}
          </CarrinhoProvider>
        </ProdutosProvider>
      </UsuariosProvider>
    </TemaProvider>
  );
}
