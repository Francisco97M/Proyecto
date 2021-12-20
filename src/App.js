import { Routes, Route } from 'react-router-dom';
import Error404 from "./views/error404/component";
import Layout from './layout/component';
import AppPost from './views/meeting/component';
import Appointment from './views/datas/component';
import Home from './views/home/component';
import Location from './views/location/component';
import Login from './views/login/component';
import SignIn from './views/SignIn/component';

const App = () => {

  

  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/Meeting" element={<AppPost />} />
            <Route path="/Appointments" element={<Appointment />}/>
            <Route path="/Location" element={<Location />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      </div>
    );
};


/*     <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="*" element={<Error404 />} />
        <h1>PRUEBA PRUEBA PRUEBA</h1>
        </Routes>
      </Layout>
      </BrowserRouter>,
      document.getElementById("root")
  ); */


export default App;