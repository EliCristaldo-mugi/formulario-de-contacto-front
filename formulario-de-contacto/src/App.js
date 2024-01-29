import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Formulario from './components/Formulario';
import LoginNewUser from './components/LoginNuwUser';
import CustomText from './components/CustomText';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/LoginNuevoUsuario" element={<LoginNewUser />} />
          <Route path="/CustomText" element={<CustomText />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
