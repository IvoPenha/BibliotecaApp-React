import { Button, Form, Stack } from 'react-bootstrap';
import { Input, Modal, defaultsValidations, LivroModalProps, LivroPost, createLivroSchema } from '../../../../../shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';;

export const LivroModal = ({ isOpen, onClose, livro, onConfirm }: LivroModalProps) => {

  const { register, handleSubmit, reset,
    formState: { errors } } = useForm<LivroPost>({
      resolver: yupResolver(createLivroSchema)
    });

  const [isLoading, setIsLoading] = useState(false);

  console.log(livro);
  

  return (
    <Modal show={isOpen} onHide={onClose} title="Cadastrar Livro">
      <>
        <Form
          onSubmit={handleSubmit(async (data) => {
            setIsLoading(true);
            await onConfirm(data);
            onClose();
            reset();
            setIsLoading(false);
          })}
        >
          <Stack
            gap={4}
          >
            <Input
              label="Titulo"
              name="titulo"
              register={register}
              validationSchema={defaultsValidations.nome}
              error={errors.titulo}
            />
            <Input
              label="Autor"
              name="autor"
              register={register}
              validationSchema={defaultsValidations.nome}
              error={errors.autor}
            />
            <Input
              label="ano"
              name="ano"
              register={register}
              validationSchema={defaultsValidations.ano}
              error={errors.ano}
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
