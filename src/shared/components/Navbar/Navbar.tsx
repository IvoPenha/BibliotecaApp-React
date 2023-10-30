import { Container, Navbar, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  &:hover{
    color: white;
    text-decoration: underline;
  }
`

export const NavBar = () => {
  return <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="text-white">BibliotecaAPP</Navbar.Brand>
        <nav>
        <Stack direction='horizontal' gap={2} className='text-dark' >
          <StyledLink to='/'>Livros</StyledLink>
          <StyledLink to='/usuarios'>Usuários</StyledLink>
        </Stack>
        </nav>
      </Container>
    </Navbar>   
  </>
}