import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AddEntry from './components/AddEntry';
import EditEntry from './components/EditEntry';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>

        <Route path="/add" element={<AddEntry />}>
        </Route>

        <Route path="/edit/:id" element={<EditEntry />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
