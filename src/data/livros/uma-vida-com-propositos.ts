export interface DiaDeLeitura {
  dia: number;
  titulo: string;
  versiculo: string;
  versiculoRef: string;
  conteudo: string[];
  pensamento: string;
  versiculoMemorizacao: string;
  versiculoMemorizacaoRef: string;
  perguntaParaMeditar: string;
}

export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  descricao: string;
  totalDias: number;
  cor: string;
  dias: DiaDeLeitura[];
}

const diasPreenchidos: DiaDeLeitura[] = [
  {
    dia: 1,
    titulo: 'Tudo começa com Deus',
    versiculo: 'Pois tudo, absolutamente tudo, acima e abaixo, visível e invisível [...] — tudo começou nele e nele encontra propósito.',
    versiculoRef: 'Colossenses 1.16, AM',
    conteudo: [
      'Você não é o foco. O propósito da vida é muito maior que a realização pessoal, a paz de espírito ou mesmo a felicidade. É muito maior que a família, a carreira ou mesmo os mais ousados sonhos e ambições. Se você quiser saber por que foi colocado neste planeta, deverá começar por Deus. Você nasceu por um propósito dele e para cumprir o propósito dele.',
      'A procura pelo propósito da vida tem intrigado o ser humano há milhares de anos. Por isso normalmente erramos já no ponto de partida — nós mesmos. Fazemos perguntas egocêntricas: "O que quero ser? O que devo fazer com minha vida? Quais são meus objetivos, minhas ambições e meus sonhos para meu futuro?". Concentrar tudo em nós mesmos, porém, jamais desvendará o propósito de nossa vida.',
      'Ao contrário do que afirmam livros conceituados, filmes e seminários, você não descobrirá o sentido da vida olhando dentro de você mesmo. É provável que já tenha tentado isso, mas você não criou você mesmo, logo não pode dizer para que foi criado!',
      'Somente em Deus descobriremos nossa origem, nossa identidade, nosso significado, nosso propósito, nossa importância e nosso destino. Todos os outros caminhos levam a um beco sem saída.',
      'Muitos tentam usar Deus para a autorrealização, mas isso é contrário à natureza e resultará em fracasso. Você foi feito por Deus; não o contrário. A Bíblia diz: "Ficar obcecado consigo mesmo nessa questão é entrar num beco sem saída. Quem olha para Deus é levado a um campo aberto, a uma vida livre, espaçosa".',
      'Já li muitos livros que sugerem maneiras de descobrir o propósito de vida — todos podem ser classificados como livros de "autoajuda", pois abordam o assunto de uma perspectiva egocêntrica. Livros de autoajuda, até mesmo os cristãos, normalmente propõem os mesmos passos previsíveis para encontrar o propósito: defina claramente seus valores, estabeleça suas metas, descubra suas habilidades, almeje grandes realizações, vá à luta e acredite em você mesmo.',
      'Você precisa de algo mais que conselhos de autoajuda. A Bíblia é nosso "Manual do proprietário", que explica por que vivemos, como a vida funciona, o que evitar e o que esperar do futuro. A Bíblia é algo misterioso que encerra a profundidade dos seus propósitos. Nada tem de vaga e superficial.',
      'Felizmente, há uma alternativa à especulação sobre o significado e o propósito da vida. Trata-se da revelação. Podemos recorrer ao que Deus revelou sobre a vida em sua Palavra. O modo mais fácil de descobrir o propósito de uma invenção é perguntar ao inventor. Da mesma forma, o propósito de sua vida funciona assim: pergunte a Deus.',
      'O Senhor não nos deixou às cegas para ficarmos nos questionando e conjecturando. Ele claramente revela, nas páginas da Bíblia, os cinco propósitos que tem para nossa vida. É o nosso "Manual do proprietário", que explica por que vivemos, como a vida funciona e o que esperar do futuro.',
      'Há três critérios para nosso propósito: você descobre sua identidade e propósito no relacionamento com Jesus Cristo; Deus já pensava em você muito antes de você pensar a respeito dele — o propósito determinado por ele para sua vida é anterior à sua concepção; e seu propósito de vida encaixa-se em outro propósito muito maior e cósmico, que Deus planejou para a eternidade.',
      'Andrei Bitov, romancista russo, cresceu em um regime ateu e comunista. Mas Deus atraiu sua atenção num dia terrível. Ele recorda: "Aos 27 anos de idade, enquanto estava no metrô de Leningrado, fui dominado por um desespero tão intenso que a vida pareceu parar de vez, apropriando-se completamente do futuro e não deixando nenhum significado. De repente, uma frase apareceu por si só: \'Sem Deus, a vida não faz sentido\'. Martelando-a, assombrado, na minha cabeça, saí do metrô e caminhei em direção à luz de Deus." Você deve ter se sentido perdido a respeito de seu propósito na vida. Parabéns! Você está prestes a caminhar para a luz.',
    ],
    pensamento: 'Eu não sou o foco.',
    versiculoMemorizacao: 'Pois tudo, absolutamente tudo, acima e abaixo, visível e invisível [...] — tudo começou nele e nele encontra propósito.',
    versiculoMemorizacaoRef: 'Colossenses 1.16, AM',
    perguntaParaMeditar: 'Apesar de todos os argumentos a meu redor, como posso me lembrar de que a vida é na verdade viver para Deus, mas não para mim mesmo?',
  },
  {
    dia: 2,
    titulo: 'Você não é um acidente',
    versiculo: 'Eu sou seu Criador. Você estava sob meus cuidados mesmo antes de nascer.',
    versiculoRef: 'Isaías 44.2a, CEV',
    conteudo: [
      'Você não é um acidente. Seu nascimento não foi um erro ou um infortúnio, e sua vida não é um acidente da natureza. Seus pais podem não ter-lo planejado, mas Deus certamente o fez. Ele não ficou nem um pouco surpreso com seu nascimento. Aliás, ele o aguardava.',
      'Muito antes de ser concebido por seus pais, você foi concebido na mente de Deus. Ele foi o primeiro a pensar em você. Você não está respirando neste exato momento por acaso, sorte, destino ou coincidência. Está vivo porque Deus quis criá-lo! A Bíblia diz: "O Senhor cumprirá o seu propósito para comigo!"',
      'Ele determinou cada pequeno detalhe de nosso corpo. Ele deliberadamente escolheu seu biotipo: a cor da pele, o cabelo e todas as outras características. Ele fez seu corpo sob medida, exatamente do jeito que queria. Também determinou os talentos naturais que você possuiria e deu-lhe uma personalidade singular. A Bíblia diz: "Tu me conheces por como fui feito: aos poucos; como fui esculpido: do nada até ser alguma coisa. Como um livro aberto, tu me viste crescer desde a concepção até o nascimento; todos os estágios da minha vida foram exibidos diante de ti".',
      'O Senhor não age de forma aleatória: ele planeja tudo com extrema precisão. Quanto mais os físicos, biólogos e outros cientistas aprendem sobre o universo, mais percebemos quanto ele é singularmente adequado à nossa existência — feito sob medida com as exatas especificações que tornam possível a vida humana.',
      'Deus fez você por um motivo; isso também significa que ele decidiu a hora de seu nascimento e seu tempo de vida. Ele planejou seus dias de vida antecipadamente, escolhendo o momento exato de seu nascimento na história. A Bíblia diz: "Antes mesmo de o meu corpo tomar forma humana, o Senhor já havia planejado todos os dias da minha vida; cada um deles estava registrado no seu livro, antes de qualquer um deles existir".',
      'Deus também planejou o lugar em que você nasceria e onde viveria para o propósito dele. Sua etnia e sua nacionalidade não são mera casualidade: Deus não deixou nenhum detalhe ao acaso. Planejou tudo conforme o propósito dele. A Bíblia diz: "De um só fez ele todos os povos, para que povoassem toda a terra, tendo determinado os tempos anteriormente estabelecidos e os lugares exatos em que deveriam habitar". Nada em sua vida é arbitrário — tudo tem um propósito.',
      'Embora pais ilegítimos existam, não existem filhos ilegítimos. Mesmo que muitos filhos não tenham sido planejados pelos pais, não foram um improviso para Deus. O propósito dele levou em conta o erro humano e até mesmo o pecado. Deus nunca faz nada acidentalmente e jamais comete erros.',
      'Se não houvesse Deus, seríamos todos "acidentes", causados por algum evento cósmico aleatório. Você poderia parar de ler este livro, pois a vida não teria nenhum propósito, significado ou importância. Não haveria certo nem errado, e nenhuma esperança além de nossos breves anos neste mundo.',
      'Mas há um Deus que o fez e por uma razão. Assim, sua vida tem significado profundo! Descobrimos esse significado e o propósito divino somente quando tomamos Deus como ponto de referência de nossa vida. Uma paráfrase de Romanos 12.3b diz: "O único modo de nos entendermos é pelo que Deus é e pelo que ele faz por nós, não pelo que somos e fazemos por ele". Vemos essa verdade expressa num poema de Russell Kelfer:\n\nVocê é quem é por uma razão. / Parte de um plano inescrutável. / Preciosa, original e perfeita criação, / denominada homem ou mulher de Deus, notável.\n\nSua aparência tem uma razão, / Nosso Deus não se enganou. / Ele o teceu ainda no ventre em perfeita composição, / é o fruto exato do que determinou.\n\nO trauma que você enfrentou não foi fácil, não. / E Deus lamentou sua dor. / Mas isso foi permitido para dar forma ao seu coração, / para que semelhante ao dele se tornasse.\n\nVocê é quem é por uma razão, / E pelo cajado do Mestre vem sendo formado. / Você é quem é, amado, / Porque há um Deus — eis a razão!',
    ],
    pensamento: 'Não sou um acidente.',
    versiculoMemorizacao: 'Eu sou seu Criador. Você estava sob meus cuidados mesmo antes de nascer.',
    versiculoMemorizacaoRef: 'Isaías 44.2, CEV',
    perguntaParaMeditar: 'Sei que Deus me criou de forma singular. Que áreas de minha personalidade, formação e aparência física tenho tido dificuldade em aceitar?',
  },
  {
    dia: 3,
    titulo: 'O que dirige sua vida?',
    versiculo: 'Percebi que o que faz os homens correrem atrás do sucesso é a inveja!',
    versiculoRef: 'Eclesiastes 4.4, NBV-p',
    conteudo: [
      'A vida de todo indivíduo é dirigida por algo. Neste exato momento, é possível que um problema, uma urgência ou o fim de um prazo determinado estejam direcionando você. É possível que uma lembrança dolorosa, um temor ou uma crença inconsciente também o estejam dirigindo. Centenas de circunstâncias, valores e emoções podem dirigir sua vida. Eis aqui cinco dos mais comuns.',
      'Muitos são dirigidos pela culpa. Algumas pessoas passam a vida inteira fugindo do remorso e ocultando a vergonha. Dirigidas pela culpa, são manipuladas pelas lembranças. Permitem que o passado controle o futuro e frequentemente punem a si mesmas, sabotando o próprio sucesso. Quando Caim pecou, sua culpa afastou-o da presença de Deus. Somos produto de nosso passado, mas não precisamos ser prisioneiros dele. O propósito de Deus não é restringido por nosso passado.',
      'Muitos são dirigidos pelo ressentimento e pela raiva. Algumas pessoas apegam-se a mágoas sem jamais superá-las. Em vez de aliviar a dor por meio do perdão, revivem-na continuamente em pensamento. O ressentimento sempre machuca mais o ofendido que a pessoa que o ofendeu. Ouça: aqueles que o magoaram no passado não poderão continuar a feri-lo, a menos que você se agarre à dor por meio do ressentimento. A Bíblia diz: "Ficar desgostoso e amargurado é loucura, é falta de juízo, que leva à morte".',
      'Muitos são dirigidos pelo medo. Seus temores provavelmente resultam de experiências traumáticas e de expectativas fantasiosas, do crescimento num lar extremamente severo ou mesmo de predisposição genética. O medo é o encarceramento voluntário, que o impedirá de se tornar no que Deus pretende que você seja. Você deve agir contra isso, com as armas da fé e do amor. A Bíblia diz: "No amor, não há espaço para o medo. O amor amadurecido expulsa o medo."',
      'Muitos são dirigidos pelo materialismo. O desejo de adquirir é o único objetivo na vida de algumas pessoas. O impulso de sempre querer mais se baseia na concepção equivocada de que possuir mais me tornará mais feliz, mais importante e mais protegido; contudo, são três expectativas falsas. Os bens materiais trazem felicidade apenas temporária. Nosso valor não é determinado por nossas posses, e Deus deixa claro que as coisas mais valiosas da vida não são os bens materiais.',
      'Muitos são dirigidos pela necessidade de aprovação. Algumas pessoas permitem que expectativas alheias — de pais, cônjuge, filhos, professores ou amigos — controlem sua vida. Não conheço todas as chaves do sucesso, mas uma chave para o fracasso é tentar satisfazer a todos. Ser controlado pela opinião dos outros é uma forma segura de jamais atingir os propósitos de Deus para sua vida. Jesus disse: "Ninguém pode servir a dois senhores".',
      'Outras influências ainda podem dirigir sua vida, mas todas levam ao mesmo impasse: potencial não aproveitado, estresse desnecessário e uma vida não realizada.',
      'Esta jornada de 40 dias mostrará como ter uma vida dirigida por propósitos — uma vida guiada, controlada e direcionada pelos propósitos de Deus. Nada é mais importante que conhecer os propósitos de Deus para sua vida, e nada pode compensar o prejuízo de não os conhecer.',
      'Há cinco grandes vantagens em se viver uma vida com propósitos: Conhecer o propósito de sua vida faz que ela tenha sentido. Sem Deus, a vida não tem propósito; sem um propósito, a vida não faz sentido. Sem sentido, a vida não tem relevância nem esperança. A maior de todas as tragédias não é a morte, mas a falta de propósitos na vida. A esperança é tão essencial para a vida quanto são o ar e a água.',
      'Conhecer seu propósito simplifica a vida. Ele define o que você faz e o que não faz. O propósito é o padrão pelo qual você avalia suas ações, para saber as que são essenciais e as que não são. Sem um propósito claro, ficamos sem alicerce para fundamentar as decisões, dividir o tempo e empregar os recursos. Uma vida dirigida por propósito conduz-nos a um estilo de vida mais simples e a uma agenda mais saudável.',
      'Conhecer seu propósito ajuda a estabelecer prioridades. Isso faz que esforços e energias se concentrem no que é importante. Não há nada tão poderoso quanto uma vida direcionada. Se você quer que sua vida cause impacto, dê-lhe uma direção! O apóstolo Paulo disse: "Estou concentrando minhas energias unicamente nisto: esquecer o que já passou e avançar para o que está à minha frente".',
      'Conhecer seu propósito traz motivação. O propósito sempre produz entusiasmo. Nada mais estimulante que um propósito claro. No entanto, a paixão se esvai quando falta propósito. Normalmente, é o trabalho sem sentido que nos esgota, consome nossa força e nos rouba o prazer; não o excesso de trabalho. George Bernard Shaw escreveu: "Esta é a verdadeira alegria da vida: ser usado para um propósito reconhecido por você mesmo como grandioso."',
      'Conhecer seu propósito irá prepará-lo para a eternidade. Muita gente passa a vida tentando criar um legado. Entretanto, o que em última análise mais importa não é o que os outros dizem sobre sua vida, mas o que Deus diz. Chegará o dia em que você estará diante de Deus, e ele fará uma auditoria em sua vida — um exame final, antes que você ingresse na eternidade. A Bíblia diz: "Lembrem-se: cada um de nós comparecerá diante do tribunal de Deus [...]. Sim, cada um de nós terá de prestar contas de si mesmo a Deus." Felizmente, Deus quer que passemos no teste, por isso nos deu as perguntas antecipadamente.',
      'Pela Bíblia, entendemos que Deus nos fará duas perguntas fundamentais: Primeira: "O que você fez com meu Filho, Jesus Cristo?" — O único ponto importante será: "Você aceitou o que Jesus fez por você, aprendeu a amá-lo e a confiar nele?". Segunda: "O que você fez com o que eu lhe dei?" — Isto é, o que você fez com sua vida: dádivas, talentos, oportunidades, energia, relacionamentos e recursos; enfim, tudo o que Deus deu a você. Prepará-lo para essas duas perguntas é o objetivo deste livro.',
    ],
    pensamento: 'Viver com um propósito é o caminho para a paz.',
    versiculoMemorizacao: 'Tu, ó Senhor, dás paz e prosperidade às pessoas que têm uma fé firme, às pessoas que confiam em ti.',
    versiculoMemorizacaoRef: 'Isaías 26.3, NTLH',
    perguntaParaMeditar: 'Na opinião de minha família e de meus amigos o que dirige a minha vida? O que eu desejo que dirija?',
  },
];

const diasVazios: DiaDeLeitura[] = Array.from({ length: 37 }, (_, i) => ({
  dia: i + 4,
  titulo: `Dia ${i + 4} — Em breve`,
  versiculo: '',
  versiculoRef: '',
  conteudo: ['Conteúdo deste dia ainda não foi adicionado. Adicione os prints na pasta docs/ para preencher.'],
  pensamento: '',
  versiculoMemorizacao: '',
  versiculoMemorizacaoRef: '',
  perguntaParaMeditar: '',
}));

export const umaVidaComPropositos: Livro = {
  id: 'uma-vida-com-propositos',
  titulo: 'Uma Vida com Propósitos',
  autor: 'Rick Warren',
  descricao: 'O desafio de 40 dias que transformará sua vida. Descubra os cinco propósitos de Deus para você.',
  totalDias: 40,
  cor: 'indigo',
  dias: [...diasPreenchidos, ...diasVazios],
};

export const livros: Livro[] = [umaVidaComPropositos];
