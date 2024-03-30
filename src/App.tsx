import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
