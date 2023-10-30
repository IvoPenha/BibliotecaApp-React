import { Button, Card, Stack } from 'react-bootstrap';
import { LivroComponentProps } from '../../../../../shared';
import { MdEventAvailable, MdUpdate } from 'react-icons/md';
import { CgUnavailable } from 'react-icons/cg';
import { PiHandsPrayingBold } from 'react-icons/pi';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

export const Livro = ({ livro, onClick }: LivroComponentProps) => {
  return (
  <Card style={{ width: '100%', height: '12rem' }}>
    <Card.Body>
      <Card.Title>
        <Stack direction="horizontal" gap={3}>
        {livro.titulo}
        <span
          className='ms-auto'
          style={{color: livro.disponibilidade ? '#2541c5' : '#c51e1e'}}
        >
          {livro.disponibilidade ? <span style={{fontSize: '1rem'}} ><MdUpdate/> Disponivel</span> :  <span style={{fontSize: '1rem'}} ><CgUnavailable/> Indisponivel</span>}
        </span>
        </Stack>
      </Card.Title>
      <Card.Subtitle className="mb-2 mt-4 text-muted">
        <Stack direction="horizontal" gap={3}>
        {livro.autor}
        <span
          className='ms-auto'
        >
         <MdEventAvailable/> {livro.ano}
        </span>
        </Stack>
      </Card.Subtitle>
    </Card.Body>
    <Card.Footer>
      <Button onClick={() => onClick(livro)} 
      variant={livro.disponibilidade ? 'primary' : 'warning'}
      >
       
        
      {livro.disponibilidade ?  <><PiHandsPrayingBold/> Emprestar</> : <><BsFillBookmarkCheckFill/> Devolver</>}        
      </Button>
    </Card.Footer>
  </Card>
  )

    ;
}