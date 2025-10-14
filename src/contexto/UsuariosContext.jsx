import { createContext, useState } from "react";

export const UsuariosContext = createContext();

export function UsuariosProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(nome) {
    setUsuario({ nome });
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <UsuariosContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuariosContext.Provider>
  );
}
