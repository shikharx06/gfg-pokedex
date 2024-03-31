import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import PokemonDetails from './pages/pokemonDetails/PokemonDetails';

function App() {
  // https://reactrouter.com/en/main/router-components/browser-router
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
