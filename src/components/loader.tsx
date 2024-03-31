import { PacmanLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <PacmanLoader color="#36d7b7" />
    </div>
  );
};
