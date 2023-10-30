export type ApiResponse<T> = Promise<{
  success: boolean;
  mensagem: string;
  data: T;
}>;
