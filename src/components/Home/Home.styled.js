import styled from "styled-components";
import { theme } from "../../theme";

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
    gap: 4.5rem; 
    padding: 1rem 2rem 1rem 6rem;
    background-color: ${({ theme }) => theme.primaryDark };
`;

export const StyledContent = styled.div`
    max-width: 864px;
    width: 100%; 
    display: flex; 
    flex-direction: column;
    gap: 3rem; 
`;

export const StyledSearch = styled.section`
    width: 100%; 
    div {
        display: flex; 
        justify-content: space-between;
        
        span {
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 160%;
            color: ${({ theme }) => theme.secondaryDark };
        }

        small {
            font-style: normal; 
            font-weight: 400;
            font-size: 14px; 
            line-height: 160%; 
            color: #FF0000
        }
    }

    input {
        margin-top: 0.75rem;
        background: ${({ theme }) => theme.card };
        border: 1px solid ${({ theme }) => theme.primaryDark };
        border-radius: 6px; 
        padding: 0.75rem 0rem; 
        width: 100%;
        color: #FFFFFF;
        &::placeholder {
            color: #808080; 
        }
    }
`;

export const StyledHeading = styled.div`
    max-width: 864px;
    width: 100%;
    height: 212px; 
    display: flex; 
    background: ${({ theme }) => theme.primaryLight };
    box-sizing: border-box;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px; 
    padding: 2rem; 
    gap: 2rem;

    img {
        border-radius: 10px; 
    }

    div {
        width: 100%; 
        height: 100%; 
        display: flex; 
        flex-direction: column; 
        gap: 0.5rem; 
        
        header {
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            
            h1 {
                font-weight: 700; 
                font-size: 1.5rem; 
                line-height: 130%;
            }

            a {
                font-weight: 700; 
                font-size: 0.75rem; 
                line-height: 160%; 
                text-transform: uppercase;
                text-decoration: none; 
                display: flex; 
                gap: 0.5rem; 
                align-items: center; 
                color: ${({ theme }) => theme.primaryDark };
                transition: border 0.2s
                border-bottom: 2px solid transparent;
                &:hover {
                    border-bottom: 2px solid ${({ theme }) => theme.primaryHover };
                }
            }
        }

        main {
            p {
                margin-top: 0.5rem; 
                word-wrap: break-word; 
            }
        }

        footer {
            display: flex;
            height: 100%; 
            align-items: flex-end;
            gap: 1.5 rem; 
            span {
                display: flex; 
                align-items: center;
                gap: 0.5rem; 
                color: ${({ theme }) => theme.stupidColor };
                i {
                    color: ${({ theme }) => theme.stupidColorDark };
                }
            }
        }
    }

    @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
        height: auto;
        align-items: center;
        justify-content: center; 
    }

    @media (max-width: 450px) {
        div {
            header {
                flex-direction: column; 
                gap: 0.8rem;
            }

            main {
                p {
                    text-align: center;
                }
            }

            footer {
                display: flex; 
                flex-direction: column; 
                align-items: center; 
            }
        }
    }
`;