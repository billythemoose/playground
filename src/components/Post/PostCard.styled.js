import styled from "styled-components";

export const StyledPostCard = styled.nav`
    width: 100%;
    text-decoration: none; 
    flex-direction: column; 
    gap: 1.25rem; 
    padding: 2rem; 
    background: ${({ theme }) => theme.card};
    border-radius: 10px; 
    border: 2px solid transparent; 
    height: 260px; 
    overflow: hidden; 
    transition: border 0.2s; 

    header {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        h1 {
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 160%;
            color: ${({ theme }) => theme.cardFont};
        }

        span {
            font-size: 0.875rem; 
            line-height: 160%;
            color: ${({ theme }) => theme.cardFont};
        }
    }

    main {
        height: 112px; 
        overflow: hidden;
        p {
            height: 100%; 
            text-align: justify;
            color: ${({ theme }) => theme.cardFont};
        }
    }

    &:hover {
        border: 2px solid ${({ theme }) => theme.cardFont};
    }

`;