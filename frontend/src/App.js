import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import Display from './components/display';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Create/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/display" element={<Display/>}/>


        </Routes></BrowserRouter>
  );
}

export default App;
