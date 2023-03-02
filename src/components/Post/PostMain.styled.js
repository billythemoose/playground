import styled from "styled-components";

export const StyledPostMainContainer = styled.div`
    background: ${({ theme }) => theme.darkMidground};
    height: 100vh;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: start;
    gap: 4.5rem;
    padding 1rem 2rem;
    border-radius: 10px; 
    box-shadow: 0px 2px 28px rgba(0,0,0,0.5);
`;

export const StyledPostMain = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (max-width: 950px) {
        grid-template-columns: 1rf; 
    }
`;