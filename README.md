# Space-App

![Thumbnail do projeto. O título é “Space-App - Projeto com Styled Components.png” e o Subtítulo é “adaptado por Bianca Chiquinelli.”](./src/assets/Front-end-Space-App%20-%20Projeto%20com%20Styled%20Components.png)

Space App é uma aplicação desenvolvida em _React_ e estruturada com _Vite_, garantindo performance e agilidade no desenvolvimento. A estilização foi feita com _Styled Components_, permitindo a criação de componentes reutilizáveis com estilos isolados e consistentes.

A aplicação apresenta uma galeria dinâmica de imagens, alimentada por dados externos. Inclui funcionalidades como marcação de favoritos e visualização em destaque por meio de uma modal personalizada com estrutura semântica.

Este repositório reúne _minhas contribuições técnicas e aprendizados_, evidenciando decisões de arquitetura, padrões adotados e a evolução do código ao longo do desenvolvimento.

## Minhas Contribuições

- Desenvolvi funcionalidades interativas como filtragem dinâmica por categoria e busca, integradas ao estado do _React_ para atualização em tempo real da interface.

- Implementei a lógica de favoritos com comunicação entre componentes _(prop drilling)_, mantendo consistência de estado entre a galeria e a visualização ampliada.

- Criei a visualização ampliada de imagens com uma modal customizada utilizando a tag semântica _dialog_.

- Estruturei a aplicação com componentes reutilizáveis e organização escalável, incluindo padronização de estilos com _Styled Components_, estilos globais e uso de imports absolutos _(@)_.

- Adaptei a interface para diferentes tamanhos de tela, ajustando layout, tipografia e espaçamentos com foco em _responsividade_.

  ![Interface do Space App exibindo menu lateral, campo de busca, banner principal e sistema de filtragem por tags (estrelas, galáxias, luas e nebulosas).](https://i.imgur.com/5Jwi9uV.png)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite
- React
- Styled Components

## ⚙️ Técnicas e abordagens:

- **Gerenciamento de estado:** Centralizei com `useState` e `useEffect`, controlando galeria, busca e interações de forma previsível. Sincronização de estados derivados (como favoritos entre lista e modal), evitando inconsistências na interface.

- **Filtragem e fluxo de dados:** Implementação de filtragem dinâmica por busca e categoria com `map` e `filter`, garantindo reatividade da interface conforme o estado é atualizado. Comunicação entre componentes via props (prop drilling) com fluxo de dados claro e centralizado.

- **Arquitetura de estilos com Styled Components:** Uso de `Global styles` e `dynamic styling` para adaptar componentes com base em props e estado, separando responsabilidades entre componentes e mantendo uma organização escalável.

- **Layout responsivo:** Aplicação de `media queries` integradas aos componentes para adaptação consistente em diferentes breakpoints.

![Galeria do Space App exibindo imagens do espaço com títulos, opção de favoritar e ampliar, além de seção lateral de imagens populares.](https://i.imgur.com/KKkncMn.png)

## Como Ter Acesso ao Projeto

- **Versão online**: [Clique aqui](https://space-app-tau-lilac.vercel.app/)
- **Rodar localmente**:

1. Clone este repositório:

   ```bash
   git clone https://github.com/chiquinelli-bia/space-app.git

   ```

2. Acesse a pasta do projeto:

   ```bash
   cd space-app

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev

   ```

5. Abra no navegador o endereço exibido no terminal e Navegue pelas funcionalidades da aplicação.

## Créditos

- Instrutor(es) e curso: Vinicius Neves e João Vitor Pereira ![React: estilize componentes com Styled Components e manipule arquivos estáticos](https://cursos.alura.com.br/course/react-estilize-componentes-styled-components-manipule-arquivos-estaticos) - Este repositório destaca **minhas contribuições** ao projeto
