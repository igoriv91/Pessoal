# Astro Conventions v1.0

> Referência completa para geração de código em projetos Astro. Versão: Março/2026.
> **Escopo:** Sites de apresentação, landing pages e sites estáticos. Nunca sistemas web ou aplicações.

---

## 1. Nomenclatura

### 1.1 Idioma
Todo código em **inglês**. Português apenas em UI, textos de conteúdo e mensagens de erro.

```astro
<!-- ❌ Evitar -->
---
const tituloPrincipal = 'Olá Mundo';
---
<ComponentePrincipal />

<!-- ✅ Correto -->
---
const heroTitle = 'Olá Mundo';
---
<HeroSection />
```

### 1.2 Convenções de Nomenclatura

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| Componentes Astro | PascalCase | `HeroSection.astro` |
| Layouts | PascalCase com sufixo `Layout` | `BaseLayout.astro` |
| Páginas | kebab-case (vira a URL) | `sobre-nos.astro` → `/sobre-nos` |
| Tipos e Interfaces | PascalCase com sufixo `.types` | `project.types.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Pastas | kebab-case | `team-section/` |
| Constantes | UPPER_SNAKE_CASE | `SITE_TITLE` |
| Assets/imagens | kebab-case | `hero-background.webp` |
| Content Collections | kebab-case (nome da coleção) | `blog`, `team-members` |

### 1.3 Booleanos, Arrays e Funções

```typescript
// Booleanos — prefixo is, has, should, can
const isVisible = true;
const hasSubtitle = false;

// Arrays — plural
const teamMembers: TeamMember[] = [];
const projectLinks: string[] = [];

// Funções utilitárias — verbo + substantivo
formatDate(date: Date): string;
getReadingTime(content: string): number;
buildImagePath(filename: string): string;
```

---

## 2. Estrutura de Pastas

### 2.1 Estrutura Geral

```
src/
├── assets/             # Imagens e assets otimizados pelo Astro (via <Image />)
│   ├── images/
│   └── icons/
│
├── components/         # Componentes reutilizáveis entre páginas
│   ├── sections/       # Seções de página (Hero, Features, Testimonials)
│   ├── ui/             # Elementos atômicos (Button, Badge, Card)
│   └── layout/         # Header, Footer, Navigation
│
├── content/            # Content Collections (quando aplicável)
│   └── blog/
│       └── primeiro-post.md
│
├── layouts/            # Layouts base das páginas
│   └── BaseLayout.astro
│
├── pages/              # Rotas do site (file-based routing)
│   ├── index.astro     # → /
│   ├── about.astro     # → /about
│   └── blog/
│       ├── index.astro # → /blog
│       └── [slug].astro
│
├── styles/             # CSS global e variáveis
│   └── global.css
│
└── lib/                # Utilities e helpers TypeScript
    └── utils.ts

public/                 # Assets estáticos servidos sem processamento
├── favicon.svg
├── favicon.ico
├── robots.txt
└── og-image.png        # Open Graph e assets externos
```

### 2.2 `public/` vs `src/assets/`

**Regra crítica:** a escolha depende de quem referencia o asset.

| Critério | `public/` | `src/assets/` |
|----------|-----------|---------------|
| Otimização de imagem | ❌ Não | ✅ Sim (via `<Image />`) |
| Referenciado em CSS | ✅ Sim | ❌ Não |
| Referenciado em `<Image />` | ❌ Não | ✅ Sim |
| Open Graph / meta tags | ✅ Sim | ❌ Não |
| favicon, robots.txt | ✅ Sim | ❌ Não |
| Imagens de conteúdo da página | ❌ Não | ✅ Sim |

```astro
<!-- ✅ src/assets/ → otimizado automaticamente -->
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero.webp';
---
<Image src={heroImage} alt="Hero" />

<!-- ✅ public/ → URL direta, sem processamento -->
<meta property="og:image" content="/og-image.png" />
```

### 2.3 Quando usar Content Collections

Usar Content Collections quando o conteúdo:
- É gerenciado como arquivos Markdown/MDX
- Tem schema repetido (blog posts, membros do time, projetos)
- Precisa de validação de frontmatter

```
src/content/
├── config.ts          # Define coleções e schemas
└── blog/
    ├── post-1.md
    └── post-2.md
