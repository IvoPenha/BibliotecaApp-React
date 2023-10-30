import styled from 'styled-components';

export const Filters = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: .2rem;
  button{
    width: 8rem;
    height: 3.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    button{
      width: 95%;
      margin: .5rem;
    }
    
  }
`;