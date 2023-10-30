import { useState } from 'react'
import { Livro as ILivro, ListaLivrosProps, LivroPost, Loading } from '../../../shared'
import { Livro, DevolucaoModal, EmprestimoModal, LivroModal } from './components'
import * as S from './LivroLista.styles'
import { Button } from 'react-bootstrap'
import { createLivro, devolverLivro, emprestimoLivro } from '../../../services'

export const LivrosLista = ({ data, isLoading, setData } : ListaLivrosProps) => {

  const [selectedLivro, setSelectedLivro] = useState<ILivro | undefined>(undefined)

  const [isOpened, setIsOpened] = useState(false)

  const [isEmprestimoOpened, setIsEmprestimoOpened] = useState(false)

  const [isDevolucaoOpened, setIsDevolucaoOpened] = useState(false)

  function handleEmprestimoModalClose(){
    setIsEmprestimoOpened(false)
  }

  function handleModalClose(){
    setIsOpened(false)
  }

  function handleDevolucaoModalClose(){
    setIsDevolucaoOpened(false)
  }

  const onCreateLivro = async (livro: LivroPost) => {
    const response = await createLivro(livro);
    data.push(response.data);
  }

  const onEmprestimoLivro = async (idUsuario: number) => {
    if(!selectedLivro) return;
    const response = await emprestimoLivro(selectedLivro?.id, idUsuario);
    console.log('oiiiiii', data);
    if(response.success){
      const index = data.findIndex(livro => livro.id === selectedLivro.id);
      data[index].disponibilidade = false;
      setData([...data]);
    }
  }

  const onDevolucaoLivro = async () => {
    if(!selectedLivro) return;
    const response = await devolverLivro(selectedLivro.id);
    if(response.success){
      const index = data.findIndex(livro => livro.id === selectedLivro.id);
      data[index].disponibilidade = true;
      setData([...data]);
    }
  }

  return(
    <div>
      <S.HeaderWrapper>

        <h3> Pagina de Livros </h3>
        <Button onClick={()=> setIsOpened(true)} >Novo Livro</Button>

      </S.HeaderWrapper>
      {isLoading ? <Loading/> : <S.LivrosWrapper>
        {
          data.length === 0 ? <h3>Nenhum livro encontrado</h3> :
          data.map(livro => {
            return(
              <Livro
              onClick={(livro : ILivro) =>{
                setSelectedLivro(livro)
                if(livro.disponibilidade){
                  setIsEmprestimoOpened(true)
                }else{
                  setIsDevolucaoOpened(true)
                }
              }}
              livro={livro}
              />
              )
            })
          }
        </S.LivrosWrapper>}
        <LivroModal
          isOpen={isOpened}
          onClose={handleModalClose}
          onConfirm={onCreateLivro}
        />
        <EmprestimoModal
          isOpen={isEmprestimoOpened}
          onClose={handleEmprestimoModalClose}
          livro={selectedLivro}
          onConfirm={onEmprestimoLivro}
        />
        <DevolucaoModal
          isOpen={isDevolucaoOpened}
          onClose={handleDevolucaoModalClose}
          livro={selectedLivro}
          onConfirm={onDevolucaoLivro}
        />
    </div>
  )
}