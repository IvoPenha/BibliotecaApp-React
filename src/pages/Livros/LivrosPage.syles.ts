import styled from 'styled-components';

export const Filters = styled.form`
  background-color: white;
  padding: 2rem 1rem;
  border-radius: .8em;
  box-shadow: 0 0 .5em #00000033;
  margin-bottom: 1rem;
  h3{
    padding-bottom: .2rem ;
    margin-bottom: 1rem;
    border-bottom: 1px solid #00000033;

  }
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div{
      width: 100%;
    }
  }
  button{
    width: 8rem;
    height: 3.5rem;
  }
  @media (max-width: 768px) {
    div{
      flex-direction: column;
      gap: 1rem;
      button{
        width: 95%;
        margin: .5rem;
      }
    }
    
  }
`;