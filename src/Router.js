import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import BoardDetailTable from './components/BoardDetailTable';
import Slidebar from './components/Slidebar';
import Board from './pages/Board';
import Main from './pages/Main';
import GlobalStyles from './styles/Globalstyles';
import Theme from './styles/Theme';

const Router = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Slidebar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='board' element={<Board />} />
          <Route path='board/:id' element={<BoardDetailTable />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default Router;
