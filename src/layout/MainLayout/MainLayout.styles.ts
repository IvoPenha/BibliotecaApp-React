import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
padding: 1rem;
@media (min-width: 768px) {
  padding: 1rem 2rem;
}
@media (min-width: 992px) {
  padding: 1rem 3rem;
}
@media (min-width: 1200px) {
  padding: 1rem 5rem;
}
`;