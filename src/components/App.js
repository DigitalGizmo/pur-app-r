import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <nav>
        Picturing Urban Renewal - {" "}
        <Link to="/">Home</Link> |{" "}
        <Link to="/people/haines-dauner">Haines-Dauner</Link> |{" "}
        <Link to="/places/newburgh">Newburgh</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;


 
