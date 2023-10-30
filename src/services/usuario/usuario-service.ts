import { api } from '..';
import { ApiResponse, Usuario, UsuarioPost } from '../../shared';

export const getUsuarios = async () => {
  const response = await api.get("/usuarios");
  return response.data as ApiResponse<Usuario[]>;;
}

export const createUsuario = async (data: UsuarioPost) => {
  const response = await api.post("/usuarios", data);
  return response.data as ApiResponse<Usuario>;
}
