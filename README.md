# AÇÃO CURRICULAR DE EXTENSÃO 2: PROJETO - PLATAFORMA MARKETPLACE

**Trabalho para avaliação do 4º período do curso de Sistemas para Internet da Universidade Estadual de Ciência da Saúde de Alagoas (UNCISAL), como requisito parcial para a pontuação no período atual do curso.**

**Professor:** Reinaldo Alves da Silva

**MACEIÓ - AL, 2024**

## SUMÁRIO
- [AÇÃO CURRICULAR DE EXTENSÃO 2: PROJETO - PLATAFORMA MARKETPLACE](#ação-curricular-de-extensão-2-projeto---plataforma-marketplace)
  - [SUMÁRIO](#sumário)
  - [O PROJETO](#o-projeto)
    - [SOBRE](#sobre)
    - [OBJETIVOS](#objetivos)
    - [REQUISITOS DO PROJETO](#requisitos-do-projeto)
      - [Interface do Usuário (UI) e Usabilidade:](#interface-do-usuário-ui-e-usabilidade)
      - [Funcionalidades de Backend:](#funcionalidades-de-backend)
      - [Banco de Dados:](#banco-de-dados)
      - [Segurança e Proteção de Dados:](#segurança-e-proteção-de-dados)
      - [Hospedagem e Infraestrutura:](#hospedagem-e-infraestrutura)
    - [CONCEITO A SER SEGUIDO](#conceito-a-ser-seguido)
  - [DEFINIÇÃO DAS FERRAMENTAS E SUA ORGANIZAÇÃO](#definição-das-ferramentas-e-sua-organização)
    - [FRONTEND](#frontend)
    - [BACKEND E INTEGRAÇÕES](#backend-e-integrações)
    - [HOSPEDAGEM E INFRAESTRUTURA](#hospedagem-e-infraestrutura-1)
    - [FERRAMENTAS ADICIONAIS](#ferramentas-adicionais)
  - [PRIMEIRA ETAPA](#primeira-etapa)
    - [DEFINIÇÃO DA ARQUITETURA DO SISTEMA](#definição-da-arquitetura-do-sistema)
      - [Estrutura dos Diretórios](#estrutura-dos-diretórios)
    - [IMPLEMENTAÇÃO DA INTERFACE DE LOGIN E REGISTRO DE USUÁRIOS](#implementação-da-interface-de-login-e-registro-de-usuários)

## O PROJETO

### SOBRE
Desenvolver um Marketplace, uma plataforma web que permita aos vendedores cadastrar produtos e aos compradores visualizar, pesquisar, adicionar ao carrinho e simular pagamentos. A plataforma deve incluir funcionalidades de login e registro de usuários.

### OBJETIVOS
- Aplicar conceitos de Programação Orientada a Objetos e Arquitetura de Sistemas Web.
- Implementar funcionalidades de segurança e gestão de usuários (autenticação e controle de acesso).
- Integrar um banco de dados para armazenar informações de produtos, usuários e transações.
- Desenvolver um sistema com boas práticas de usabilidade, baseando-se nos princípios de Interação Humano-Computador.
- Utilizar tecnologias de servidores e computação em nuvem para hospedagem e execução do sistema.
- Garantir a segurança dos dados e proteção contra ataques comuns, como SQL Injection e Cross-Site Scripting (XSS).

### REQUISITOS DO PROJETO
#### Interface do Usuário (UI) e Usabilidade:
- Interface amigável, com base em princípios de Interação Humano-Computador.
- Página inicial com pesquisa e exibição de produtos.
- Páginas para login e cadastro de usuários (vendedores e compradores).
- Dashboard para vendedores gerenciarem produtos.

#### Funcionalidades de Backend:
- Autenticação de usuários com controle de acesso.
- CRUD de produtos.
- Carrinho de compras e simulação de pagamento.
- Gerenciamento de pedidos e histórico de compras.

#### Banco de Dados:
- Modelagem e implementação do banco de dados para usuários, produtos e pedidos.
- Boas práticas de normalização e integridade dos dados.
- Consultas SQL seguras para prevenir injeções.

#### Segurança e Proteção de Dados:
- Criptografia de senhas de usuários.
- Proteção contra XSS e injeções.
- Controle de sessão e segurança contra acessos indevidos.

#### Hospedagem e Infraestrutura:
- Hospedagem utilizando servidores e computação em nuvem (e.g., AWS, Google Cloud).
- Configuração de servidor web para gerenciar o sistema.

### CONCEITO A SER SEGUIDO
Muitas plataformas de e-commerce atuais permitem a compra de produtos de diversas marcas e empresas, independentemente da localização, o que pode resultar na movimentação de recursos financeiros para fora do município. Isso impacta negativamente a indústria e pequenos negócios locais, que enfrentam concorrência intensa e custos elevados impostos por essas plataformas.

Nossa proposta é desenvolver uma plataforma de Marketplace que permita aos usuários registrar e vender produtos exclusivamente na sua região. O objetivo é fomentar a economia local, promovendo a circulação de moeda e produtos dentro da comunidade. Os produtos disponíveis para compra serão visíveis apenas para usuários localizados na mesma região, incentivando a compra e venda local.

Para os vendedores, a plataforma proporcionará uma solução eficiente para adquirir outros produtos necessários na mesma região, reduzindo a necessidade de recorrer a plataformas externas. Para garantir a competitividade, oferecemos taxas de transação menores, beneficiando tanto a plataforma quanto o usuário final. A segurança é uma prioridade: os pagamentos serão intermediados e liberados somente após a confirmação da entrega, utilizando um código de rastreamento. Nossa abordagem é garantir simplicidade e eficácia, atendendo às necessidades dos nossos clientes de forma clara e direta.

## DEFINIÇÃO DAS FERRAMENTAS E SUA ORGANIZAÇÃO

### FRONTEND
- **React:** Biblioteca para construção da interface.
- **Next.js:** Framework React para renderização no lado do servidor (SSR), otimização de SEO e geração de páginas estáticas.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida e eficiente.
- **Headless UI:** Componentes UI acessíveis e estilizados que funcionam com Tailwind CSS.
- **HyperUI e DaisyUI:** Bibliotecas de componentes estilizados com o Tailwind CSS.
- **React Select:** Componente para seleção com autocomplete.
- **React Hook Form:** Gerenciamento de formulários com menos re-renderizações.
- **Zod:** Validação de esquema de dados nos formulários.
- **MonaHealth React Input Mask:** Máscara de input para formulários.
- **Lucide:** Biblioteca de ícones flexível.
- **TanStack Table:** Biblioteca para criar tabelas complexas.
- **Highcharts (opcional):** Bibliotecas para gráficos.
- **React Spring (opcional):** Animações em React.

### BACKEND E INTEGRAÇÕES
- **Supabase:** Backend-as-a-Service (BaaS) que oferece autenticação, banco de dados (PostgreSQL) e armazenamento de arquivos.
- **API Asaas ou API MercadoPago:** Integração para simulação de pagamentos.
- **API Servicodados.IBGE:** Para nomes de cidades.
- **API ViaCEP:** Para localizar endereços.
- **Node-argon2:** Biblioteca para hashing de senhas.
- **Axios:** Biblioteca para fazer chamadas HTTP.
- **React Query:** Gerenciamento de estado e data-fetching para chamadas assíncronas.

### HOSPEDAGEM E INFRAESTRUTURA
- **Vercel:** Plataforma de hospedagem para aplicações Next.js.

### FERRAMENTAS ADICIONAIS
- **Compressor.js:** Biblioteca para compressão de imagens.
- **Cropper.js:** Biblioteca de corte de imagens.
- **Postman:** Ferramenta para testar APIs.

## PRIMEIRA ETAPA

### DEFINIÇÃO DA ARQUITETURA DO SISTEMA
Mediante as ferramentas definidas para o desenvolvimento do sistema, de forma clara e direta, foi alinhada a seguinte arquitetura para o projeto:

- **FRONTEND:** Será desenvolvido com Next.js, utilizando React, Tailwind CSS, e Headless UI para a construção da interface.
- **BACKEND:** Usará o Next.js API routes para lidar com rotas de API e conectar-se ao Supabase para autenticação e banco de dados.
- **AUTENTICAÇÃO:** Utilizará o Supabase para autenticação de usuários (login e cadastro), que inclui suporte para JWT e OAuth.
- **BANCO DE DADOS:** Supabase (PostgreSQL) armazenará informações de usuários e, eventualmente, produtos e pedidos.
- **HOSPEDAGEM:** A aplicação será hospedada no Vercel, que se integra bem com Next.js.

#### Estrutura dos Diretórios
- `APP/`: Contém as páginas e layouts da aplicação.
- `ASSETS/`: Armazenar arquivos estáticos como imagens e fontes.
- `COMPONENTS/`: Inclui componentes React reutilizáveis, como botões, cabeçalhos e rodapés.
- `SCHEMAS/`: Contém esquemas de validação para formulários e dados (por exemplo, Zod).
- `UTILS/`: Funções utilitárias e helpers que são usadas em várias partes do projeto.
- `SERVICES/`: Serviços que fazem chamadas à API e encapsulam a lógica de acesso aos dados.
- `CONTEXTS/`: Contextos React para gerenciamento de estado global.
- `HOOKS/`: Hooks personalizados que encapsulam lógica de estado ou efeitos.
- `STYLES/`: Arquivos de estilo e configuração de CSS.
- `TYPES/`: Tipos e interfaces TypeScript usados em toda a aplicação.
- `CONFIG/`: Arquivos de configuração e constantes da aplicação, como endpoints da API e configurações gerais.
- `TESTS/`: Testes unitários e de

 integração (caso optado).

### IMPLEMENTAÇÃO DA INTERFACE DE LOGIN E REGISTRO DE USUÁRIOS
Na primeira etapa do projeto, serão implementadas as interfaces de login e registro. O foco será na usabilidade, garantindo que o processo de autenticação seja simples e intuitivo.