```

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

Para conteúdo simples e fixo (textos de landing page), **não usar** Content Collections — definir diretamente no frontmatter do componente.

---

## 3. TypeScript e Tipagem

### 3.1 Tipagem de Props com `interface`

Toda prop de componente tipada com `interface` local.

```astro
---
interface Props {
  title: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}

const { title, subtitle, variant = 'primary' } = Astro.props;
---
```

### 3.2 Interface vs Type

```typescript
// interface — objetos e props de componentes
interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
  linkedinUrl?: string;
}

interface CardProps {
  member: TeamMember;
  isHighlighted?: boolean;
}

// type — uniões, aliases, derivados
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type TeamMemberPreview = Pick<TeamMember, 'name' | 'role'>;
```

### 3.3 Sem `any`

```typescript
// ❌ Evitar
const data: any = await fetch(...).then(r => r.json());

// ✅ Tipagem adequada
interface ApiResponse {
  items: ProjectItem[];
}
const data: ApiResponse = await fetch(...).then(r => r.json());
```

### 3.4 Organização de Imports no Frontmatter

```astro
---
// 1. Astro built-ins
import { Image } from 'astro:assets';
import { getCollection } from 'astro:content';

// 2. Layouts
import BaseLayout from '../layouts/BaseLayout.astro';

// 3. Componentes
import HeroSection from '../components/sections/HeroSection.astro';
import TeamCard from '../components/ui/TeamCard.astro';

// 4. Assets
import heroImage from '../assets/images/hero.webp';

// 5. Tipos e utilities
import type { TeamMember } from '../lib/types';
import { formatDate } from '../lib/utils';

// 6. Lógica local
const posts = await getCollection('blog');
---
```

---

## 4. Componentes e Layouts

### 4.1 Frontmatter — Estrutura e Regras

O bloco `---` (frontmatter) é executado no servidor em build time. Use-o para:
- Declarar e desestruturar `Astro.props`
- Importar componentes, assets e utilities
- Buscar dados de Content Collections
- Lógica de transformação e formatação de dados

**Nunca use o frontmatter para:**
- Lógica que depende do browser (`window`, `document`, `localStorage`)
- Event listeners
- Efeitos colaterais de runtime

```astro
---
// ✅ Correto — tudo executado em build time
interface Props {
  posts: BlogPost[];
  featured?: boolean;
}

const { posts, featured = false } = Astro.props;
const sortedPosts = posts.sort((a, b) =>
  b.data.publishDate.getTime() - a.data.publishDate.getTime()
);
---

<!-- Template usa apenas os dados processados -->
<ul>
  {sortedPosts.map(post => <li>{post.data.title}</li>)}
</ul>
```

### 4.2 Layouts vs Componentes

**Layouts** (`src/layouts/`) encapsulam a estrutura HTML completa da página:
- Sempre têm `<html>`, `<head>`, `<body>`
- Sempre aceitam um `<slot />` para o conteúdo da página
- Gerenciam metadados, fontes e CSS global
- Toda página usa exatamente um layout

**Componentes** (`src/components/`) são fragmentos reutilizáveis:
- Nunca têm `<html>`, `<head>` ou `<body>`
- Podem aceitar `<slot />` para composição
- Representam seções, cards, botões, etc.

```astro
<!-- ✅ layouts/BaseLayout.astro -->
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
}
const { title, description, ogImage = '/og-image.png' } = Astro.props;
---
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={ogImage} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<!-- ✅ components/sections/HeroSection.astro -->
---
interface Props {
  title: string;
  cta: string;
  ctaHref: string;
}
const { title, cta, ctaHref } = Astro.props;
---
<section class="hero">
  <h1>{title}</h1>
  <a href={ctaHref}>{cta}</a>
