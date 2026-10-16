# 🎸 Valkyrja Reis — Linktree Cinematográfico

Site profissional e cinematográfico para o guitarrista Valkyrja Reis, funcionando como um linktree premium com vídeo de fundo.

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Entre na pasta do projeto
cd SEU_REPOSITORIO

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Para build de produção
npm run build
```

## 📁 Estrutura do Projeto

```
├── public/
│   └── video01.mp4          ← SEU VÍDEO AQUI (obrigatório)
├── src/
│   ├── App.tsx              ← Componente principal
│   ├── main.tsx             ← Entry point
│   └── index.css            ← Estilos globais e animações
├── index.html               ← HTML base
├── package.json             ← Dependências
├── tsconfig.json            ← Configuração TypeScript
├── vite.config.js           ← Configuração Vite
└── README.md
```

## 🎬 Adicionando o Vídeo

**IMPORTANTE:** Coloque seu vídeo na pasta `public/` com o nome exato `video01.mp4`

```bash
mkdir -p public
cp /caminho/do/seu/video.mp4 public/video01.mp4
```

Se o vídeo for muito grande (>100MB), use Git LFS:
```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
```

## 🎨 Paleta de Cores

- **#080A14** — Fundo principal (Void)
- **#00F0FF** — Cyan (destaque primário)
- **#FF007F** — Magenta (destaque secundário)
- **#7000FF** — Violet (acentos)
- **#FFEE00** — Gold (detalhes)

## 🔗 Links Configurados

- **Aulas ao Vivo** → `#aulas` (altere para sua página de aulas)
- **Curso Improviso na Pentatônica** → `#curso` (altere para sua página do curso)
- **TikTok** → `https://tiktok.com/@valkyrjareis` (altere para seu TikTok)
- **YouTube** → `#youtube` (altere para seu canal)
- **WhatsApp** → `https://wa.me/5534996508397` (já configurado)

## 🚀 Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Clique em "Deploy"
5. Pronto! Seu site estará online em segundos.

## 📱 Responsivo

O site é totalmente responsivo e otimizado para mobile, tablet e desktop.

## 🎯 Funcionalidades

- ✅ Vídeo de fundo cinematográfico
- ✅ Animações suaves com Framer Motion
- ✅ Efeitos parallax reativos ao cursor
- ✅ Botão flutuante do WhatsApp com animação
- ✅ Design responsivo mobile-first
- ✅ Performance otimizada
- ✅ SEO básico configurado
- ✅ Acessibilidade (WCAG)

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## 📝 Licença

Este projeto é proprietário. Todos os direitos reservados.

---

Desenvolvido com ❤️ para Valkyrja Reis
