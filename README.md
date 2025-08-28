# React + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar em Vite com HMR e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Landing page em React para apresentar uma empresa/projeto de energia solar, com navegação por seções, grid de benefícios e produtos, formulário de orçamento e rodapé.

## Expandindo a configuração de ESLint

Se você estiver desenvolvendo um aplicativo de produção, recomendamos o uso do TypeScript com regras de Lint com reconhecimento de tipo ativadas. Confira o [TS Modelo] (https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para obter informações sobre como integrar o TypeScript e [`tipscript-eslint`] (https://typeScript-eslint.io)

## Funcionalidades

- Navbar (fixo): links âncora para as seções do site.

- Hero: título e subtítulo responsivos.

- Sobre Nós: missão, visão e valores + imagem ilustrativa.

- Por que investir?: cards com benefícios (economia, sustentabilidade etc.).

- Produtos: catálogo em grade (nome, imagem, descrição).

- Orçamento: formulário com Nome, Email, Telefone e Tipo de Sistema (botão habilita só com tudo preenchido).

- Rodapé: dados da empresa (nome, CNPJ, e-mail, endereço) + redes sociais.

## Como rodar

Pré-requisitos: Node 18+ e npm (ou pnpm/yarn).

```bash
# 1) entrar na pasta do projeto
cd m02s08-frontend-energia-solar-365

# 2) instalar dependências
npm i

# 3) rodar em desenvolvimento (HMR)
npm run dev
# abra a URL exibida (ex.: http://localhost:5173)

# 4) build de produção + preview estático (opcional)
npm run build
npm run preview
```

Se usar Live Server precisará configurar na raiz do projeto o arquivo vite.config.js para:

```JavaScript
export default defineConfig({
  plugins: [react()],
  base: '/m02s08-frontend-energia-solar-365/',
  server: {
    port: 5500,
    open: true,
    host: 'localhost',
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
```

## Estrutura de Pastas (principal)

```bash
m02s08-frontend-energia-solar-365/
├─ index.html
├─ vite.config.js
├─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   ├─ assets/
   │  ├─ sobre.png
   │  ├─ image-1.jpg
   │  ├─ image-2.jpg
   │  ├─ image-3.jpg
   └─ components/
      ├─ Navbar.jsx
      ├─ SobreNos.jsx
      ├─ PorQueInvestir.jsx
      ├─ Produtos.jsx
      ├─ Orcamento.jsx
      └─ Footer.jsx
```

## Componentes

- Navbar.jsx
  Menu com links para #sobre-nos, #porque-investir, #produtos, #orcamento.

- SobreNos.jsx (id="sobre-nos")
  Título + missão/visão/valores e imagem (/img/sobre.jpg|png ou fallback online).

- PorQueInvestir.jsx (id="porque-investir")
  Grid de 4 cards com ícone, título e texto.

- Produtos.jsx (id="produtos")
  Lista/grade de produtos (nome, imagem, descrição). Suporta imagens locais (em public/img) e fallback online.

- Orcamento.jsx (id="orcamento")
  Formulário controlado (Nome, Email, Telefone, Tipo de Sistema). Botão “Enviar” habilita só quando tudo estiver preenchido. Mostra alert e reseta.

- Footer.jsx
  Dados da empresa (nome, CNPJ, e-mail, endereço) + ícones simples para redes sociais.

## Dicas de Desenvolvimento

- Hot Reload (HMR): só deixar npm run dev rodando e salvar os arquivos.

- Âncoras & espaçamento do header: .section { scroll-margin-top: 84px; } evita que o conteúdo fique “em baixo” do navbar fixo.

- Select claro (Ex5): o #tipo do orçamento tem estilo próprio (fundo cinza claro) no final do index.css.

## Resultado

![alt text](/src/assets/image.png)
