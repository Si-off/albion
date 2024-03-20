import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../src/styles/global/normalize.css';
import '../src/styles/global/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailPage, MainPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/details' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
