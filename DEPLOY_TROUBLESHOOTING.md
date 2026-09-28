# 🚀 Guia Completo de Deploy na Vercel

## 📋 Diagnóstico do Projeto

**Tecnologias:**
- Framework: React + Vite
- Linguagem: TypeScript
- Gerenciador: npm
- Build Output: `dist/`

**Status do Build Local:** ✅ Funcionando
- `npm run dev`: ✅ OK
- `npm run build`: ✅ OK
- Output gerado: `dist/index.html`, `dist/assets/`

---

## 🔧 Configuração Atual

### ✅ vercel.json (Configurado)
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### ✅ vite.config.js (Configurado)
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // ...
});
```

---

## ❌ Possíveis Erros e Soluções

### ERRO 1: "Build falha na Vercel"

**Sintomas:**
- Logs mostram erro durante `npm run build`
- Mensagens como "Module not found", "TypeScript error", etc.

**Soluções:**

1. **Verifique as dependências:**
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install

# Teste o build localmente
npm run build
```

2. **Verifique erros de TypeScript:**
```bash
npm run typecheck
```

3. **Verifique imports quebrados:**
- Certifique-se de que todos os arquivos existem
- Verifique caminhos relativos
- Confirme que não há imports circulares

---

### ERRO 2: "Deploy concluído mas site não abre (404)"

**Sintomas:**
- Build completo com sucesso
- Página mostra "404 Not Found" ou "Not Found"

**Soluções:**

1. **Verifique as configurações no painel do Vercel:**
   - Acesse: https://vercel.com/dashboard → Seu Projeto → Settings → General
   - Configure manualmente:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
     - **Node Version**: `20.x`

2. **Force um novo deployment:**
   - Vá em **Deployments**
   - Clique nos três pontos (⋮) do último deployment
   - Selecione **Redeploy**
   - **Desative** "Use existing Build Cache"

3. **Verifique os logs de build:**
   - Procure por: `dist/index.html` sendo gerado
   - Confirme que `dist/assets/` existe
   - Verifique se não há warnings críticos

---

### ERRO 3: "Assets não carregam (CSS/JS 404)"

**Sintomas:**
- Página abre mas sem estilo
- Console mostra erros 404 para arquivos em `/assets/`

**Soluções:**

1. **Verifique o `base` no vite.config.js:**
```javascript
export default defineConfig({
  base: '/', // Deve ser '/' para deploy na raiz
  // ...
});
```

2. **Verifique os caminhos no HTML gerado:**
```bash
# Após o build, verifique dist/index.html
cat dist/index.html
```
Deve conter:
```html
<script type="module" crossorigin src="/assets/index-XXXX.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-XXXX.css">
```

---

### ERRO 4: "Página em branco após deploy"

**Sintomas:**
- Página carrega mas não mostra conteúdo
- Console mostra erros JavaScript

**Soluções:**

1. **Verifique erros no console do navegador:**
   - Abra DevTools (F12)
   - Vá na aba Console
   - Procure por erros vermelhos

2. **Verifique se o React está montando:**
```bash
# No console do navegador, digite:
document.getElementById('root')
```
Deve retornar um elemento com conteúdo.

3. **Verifique se há erros de runtime:**
- Imports dinâmicos falhando
- Variáveis de ambiente não definidas
- APIs externas bloqueando o carregamento

---

### ERRO 5: "Erro: não contém os diretórios functions, static ou services"

**Sintomas:**
- Mensagem específica do Vercel sobre diretórios ausentes

**Solução:**
Este erro geralmente significa que o Vercel não detectou o framework corretamente.

1. **Configure manualmente no painel:**
   - Settings → General → Framework Preset: `Vite`
   - Output Directory: `dist`

2. **Recrie o projeto:**
   - Delete o projeto atual
   - Crie um novo importando o repositório
   - Selecione Vite como Framework Preset
   - Configure os comandos manualmente

---

## 🛠️ Comandos Úteis de Debug

### Verificar build local
```bash
# Limpar e reconstruir
rm -rf dist
npm run build

# Verificar conteúdo do dist
ls -la dist/
cat dist/index.html
```

### Verificar configuração do Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Ver configuração atual
vercel inspect

# Deploy de teste
vercel --prod
```

### Verificar logs na Vercel
1. Acesse: https://vercel.com/dashboard → Seu Projeto
2. Vá em **Deployments**
3. Clique no deployment mais recente
4. Veja os **Build Logs** completos

---

## ✅ Checklist Final

Antes de fazer push, confirme:

- [ ] `npm run build` funciona localmente
- [ ] Pasta `dist/` é gerada com `index.html` e `assets/`
- [ ] `vercel.json` está na raiz do projeto
- [ ] `vite.config.js` tem `base: '/'`
- [ ] No painel do Vercel:
  - [ ] Framework Preset: Vite
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `dist`
  - [ ] Install Command: `npm install`
- [ ] Não há erros de TypeScript (`npm run typecheck`)
- [ ] Não há imports quebrados

---

## 🆘 Se Nada Funcionar

### Opção 1: Deploy Manual via CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Opção 2: Usar Netlify (Alternativa)
Crie um arquivo `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Opção 3: GitHub Pages (Alternativa)
Adicione ao `vite.config.js`:
```javascript
export default defineConfig({
  base: '/nome-do-repositorio/',
  // ...
});
```

---

## 📞 Suporte

Se o problema persistir:

1. **Copie os logs completos do build na Vercel**
2. **Verifique se o repositório está público** (ou conectado corretamente)
3. **Confirme que o branch principal é `main` ou `master`**
4. **Entre em contato com o suporte Vercel**: https://vercel.com/support

---

## 🔗 Links Úteis

- **Documentação Vercel**: https://vercel.com/docs
- **Documentação Vite**: https://vitejs.dev/
- **Deploy na Vercel**: https://vercel.com/docs/deployments
- **Troubleshooting**: https://vercel.com/docs/troubleshooting

---

**Última atualização:** 2026-01-XX
**Status do projeto:** ✅ Build local funcionando
