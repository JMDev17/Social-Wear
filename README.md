# Social Wear - Landing Page de Roupas Masculinas Sociais

Uma landing page moderna e elegante para e-commerce de roupas masculinas sociais, desenvolvida com Next.js 15, TypeScript e Styled Components.

## Características

### Design Moderno
- Interface elegante e sofisticada
- Animações suaves com Framer Motion
- Totalmente responsivo para todos os dispositivos
- Tema customizado com paleta de cores profissional

### Funcionalidades Implementadas

#### 1. Header Fixo e Responsivo
- Menu de navegação com scroll suave
- Indicador de itens no carrinho
- Menu mobile com animações
- Efeito de backdrop blur ao fazer scroll

#### 2. Seção Hero
- Banner principal com call-to-action
- Estatísticas da empresa
- Badge flutuante com promoções
- Animações de entrada sequenciais
- Indicador de scroll animado

#### 3. Catálogo de Produtos
- Sistema de filtros por categoria
- Grid responsivo de produtos
- Badges de "Novo" e desconto
- Overlay com ações rápidas (visualizar, favoritar, adicionar ao carrinho)
- Exibição de cores disponíveis
- Preços com desconto destacados

#### 4. Carrinho de Compras
- Context API para gerenciamento de estado
- Adicionar produtos com tamanho e cor
- Atualizar quantidade
- Remover produtos
- Cálculo automático de totais
- Persistência durante a navegação

#### 5. Depoimentos
- Cards de avaliações de clientes
- Sistema de rating com estrelas
- Estatísticas de satisfação
- Efeitos hover elegantes

#### 6. Newsletter
- Formulário de inscrição
- Validação de email
- Feedback visual de sucesso
- Lista de benefícios
- Background com gradiente e padrão

#### 7. Footer Completo
- Links de navegação
- Informações de contato
- Redes sociais
- Métodos de pagamento
- Copyright e ano dinâmico

## Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Styled Components** - CSS-in-JS com suporte SSR
- **Framer Motion** - Animações e transições
- **React Icons** - Biblioteca de ícones
- **Context API** - Gerenciamento de estado

## Estrutura do Projeto

```
social-wear/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz com providers
│   │   └── page.tsx            # Página principal
│   ├── components/
│   │   ├── Header/             # Cabeçalho
│   │   ├── Hero/               # Seção hero
│   │   ├── Products/           # Catálogo de produtos
│   │   ├── Testimonials/       # Depoimentos
│   │   ├── Newsletter/         # Newsletter
│   │   └── Footer/             # Rodapé
│   ├── context/
│   │   └── CartContext.tsx     # Contexto do carrinho
│   ├── data/
│   │   └── products.ts         # Dados mockados
│   ├── lib/
│   │   └── registry.tsx        # Registry do Styled Components
│   ├── styles/
│   │   ├── GlobalStyles.ts     # Estilos globais
│   │   └── theme.ts            # Tema da aplicação
│   └── types/
│       └── index.ts            # Definições de tipos
├── next.config.ts              # Configuração do Next.js
├── tsconfig.json               # Configuração do TypeScript
└── package.json                # Dependências
```

## Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Navegue até a pasta do projeto:
```bash
cd social-wear
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Build para Produção

```bash
npm run build
npm start
```

## Funcionalidades do Carrinho

O carrinho de compras utiliza React Context API e oferece:

- **addToCart(product, size, color)** - Adiciona produto ao carrinho
- **removeFromCart(productId)** - Remove produto do carrinho
- **updateQuantity(productId, quantity)** - Atualiza quantidade
- **clearCart()** - Limpa o carrinho
- **getTotalItems()** - Retorna total de itens
- **getTotalPrice()** - Retorna valor total

## Customização

### Cores do Tema

Edite `src/styles/theme.ts` para alterar as cores:

```typescript
colors: {
  primary: '#1a1a1a',      // Cor principal
  accent: '#c9a961',       // Cor de destaque (dourado)
  // ... outras cores
}
```

### Produtos

Edite `src/data/products.ts` para adicionar/modificar produtos:

```typescript
{
  id: 'unique-id',
  name: 'Nome do Produto',
  price: 299.90,
  originalPrice: 399.90,  // Opcional
  category: 'terno',
  // ... outros campos
}
```

## Recursos de Acessibilidade

- Navegação por teclado
- Indicadores visuais de foco
- Textos alternativos em imagens
- Contraste adequado de cores
- HTML semântico

## Performance

- Componentes otimizados com React
- Lazy loading de imagens
- Animações com GPU acceleration
- CSS-in-JS com SSR otimizado
- Fontes Google otimizadas

## Próximos Passos

Possíveis melhorias futuras:

- [ ] Integração com API real de produtos
- [ ] Sistema de autenticação
- [ ] Checkout completo
- [ ] Integração com gateway de pagamento
- [ ] Painel administrativo
- [ ] Sistema de busca avançada
- [ ] Wishlist/Favoritos persistentes
- [ ] Comparador de produtos
- [ ] Reviews e ratings de produtos

## Licença

Este projeto foi criado para fins educacionais e de demonstração.

---

Desenvolvido com Next.js e TypeScript
