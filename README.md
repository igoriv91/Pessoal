# Site Pessoal — Igor Vitor

Olá! Seja bem-vindo ao repositório do meu site pessoal. Sou Igor Vitor, desenvolvedor Full Stack com mais de 13 anos de experiência, atualmente atuando como Head of Development na Intellisys. Ao longo da minha trajetória trabalhei com sistemas de CRM, fidelidade de clientes, aplicativos móveis publicados na Play Store e App Store, integrações bancárias e modernização de sistemas legados.

Este repositório é, ao mesmo tempo, meu portfólio profissional e um laboratório de aprendizado — e vou explicar o porquê dessa combinação.

---

## Por que Astro?

Eu decidi utilizar o Astro porque queria uma tecnologia que fizesse sentido para o tipo de projeto que estou construindo: um site essencialmente estático, focado em conteúdo e performance, sem necessidade de estado reativo ou renderização no servidor.

O Astro resolve exatamente isso com sua arquitetura **islands** e geração de sites estáticos (SSG). Por padrão, ele entrega **zero JavaScript ao cliente** — o que é perfeito para um portfolio onde o conteúdo é o protagonista. Quando alguma interatividade é necessária (como o menu mobile ou o destaque de seção ativa na navegação), adiciono JavaScript de forma cirúrgica e pontual, sem framework desnecessário.

Além disso, este é meu **primeiro projeto em Astro**. Parte do objetivo aqui foi justamente sair da zona de conforto do React/React Native e experimentar um framework diferente, criado especificamente para sites orientados a conteúdo. Foi uma escolha deliberada de aprendizado: eu poderia ter feito esse site com Next.js ou Vite + React sem dificuldade, mas escolhi o Astro para entender na prática suas vantagens e limitações.

---

## Objetivo do projeto

O site tem um propósito duplo:

1. **Apresentar minha trajetória profissional** — quem sou, o que já construí, com quais tecnologias trabalho e como entrar em contato.
2. **Servir como campo de experimentação** — cada decisão técnica aqui foi tomada com intenção de aprendizado, desde a escolha do Astro até as convenções de projeto que documentei no arquivo [`conventions-astro.md`](./conventions-astro.md).

---

## Estrutura do projeto

```
src/
├── assets/              # Imagens e mídias otimizadas
├── components/
│   ├── layout/          # Header e SideNav
│   └── sections/        # Seções da página (Hero, Sobre, Stack, Projetos, Contato)
├── layouts/             # BaseLayout com estrutura HTML base
├── pages/               # Roteamento baseado em arquivos (index.astro)
└── styles/              # CSS global e variáveis de tema
```

O site é uma **single page** com navegação por âncoras entre as seções. O layout é responsivo: em mobile a navegação fica na barra inferior, em desktop aparece como sidebar lateral.

---

## Convenções adotadas

Documentei as convenções que uso neste projeto no arquivo [`conventions-astro.md`](./conventions-astro.md). Em resumo:

- **Código em inglês**, conteúdo e UI em português
- Componentes em `PascalCase`, pastas e páginas em `kebab-case`
- TypeScript strict — sem `any`
- Tailwind CSS v4 como abordagem principal de estilo
- Commits no padrão [Conventional Commits](https://www.conventionalcommits.org/) em inglês
- Componentes estáticos por padrão — JavaScript apenas quando necessário

---

## Stack utilizada

| Tecnologia | Versão | Função |
|---|---|---|
| [Astro](https://astro.build) | 6.0 | Framework principal (SSG) |
| [Tailwind CSS](https://tailwindcss.com) | 4.2 | Estilização |
| TypeScript | strict | Tipagem |

---

## Rodando localmente

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera o site estático em ./dist/
npm run preview   # pré-visualiza o build
```

---

## Contato

- LinkedIn: [igor-vitor](https://www.linkedin.com/in/igor-vitor-1141bb3b3/)
- GitHub: [igoriv91](https://github.com/igoriv91)
