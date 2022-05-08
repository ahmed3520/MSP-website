
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import {Home, Aboutus, Contantus, Events,HighBoard, Event} from './components/pages/index';
import {  getEvents, getCommittes} from './actions/index';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  dispatch(getCommittes());
  dispatch(getEvents());
  return (

    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="about" element={ <Aboutus/>}  />
      <Route path="contact" element={<Contantus/>} />
      <Route path="highboard" element={<HighBoard />} />
      <Route path="/event/:eventid" element={<Event />} />

    </Routes>
  </BrowserRouter>

   </>
  );
}

export default App;
