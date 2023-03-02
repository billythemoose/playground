import styled from "styled-components";

export const StyledPostCard = styled.nav`
    text-decoration: none; 
    flex-direction: column; 
    gap: 1.25rem; 
    padding: 2rem; 
    background: ${({ theme }) => theme.darkForeground };
    border-radius: 10px; 
    border: 2px solid transparent; 
    box-shadow: 0px 1px 28px rgba(0,0,0,0.5);
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
            color: ${({ theme }) => theme.darkTextHeading };
        }

        span {
            font-size: 0.875rem; 
            line-height: 160%;
            color: ${({ theme }) => theme.darkTextMain };
        }
    }

    main {
        height: 112px; 
        overflow: hidden;
        p {
            height: 100%; 
            text-align: justify;
            color: ${({ theme }) => theme.darkTextMain };
        }
    }

    &:hover {
        border: 2px solid ${({ theme }) => theme.darkHyperlink };
    }

`;