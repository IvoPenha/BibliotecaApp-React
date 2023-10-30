import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: .2rem;
  border-bottom: 2px solid #ccc;
  align-items: center;
`;

export const LivrosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  grid-gap: 1rem;
  padding-top: 1rem;
`;