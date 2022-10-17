import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import GlobalStyles from './styles/Globalstyles';
import Theme from './styles/Theme';

const Router = () => {
    return(
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <GlobalStyles />
                <Routes>
                    <Route path='/' element={<Main/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider >
    )
}
export default Router;