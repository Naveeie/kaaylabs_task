import './App.css';
import DisplayComponent from './component/displayComponent';
import UseReducer from './useReducer/useReducer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<DisplayComponent/>}></Route>
           <Route path="/usereducer" element={<UseReducer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
