### Trabalhando com Módulos em JavaScript
<p>Aluna: Mirian Ajiki Molicawa 
<p>Digital Innovation One 
<p>Instrutora: Stephany Nusch
<p>Data: 17/07/2022

<h2> Tecnologias </h2>
<br> - [x] Visual Studio Code
<br> - [x] Modulo JavaScript
<br> - [x] HTML
<br> - [x] Live Server Extension

### Módulos JavaScript
São arquivos que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

### Características
<p>- Módulos sempre estão em 'strict mode';
<p>- Podem ser utilizadas as extensões .js e .mjs
<p>- Podem exportar apenas um valor default por arquivo
<p>- Para testes locais é necessário utilizar um servidor;
<p>- Ao importar utilizar "./" como ponto de partida.

### Vantagens:
<p>- Organização do código;
<p>- Compartilhamento de variáveis em escopos diferentes;
<p>- Explicita as dependências dos arquivos.

### Atividade 1 - Módulos JS
<p>Visualizar no console do seu navegador como os módulos funcionam.
<p>Instale a extensão "Live Server" no seu VSCode;
<p>Crie um arquivo com uma estrutura HTML padrão;
<p>Crie dois arquivos .js ou .mjs, um chamado funcoes e outro chamado main;
<p>No arquivo funcoes:
<p>Crie uma função chamada mostraIdade, que recebe nome e idade e retorna a string: A idade <p>de ${nome} é ${idade};
<p>Siga o mesmo padrão para outras funções como mostraCidade e mostraHobby;
<p>Exporte estas funções.
<p>No arquivo main:
<p>Importe as funções do arquivo funcoes;
<p>Faça a chamada de todas elas;
<p>Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as <p>informações foram logadas corretamente.



### Atividade 2 - Import Dinâmico 
<p> Import Dinâmico
<p> Na página HTML, ao clicar no botão, o fundo da página mudará de cor para azul
<p> Utilizar a extensão "Live Server"


### Atividade 3 - Candidatos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
