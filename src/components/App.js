import { Outlet } from 'react-router-dom'; // , Link
import MainNav from './common/MainNav';
import BottomNav from './common/BottomNav';

function App() {
  return (
    <div >
     <MainNav/>
     <Outlet 
        message="test message"
      />
      <BottomNav />
    </div>
  );
}

export default App;


 