</section>
```

### 4.3 Props e Slots

**Props:** sempre desestruturadas de `Astro.props` com valores default declarados inline.

```astro
---
interface Props {
  title: string;
  description?: string;
  centered?: boolean;
}
// ✅ Default inline na desestruturação
const { title, description, centered = false } = Astro.props;
---
```

**Slots:** usar `<slot />` para conteúdo genérico. Slots nomeados para múltiplas áreas.

```astro
<!-- components/ui/Card.astro -->
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<div class="card">
  <div class="card-header">
    <h3>{title}</h3>
    <!-- Slot nomeado para ação opcional no header -->
    <slot name="action" />
  </div>
  <div class="card-body">
    <!-- Slot padrão para conteúdo -->
    <slot />
  </div>
</div>

<!-- Uso -->
<Card title="Projeto Alpha">
  <span slot="action"><a href="/projeto">Ver mais</a></span>
  <p>Descrição do projeto...</p>
</Card>
```

### 4.4 Composição sobre Condicionais

Preferir componentes especializados a props `mode` ou `variant` que alteram comportamento estrutural.

```astro
<!-- ❌ Evitar — prop que muda estrutura radicalmente -->
<ProjectCard mode="grid" />
<ProjectCard mode="list" />

<!-- ✅ Componentes separados para estruturas diferentes -->
<ProjectCardGrid project={project} />
<ProjectCardList project={project} />
```

Props de variante visual são aceitáveis (cor, tamanho), desde que a estrutura HTML seja a mesma.

---

## 5. Interatividade — Component Islands

### 5.1 Princípio Static-First

**Regra fundamental:** zero JavaScript por padrão. Todo componente é estático a menos que haja necessidade explícita e justificada de interatividade.

Antes de adicionar interatividade, questionar:
- Isso pode ser feito com CSS puro? (`details/summary`, `:hover`, `:focus`)
- Um link âncora ou formulário nativo resolve?
- É realmente necessário estado no client?

```astro
<!-- ✅ Accordion com CSS puro — sem JS -->
<details>
  <summary>Pergunta frequente</summary>
  <p>Resposta da pergunta...</p>
</details>
```

### 5.2 Diretivas `client:*` — Quando Usar Cada Uma

Quando a interatividade for inevitável, usar a diretiva mais conservadora possível.

| Diretiva | Quando hidrata | Quando usar |
|----------|---------------|-------------|
| `client:load` | Imediatamente | Elementos críticos above-the-fold (menu mobile, modal de cookies) |
| `client:idle` | Após `requestIdleCallback` | Componentes importantes mas não imediatos |
| `client:visible` | Quando entra no viewport | Componentes below-the-fold (carrossel, mapa) |
| `client:media` | Quando media query é verdadeira | Interação exclusiva de mobile ou desktop |
| `client:only` | Sempre no client (sem SSR) | Componentes que dependem de APIs do browser |

```astro
---
import ContactForm from '../components/ContactForm';      // React/Vue
import Carousel from '../components/Carousel';
import CookieBanner from '../components/CookieBanner';
---

<!-- ✅ Banner de cookies — precisa ser imediato -->
<CookieBanner client:load />

<!-- ✅ Carrossel below-the-fold — hidrata só quando visível -->
<Carousel slides={slides} client:visible />

<!-- ✅ Formulário de contato — hidrata quando browser está ocioso -->
<ContactForm client:idle />
```

**Nunca usar `client:load` por padrão.** É a diretiva mais custosa.

### 5.3 Script Vanilla vs Framework de UI

Para interatividade simples e pontual, usar `<script>` vanilla dentro do componente Astro — sem framework.

```astro
<!-- ✅ Menu mobile com script vanilla -->
<button id="menu-toggle" aria-expanded="false">Menu</button>
<nav id="mobile-menu" hidden>...</nav>

