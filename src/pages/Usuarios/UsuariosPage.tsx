import { useEffect, useState } from 'react';
import { UsuariosTable } from './components/UsuariosTable/UsuariosTable';
import * as S from './UsuariosPage.styles';
import { getUsuarios } from '../../services';
import { Usuario } from '../../shared';
export const UsuariosPage = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function fetchUsuarios() {
    setIsLoading(true);
    const usuarios = await getUsuarios();
    setUsuarios(usuarios.data);
    setIsLoading(false);
  }
  
  useEffect(() => {
    document.title = 'Usuarios';
    fetchUsuarios();
  }
  , []);

    return <S.Container>
      <UsuariosTable
        data={usuarios}
        isLoading={isLoading}
      />
    </S.Container>;
}