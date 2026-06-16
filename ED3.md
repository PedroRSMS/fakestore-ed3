# Estudo Dirigido 3: Desenvolvimento Frontend com React

Este estudo dirigido tem como objetivo consolidar os conhecimentos em **React**, focando na criação de interfaces modernas, modulares e dinâmicas. Você aprenderá a estruturar aplicações baseadas em componentes, gerenciar estados e efeitos, e consumir dados de APIs externas de forma profissional.

Você deverá desenvolver uma aplicação frontend utilizando React que atenda aos requisitos técnicos e estéticos descritos abaixo.

## 💡 Sugestões de Temas

Escolha um dos temas abaixo para desenvolver o seu projeto:

1.  **GitHub Explorer:** Uma aplicação para buscar perfis de usuários do GitHub e listar seus repositórios, utilizando a [API do GitHub](https://docs.github.com/en/rest).
2.  **Movie Hub:** Um catálogo de filmes que exibe os títulos em alta e permite a busca por nomes, consumindo a [API do TMDB](https://developer.themoviedb.org/docs/getting-started).
3.  **Crypto Tracker:** Um dashboard para acompanhar o preço em tempo real das principais criptomoedas, utilizando a [API da CoinGecko](https://www.coingecko.com/en/api/documentation).
4.  **Weather Dashboard (Pro):** Uma central de clima que exibe a previsão atual e dos próximos dias para uma cidade buscada, utilizando a [API do OpenWeatherMap](https://openweathermap.org/api).
5.  **Store Showcase:** Uma vitrine de produtos de um e-commerce com filtros por categoria, utilizando a [FakeStoreAPI](https://fakestoreapi.com/).

## 📋 Critérios de Avaliação

O projeto será avaliado com base no cumprimento rigoroso dos seguintes requisitos:

1.  **Componentização:** A aplicação deve ser dividida em componentes pequenos, reutilizáveis e com responsabilidades bem definidas. A estrutura de pastas deve ser organizada (ex: pasta `components/` separada das `pages/`).
2.  **Requisições com Axios:** Todas as chamadas para APIs externas devem ser realizadas utilizando a biblioteca **Axios** em vez do fetch nativo.
3.  **Hooks do React:** É obrigatório o uso correto dos hooks `useState` (para gerenciar dados dinâmicos e estados da UI) e `useEffect` (para controlar o ciclo de vida e disparar as requisições à API).
4.  **Estilização Moderna:** O layout deve apresentar uma estética visual atualizada. Recomenda-se o uso de **CSS Modules**, **Styled Components** ou **Tailwind CSS**. Evite layouts básicos; busque referências de design premium (bordas arredondadas, sombras suaves, gradientes e fontes modernas).
5.  **Roteamento:** A aplicação deve possuir pelo menos duas rotas distintas (ex: Home e Detalhes) utilizando a biblioteca **React Router**.
6.  **Feedback Visual:** A aplicação deve tratar estados de "carregando" (loading) e "erro" de forma clara para o usuário.

## 🚀 Passo a Passo Recomendado

### 1. Preparação do Ambiente

Inicie o seu projeto utilizando o **Vite** para uma experiência de desenvolvimento mais rápida:
```bash
npm create vite@latest projeto-ed3 -- --template react
cd projeto-ed3
npm install
npm install axios react-router-dom
```

### 2. Estrutura de Pastas

Organize seu diretório `src/` de forma profissional:
- `src/components/`: Componentes menores (Botões, Cards, Inputs).
- `src/pages/` ou `src/views/`: Componentes que representam telas inteiras.
- `src/services/`: Configuração do Axios e funções de chamada à API.
- `src/styles/`: Arquivos de estilização global ou tokens de design.

### 3. Desenvolvimento

1.  **Layout Base:** Crie a estrutura visual estática primeiro.
2.  **Integração:** Implemente o `useEffect` para buscar os dados assim que o componente for montado ou quando uma busca for disparada.
3.  **Estado:** Armazene os dados da API no `useState` e mapeie-os para os componentes de visualização.
4.  **Refinamento:** Adicione transições suaves e verifique a responsividade em dispositivos móveis.

### 4. Publicação no GitHub

1.  Crie um repositório público no seu [GitHub](https://github.com/).
2.  Suba o código fonte (não esqueça de configurar o `.gitignore` para não enviar a pasta `node_modules`).

## 📩 Entrega

Para concluir a atividade, siga estes passos:

1.  **GitHub:** Copie o link do seu repositório.
2.  **Google Classroom:** Localize a tarefa "Estudo Dirigido 3".
3.  **Anexar:** Envie o link do repositório como um comentário ou anexo na tarefa.
4.  **Confirmar:** Clique em "Entregar".

---
