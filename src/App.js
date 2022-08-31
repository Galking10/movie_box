import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { MoviePage } from './pages/MoviePage';
import { useSelector } from 'react-redux';
import { Spinner } from './components/spinner/Spinner';

function App() {
  const { isLoading } = useSelector(state => state.LoadingData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
      {isLoading && <Spinner />}
    </>
  );
}

export default App;
