import { UsuarioPost } from '.';

export interface UsuarioModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (usuario: UsuarioPost) => Promise<void>
}