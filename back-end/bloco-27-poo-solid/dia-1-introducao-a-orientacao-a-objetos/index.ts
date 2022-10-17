class Estudante {
  matricula: number;
  nome: string;
  notasDeProva: Array<number>;
  notasDeTrabalho: Array<number>;
  constructor(m: number, n: string, p:Array<number>, t:Array<number>  ) {
    this.matricula = m;
    this.nome = n;
    this.notasDeProva = p;
    this.notasDeTrabalho = t;
  }

  somaNotas() {
    const notas: Array<number> = [...this.notasDeProva, ...this.notasDeTrabalho]
    return notas.reduce((acc: number, cur: number) => acc + cur, 0)
  }
}

const est1 = new Estudante(1, 'gab', [1,2,3,4], [3,4]);

console.log(est1)