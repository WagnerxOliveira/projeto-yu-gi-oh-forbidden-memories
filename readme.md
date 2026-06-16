# Yu-Gi-Oh! Forbidden Memories — Card Database 🃏

Uma enciclopédia digital completa e interativa para o clássico jogo de PlayStation 1, **Yu-Gi-Oh! Forbidden Memories**. 

Este projeto reúne todas as **722 cartas** do jogo em um só lugar, com um design moderno e imersivo, permitindo que você encontre facilmente qualquer informação que precisar para montar o seu deck perfeito!

🌐 **Acesse o projeto online e teste agora:** [Yu-Gi-Oh! Forbidden Memories no Vercel](https://yu-gi-oh-forbidden-memories-psx.vercel.app/)

---

## 🌟 O que o projeto faz?

Se você já jogou o clássico do PS1, sabe como pode ser difícil lembrar a senha de uma carta, seu custo em *Starchips*, qual oponente a dropa ou quais equipamentos funcionam nela. Este site resolve esse problema funcionando como um grande catálogo inteligente. 

Com ele, você pode:

* **Pesquisar Rapidamente:** Encontre cartas instantaneamente digitando o nome ou o número (ID) dela na barra de pesquisa.
* **Usar Filtros Inteligentes Dinâmicos:** Quer ver apenas os monstros com um valor exato de Ataque? Ou procurar apenas por cartas Mágicas que custam exatamente 50 Starchips? O site possui botões de filtro dedicados (ATK, DEF, Tipo, Nível, Cost) com *tooltips* (dicas) interativos.
* **Ver Detalhes Completos:** Cada carta no site funciona como uma carta real, exibindo:
  * Número (ID) e Nome.
  * Tipo e Nível (com ícones oficiais e estrelas clássicas).
  * Pontos de Ataque (ATK) e Defesa (DEF).
  * As **Guardian Stars** (Estrelas Guardiãs) com seus respectivos ícones planetários.
  * A cobiçada **Senha (Password)** para comprar no jogo.
  * O **Custo (Cost)** exato em Starchips.
* **Painel Holográfico de Drops:** Passe o mouse no ícone de informação (i) para descobrir as porcentagens de **Quem Dropa**, a **Chance de Usar** (ordenados automaticamente da maior para a menor chance) e com quais itens a carta **Se Equipa**.
* **Frente e Verso:** Passe o mouse suavemente sobre a imagem da carta para revelar a sua descrição original do jogo através de um *crossfade* elegante.
* **Design Premium (Glassmorphism):** O visual futurista simula cartas guardadas em displays de acrílico/vidro, reagindo ao mouse com reflexos de luz. Tudo foi feito para se adaptar perfeitamente e funcionar de forma incrivelmente fluida tanto no computador quanto na tela do seu celular.

---

## 📁 O que tem no pacote do projeto?

O projeto é dividido de forma bem organizada e otimizada com tecnologias Web modernas:

* **A Estrutura Visual (HTML5 & CSS3):** A "cara" do site e o design das cartas, utilizando técnicas avançadas de Grid, Flexbox e animações CSS. As cores e bordas mudam dinamicamente dependendo do tipo da carta (Monstro, Magia, Armadilha, etc.).
* **O Motor de Busca (Vanilla JavaScript):** O cérebro do site, que permite pesquisar, filtrar progressivamente e ordenar as 722 cartas (e seus dados de drop) sem que a página precise recarregar, mostrando os resultados em tempo real.
* **A Base de Dados:** Um grande arquivo estruturado que guarda com carinho os atributos originais, senhas, custos e dados extras de todas as cartas exatamente como são no jogo de PS1.
* **Verificador (Extra):** Um pequeno verificador de segurança interno para garantir que absolutamente nenhuma das 722 cartas ficou de fora ou repetida!

---

*Projeto feito de fã para fãs, para manter viva a nostalgia deste grande clássico da Konami!*
