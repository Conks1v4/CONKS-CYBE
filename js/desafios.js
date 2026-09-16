const DESAFIOS=[
{
id:"logs",
title:"Investigador de Logs",
difficulty:"INICIANTE",
xp:75,
text:"Você está analisando um ambiente fictício. Qual informação é mais importante para começar a investigar um evento de autenticação suspeita?",
answers:["A cor do computador","Horário, usuário, origem e resultado do evento","O papel de parede","A quantidade de arquivos pessoais"],
correct:1
},
{
id:"rede",
title:"Mapa de Rede",
difficulty:"INICIANTE",
xp:80,
text:"Qual equipamento normalmente encaminha tráfego entre redes diferentes?",
answers:["Teclado","Switch de teclado","Roteador","Monitor"],
correct:2
},
{
id:"porta",
title:"Porta e Serviço",
difficulty:"INICIANTE",
xp:85,
text:"O que uma porta de rede representa principalmente?",
answers:["Um endpoint lógico associado a um serviço/processo","A velocidade do monitor","A senha do usuário","O tamanho do disco"],
correct:0
},
{
id:"hash",
title:"Detetive de Hash",
difficulty:"INTERMEDIÁRIO",
xp:100,
text:"Qual afirmação descreve corretamente um hash criptográfico?",
answers:["É sempre reversível","É uma representação derivada da entrada e não funciona como criptografia reversível","É uma senha","É um endereço IP"],
correct:1
},
{
id:"web",
title:"Defesa Web",
difficulty:"INTERMEDIÁRIO",
xp:120,
text:"Qual prática ajuda a prevenir SQL Injection?",
answers:["Concatenar entrada do usuário diretamente","Desativar logs","Usar consultas parametrizadas","Aceitar qualquer entrada"],
correct:2
},
{
id:"blue",
title:"Blue Team",
difficulty:"INTERMEDIÁRIO",
xp:125,
text:"Qual ferramenta é normalmente utilizada para centralizar e correlacionar eventos de segurança?",
answers:["SIEM","Editor de imagens","Calculadora","Player de música"],
correct:0
},
{
id:"least",
title:"Menor Privilégio",
difficulty:"AVANÇADO",
xp:150,
text:"O princípio do menor privilégio recomenda:",
answers:["Dar administrador para todos","Dar somente os acessos necessários","Nunca revisar permissões","Compartilhar contas"],
correct:1
},
{
id:"incident",
title:"Resposta a Incidente",
difficulty:"AVANÇADO",
xp:175,
text:"Após identificar um incidente, qual abordagem é adequada?",
answers:["Apagar todas as evidências","Ignorar o evento","Seguir um processo estruturado de investigação, contenção e recuperação","Desligar todos os computadores sem planejamento"],
correct:2
},
{
id:"cloud",
title:"Cloud IAM",
difficulty:"AVANÇADO",
xp:150,
text:"Qual prática reduz o risco associado a permissões em Cloud?",
answers:["Permissões máximas para todos","Menor privilégio","Credenciais compartilhadas","Chaves publicadas no código"],
correct:1
},
{
id:"dfir",
title:"Linha do Tempo",
difficulty:"AVANÇADO",
xp:160,
text:"Por que uma timeline é útil em uma investigação?",
answers:["Para decorar o desktop","Para correlacionar eventos em ordem temporal","Para aumentar FPS","Para apagar logs"],
correct:1
}
];

window.DESAFIOS=DESAFIOS;
