const nomes = ["Matue", "indio flecha torta pussy da silva muxa", "Leandro mussum", "Carl Johnson", "Seu Madroga", "Amostradinho maldito", "cristiano da silva sauro pinto alcantra caicique classico jorge do pneu broxa azulzinho vencido da rosa vulgo tadala junior"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)