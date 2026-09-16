const CURSOS = [

{
id:"fundamentos",
icon:"🔐",
title:"Fundamentos de Cybersegurança",
desc:"A base necessária para entender segurança da informação, ameaças, riscos e proteção.",
lessons:[
["O que é Cibersegurança?",`
Cibersegurança é a área responsável por proteger sistemas, dispositivos, redes, aplicações e informações contra acesso não autorizado, alteração indevida, destruição, fraude e interrupções.

A segurança não depende de uma única ferramenta. Ela envolve pessoas, processos, políticas, tecnologia, monitoramento e resposta a incidentes.

Um profissional precisa primeiro entender como um sistema funciona. Depois aprende quais são seus riscos e como reduzi-los.

O objetivo não é tornar um sistema magicamente impossível de atacar. O objetivo é reduzir riscos, detectar problemas rapidamente e limitar o impacto quando algo acontece.
`,"Uma escola possui um sistema com notas dos alunos. Segurança significa controlar quem pode acessar as notas, impedir alterações não autorizadas, manter cópias de segurança e detectar atividades suspeitas.",["Confidencialidade protege informações contra acesso indevido.","Integridade ajuda a garantir que dados não sejam alterados indevidamente.","Disponibilidade significa manter sistemas e informações acessíveis quando necessários."]],

["A Tríade CIA",`
A tríade CIA representa três objetivos fundamentais da segurança da informação: Confidentiality, Integrity e Availability.

Confidencialidade significa que somente pessoas autorizadas devem acessar determinado dado.

Integridade significa que a informação deve permanecer correta e não ser modificada de maneira indevida.

Disponibilidade significa que sistemas e dados precisam estar acessíveis quando usuários autorizados precisam deles.

Esses três objetivos podem entrar em conflito. Por isso, segurança envolve equilíbrio e análise de risco.
`,"Um banco precisa manter os dados financeiros privados, corretos e disponíveis para clientes autorizados.",["C = Confidentiality.","I = Integrity.","A = Availability."]],

["Ativos, ameaças, vulnerabilidades e riscos",`
Um ativo é algo que possui valor para uma organização, como uma base de dados, computador, servidor, aplicação ou informação.

Uma ameaça é algo que pode causar dano.

Uma vulnerabilidade é uma fraqueza que pode ser explorada ou causar um problema.

Risco é a combinação entre a possibilidade de um evento ocorrer e seu impacto.

A gestão de segurança começa identificando os ativos importantes e entendendo quais ameaças e vulnerabilidades podem afetá-los.
`,"Um servidor contém informações importantes. Um software desatualizado pode representar uma vulnerabilidade; um atacante pode representar uma ameaça; o possível prejuízo representa parte do risco.",["Identifique os ativos.","Mapeie ameaças e vulnerabilidades.","Avalie probabilidade e impacto.","Escolha controles para reduzir o risco."]],

["Defesa em profundidade",`
Defesa em profundidade significa utilizar várias camadas de proteção.

Se uma camada falhar, outra ainda pode impedir ou limitar o problema.

Exemplos incluem autenticação, controle de acesso, segmentação de rede, criptografia, backups, logs, monitoramento e treinamento.

Nenhuma tecnologia isolada resolve todos os riscos.
`,"Uma empresa pode usar senha forte, MFA, firewall, segmentação, backups e monitoramento ao mesmo tempo.",["Use múltiplas camadas.","Reduza privilégios.","Monitore eventos.","Tenha recuperação preparada."]],

["Engenharia Social e Phishing",`
Engenharia social explora comportamento humano para induzir uma pessoa a revelar informações ou realizar uma ação.

Phishing é uma forma comum de fraude em que mensagens tentam convencer o usuário de que são legítimas.

Sinais de alerta incluem urgência artificial, pedidos inesperados de senha, links suspeitos, anexos inesperados e solicitações fora do processo normal.

A defesa envolve educação, MFA, filtros, processos de verificação e uma cultura onde funcionários podem confirmar pedidos suspeitos.
`,"Uma mensagem inesperada pede que um funcionário confirme uma senha imediatamente. Em vez de clicar, ele verifica o pedido por um canal oficial.",["Não confie apenas no visual da mensagem.","Verifique pedidos inesperados.","MFA reduz impacto de credenciais roubadas.","Reporte mensagens suspeitas."]]
]},

{
id:"redes",
icon:"🌐",
title:"Redes e Protocolos",
desc:"Entenda como computadores se comunicam, IP, portas, DNS, TCP, UDP, HTTP e infraestrutura.",
lessons:[
["Como uma rede funciona?",`Uma rede permite que dispositivos troquem dados. Ela pode ser pequena, como uma rede doméstica, ou enorme, como a Internet.

Dispositivos usam endereços e protocolos para saber como enviar e interpretar informações.

Switches conectam dispositivos em uma rede local. Roteadores encaminham tráfego entre redes diferentes. Protocolos definem regras de comunicação.
`,"Em uma casa, celulares e computadores podem estar conectados ao roteador. O roteador permite comunicação local e acesso a outras redes.",["Switch conecta dispositivos localmente.","Roteador conecta redes.","Protocolos definem regras.","A Internet é formada por muitas redes interconectadas."]],

["Endereços IP",`Um endereço IP identifica uma interface de rede dentro de determinado contexto.

IPv4 utiliza 32 bits e normalmente aparece como quatro números separados por pontos.

IPv6 utiliza 128 bits e foi criado para oferecer um espaço de endereçamento muito maior.

É importante diferenciar endereço IP privado, utilizado dentro de redes locais, de endereço público, utilizado para comunicação através da Internet.
`,"Um computador doméstico pode possuir um endereço privado dentro da rede e sair para a Internet através de um endereço público.",["IPv4 = 32 bits.","IPv6 = 128 bits.","IP identifica uma interface/contexto de rede.","IP privado e público têm funções diferentes."]],

["Portas e serviços",`Portas permitem diferenciar serviços dentro de um mesmo endereço IP.

TCP e UDP possuem portas de origem e destino. Uma aplicação pode escutar em determinada porta para receber conexões.

Uma porta não significa automaticamente que existe uma vulnerabilidade. Ela apenas indica que algum serviço pode estar utilizando aquele ponto de comunicação.

Segurança envolve conhecer quais serviços existem, mantê-los atualizados e restringir exposição desnecessária.
`,"Um servidor pode oferecer um serviço web e outro serviço administrativo. Cada serviço pode utilizar uma porta diferente.",["Porta identifica um endpoint lógico.","Serviço exposto deve ser necessário.","Conhecer serviços ajuda na defesa.","Exposição não significa vulnerabilidade automaticamente."]],

["TCP e UDP",`TCP é orientado a conexão e possui mecanismos para entrega confiável, ordenação e controle de fluxo.

UDP é mais simples e não oferece as mesmas garantias de entrega.

TCP é comum em aplicações onde a confiabilidade dos dados é importante. UDP é usado em cenários onde baixa latência ou simplicidade podem ser mais importantes.

A escolha depende das necessidades da aplicação.
`,"Uma transferência de arquivo normalmente precisa garantir que os dados cheguem corretamente. Uma aplicação em tempo real pode preferir características de UDP.",["TCP oferece confiabilidade e ordenação.","UDP é mais simples.","Protocolos têm objetivos diferentes.","Escolha depende da aplicação."]],

["DNS",`DNS significa Domain Name System. Ele permite associar nomes legíveis, como um domínio, a informações necessárias para localizar serviços.

Quando você acessa um domínio, seu dispositivo precisa descobrir para onde enviar a comunicação.

DNS possui vários tipos de registros. A e AAAA são usados para endereços IPv4 e IPv6. MX está relacionado a servidores de e-mail. CNAME permite apontamentos de nomes.
`,"Quando alguém digita um domínio no navegador, o DNS ajuda a descobrir o endereço associado.",["DNS traduz nomes em informações de rede.","A → IPv4.","AAAA → IPv6.","MX → e-mail.","CNAME → alias."]],

["HTTP, HTTPS e TLS",`HTTP é um protocolo utilizado para comunicação na Web.

HTTPS é HTTP protegido por TLS. TLS ajuda a fornecer confidencialidade e integridade para a comunicação.

O certificado digital permite ao navegador verificar a identidade do servidor dentro da infraestrutura de confiança utilizada.

HTTPS não significa que o site seja automaticamente confiável. Um site malicioso também pode utilizar HTTPS.
`,"Ao entrar em um site HTTPS, a comunicação entre navegador e servidor pode ser protegida contra observação e alteração durante o transporte.",["HTTPS = HTTP sobre TLS.","TLS protege comunicação em trânsito.","HTTPS não garante que o conteúdo seja legítimo.","Certificados participam da autenticação do servidor."]]
]},

{
id:"linux",
icon:"🐧",
title:"Linux para Cyber",
desc:"Terminal, arquivos, permissões, processos, serviços, usuários, logs e administração segura.",
lessons:[
["Conhecendo o Linux",`Linux é uma família de sistemas baseada no kernel Linux e utilizada em servidores, desktops, dispositivos e ambientes de segurança.

Distribuições combinam o kernel com ferramentas, bibliotecas, gerenciadores de pacotes e outros componentes.

No universo de segurança, Linux é importante porque muitos servidores e ferramentas são baseados nele.
`,"Uma distribuição pode oferecer terminal, gerenciador de pacotes, sistema de arquivos, serviços e ferramentas administrativas.",["Kernel não é o mesmo que distribuição.","Linux é amplamente usado em servidores.","Terminal é uma interface poderosa.","Administração exige cuidado com privilégios."]],

["Terminal e comandos básicos",`O terminal permite interagir com o sistema por comandos.

Comandos como pwd, ls, cd, cp, mv e mkdir são usados para navegar e organizar arquivos.

O importante é compreender o conceito por trás dos comandos e sempre verificar o caminho antes de executar operações destrutivas.
`,"pwd mostra onde você está; ls lista conteúdo; cd muda de diretório.",["pwd = diretório atual.","ls = lista arquivos.","cd = muda diretório.","mkdir = cria diretório."]],

["Arquivos e diretórios",`O Linux organiza recursos em uma estrutura hierárquica de diretórios.

Arquivos podem representar documentos, configurações, dispositivos ou outros recursos.

Diretórios comuns incluem /etc para configurações, /home para usuários e /var para dados variáveis, como determinados logs.
`,"Um administrador pode encontrar configurações de serviços em diretórios de configuração e registros em áreas destinadas a logs.",["/etc → configurações.","/home → diretórios de usuários.","/var → dados variáveis.","Sempre entenda o arquivo antes de modificá-lo."]],

["Permissões",`O Linux possui permissões para proprietário, grupo e outros usuários.

As permissões tradicionais incluem leitura, escrita e execução.

O modelo ajuda a limitar quem pode acessar ou modificar determinado recurso.

Permissões excessivas aumentam risco, por isso o princípio do menor privilégio é importante.
`,"Um arquivo de configuração sensível não deve ser editável por qualquer usuário do sistema.",["r = leitura.","w = escrita.","x = execução.","Proprietário, grupo e outros possuem permissões."]],

["Processos e serviços",`Um processo é uma instância de um programa em execução.

Serviços são componentes que executam funções persistentes ou aguardam eventos.

Administradores precisam saber quais processos e serviços existem, por que estão ativos e se são necessários.
`,"Se um serviço desconhecido está consumindo recursos, o administrador deve investigar sua origem e função antes de removê-lo.",["Processo = programa em execução.","Serviço pode executar continuamente.","Monitore consumo.","Evite desativar algo sem entender sua função."]],

["Logs no Linux",`Logs registram eventos importantes do sistema e das aplicações.

Eles ajudam a investigar erros, autenticação, mudanças e comportamentos suspeitos.

Um bom profissional aprende a interpretar horário, usuário, origem, ação e resultado de eventos.
`,"Múltiplas falhas de autenticação seguidas podem justificar uma investigação dependendo do contexto.",["Logs são evidências importantes.","Observe padrões.","Correlacione eventos.","Proteja os próprios logs contra alteração indevida."]]
]},

{
id:"windows",
icon:"🪟",
title:"Windows Security",
desc:"Arquitetura do Windows, contas, processos, serviços, políticas, logs e defesa.",
lessons:[
["Arquitetura básica do Windows",`Windows possui componentes responsáveis por processos, memória, armazenamento, rede, serviços e segurança.

Compreender a arquitetura ajuda a identificar onde configurações e controles de segurança estão localizados.

Ferramentas administrativas permitem visualizar processos, serviços, eventos e configurações.
`,"O Gerenciador de Tarefas ajuda a observar processos e consumo de recursos.",["Entenda processos.","Entenda serviços.","Conheça logs.","Administre com privilégios mínimos."]],

["Contas e privilégios",`Contas de usuário representam identidades no sistema.

Privilégios determinam quais ações uma identidade pode realizar.

Utilizar uma conta administrativa para todas as tarefas aumenta impacto potencial de erros ou comprometimentos.

O ideal é utilizar privilégios elevados apenas quando necessários.
`,"Um usuário pode trabalhar diariamente com conta padrão e elevar privilégios somente para uma tarefa administrativa.",["Conta ≠ privilégio.","Evite administrador permanente.","Use MFA quando disponível.","Audite permissões."]],

["Processos e serviços",`Processos representam programas em execução. Serviços executam funções específicas do sistema ou de aplicações.

Durante uma investigação, é importante identificar processos desconhecidos, seus caminhos, seus usuários e relações com outros componentes.

Não basta julgar um processo pelo nome: contexto é fundamental.
`,"Um nome parecido com um componente legítimo não prova que um arquivo seja legítimo.",["Observe caminho.","Observe assinatura quando disponível.","Observe usuário.","Correlacione com outros eventos."]],

["Event Viewer e logs",`O Windows registra muitos eventos relacionados a sistema, aplicações, autenticação e segurança.

Esses registros são fundamentais para troubleshooting e investigação.

Uma investigação eficiente considera horário, usuário, computador, evento, origem e sequência temporal.
`,"Uma autenticação suspeita deve ser analisada junto com outros eventos próximos no tempo.",["Logs precisam de contexto.","Tempo é importante.","Correlacione eventos.","Centralização melhora investigação."]],

["Microsoft Defender e proteção",`Soluções de proteção podem detectar arquivos, comportamentos e atividades suspeitas.

Antivírus moderno não depende apenas de assinaturas. Técnicas comportamentais, reputação e telemetria também podem ser utilizadas.

Nenhum mecanismo de proteção é perfeito, portanto defesa em camadas continua importante.
`,"Mesmo com antivírus ativo, uma organização precisa de atualizações, controle de acesso, backups e monitoramento.",["Antivírus é uma camada.","Atualizações são importantes.","Monitore alertas.","Não dependa de uma única defesa."]]
]},

{
id:"programacao",
icon:"💻",
title:"Programação para Cyber",
desc:"Python, lógica, dados, automação e desenvolvimento seguro.",
lessons:[
["Lógica de programação",`Programação consiste em transformar um problema em instruções que um computador consegue executar.

Variáveis armazenam dados. Condições permitem decisões. Laços repetem tarefas. Funções organizam código reutilizável.

Antes de escrever código, defina claramente entrada, processamento e saída.
`,"Um programa pode receber um nome, validar a entrada e produzir uma mensagem.",["Entrada → processamento → saída.","Use funções para organizar.","Valide dados.","Teste casos diferentes."]],

["Python básico",`Python é uma linguagem muito utilizada em automação e segurança.

Conceitos fundamentais incluem variáveis, strings, números, listas, dicionários, condições, loops e funções.

Em segurança, Python pode automatizar tarefas legítimas, analisar dados e processar logs.
`,"Um script pode ler um arquivo de logs e contar quantos eventos possuem determinada categoria.",["Aprenda sintaxe.","Trabalhe com arquivos.","Use funções.","Automatize tarefas repetitivas."]],

["Expressões regulares",`Expressões regulares são padrões utilizados para localizar ou validar texto.

Podem ser úteis para analisar logs, identificar formatos e extrair informações estruturadas.

Elas precisam ser usadas com cuidado, especialmente em entradas fornecidas por usuários, para evitar padrões excessivamente complexos.
`,"Uma expressão regular pode ajudar a identificar linhas que seguem determinado formato em um log.",["Regex trabalha com padrões.","Teste entradas variadas.","Evite complexidade desnecessária.","Use bibliotecas apropriadas."]],

["APIs e JSON",`APIs permitem que aplicações troquem informações.

JSON é um formato comum para representar dados estruturados.

Profissionais de segurança precisam entender autenticação, autorização, validação, rate limiting e tratamento de erros em APIs.
`,"Um sistema pode receber uma requisição autenticada e retornar informações em JSON.",["API define uma interface.","JSON representa dados.","Autenticação identifica.","Autorização decide o que pode ser feito."]],

["Desenvolvimento seguro",`Código seguro começa antes do programa chegar à produção.

Validação de entrada, controle de acesso, gerenciamento seguro de segredos, tratamento de erros, dependências atualizadas e testes são partes importantes.

Segurança deve fazer parte do ciclo de desenvolvimento, não ser apenas uma etapa final.
`,"Uma aplicação não deve confiar que o navegador sempre enviará dados corretos.",["Nunca confie na entrada do cliente.","Proteja segredos.","Atualize dependências.","Teste controles de acesso."]]
]},

{
id:"cripto",
icon:"🔑",
title:"Criptografia",
desc:"Hashes, chaves, criptografia simétrica, assimétrica, TLS e gerenciamento de segredos.",
lessons:[
["Criptografia na prática",`Criptografia utiliza técnicas matemáticas para proteger informações.

Ela pode fornecer confidencialidade, integridade, autenticação e não repúdio dependendo do mecanismo e contexto.

É importante escolher algoritmos e bibliotecas consolidados em vez de criar criptografia própria.
`,"Mensagens sensíveis podem ser protegidas enquanto estão sendo transmitidas ou armazenadas.",["Não invente algoritmos.","Escolha bibliotecas confiáveis.","Entenda o objetivo do mecanismo.","Chaves são fundamentais."]],

["Hash",`Hash transforma uma entrada em uma representação de tamanho definido.

Uma função hash criptográfica deve possuir propriedades que dificultem encontrar entradas que produzam determinados resultados ou encontrar colisões.

Hash não é a mesma coisa que criptografia reversível.
`,"Um sistema pode usar uma função hash adequada como parte do armazenamento seguro de senhas, seguindo práticas modernas.",["Hash não é criptografia reversível.","Colisões são uma preocupação.","Algoritmos antigos podem ser inadequados.","Senha exige estratégia específica."]],

["Salt e senhas",`Salt é um valor adicional utilizado junto ao processo de derivação de senha.

Ele ajuda a impedir que usuários com a mesma senha produzam exatamente o mesmo resultado e dificulta o uso de tabelas pré-computadas.

Sistemas modernos devem usar funções de derivação de senha apropriadas, como Argon2, scrypt ou bcrypt conforme o contexto.
`,"Duas contas com a mesma senha ainda devem possuir resultados armazenados diferentes quando salts únicos são utilizados.",["Salt deve ser único.","Salt não precisa ser secreto.","Use KDF adequada.","Nunca armazene senhas em texto puro."]],

["Criptografia simétrica",`Na criptografia simétrica, uma chave secreta é utilizada para proteger e recuperar os dados.

Ela é eficiente para grandes volumes de informação.

O desafio central é proteger e distribuir a chave de maneira segura.
`,"Um sistema pode utilizar uma chave secreta para proteger arquivos armazenados.",["Uma chave secreta é compartilhada.","É eficiente.","Gerenciamento de chaves é crítico.","AES é um exemplo conhecido."]],

["Criptografia assimétrica",`Criptografia assimétrica utiliza um par de chaves: pública e privada.

A chave pública pode ser compartilhada. A privada precisa permanecer protegida.

Esse modelo é importante em protocolos como TLS e sistemas de assinatura digital.
`,"Uma pessoa pode publicar uma chave pública enquanto mantém sua chave privada protegida.",["Pública pode ser compartilhada.","Privada deve ser protegida.","Assinaturas digitais usam conceitos assimétricos.","PKI ajuda a estabelecer confiança."]]
]},

{
id:"web",
icon:"🌍",
title:"Web Security",
desc:"HTTP, sessões, autenticação, autorização, OWASP e desenvolvimento web seguro.",
lessons:[
["Como uma aplicação Web funciona",`Uma aplicação web normalmente possui cliente, servidor e algum tipo de armazenamento.

O navegador envia requisições. O servidor processa essas requisições e devolve respostas.

Aplicações modernas podem possuir APIs, bancos de dados, serviços externos, caches e filas.

Cada componente cria responsabilidades de segurança.
`,"Ao fazer login, o navegador envia uma requisição e o servidor verifica as credenciais.",["Cliente não é confiável.","Servidor precisa validar entradas.","Cada componente possui riscos.","Mapeie fluxos de dados."]],

["Cookies e sessões",`HTTP é stateless: cada requisição não precisa carregar automaticamente o estado de requisições anteriores.

Sessões permitem associar requisições a uma identidade autenticada.

Cookies podem transportar identificadores de sessão. Flags como Secure, HttpOnly e SameSite ajudam a reduzir determinados riscos.
`,"Um cookie de sessão com HttpOnly reduz a possibilidade de acesso direto por JavaScript no navegador.",["Secure → enviar via HTTPS.","HttpOnly → reduz acesso via scripts.","SameSite ajuda contra determinados cenários cross-site.","Sessões precisam expirar adequadamente."]],

["SQL Injection",`SQL Injection acontece quando dados controlados pelo usuário são incorporados de maneira insegura em consultas SQL.

A defesa principal é separar dados de instruções utilizando consultas parametrizadas ou mecanismos equivalentes.

Validação de entrada também é importante, mas não deve substituir parametrização.
`,"Em uma aplicação segura, o valor fornecido pelo usuário é tratado como dado e não como parte da instrução SQL.",["Use queries parametrizadas.","Não concatene entrada diretamente.","Use menor privilégio no banco.","Validação é camada adicional."]],

["Cross-Site Scripting",`XSS ocorre quando conteúdo controlado por uma pessoa consegue ser interpretado como código pelo navegador de outra pessoa.

Existem diferentes contextos de XSS, como refletido, armazenado e baseado em DOM.

Defesas incluem output encoding apropriado ao contexto, sanitização quando necessária e políticas de segurança.
`,"Uma aplicação que mostra conteúdo fornecido pelo usuário deve garantir que esse conteúdo seja tratado como texto quando necessário.",["Contexto importa.","Escape/encode corretamente.","CSP pode adicionar defesa.","Não confie em filtros simples."]],

["Autenticação e autorização",`Autenticação responde: quem é você?

Autorização responde: o que você pode fazer?

Uma aplicação pode autenticar corretamente um usuário e ainda possuir falhas de autorização.

Controles devem ser aplicados no servidor, não apenas escondendo botões na interface.
`,"Esconder um botão administrativo no frontend não impede que um usuário tente acessar a função diretamente.",["Autenticação ≠ autorização.","Servidor deve verificar permissões.","MFA aumenta segurança.","Privilégio mínimo é essencial."]],

["OWASP e riscos Web",`OWASP é uma organização conhecida por materiais de segurança de aplicações.

Listas de riscos ajudam equipes a reconhecer categorias importantes, mas não substituem uma análise específica do sistema.

Segurança web envolve arquitetura, código, infraestrutura, identidade, dependências e monitoramento.
`,"Uma equipe pode usar categorias conhecidas para organizar testes de segurança dentro de um ambiente autorizado.",["Use referências como apoio.","Analise o contexto.","Corrija a causa raiz.","Teste novamente após corrigir."]]
]},

{
id:"blue",
icon:"🛡️",
title:"Blue Team e SOC",
desc:"Defesa, monitoramento, SIEM, detecção, alertas, investigação e resposta.",
lessons:[
["O que é Blue Team?",`Blue Team representa profissionais e processos focados em defesa.

Eles trabalham para prevenir, detectar, investigar e responder a incidentes.

Uma defesa madura combina tecnologia, processos e pessoas.
`,"Uma equipe pode monitorar autenticações, endpoints, rede e aplicações para identificar sinais anormais.",["Prevenir.","Detectar.","Investigar.","Responder.","Recuperar."]],

["Firewall",`Firewall controla tráfego com base em regras.

Regras podem considerar origem, destino, porta, protocolo, interface e outros atributos dependendo da tecnologia.

Uma política segura normalmente permite apenas o que é necessário e registra eventos relevantes.
`,"Um servidor que não precisa aceitar determinado serviço externo não deve expô-lo sem motivo.",["Default deny pode reduzir exposição.","Documente regras.","Remova regras antigas.","Monitore mudanças."]],

["IDS e IPS",`IDS significa Intrusion Detection System e normalmente detecta e alerta.

IPS significa Intrusion Prevention System e pode bloquear determinadas atividades.

Detecção baseada em assinatura procura padrões conhecidos. Detecção comportamental pode procurar desvios ou características suspeitas.
`,"Um IDS pode gerar um alerta para uma atividade que precisa ser investigada pelo SOC.",["IDS alerta.","IPS pode bloquear.","Alertas precisam de contexto.","Falsos positivos existem."]],

["SIEM",`SIEM centraliza e correlaciona eventos de diferentes fontes.

Isso permite construir pesquisas, regras de detecção, dashboards e alertas.

A qualidade de um SIEM depende muito da qualidade dos dados, normalização, contexto e regras.
`,"Um SIEM pode relacionar uma autenticação incomum com eventos de endpoint próximos no tempo.",["Centralização facilita investigação.","Normalize dados.","Crie regras úteis.","Evite excesso de ruído."]],

["Detecção e triagem",`Uma detecção é um sinal que pode indicar atividade suspeita.

Triagem determina prioridade e contexto.

Nem todo alerta é incidente. Analistas precisam investigar evidências antes de concluir.
`,"Um alerta de login incomum pode ser legítimo se o usuário estiver viajando e houver evidências que confirmem isso.",["Investigue contexto.","Priorize impacto.","Documente evidências.","Não conclua apenas por um sinal."]],

["Resposta a incidentes",`Resposta a incidentes é um processo estruturado para lidar com eventos de segurança.

Etapas comuns incluem preparação, identificação, contenção, erradicação, recuperação e lições aprendidas.

A organização deve preservar evidências quando necessário e documentar decisões.
`,"Após conter um incidente, a equipe precisa corrigir a causa, recuperar sistemas e avaliar como evitar recorrência.",["Tenha plano.","Preserve evidências.","Comunique corretamente.","Faça pós-incidente."]]
]},

{
id:"osint",
icon:"🔎",
title:"OSINT e Investigação",
desc:"Pesquisa de fontes abertas, verificação, contexto, metadados e análise de informações.",
lessons:[
["O que é OSINT?",`OSINT significa Open Source Intelligence: inteligência obtida a partir de fontes publicamente disponíveis.

A prática envolve coletar, validar, organizar e analisar informações.

OSINT não significa invadir contas ou acessar dados privados. O foco é informação legitimamente acessível.
`,"Uma investigação pode comparar informações publicadas em diferentes fontes abertas.",["Fonte pública não significa automaticamente fonte confiável.","Verifique contexto.","Registre origem.","Respeite privacidade e leis."]],

["Verificação de informações",`Uma informação encontrada online precisa ser avaliada.

Procure a fonte original, data, contexto, autoria e confirmação independente quando possível.

Capturas de tela isoladas podem perder contexto ou ser manipuladas.
`,"Antes de aceitar uma afirmação, procure documentos ou fontes primárias quando disponíveis.",["Fonte primária é importante.","Confira datas.","Compare fontes.","Não tire conclusão de uma única evidência."]],

["Metadados",`Metadados são informações sobre arquivos ou conteúdos.

Fotos e documentos podem conter informações técnicas como data, software usado ou outros campos, dependendo de como foram produzidos e compartilhados.

Metadados podem ajudar investigações, mas também podem expor informações que o autor não pretendia divulgar.
`,"Uma organização pode remover metadados desnecessários de documentos antes de publicá-los.",["Metadados podem revelar contexto.","Nem todo arquivo possui os mesmos campos.","Revise antes de publicar.","Privacidade importa."]],

["Pegada digital",`Pegada digital representa informações deixadas pela atividade de uma pessoa ou organização na Internet.

Ela pode incluir publicações, perfis públicos, registros e informações disponibilizadas voluntariamente.

Reduzir exposição desnecessária é parte da segurança pessoal e organizacional.
`,"Uma organização pode revisar quais informações de infraestrutura aparecem publicamente em seu próprio site.",["Publique apenas o necessário.","Revise informações públicas.","Proteja dados pessoais.","Tenha política de exposição."]]
]},

{
id:"vuln",
icon:"🚨",
title:"Vulnerabilidades e Gestão de Risco",
desc:"CVEs, CVSS, patches, hardening, configuração segura e gestão de vulnerabilidades.",
lessons:[
["O que é uma vulnerabilidade?",`Vulnerabilidade é uma fraqueza que pode permitir ou contribuir para um impacto de segurança.

Ela pode existir em software, configuração, arquitetura, processo ou comportamento humano.

Nem toda vulnerabilidade possui o mesmo risco. Contexto é fundamental.
`,"Uma falha em um serviço que não é exposto externamente pode ter risco diferente da mesma falha em um serviço público.",["Identifique.","Avalie.","Priorize.","Corrija.","Valide."]],

["CVE e CVSS",`CVE é um sistema de identificação de vulnerabilidades conhecidas.

CVSS é uma metodologia que ajuda a comunicar características e severidade técnica de vulnerabilidades.

Uma pontuação não substitui análise de risco da própria organização.
`,"Uma equipe pode usar CVE para identificar uma vulnerabilidade específica e CVSS como uma das informações para priorização.",["CVE identifica.","CVSS ajuda a avaliar severidade.","Contexto organizacional importa.","Priorize exposição e impacto."]],

["Patches e atualizações",`Atualizações corrigem bugs, vulnerabilidades e outros problemas.

Manter sistemas atualizados é uma das medidas básicas de segurança.

Organizações maiores precisam de processos para testar, aprovar, distribuir e verificar atualizações.
`,"Um ambiente crítico pode ter uma janela controlada de atualização e validação.",["Mantenha inventário.","Aplique atualizações.","Teste quando necessário.","Verifique se a correção foi aplicada."]],

["Hardening",`Hardening significa reduzir a superfície de ataque de um sistema.

Isso pode incluir remover serviços desnecessários, restringir privilégios, configurar políticas seguras, proteger interfaces administrativas e manter componentes atualizados.

O hardening deve ser documentado e compatível com a função do sistema.
`,"Um servidor pode ter serviços que não são utilizados. Desabilitar componentes desnecessários pode reduzir exposição, desde que sua função seja conhecida.",["Remova o desnecessário.","Restrinja acesso.","Proteja administração.","Documente mudanças."]],

["Backups e recuperação",`Backup é uma cópia de dados utilizada para recuperação.

Uma estratégia de backup precisa considerar frequência, retenção, proteção, restauração e testes.

Um backup que nunca foi testado pode falhar justamente quando for necessário.
`,"Uma organização pode testar periodicamente a restauração de arquivos para verificar se os backups funcionam.",["Tenha cópias.","Proteja backups.","Teste restauração.","Considere ransomware."]],

["Menor privilégio",`O princípio do menor privilégio determina que identidades recebam apenas os acessos necessários para suas funções.

Isso limita o impacto de erros, credenciais comprometidas e abuso de privilégios.

Privilégios devem ser revisados periodicamente.
`,"Um funcionário que só precisa ler determinado sistema não precisa necessariamente de permissão para excluir registros.",["Conceda somente o necessário.","Revise permissões.","Remova acessos antigos.","Separe funções críticas."]]
]},

{
id:"pentest",
icon:"🎯",
title:"Pentest e Segurança Ofensiva Autorizada",
desc:"Metodologia, escopo, reconhecimento, validação e relatório em ambientes permitidos.",
lessons:[
["O que é pentest?",`Pentest é uma avaliação de segurança realizada com autorização e escopo definidos.

O objetivo é identificar e demonstrar riscos de maneira controlada para que possam ser corrigidos.

Testes sem autorização podem causar danos e problemas legais.
`,"Uma empresa autoriza uma avaliação em seu ambiente de laboratório durante determinado período.",["Tenha autorização.","Defina escopo.","Documente regras.","Proteja dados encontrados."]],

["Escopo e regras de engajamento",`Antes de qualquer teste é necessário definir o que pode ser testado.

O escopo pode incluir sistemas, domínios, horários, técnicas permitidas e contatos de emergência.

Regras claras reduzem risco de indisponibilidade e conflitos.
`,"Um contrato pode determinar que determinado servidor de produção não faz parte do teste.",["Escopo é obrigatório.","Defina limites.","Tenha contato de emergência.","Documente autorização."]],

["Reconhecimento",`Reconhecimento consiste em entender o ambiente autorizado.

Pode envolver documentação, inventário, informações públicas e identificação de componentes dentro do escopo.

O objetivo profissional é aumentar conhecimento do ambiente para avaliar riscos com segurança.
`,"Durante um exercício autorizado, uma equipe começa pelo inventário dos sistemas disponibilizados para o teste.",["Comece pelo escopo.","Colete informações necessárias.","Evite extrapolar limites.","Documente descobertas."]],

["Validação de vulnerabilidades",`Encontrar um possível problema não significa que ele já esteja comprovado.

Uma validação responsável confirma a condição com o menor impacto possível.

Em ambientes reais, evite ações destrutivas ou acesso desnecessário a dados.
`,"Se uma falha pode ser demonstrada com um teste controlado, não é necessário realizar ações que destruam dados.",["Minimize impacto.","Use ambientes de laboratório quando possível.","Colete evidência suficiente.","Não exfiltre dados desnecessariamente."]],

["Relatório de segurança",`O relatório transforma descobertas técnicas em informação útil para correção.

Uma boa descoberta possui descrição, evidência, impacto, risco, escopo e recomendação de correção.

A comunicação deve ser clara para técnicos e gestores.
`,"Em vez de apenas dizer que existe uma falha, o relatório explica onde está, qual o impacto e como reduzir o risco.",["Descreva a causa.","Mostre evidência.","Explique impacto.","Recomende correção.","Faça reteste."]]
]},

{
id:"cloud",
icon:"☁️",
title:"Cloud Security",
desc:"Identidade, armazenamento, redes, responsabilidades e segurança em nuvem.",
lessons:[
["Conceitos de Cloud",`Cloud computing fornece recursos computacionais sob demanda.

Modelos comuns incluem IaaS, PaaS e SaaS.

Segurança em nuvem utiliza o modelo de responsabilidade compartilhada: provedor e cliente possuem responsabilidades diferentes.
`,"O provedor pode proteger parte da infraestrutura enquanto o cliente precisa configurar corretamente identidades e dados.",["IaaS, PaaS e SaaS.","Entenda responsabilidade compartilhada.","Configuração é crítica.","Identidade é central."]],

["IAM",`IAM significa Identity and Access Management.

Ele controla identidades, autenticação, autorização e permissões.

Políticas excessivamente amplas aumentam risco.
`,"Uma aplicação pode receber somente as permissões necessárias para acessar determinado recurso.",["Use menor privilégio.","Evite credenciais permanentes quando possível.","Audite permissões.","Proteja identidades."]],

["Storage seguro",`Armazenamento em nuvem precisa ser configurado para impedir exposição acidental.

Controle de acesso, criptografia, logging e políticas de retenção são importantes.

Exposição pública deve ser intencional e revisada.
`,"Um bucket que contém dados internos não deve ficar publicamente acessível sem uma justificativa clara.",["Revise exposição.","Criptografe dados.","Controle permissões.","Monitore mudanças."]],

["Segurança de APIs Cloud",`Serviços cloud frequentemente utilizam APIs para administração e automação.

Essas APIs precisam de autenticação, autorização, proteção de credenciais, logs e limites adequados.

Chaves de API nunca devem ser publicadas em código ou repositórios públicos.
`,"Uma aplicação pode utilizar um mecanismo seguro de gerenciamento de segredos em vez de colocar uma chave diretamente no código.",["Proteja secrets.","Use IAM.","Registre ações.","Revogue credenciais desnecessárias."]]
]},

{
id:"ad",
icon:"🏢",
title:"Active Directory",
desc:"Identidades corporativas, domínios, grupos, políticas e defesa de ambientes Windows.",
lessons:[
["O que é Active Directory?",`Active Directory é um serviço de diretório amplamente utilizado para gerenciar identidades e recursos em ambientes Windows corporativos.

Ele permite organizar usuários, computadores, grupos e políticas.

Por ser central para identidade, sua proteção é extremamente importante.
`,"Uma empresa pode utilizar um domínio para administrar contas de funcionários e computadores corporativos.",["Identidade centralizada.","Grupos organizam permissões.","Políticas padronizam configurações.","Proteja contas privilegiadas."]],

["Usuários e grupos",`Grupos facilitam a administração de permissões.

Em vez de conceder acesso individualmente a dezenas de pessoas, uma organização pode utilizar grupos baseados em funções.

Isso precisa ser acompanhado de revisão periódica.
`,"Usuários do setor financeiro podem pertencer a um grupo com acesso aos recursos necessários para sua função.",["Use grupos por função.","Evite privilégios excessivos.","Revise membros.","Remova contas antigas."]],

["Group Policy",`Group Policy permite aplicar configurações de forma centralizada em ambientes Windows.

Políticas podem ajudar a padronizar segurança, autenticação, configurações de sistema e comportamento dos dispositivos.

Configurações precisam ser testadas para evitar impactos operacionais.
`,"Uma organização pode aplicar políticas de bloqueio e configurações de segurança para computadores corporativos.",["Centralização ajuda.","Documente políticas.","Teste mudanças.","Evite configurações conflitantes."]],

["Proteção de contas privilegiadas",`Contas administrativas possuem grande poder e precisam de controles adicionais.

Separar contas administrativas de contas comuns, utilizar MFA quando disponível e monitorar atividades privilegiadas reduz risco.

Contas privilegiadas devem ser poucas e cuidadosamente administradas.
`,"Um administrador pode possuir uma conta comum para tarefas diárias e outra para atividades administrativas.",["Separe funções.","MFA.","Monitoramento.","Menor privilégio."]]
]},

{
id:"mobile",
icon:"📱",
title:"Mobile Security",
desc:"Android, iOS, permissões, apps, armazenamento e proteção de dispositivos móveis.",
lessons:[
["Segurança Mobile",`Smartphones armazenam mensagens, fotos, documentos, credenciais e informações de localização.

Segurança mobile envolve sistema operacional, aplicativos, permissões, rede, autenticação e proteção física.
`,"Bloqueio de tela e atualizações reduzem riscos básicos de segurança.",["Mantenha sistema atualizado.","Use bloqueio forte.","Revise permissões.","Instale apps confiáveis."]],

["Permissões de aplicativos",`Aplicativos solicitam permissões para acessar recursos.

O usuário deve avaliar se uma permissão faz sentido para a função do aplicativo.

Permissões excessivas podem aumentar exposição de dados.
`,"Um aplicativo simples de lanterna pedir acesso permanente a contatos merece questionamento.",["Revise permissões.","Entenda por que são necessárias.","Negue acesso desnecessário.","Remova apps que não usa."]],

["Armazenamento e autenticação",`Dispositivos modernos possuem mecanismos para proteger dados armazenados.

Senha, PIN, biometria e criptografia podem atuar em conjunto.

Recuperação de conta também precisa ser protegida.
`,"Perder fisicamente um celular não deve significar acesso automático aos dados.",["Use bloqueio.","Ative recursos de proteção.","Proteja contas.","Tenha recuperação segura."]]
]},

{
id:"wifi",
icon:"📡",
title:"Wi-Fi Security",
desc:"Redes sem fio, autenticação, criptografia e boas práticas de proteção.",
lessons:[
["Como funciona Wi-Fi",`Wi-Fi permite comunicação sem fio entre dispositivos e pontos de acesso.

Redes sem fio precisam lidar com autenticação, criptografia e alcance físico.

O sinal pode ultrapassar os limites físicos desejados, por isso configuração importa.
`,"Uma rede doméstica pode utilizar um ponto de acesso com senha forte e firmware atualizado.",["Proteja o ponto de acesso.","Atualize firmware.","Use criptografia moderna.","Evite configurações antigas."]],

["WPA2 e WPA3",`WPA2 e WPA3 são padrões relacionados à segurança de redes Wi-Fi.

Tecnologias antigas podem possuir limitações e vulnerabilidades conhecidas.

Quando possível, use padrões modernos suportados pelos dispositivos.
`,"Um roteador atualizado pode oferecer WPA3 para clientes compatíveis.",["Prefira padrões modernos.","Use senha forte.","Atualize o roteador.","Separe redes quando necessário."]],

["Rede de convidados",`Uma rede de convidados separa dispositivos externos da rede principal.

Isso pode reduzir o impacto caso um dispositivo visitante esteja comprometido.

Segmentação deve ser configurada corretamente para cumprir seu objetivo.
`,"Visitantes podem receber acesso à Internet sem acesso direto aos dispositivos internos.",["Segmente.","Não compartilhe a rede principal.","Revise configurações.","Monitore quando necessário."]]
]},

{
id:"malware",
icon:"🦠",
title:"Malware e Análise Defensiva",
desc:"Tipos de malware, comportamento, prevenção e análise segura em laboratório.",
lessons:[
["O que é malware?",`Malware é software criado para realizar ações maliciosas ou não autorizadas.

Categorias incluem trojans, ransomware, spyware, worms e outros tipos.

Nem todo malware funciona da mesma forma e uma mesma amostra pode apresentar vários comportamentos.
`,"Ransomware pode tentar impedir acesso a arquivos e exigir pagamento.",["Malware = software malicioso.","Categorias possuem comportamentos diferentes.","Prevenção é importante.","Resposta deve ser planejada."]],

["Ransomware",`Ransomware é um tipo de ameaça que pode impedir acesso a dados, frequentemente por meio de criptografia maliciosa ou outras técnicas.

Backups isolados e testados são uma defesa importante.

Organizações também precisam de segmentação, controle de acesso, atualização e monitoramento.
`,"Se uma estação for comprometida, backups bem protegidos podem permitir recuperação sem depender do atacante.",["Backups testados.","Menor privilégio.","Segmentação.","Monitoramento."]],

["Análise segura",`Análise de malware deve ser feita em ambientes isolados e controlados.

Profissionais observam comportamento, arquivos, processos, conexões e indicadores.

Nunca execute amostras desconhecidas diretamente no computador pessoal.
`,"Um laboratório isolado pode ser utilizado para estudar comportamento de uma amostra sem expor a rede de produção.",["Use sandbox/lab.","Isole rede.","Colete evidências.","Não use ambiente pessoal."]],

["Indicadores de comprometimento",`IOCs são artefatos que podem indicar comprometimento, como hashes, domínios, endereços, caminhos ou padrões de comportamento.

Um IOC isolado não prova necessariamente que um sistema esteja comprometido.

Contexto e correlação são importantes.
`,"Um hash identificado como malicioso pode ser usado como um sinal para procurar a mesma amostra em endpoints.",["IOC é indicador.","Correlacione evidências.","Mantenha contexto.","Atualize inteligência."]]
]},

{
id:"dfir",
icon:"🧪",
title:"DFIR e Forense Digital",
desc:"Preservação, evidências, timeline, análise e resposta pós-incidente.",
lessons:[
["O que é DFIR?",`DFIR combina Digital Forensics and Incident Response.

Forense busca coletar e analisar evidências digitais. Resposta a incidentes busca conter, corrigir e recuperar de eventos de segurança.

As duas áreas trabalham juntas durante investigações.
`,"Após um incidente, uma equipe pode preservar evidências e ao mesmo tempo trabalhar para conter o problema.",["Preserve evidências.","Documente ações.","Trabalhe com metodologia.","Mantenha cadeia de custódia quando necessária."]],

["Evidência digital",`Evidência digital pode existir em computadores, celulares, servidores, logs e outros sistemas.

A coleta precisa considerar integridade, contexto e documentação.

Modificar uma evidência sem controle pode prejudicar uma investigação.
`,"Uma equipe registra quem coletou um artefato, quando foi coletado e como foi armazenado.",["Documentação.","Integridade.","Origem.","Controle de acesso."]],

["Timeline",`Timeline organiza eventos em ordem temporal.

Ela pode correlacionar logs, arquivos, autenticações e outros eventos.

A linha do tempo ajuda a entender o que ocorreu antes, durante e depois de um incidente.
`,"Uma investigação pode comparar o horário de um login com alterações de arquivos e alertas de segurança.",["Tempo ajuda a correlacionar.","Considere fusos.","Valide timestamps.","Use várias fontes."]]
]},

{
id:"devsecops",
icon:"⚙️",
title:"DevSecOps",
desc:"Integração de segurança no desenvolvimento, CI/CD, dependências e secrets.",
lessons:[
["O que é DevSecOps?",`DevSecOps integra segurança ao ciclo de desenvolvimento e operações.

Em vez de esperar até o final, equipes automatizam verificações durante o desenvolvimento.

Isso ajuda a encontrar problemas mais cedo.
`,"Um pipeline pode verificar dependências e padrões de segurança antes de uma aplicação chegar à produção.",["Segurança desde cedo.","Automação.","Feedback rápido.","Responsabilidade compartilhada."]],

["Dependências",`Aplicações modernas utilizam bibliotecas externas.

Vulnerabilidades em dependências podem afetar o projeto.

Inventário, atualização e ferramentas de análise ajudam a gerenciar esse risco.
`,"Uma equipe pode identificar uma biblioteca desatualizada e atualizar para uma versão corrigida.",["Conheça dependências.","Monitore vulnerabilidades.","Atualize.","Teste após atualizar."]],

["Secrets",`Senhas, tokens e chaves privadas não devem ficar expostos no código-fonte.

Sistemas de gerenciamento de segredos ajudam a controlar acesso e rotação.

Se um segredo for exposto, ele deve ser tratado como comprometido e substituído.
`,"Em vez de colocar uma senha diretamente no código, a aplicação pode obtê-la de um mecanismo seguro de secrets.",["Nunca publique secrets.","Use vaults.","Faça rotação.","Revogue credenciais expostas."]],

["CI/CD seguro",`Pipelines automatizam testes, build e implantação.

Eles também precisam de controles de acesso e proteção de credenciais.

Um pipeline comprometido pode afetar sistemas de produção, então deve ser tratado como parte da superfície de segurança.
`,"Somente identidades autorizadas devem poder alterar configurações responsáveis por implantação.",["Proteja pipeline.","Controle permissões.","Audite alterações.","Proteja artefatos."]]
]},

{
id:"ctf",
icon:"🏆",
title:"CTF e Laboratórios",
desc:"Como estudar segurança por desafios, raciocínio, documentação e ambientes controlados.",
lessons:[
["O que é CTF?",`CTF significa Capture The Flag.

São desafios educacionais em que participantes precisam encontrar informações, resolver problemas ou demonstrar conhecimentos dentro de um ambiente criado para isso.

CTFs são excelentes para aprender porque permitem experimentar sem afetar sistemas reais.
`,"Um laboratório pode esconder uma flag dentro de uma aplicação criada especificamente para o desafio.",["Use ambientes autorizados.","Leia o escopo.","Documente raciocínio.","Aprenda com erros."]],

["Categorias de CTF",`CTFs podem envolver Web, Criptografia, Forense, OSINT, Engenharia Reversa, Programação, Redes e outras áreas.

Cada categoria desenvolve habilidades diferentes.

Começar por desafios básicos ajuda a construir fundamentos.
`,"Um desafio de forense pode apresentar um arquivo de log e pedir que o aluno identifique um evento importante.",["Web.","Crypto.","Forense.","OSINT.","Programação.","Redes."]],

["Metodologia de estudo",`Não tente decorar todas as ferramentas.

Primeiro entenda o problema. Depois pesquise conceitos, formule hipóteses, teste de maneira segura e documente o resultado.

A capacidade de raciocínio é mais importante do que decorar comandos.
`,"Ao encontrar um desafio desconhecido, descreva o que sabe, o que não sabe e quais evidências podem responder à pergunta.",["Entenda.","Pesquise.","Formule hipótese.","Teste no laboratório.","Documente."]]
]},

{
id:"carreira",
icon:"🚀",
title:"Carreira em Cybersecurity",
desc:"Áreas profissionais, portfólio, estudos, ética e evolução técnica.",
lessons:[
["Áreas da cibersegurança",`Cybersecurity possui muitas áreas: SOC, Blue Team, AppSec, Cloud Security, GRC, Pentest, DFIR, Threat Intelligence, Security Engineering e outras.

Não é necessário dominar tudo de uma vez.

Escolha fundamentos e depois explore áreas diferentes.
`,"Uma pessoa pode começar com redes e Linux e posteriormente experimentar SOC, Cloud ou segurança web.",["Conheça diferentes áreas.","Construa fundamentos.","Pratique.","Descubra sua especialização."]],

["Portfólio",`Projetos demonstram conhecimento melhor do que apenas afirmar que sabe algo.

Um portfólio pode conter laboratórios autorizados, scripts de automação, documentação, write-ups de CTFs e projetos defensivos.

Nunca publique dados reais ou informações confidenciais.
`,"Um projeto pode documentar como um laboratório foi configurado e quais controles de segurança foram implementados.",["Documente projetos.","Proteja informações.","Mostre raciocínio.","Tenha projetos reproduzíveis."]],

["Ética e responsabilidade",`Segurança exige responsabilidade.

Profissionais podem ter acesso a informações extremamente sensíveis.

Autorização, privacidade, legislação, escopo e minimização de impacto devem orientar o trabalho.
`,"Antes de avaliar um sistema, obtenha autorização clara e defina exatamente o escopo.",["Autorização.","Privacidade.","Escopo.","Minimização de impacto.","Responsabilidade."]]
]}

];

window.CURSOS=CURSOS;
