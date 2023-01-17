import './App.css';
import Nav from './Components/Nav/Nav';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Locations from './Pages/Locations/Locations'
import AddLocation from './Pages/Add location/AddLocation';
import Addsuccessfully from './Pages/Successfully Added/Addsuccessfully';
import ViewMore from './Pages/ViewMore/ViewMore'
import Updatesuccessfully from "./Pages/UpdateSuccessfully/Updatesuccessfully"
import { useAuthContext } from './Hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={ <Locations/>} />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ !user ? <Login /> : <Navigate to="/" />} />
          <Route path="/addlocation" element={!user ? <Login /> : <AddLocation />} />
          <Route path="/successfully" element={<Addsuccessfully />} />
          <Route path= "/updatesuccess" element={<Updatesuccessfully/>}/>
          <Route path="/viewmore" element={!user ? <Login /> : <ViewMore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