<script>
  const toggle = document.getElementById('menu-toggle')!;
  const menu = document.getElementById('mobile-menu')!;

  toggle.addEventListener('click', () => {
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
</script>
```

Usar frameworks de UI (React, Vue, Svelte) apenas quando:
- O componente tem estado complexo com múltiplas atualizações de UI
- Reutilização de um componente já existente no ecossistema do framework
- A interatividade é significativamente mais simples de implementar com um framework

Scripts Astro são automaticamente deduplicados — um mesmo `<script>` em componentes reutilizados é incluído uma única vez no bundle.

---

## 6. Estilização

### 6.1 Scoped `<style>` como Padrão

Styles em componentes Astro são escopados por padrão — não vazam para outros componentes.

```astro
<section class="hero">
  <h1 class="hero-title">Título</h1>
</section>

<!-- ✅ Escopado automaticamente — sem conflito com outros componentes -->
<style>
  .hero {
    padding: 4rem 2rem;
  }
  .hero-title {
    font-size: 3rem;
    font-weight: 700;
  }
</style>
```

CSS global vai exclusivamente em `src/styles/global.css` (importado no layout base):
- Reset / normalize
- Variáveis CSS (tokens de cor, tipografia, espaçamento)
- Estilos de elementos base (`body`, `a`, `h1-h6`)

```css
/* src/styles/global.css */
:root {
  --color-primary: #6366f1;
  --color-text: #1e293b;
  --color-bg: #ffffff;
  --font-sans: 'Inter', system-ui, sans-serif;
  --spacing-section: 5rem;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-bg);
}
```

Para aplicar CSS global dentro de um componente escopado, usar `:global()`:

```astro
<style>
  /* ✅ Aplica globalmente, de dentro de um componente escopado */
  :global(.prose h2) {
    font-size: 1.5rem;
  }
</style>
```

### 6.2 Tailwind como Padrão (quando integrado)

Quando o projeto usa `@astrojs/tailwind`, Tailwind substitui o `<style>` escopado como abordagem principal.

```astro
<!-- ✅ Com Tailwind -->
<section class="py-20 px-8 max-w-6xl mx-auto">
  <h1 class="text-5xl font-bold text-slate-900">Título</h1>
</section>

<!-- ❌ Sem Tailwind — não misturar abordagens -->
<section class="hero">
  <h1 class="text-5xl font-bold text-slate-900">Título</h1>
</section>
<style>
  .hero { padding: 5rem 2rem; }
</style>
```

Manter consistência: ou o projeto usa Tailwind em tudo, ou usa `<style>` escopado. Nunca misturar.

### 6.3 Classes Condicionais

Usar template literal ou biblioteca `clsx`/`cn` para classes condicionais. Nunca concatenação manual.

```astro
---
import { cn } from '../lib/utils';

interface Props {
  variant?: 'primary' | 'secondary';
  isFullWidth?: boolean;
}
const { variant = 'primary', isFullWidth = false } = Astro.props;
---

<!-- ✅ cn() para condicionais -->
<button class={cn(
  'rounded-lg px-6 py-3 font-semibold transition-colors',
  variant === 'primary' && 'bg-indigo-600 text-white hover:bg-indigo-700',
  variant === 'secondary' && 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  isFullWidth && 'w-full',
)}>
  <slot />
</button>
```

### 6.4 Nunca CSS Inline

```astro
<!-- ❌ Evitar -->
<div style="padding: 2rem; background: #6366f1;">

<!-- ✅ Classe utilitária ou <style> -->
<div class="section-highlight">
```

Exceção única: variáveis CSS dinâmicas passadas como prop.

```astro
---
const { accentColor } = Astro.props;
---
<!-- ✅ Variável CSS dinâmica via style -->
<section style={`--accent: ${accentColor}`} class="themed-section">
```

---

## 7. Imagens e Assets

### 7.1 `<Image />` de `astro:assets` para Toda Imagem de Conteúdo

Toda imagem da página usa o componente `<Image />` para otimização automática (formato WebP, lazy loading, dimensões).

```astro
---
import { Image } from 'astro:assets';
import teamPhoto from '../assets/images/team.jpg';
---

<!-- ✅ Otimizado: converte para WebP, define width/height, lazy por padrão -->
<Image
  src={teamPhoto}
  alt="Time da empresa"
  width={800}
  height={450}
  loading="lazy"
/>

<!-- Above-the-fold: desativar lazy para LCP -->
<Image
  src={heroImage}
  alt="Hero"
  width={1200}
  height={600}
  loading="eager"
  fetchpriority="high"
/>
```

**Regras:**
- `alt` obrigatório e descritivo (nunca vazio, exceto em imagens puramente decorativas: `alt=""`)
- Sempre declarar `width` e `height` para evitar layout shift (CLS)
- Imagens hero (above-the-fold): `loading="eager"` + `fetchpriority="high"`
- Demais imagens: `loading="lazy"` (padrão do componente)

### 7.2 `public/` para Assets Referenciados Externamente

```astro
<!-- ✅ Favicon, OG image, robots — referência direta por URL -->
<link rel="icon" href="/favicon.svg" />
<meta property="og:image" content="/og-image.png" />

<!-- ✅ Imagens em CSS (src/styles/) — caminho relativo a public/ -->
.hero {
  background-image: url('/images/pattern.svg');
}
```

### 7.3 Formatos Recomendados

| Uso | Formato |
|-----|---------|
| Fotos e imagens complexas | `.jpg` / `.webp` (Astro converte automaticamente) |
| Ícones e ilustrações simples | `.svg` |
| Logos em `<img>` | `.svg` |
| Background patterns (CSS) | `.svg` em `public/` |
| Open Graph image | `.png` em `public/` (compatibilidade máxima) |

---

## 8. Páginas e Roteamento

### 8.1 Roteamento File-Based

Cada arquivo em `src/pages/` vira uma rota. Nomear em kebab-case para URLs limpas.

```
src/pages/
├── index.astro          → /
├── about.astro          → /about
├── contact.astro        → /contact
├── blog/
│   ├── index.astro      → /blog
│   └── [slug].astro     → /blog/:slug (rota dinâmica)
└── 404.astro            → página de erro 404
```

### 8.2 Estrutura de Página

Toda página segue a mesma estrutura: layout + slots de seções.

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import HeroSection from '../components/sections/HeroSection.astro';
import FeaturesSection from '../components/sections/FeaturesSection.astro';
import ContactSection from '../components/sections/ContactSection.astro';
---

<BaseLayout
  title="Empresa XYZ — Soluções em Software"
  description="Desenvolvemos software sob medida para o seu negócio."
>
  <HeroSection
    title="Transformamos ideias em software"
    cta="Falar com especialista"
    ctaHref="/contact"
  />
  <FeaturesSection />
  <ContactSection />
</BaseLayout>
```

**Páginas não devem conter HTML estrutural direto.** Todo HTML fica em componentes de seção.

### 8.3 Metadados e SEO por Página

Cada página define seus próprios metadados via props do layout. Nunca metadados genéricos iguais em todas as páginas.

```astro
---
// Obrigatório em toda página
const seo = {
  title: 'Sobre Nós — Empresa XYZ',              // Único e descritivo
  description: 'Conheça o time por trás da...',  // 120–160 caracteres
  ogImage: '/og-about.png',                       // Imagem específica da página
};
---

<BaseLayout {...seo}>
  ...
</BaseLayout>
```

Checklist de metadados no `BaseLayout`:
- `<title>` único por página
- `<meta name="description">` (120–160 chars)
- `<meta property="og:title">`, `og:description`, `og:image`, `og:type`
- `<link rel="canonical">` quando houver risco de conteúdo duplicado
- `lang` correto no `<html>`

### 8.4 Rotas Dinâmicas com Content Collections

```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<BaseLayout title={post.data.title} description={post.data.description}>
  <article>
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</BaseLayout>
```

---

## 9. Git

### Branches
```
feature/add-contact-section
feature/blog-integration
bugfix/fix-mobile-nav
hotfix/fix-og-image-path
release/v1.0.0
```

### Commits (Conventional Commits — inglês obrigatório)
```
feat: add hero section with CTA button
fix: correct mobile menu toggle accessibility
refactor: extract team card to dedicated component
style: adjust typography scale for headings
content: add blog post about our methodology
chore: upgrade astro to v6
perf: convert hero image to webp format
```

Com escopo:
```
feat(blog): add post listing with pagination
fix(seo): add missing og:image to about page
perf(images): enable eager loading for above-fold images
```
