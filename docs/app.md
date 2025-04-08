# PodCast Menager

### Descrição
Um app ao estilo netflix, onde podemos centralizar diferentes episódios de podcasts separados por categoria

### Domínio
PodCasts feitos em vídeo

### Features
- Listar episódios de Podcasts em sessões por categorias
 - [Saúde, bodybuilder, Mentalidade, Humor]
 - Filtrar episódios pelo nome do PodCast

## Como;

#### Feature:
- Listar episódios de Podcasts em sessões por categorias

### Como vou implementar


  ```js
  [
  {
    podcastName: "flow",
    episode: "Cbum - Flow #319",
     videoId: "5DaLlqP-8uI",
    categories: ["saúde", "esporte" "bodybuilder"]
    cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=5DaLlqP-8uI",
  },
    podcastName: "flow",
    episode: "FELCA, BALESTRIN E CARIANI - Flow #429",
    videoId: "IK5FIpS1ioU",
    categories: ["saúde", "esporte" "bodybuilder"]
    cover: "https://i.ytimg.com/vi/IK5FIpS1ioU/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=IK5FIpS1ioU&list=PLWieWKZeFoVRmUNn9KA2dVpQswo19QkwQ&index=2&ab_channel=FlowPodcast",
  ]

  ```

   GET: retorna lista de episodios baseado em um parametro enviado pelo client do nome do podcast

  


