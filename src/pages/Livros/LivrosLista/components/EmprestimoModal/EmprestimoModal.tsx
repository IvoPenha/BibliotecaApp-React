import { Button, Form, Stack, FormSelect } from 'react-bootstrap';
import { Modal, EmprestimoModalProps, Usuario} from '../../../../../shared';
import { useEffect, useState } from 'react';
import { getUsuarios } from '../../../../../services';


export const EmprestimoModal = ({ isOpen, onClose, livro, onConfirm }: EmprestimoModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const fetchUsuarios = async () => {
    const response = await getUsuarios();
    setUsuarios(response.data);
  }

  useEffect(() => {
    fetchUsuarios();
  }, []);
  

  const handleConfirm = async () => {
    setIsLoading(true);
    if (usuarioId !== 0)
      await onConfirm(usuarioId);
    setIsLoading(false);
    onClose()
  }
  
  const [usuarioId, setUsuarioId] = useState(0);

  return (
    <Modal show={isOpen} onHide={onClose} title="Emprestimo de Livro">
      <>
        <Form
          onSubmit={
            e=> {
              e.preventDefault();
              handleConfirm()
            }}
        >
          <Stack
            gap={4}
          >
            <input
              className='form-control '
              value={livro?.titulo}
              disabled
            />
            <FormSelect
              onChange={(e) => setUsuarioId(Number(e.target.value))}
            >
              <option value={0} >Escolha um Usuario</option>
              {
                usuarios.map((usuario) => (
                  <option value={usuario.id} >{usuario.nome}</option>
                ))
              }
            </FormSelect>
          </Stack>
          <Stack
            direction="horizontal"
            gap={4}
            className="mt-4"
          >

          <Button variant="danger" className='ms-auto' onClick={onClose}>
            Cancelar
          </Button>

          <Button type="submit" 
          disabled={isLoading || usuarioId === 0}
          >
            {isLoading ? 'Loading...' : 'Realizar empréstimo'}
          </Button>
            </Stack>
        </Form>
      </>
    </Modal>
  );
};
