import { useEffect, useState } from 'react';
import { LivrosLista } from './LivrosLista/LivrosLista';
import { getLivros } from '../../services';
import { Input, Livro } from '../../shared';
import { useForm } from 'react-hook-form';
import * as S from './LivrosPage.syles';
import { Button } from 'react-bootstrap';

export const LivrosPage = () => {

  const [livros, setLivros] = useState<Livro[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchLivros() {
    setIsLoading(true);
    const livros = await getLivros({})
    setLivros(livros.data);
    setIsLoading(false);
  }

  useEffect(() => {
    document.title = 'Livros';
    fetchLivros();
  }
  , []);

  const { register, 
    handleSubmit, 
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      titulo: '',
      autor: '',
      ano: '',
    }
  });

    return <div>
      <S.Filters
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          const livros = await getLivros(data);
          setLivros(livros.data);
          setIsLoading(false);
        })}
      >
        <Input
          register={register}
          name="titulo"
          label="Titulo"
        />
        <Input
          register={register}
          name="autor"
          label="Autor"
        />
        <Input
          register={register}
          name="ano"
          label="Ano"
        />
        <Button
          variant="primary"
          type="submit"
        >
          Buscar
        </Button>
      </S.Filters>
      <LivrosLista
        data={livros}
        isLoading={isLoading}
        setData={setLivros}
      />
    </div>;
}