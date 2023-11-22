import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Date from './Date';
import Date2 from './Date2';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<Date/>}></Route>
        <Route path='/Date2' element={<Date2/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
