# Zoka ☕

Aplicação de uma cafeteria desenvolvida com React, com catálogo de produtos, carrinho, finalização de pedidos e painel administrativo. O projeto conecta a experiência de compra ao gerenciamento de produtos, estoque e indicadores de vendas.

Construí o Zoka como parte do meu aprendizado em desenvolvimento front-end. Antes de começar, eu sabia o básico que era React e precisei aprender grande parte dos conceitos durante a construção da aplicação.

## Funcionalidades

- Catálogo com busca, filtros e página de detalhes de cada produto.
- Carrinho com controle de quantidades e cálculo do subtotal.
- Checkout demonstrativo com validação dos dados e opções de retirada ou entrega.
- Histórico e detalhes dos pedidos.
- Painel administrativo com cadastro, edição e exclusão de produtos, além do controle de estoque e status.
- Dashboard com receita dos pedidos simulados, quantidade de vendas, ticket médio e produtos mais vendidos.
- Persistência de produtos, carrinho e pedidos no navegador com `localStorage`.
- Interface com adaptações para diferentes tamanhos de tela.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| React 19 | Componentes, estado e atualização da interface. |
| JavaScript e JSX | Lógica da aplicação e construção das telas. |
| React Router DOM 7 | Navegação entre páginas e rotas dinâmicas para produtos e pedidos. |
| Context API e hooks | Compartilhamento de dados e organização das ações de produtos, carrinho e pedidos. |
| Tailwind CSS 3 e CSS | Estilização e responsividade. |
| Vite 8 | Servidor de desenvolvimento e build de produção. |
| React Icons | Ícones da interface. |
| ESLint | Análise estática do código. |
| localStorage | Armazenamento local dos dados. |

## Como rodar o projeto

**Pré-requisitos:** Node.js 22.12 ou superior e npm.

Na pasta do projeto, instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

Para explorar o fluxo, adicione um produto ao carrinho, conclua uma compra demonstrativa e consulte o pedido. Acesse `/Admin` para gerenciar os produtos e acompanhar os indicadores.

### Outros comandos

```bash
npm run build    # Gera a versão de produção na pasta dist
npm run preview  # Serve o build localmente, após executar o build
npm run lint     # Executa a análise estática do código
```

O projeto funciona no navegador, sem configurar backend, banco de dados ou variáveis de ambiente. O checkout é uma simulação e não processa pagamentos reais. O painel administrativo não possui autenticação. Os dados ficam no navegador utilizado e podem ser perdidos ao limpar o armazenamento local.

## Principais aprendizados e desafios

- **Compartilhar estado entre diferentes páginas:** usar a Context API e criar hooks personalizados me ajudou a conectar catálogo, carrinho, checkout e administração, mantendo as regras organizadas fora dos componentes visuais.
- **Construir um fluxo de compra consistente:** um dos desafios mais importantes foi validar a disponibilidade dos produtos, controlar quantidades e atualizar o estoque ao concluir um pedido, desativando produtos quando o estoque chega a zero.
- **Persistir dados e preservar o histórico:** aprendi a combinar `useEffect`, `localStorage` e serialização em JSON para manter informações após recarregar a página. Também trabalhei com cópias dos dados dos itens nos pedidos, preservando o histórico mesmo quando um produto é alterado ou excluído.
- **Tratar formulários e regras de negócio:** implementei validações, prevenção de nomes duplicados e mensagens de erro, aprendendo a considerar entradas inválidas e situações que poderiam comprometer o fluxo da aplicação.
- **Transformar dados em informações úteis:** usei operações como `map`, `filter` e `reduce` para organizar produtos e calcular os indicadores do dashboard, conectando o aprendizado de JavaScript a necessidades concretas do projeto.
