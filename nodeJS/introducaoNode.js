/*
NodeJS é extremamente relevante no mundo JS e WEB, principalmente como solução para o backend
Voce consegue executar aplicacoes Node em quase tudo que precisa, mas algumas coisas sao interacoes
    com o JS, por exemplo a DOM, interacoes da pagina e browser

Node executa JS para o cliente/browser(frontend), bem como servidor (backend)

Server side => gera dinamicamente o codigo HTML no servidor e serve ao browser
Client side => gera dinamicamente servicos no browser e serve o servidor

Node é o ambiente de execucao de JS no servidor
Node foi fundado pelo Ryan Dahi

O apache usa threads para tratar as requisicoes
    -> thread: divisao de tarefas a fim de executa-las de forma simultanea ou sequencialmente de maneira rapida
        -> linha de execucao independente dentro do computador
O Nginx usa um unico processo master (thread) e quando chega uma requisicao, ele despacha para um subsistema tratar ela
Quanto mais requisicoes concorrentes o Apache trata, menor fica sua performance em conexoes

JS é uma linguagem assincrona com servidor, pois não seria viavel esperar as respostas deste para que o JS realizasse uma acao
Node é um runtime em JS, formado pelo nucleo V8 e pelo LIBUV (assincronicidade de IO e event loop)
*/