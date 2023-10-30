import { Outlet } from 'react-router-dom';
import { NavBar } from '../../shared';
import * as S from './MainLayout.styles'

export const MainLayout = () => {
  return <div>
    <NavBar/>
      <S.Container>
        <Outlet/>
      </S.Container>
    </div>;
}