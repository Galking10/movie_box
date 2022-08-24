import {Routes, Route} from 'react-router-dom'
import { Homepage} from './pages/Homepage'
import { MoviePage } from './pages/MoviePage';


function App() {
  return (
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/movie/:id' element={<MoviePage/>}/>
   </Routes>
  );
}

export default App;
