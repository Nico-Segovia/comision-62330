import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  const title = "Nico";
  const subTitle = "Segovia";

  return (
  <>
    <Navbar/>
    <div>
      <h1>title: {title}</h1> 
      <h2>sub: {subTitle} </h2>
    </div>
  </>
  )
}

export default App
