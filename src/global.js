import {createGlobalStyle} from 'styled-components'; 
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: background: ${({ theme }) => theme.darkBackground}; 
        color: color: ${({ theme }) => theme.primaryLight};
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .App {
      text-align: center;
    }
      
    .App-logo {
      height: 40vmin;
      pointer-events: none;
    }
      
    .App-header {
      background-color: #111c34;
      min-height: 15vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }
    
    .App-link {
      color: #61dafb;
    }
`