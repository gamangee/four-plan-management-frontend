import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SideBar from './components/SideBar';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';

function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <DarkModeProvider>
        <SideBar />
        <Outlet />
      </DarkModeProvider>
    </ThemeProvider>
  );
}

export default App;
