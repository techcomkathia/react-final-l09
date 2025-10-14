# 📘 Esquema Visual e Fluxo de Funcionamento: Aplicação React com Contexto de Tema e Roteamento

Este documento resume a arquitetura do projeto, utilizando Contextos para gerenciamento de estado global (Tema) e o `react-router-dom` para roteamento.

## 📁 Estrutura do Projeto

A organização dos arquivos é fundamental para manter o código escalável e de fácil manutenção.

```
src/
├── contexts/
│   ├── TemaContext.jsx   ← Cria e gerencia o estado do tema atual (claro/escuro).
│   └── AppProvider.jsx   ← Componente que combina e fornece todos os contextos (Tema, Usuário, Dados, etc.) à aplicação.
│
├── pages/
│   ├── Home.jsx        ← Página principal. Usa o tema e dados globais.
│   ├── Sobre.jsx
│   └── Contato.jsx
│
├── components/
│   ├── Cabecalho.jsx   ← Componente de cabeçalho. Contém o botão para trocar o tema.
│   ├── Rodape.jsx
│   └── BotaoTema.jsx   ← Componente que chama a função alternarTema() do contexto.
│
├── styles/
│   ├── GlobalStyle.js   ← Estilos globais definidos com createGlobalStyle.
│   └── temas.js         ← Objeto que define as variáveis de estilo (temaClaro / temaEscuro).
│
├── App.jsx            ← Configura o ThemeProvider e as rotas (BrowserRouter/Routes).
└── main.jsx           ← Envolve o <App /> com o <AppProvider>.
```


## 🔁 Fluxo de Componentes (De fora para dentro)

O fluxo segue uma hierarquia de invólucros, onde as funcionalidades globais são adicionadas em "camadas" externas, ficando disponíveis para o "núcleo" (componentes e páginas).

> **💡 Analogia:** A **"Camada de Cebola"**
>
> 1. **Invólucro Externo:** `<AppProvider>` → Fornece o contexto de Tema e outros dados globais.
> 2. **Estilo Global:** `<ThemeProvider>` → Aplica o estilo (cores, fontes) do tema atual em toda a aplicação.
> 3. **Navegação:** `<BrowserRouter>` → Gerencia qual página deve ser exibida.
> 4. **Núcleo:** Componentes e Páginas → Consomem os dados do contexto e exibem o conteúdo.

## 🧠 Passo a passo lógico

| Etapa | O que fazer | Onde fica |
| :---: | :--- | :--- |
| **1** | Criar temas (claro e escuro) | `src/styles/temas.js` |
| **2** | Criar estilo global com `createGlobalStyle` | `src/styles/GlobalStyle.js` |
| **3** | Criar contexto do tema (estado e função `alternarTema`) | `src/contexts/TemaContext.jsx` |
| **4** | Criar o `AppProvider` que envolve todos os contextos | `src/contexts/AppProvider.jsx` |
| **5** | Envolver `<App />` com `<AppProvider>` | `src/main.jsx` |
| **6** | Usar `useContext(TemaContext)` dentro de `<App />` | `src/App.jsx` |
| **7** | Envolver rotas com `<ThemeProvider theme={tema}>` | `src/App.jsx` |
| **8** | Criar o roteamento com `react-router-dom` | `src/App.jsx` |
| **9** | Criar componentes e páginas que usam o tema | `src/pages/` e `src/components/` |
# react-final-l09
