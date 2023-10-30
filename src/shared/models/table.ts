export interface TableColumn {
  label: string;
  accessor: string;
}

export interface TableRow {
  [key: string]: any;
}

export interface TabelaProps {
  colunas: TableColumn[];
  linhas: TableRow[];
  titulo: string;
  buttonProps?: {
    label: string;
    onClick: () => void;
  }
}


