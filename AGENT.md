# Digitalização de leituras (livro "Uma Vida com Propósitos")

Orientações para uma futura sessão continuar digitalizando os dias de leitura.

## Fluxo geral

1. O usuário cria a pasta `docs/diaXX/` com fotos das páginas do dia (formato
   `WhatsApp Image ...jpeg`). Essas pastas **não são versionadas**
   (`docs/dia*/` e `docs/dia*.zip` estão no `.gitignore`).
2. Ler todas as imagens da pasta com a tool `Read` (são imagens, são lidas
   visualmente) e transcrever o conteúdo do capítulo correspondente.
3. Editar `src/data/livros/uma-vida-com-propositos.ts`:
   - Adicionar um novo objeto ao array `diasPreenchidos`, na posição
     correta (ordem crescente por `dia`), entre o dia anterior e o
     próximo já preenchido.
   - Remover a entrada correspondente do array `diasVazios` (placeholder
     "Dia XX — Em breve"). Esse array é montado com `Array.from`, então
     normalmente é preciso ajustar o `length` e o offset do `Array.from`
     ou remover a entrada fixa, dependendo de onde o dia estiver.
4. Não é necessário tocar em `.astro`/UI — `src/pages/leitura.astro` já lê
   `livros[].dias` dinamicamente e trata `disponivel === false` como
   bloqueado (dias preenchidos não devem ter esse campo).

## Estrutura de cada `DiaDeLeitura`

Mapeamento das seções físicas do livro para os campos do objeto:

- `dia`: número do dia (inteiro).
- `titulo`: título do capítulo (topo da primeira página do dia).
- `versiculo` / `versiculoRef`: o versículo em destaque na abertura do
  capítulo (epígrafe). Quando há mais de um versículo na abertura, usar o
  que mais se relaciona com o título/tema do capítulo.
- `conteudo`: array de strings, um item por parágrafo do texto corrido,
  na ordem em que aparecem, **unindo parágrafos que atravessam a quebra
  de página** (a frase que termina numa foto e continua na próxima deve
  formar um único item). Preservar aspas, itálicos como texto normal,
  travessões etc. Não incluir números de página, cabeçalhos de rodapé
  (ex.: "138 | VOCÊ FOI FORMADO...") nem a citação de Bíblia inline já
  coberta pelos campos acima.
- `pensamento`: vem do quadro final "Dia XX" → "Tema para reflexão".
- `versiculoMemorizacao` / `versiculoMemorizacaoRef`: vem do quadro final
  → "Versículo para memorizar".
- `perguntaParaMeditar`: vem do quadro final → "Pergunta para meditar".

## Commit e push

- Commitar apenas o arquivo `src/data/livros/uma-vida-com-propositos.ts`.
- Mensagem no padrão usado nos commits anteriores:
  `feat: digitalizar dia XX - <título do capítulo>`
  com rodapé `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`.
- O deploy é automático ao dar push na `main` — ao final da digitalização,
  já pode fazer `git push origin main` sem precisar confirmar de novo
  (autorização já dada pelo usuário para esse fluxo).

## Outras dicas

- As fotos ficam em `docs/diaXX/` mas não precisam (e não devem) ser
  adicionadas ao git.
- Para validar sintaxe do arquivo TS rapidamente (sem rodar o build
  completo do Astro): `npx esbuild "src/data/livros/uma-vida-com-propositos.ts" --outfile=<tmp>`.
