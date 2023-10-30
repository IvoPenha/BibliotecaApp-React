import { api } from '..';
import { ApiResponse, Emprestimo, Livro, LivroPost, LivroSearchProps } from '../../shared';

export const getLivros = async ({ titulo = '', ano = '', autor = '' }: LivroSearchProps) => {
  const response = await api.get(`/livros?titulo=${titulo}&ano=${ano}&autor=${autor}`);
  return response.data as ApiResponse<Livro[]>;;
}

export const createLivro = async (data: LivroPost) => {
  const response = await api.post("/livro", data);
  return response.data as ApiResponse<Livro>;
}

export const emprestimoLivro = async (livroId: number, usuarioId: number) => {
  const response = await api.post(`/emprestar-livro`, { livroId, usuarioId });
  return response.data as ApiResponse<Emprestimo>;
}

export const devolverLivro = async (livroId: number) => {
  const response = await api.post(`/devolver-livro`, { livroId });
  return response.data as ApiResponse<Livro>;
}