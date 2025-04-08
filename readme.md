# 🎙️ Podcast Manager

Um app ao estilo Netflix, que centraliza episódios de podcasts em vídeo, organizados por categoria e filtráveis por nome. A ideia é proporcionar uma experiência de navegação simples e eficiente para os fãs de podcasts visuais.

---

## 📚 Descrição

O **Podcast Manager** é uma aplicação backend feita em Node.js e TypeScript (sem uso de frameworks como Express), que fornece uma API para listar e filtrar episódios de podcasts em vídeo (como Flow, PodPah, Inteligência Ltda, etc).

---

## 🚧 Tecnologias utilizadas

- **Node.js** – Runtime do JavaScript
- **TypeScript** – Superset do JS para tipagem e segurança
- **TSX** – Execução de arquivos `.ts` sem necessidade de build
- **Tsup** – Empacotador de arquivos TypeScript para produção
- **@types/node** – Tipagens para os módulos nativos do Node.js

---

## 🧠 Domínio

🎥 Podcasts em vídeo organizados por categorias como:

- Saúde
- Bodybuilder
- Mentalidade
- Humor

---

## 🚀 Funcionalidades

- ✅ Listar todos os episódios disponíveis
- ✅ Organizar episódios por categorias
- ✅ Filtrar episódios por nome do podcast via query param

---

## 📦 Exemplo de Dados

```ts
[
  {
    podcastName: "flow",
    episode: "Cbum - Flow #319",
    videoId: "5DaLlqP-8uI",
    categories: ["saúde", "esporte", "bodybuilder"],
    cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=5DaLlqP-8uI"
  },
  {
    podcastName: "flow",
    episode: "FELCA, BALESTRIN E CARIANI - Flow #429",
    videoId: "IK5FIpS1ioU",
    categories: ["saúde", "esporte", "bodybuilder"],
    cover: "https://i.ytimg.com/vi/IK5FIpS1ioU/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=IK5FIpS1ioU"
  }
]
