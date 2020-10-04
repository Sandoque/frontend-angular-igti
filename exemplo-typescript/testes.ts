function soma(a: number, b: number): number {
  return a + b;
}

//  soma("Olá", 5);
soma(2, 5);

function soma2(a, b) {
  return a + b;
}
soma2('olá', 5);

let x = 5;

soma(x, 4);

//
function cadastraAluno(aluno: Aluno) {
  //aluno.nome;
}

interface Aluno {
  matricula: number;
  nome: string;
  dataNascimento: string;
  turno?: string; //campo seria opcional
}

let aluno2 = {
  matricula: 123,
  nome: 'João',
  dataNascimento: '01/01/2001',
  turma: 3, // compatibilidade de tipos, mesmo um campo a mais vai aceitar
};

cadastraAluno(aluno2);

let aluno3 = {
  matricula: 123,
  nome: 'João',
};

// não aceitará com campos a menos
// cadastraAluno(aluno3);

class Estudante {
  matricula: number;
  nome: string;

  salvar() {}
}

let estudante1 = new Estudante();

estudante1.salvar();
// estudante1.excluir(); // não foi declarado excluir na classe estudante1
