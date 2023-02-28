import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';
import PostMain from './components/Post/PostMain';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="App">
          <header className="App-header">
            <p>
              Doin some <code>STUFF</code> and seeing what works.
            </p>
            <a
              className="App-link"
              href="https://github.com/billythemoose?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </header>
        </div>
        <PostMain title="testing" content="here's some content" />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
