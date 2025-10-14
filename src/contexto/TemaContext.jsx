import { createContext, useState } from "react";
import { temaClaro, temaEscuro } from "../styles/Temas";

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(temaClaro);

  function alternarTema() {
    setTema((prevTema) =>
      prevTema.nome === "claro" ? temaEscuro : temaClaro
    );
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
