import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        // cada objeto é um registro da tabela
        { title: 'Vagas de emprego', image: 'curriculo.png'},
        { title: 'Apoio psicológico', image: 'psicologo.png'},
        { title: 'Saúde', image: 'saude.png'},
        { title: 'Oportunidade de estudo', image: 'livros.png'},
        { title: 'Conversar com outras membras', image: 'mulheres.png'},
        { title: 'Não sei por onde começar', image: 'mentoria.png'},
    ]);
}