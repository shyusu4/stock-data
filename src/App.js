import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rate-details" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
