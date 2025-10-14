import {styled} from "styled-components";

export const  DivContainer = styled.div`
    background-color: ${({ theme }) => theme.cores.cabecalho};
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border: 2px solid ${({ theme }) => theme.cores.texto};
`