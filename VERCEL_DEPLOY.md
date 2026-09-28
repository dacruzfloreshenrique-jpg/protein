# Instruções de Deploy para Vercel

## ✅ Configuração Correta

O projeto está configurado corretamente para deploy no Vercel. Siga estes passos:

### 1. Verifique as Configurações no Painel do Vercel

Acesse: https://vercel.com/dashboard → Seu Projeto → Settings → General

Configure manualmente:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: `20.x`

### 2. Force um Novo Deployment

1. Vá em **Deployments**
2. Clique nos três pontos (⋮) do último deployment
3. Selecione **Redeploy**
4. Marque a opção **"Use existing Build Cache"** como **DESATIVADA**

### 3. Verifique os Logs de Build

Nos logs do deployment, procure por:
- ✅ `npm run build` sendo executado
- ✅ `dist/index.html` sendo gerado
- ✅ `dist/assets/` sendo criado
- ❌ Erros de compilação

### 4. Arquivos de Configuração Incluídos

- `vercel.json` - Configuração principal do Vercel
- `vite.config.js` - Configuração do Vite
- `.nvmrc` - Versão do Node.js (20)
- `.vercelignore` - Arquivos ignorados no deploy

## 🔧 Se o Problema Persistir

### Opção A: Recriar o Projeto no Vercel

1. Delete o projeto atual no Vercel
2. Crie um novo projeto importando o repositório
3. Selecione **Vite** como Framework Preset
4. Configure manualmente os comandos (ver passo 1)
5. Faça deploy

### Opção B: Deploy Manual via CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy de produção
vercel --prod
```

### Opção C: Verificar Dependências

```bash
# Limpe o cache
rm -rf node_modules package-lock.json

# Reinstale as dependências
npm install

# Faça o build local
npm run build

# Verifique se dist/ foi criado
ls -la dist/
```

## 📋 Checklist de Troubleshooting

- [ ] Framework Preset está definido como "Vite"
- [ ] Build Command está definido como "npm run build"
- [ ] Output Directory está definido como "dist"
- [ ] Node Version está definida como "20.x"
- [ ] O build está completando sem erros
- [ ] O diretório dist/ está sendo gerado
- [ ] O arquivo dist/index.html existe
- [ ] Os assets estão em dist/assets/

## 🚀 Links Úteis

- **Produto**: https://floreshenrique.gumroad.com/l/ssuoev
- **Deploy**: https://protein-self.vercel.app/
- **Documentação Vercel**: https://vercel.com/docs

## 📝 Notas Importantes

- O build gera arquivos estáticos (HTML, CSS, JS)
- Não há server-side rendering
- Todas as imagens são carregadas de URLs externas
- O site é 100% client-side (React SPA)
