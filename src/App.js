import { Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quotes from './Components/Quotes';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
