import './App.css';
import Navbar from './components/Navbar';
import TravelDiary from './components/TravelDiary'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TravelDiary /> */}
      <Routes>
        <Route exact path="/" element={<TravelDiary />}>
        </Route>

        <Route path="/add">
        </Route>

        <Route path="/edit/:id">
        </Route>
      </Routes>
    </div>
  );
}

export default App;
