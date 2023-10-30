import { Button, Form, Stack } from 'react-bootstrap';
import { Input, Modal, UsuarioPost, createUsuarioValidation, defaultsValidations } from '../../../../shared';
import { UsuarioModalProps } from '../../../../shared/models/usuariospage';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';

export const UsuariosModal = ({ isOpen, onClose, onConfirm }: UsuarioModalProps) => {

  const { register, handleSubmit, reset,
    formState: { errors } } = useForm<UsuarioPost>({
      resolver: yupResolver(createUsuarioValidation)
    });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal show={isOpen} onHide={onClose} title="Cadastrar Usuario">
      <>
        <Form
          onSubmit={handleSubmit(async (data) => {
            setIsLoading(true);
            await onConfirm(data);
            setIsLoading(false);
            onClose();
            reset();
          })}
        >
          <Stack
            gap={4}
          >
            <Input
              label="Nome"
              name="nome"
              register={register}
              validationSchema={defaultsValidations.nome}
              error={errors.nome}
            />
            <Input
              label="Email"
              name="email"
              register={register}
              validationSchema={defaultsValidations.email}
              error={errors.email}
            />
            <Input
              label="Telefone"
              name="telefone"
              register={register}
              validationSchema={defaultsValidations.telefone}
              error={errors.telefone}
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
          disabled={Object.keys(errors).length > 0 || isLoading}
          >
            {isLoading ? 'Loading...' : 'Salvar'}
          </Button>
            </Stack>
        </Form>
      </>
    </Modal>
  );
};
