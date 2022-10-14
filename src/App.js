import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DisplayDetails from './components/DisplayDetails';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:name" element={<DisplayDetails />} />
      </Routes>
    </>
  );
}

export default App;
