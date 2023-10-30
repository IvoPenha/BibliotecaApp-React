import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from '../layout';
import { LivrosPage, UsuariosPage } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<LivrosPage/>} />
          <Route path='/usuarios' element={<UsuariosPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes