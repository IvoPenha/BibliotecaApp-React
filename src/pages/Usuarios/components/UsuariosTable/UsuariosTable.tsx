import { useState } from 'react';
import { Loading, Table, Usuario, UsuarioPost } from '../../../../shared'
import { UsuariosModal } from '../UsuariosModal/UsuariosModal';
import { columns } from './columns';
import { createUsuario } from '../../../../services';

export const usuariosMock = [
  {
    id: 1,
    nome: 'João',
    email: 'joao@email.com',
    telefone: '123456789'
  },
  {
    id: 2,
    nome: 'Maria',
    email: 'maria@email.com',
    telefone: '987654321'
  },
  {
    id: 3,
    nome: 'Pedro',
    email: 'pedro@email.com',
    telefone: '111223344'
  },
  {
    id: 4,
    nome: 'Ana',
    email: 'ana@email.com',
    telefone: '555666777'
  },
  {
    id: 5,
    nome: 'Carlos',
    email: 'carlos@email.com',
    telefone: '999888777'
  },
  {
    id: 6,
    nome: 'Lúcia',
    email: 'lucia@email.com',
    telefone: '333222111'
  },
  {
    id: 7,
    nome: 'Gabriel',
    email: 'gabriel@email.com',
    telefone: '777888999'
  },
  {
    id: 8,
    nome: 'Isabela',
    email: 'isabela@email.com',
    telefone: '444555666'
  },
  {
    id: 9,
    nome: 'Rafael',
    email: 'rafael@email.com',
    telefone: '888999000'
  },
  {
    id: 10,
    nome: 'Mariana',
    email: 'mariana@email.com',
    telefone: '111000222'
  }
];

export const UsuariosTable = (
  {data, isLoading} : { data: Usuario[], isLoading: boolean}
) => {

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const onSubmitUsuario = async (usuario: UsuarioPost) => {
    const response = await createUsuario(usuario);
    data.push(response.data);
  } 



  return(
    <>
    {
      isLoading ? <Loading/> :
      <Table
        titulo='Tabela de Usuários'
        colunas={columns}
        linhas={data}
        buttonProps={{
          label: 'Adicionar Usuário',
          onClick: () => setShowModal(true)
        }}
        />
    }
        <UsuariosModal
          isOpen={showModal}
          onClose={handleModalClose}
          onConfirm={onSubmitUsuario}
        />
      </>
  )}