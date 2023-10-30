import React from 'react';
import { Table as BsTable, Button } from 'react-bootstrap';
import { TabelaProps } from '../..';
import * as S from './Table.styles';

export const Table: React.FC<TabelaProps> = ({ colunas, linhas, titulo, buttonProps }) => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
      <h3>{titulo}</h3>
      {buttonProps && (
          <Button onClick={buttonProps.onClick} >{buttonProps.label}</Button>
          )}

      </S.HeaderWrapper>

    <BsTable striped bordered hover style={{width: '100%'}}>
      <thead>
        <tr>
          {colunas.map((coluna, index) => (
            <th key={index}>{coluna.label}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {linhas.map((linha, index) => (
          <tr key={index}>
            {colunas.map((coluna, colIndex) => (
              <td key={colIndex}>{linha[coluna.accessor]}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </BsTable>
        </S.Wrapper>
  );
}