# 21-Day High-Protein Meal Plan - Landing Page

Landing page premium para o guia digital "21-Day High-Protein Meal Plan" de Ava Brooks.

## 🚀 Deploy no Vercel

### Configuração Automática

Este projeto está configurado para deploy automático no Vercel. Quando você pushar o código, o Vercel irá:

1. Detectar automaticamente que é um projeto Vite
2. Executar `npm run build`
3. Fazer deploy da pasta `dist/`
4. Aplicar as regras de redirecionamento do `vercel.json`

### Configuração Manual (se necessário)

Se o deploy automático não funcionar, configure manualmente no painel do Vercel:

1. **Framework Preset**: Vite
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

### Arquivos de Configuração Incluídos

- `vercel.json` - Configuração principal do Vercel
- `public/_redirects` - Redirecionamentos alternativos
- `public/404.html` - Página 404 com redirect automático
- `vite.config.js` - Configuração do Vite

## 🛠️ Desenvolvimento Local

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🔗 Links Importantes

- **Produto**: https://floreshenrique.gumroad.com/l/ssuoev
- **Deploy**: https://protein-self.vercel.app/

## 📝 Notas

- Todos os CTAs direcionam para o Gumroad
- Design mobile-first e responsivo
- Animações suaves com Framer Motion
- Tipografia: Playfair Display + Inter
