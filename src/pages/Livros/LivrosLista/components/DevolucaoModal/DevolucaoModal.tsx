import { Button, Form, Stack } from 'react-bootstrap';
import { Modal, EmprestimoModalProps} from '../../../../../shared';
import { useState } from 'react';


export const DevolucaoModal = ({ isOpen, onClose, livro, onConfirm }: EmprestimoModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm() {
    setIsLoading(true);
    if (livro?.id)
      await onConfirm(livro?.id);
    setIsLoading(false);
    onClose()
  }

  return (
    <Modal show={isOpen} onHide={onClose} title="Devolução de Livro">
      <>
        <Form
          onSubmit={e => {  
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
          disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Devolver Livro'}
          </Button>
            </Stack>
        </Form>
      </>
    </Modal>
  );
};
