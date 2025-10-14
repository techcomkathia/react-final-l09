import { TemaProvider } from "./TemaContext";
import { ProdutosProvider } from "./ProdutosContext";
import { UsuariosProvider } from "./UsuariosContext";

export default function AppProvider({ children }) {
  return (
    <TemaProvider>
      <UsuariosProvider>
        <ProdutosProvider>
          {children}
        </ProdutosProvider>
      </UsuariosProvider>
    </TemaProvider>
  );
}
