import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SideBar from './components/SideBar';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import DashBoard from './components/DashBoard';
import { ApiProvider } from './context/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <DarkModeProvider>
        <ApiProvider>
          <QueryClientProvider client={queryClient}>
            <DashBoard>
              {location.pathname === '/' ||
              location.pathname === '/signup' ||
              location.pathname === '/admin' ? (
                <Outlet />
              ) : (
                <>
                  <SideBar />
                  <Outlet />
                </>
              )}
            </DashBoard>
          </QueryClientProvider>
        </ApiProvider>
      </DarkModeProvider>
    </ThemeProvider>
  );
}

export default App;
