import { Outlet } from 'react-router-dom'; // , Link


function App() {
  return (
    <div >
      <Outlet 
        message="test message"
      />
    </div>
  );
}

export default App;


 
