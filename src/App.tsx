import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { fetchPokemons } from './apis/fetchPokemons';
import PokemonDetails from './pages/pokemonDetails/PokemonDetails';

function App() {
  // https://reactrouter.com/en/main/routers/create-browser-router
  const router = createBrowserRouter([
    {
      element: <Dashboard />,
      path: '/',
      loader: fetchPokemons,
    },
    {
      element: <PokemonDetails />,
      path: '/pokemon/:id',
    },
  ]);

  return (
    <>
      {/* https://reactrouter.com/en/main/routers/router-provider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
