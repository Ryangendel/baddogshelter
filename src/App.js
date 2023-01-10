import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//COMPONENTS
function DogInfo() {
  return (
    <div className="dogs">
      <h1>THIS IS THE DOG INFO</h1>
    </div>
  );
}


//PAGES

function AvailableDog(props) {
  return (
    <div className="dogs">
      <h1>This is a dog with the id of</h1>
      <DogInfo/>
    </div>
  );
}

function AvailableDogs() {
  return (
    <div className="dogs">
      <h1>AVAILABLE DOGS PAGE</h1>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>ABOUT PAGE</h1>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>HOME PAGE</h1>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/availabledogs" element={<AvailableDogs />} />
          <Route path="/availabledog/:userid" element={<AvailableDog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
