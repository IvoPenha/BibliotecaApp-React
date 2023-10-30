import { Livro, LivroPost } from '.';

export interface LivroComponentProps {
  livro: Livro;
  onClick: (livro: Livro) => void;
}

export interface LivroModalProps {
  isOpen: boolean;
  onClose: () => void;
  livro?: Livro;
  onConfirm: (livro: LivroPost) => void;
}

export interface EmprestimoModalProps {
  isOpen: boolean;
  onClose: () => void;
  livro?: Livro;
  onConfirm: (idUsuario: number) => void;
}

export interface LivroSearchProps {
  titulo?: string;
  autor?: string;
  ano?: number | string;
}

export interface ListaLivrosProps {
  data: Livro[];
  isLoading: boolean;
  setData: React.Dispatch<React.SetStateAction<Livro[]>>
}