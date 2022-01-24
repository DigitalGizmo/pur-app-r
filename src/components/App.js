import { Outlet } from 'react-router-dom'; // , Link
import MainNav from './common/MainNav';

function App() {
  return (
    <div >
     <MainNav/>
     <Outlet 
        message="test message"
      />
    </div>
  );
}

export default App;


 
