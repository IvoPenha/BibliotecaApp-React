# Sistema de Gerenciamento de Biblioteca - Readme

## Descrição

O Sistema de Gerenciamento de Biblioteca é uma aplicação web desenvolvida em React que oferece funcionalidades para empréstimo e devolução de livros em uma biblioteca. O sistema é composto por três principais entidades: Usuário, Livro e Empréstimo.

## Funcionalidades

### Cadastro de Usuário
Pode-se registrar fornecendo seu nome, e-mail e número de telefone.

### Cadastro de Livros
Pode-se adicionar novos livros, inserindo título, autor, ano de publicação.

### Empréstimo de Livros
Possibilita a solicitação de empréstimo de livros disponíveis. O sistema registra a data de empréstimo e define automaticamente uma data de devolução (por exemplo, 15 dias após o empréstimo).

### Devolução de Livros
Usuários têm a opção de devolver livros antes ou na data de devolução. Quando um livro é devolvido, a disponibilidade é atualizada para 1 (disponível).

### Consulta de Livros
Os usuários podem pesquisar livros por título, autor ou ano de publicação. Eles podem verificar se um livro está disponível para empréstimo ou já está emprestado.

---

**Nota:** Este projeto foi desenvolvido como parte de um desafio técnico e oferece funcionalidades básicas para o gerenciamento de uma biblioteca, utilizando a biblioteca React para o desenvolvimento da interface do usuário.
