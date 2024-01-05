import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Formulario from './components/Formulario';
import LoginNewUser from './components/LoginNuwUser';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/LoginNuevoUsuario" element={<LoginNewUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
