# Next.js Portfolio Architecture

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      BUILD TIME (GitHub Actions)             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   npm run build  │
                    └──────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │  Next.js fetches data from GitHub API   │
        │  - User profile (lmnitzsche)            │
        │  - All public repositories              │
        │  - Repo details (stars, forks, etc)     │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   Generate Static Pages                 │
        │   - /index.html (home)                  │
        │   - /projects/repo1.html                │
        │   - /projects/repo2.html                │
        │   - /projects/repo3.html                │
        │   - ... (one for each repo)             │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   Export to /out directory              │
        │   Pure HTML + CSS + JS                  │
        │   No Node.js needed at runtime          │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   Deploy to GitHub Pages                │
        │   https://lmnitzsche.github.io          │
        └─────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│                      RUNTIME (User Visits)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   User visits lmnitzsche.github.io      │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   Load pre-generated HTML               │
        │   ✅ FAST - No API calls                │
        │   ✅ SEO - Fully rendered               │
        │   ✅ Free - Static hosting              │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   React hydrates the page               │
        │   - Smooth scroll works                 │
        │   - Animations trigger                  │
        │   - Interactive elements active         │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │   User clicks project                   │
        │   Navigate to /projects/repo-name       │
        │   ✅ Already pre-generated              │
        │   ✅ Instant load                       │
        └─────────────────────────────────────────┘
```

## Component Hierarchy

```
app/layout.tsx
│
├── AOSInit (Initialize animations)
│
└── app/page.tsx
    │
    ├── Navbar
    │   └── Smooth scroll navigation
    │
    ├── Hero
    │   ├── Typed.js animation
    │   └── Social links
    │
    ├── About
    │   ├── Profile info
    │   └── LinkedIn data
    │
    ├── Portfolio
    │   ├── Fetch from GitHub API (build time)
    │   └── Grid of projects
    │       └── Each links to /projects/[slug]
    │
    ├── Resume
    │   ├── Education
    │   ├── Experience
    │   └── Skills
    │
    └── Contact
        └── Contact form


app/projects/[slug]/page.tsx
│
├── generateStaticParams() → Creates route for each repo
│
└── Dynamic content based on repo slug
    ├── Project description
    ├── Technologies used
    ├── GitHub stats
    └── Links (GitHub, Demo)
```

## File Structure

```
lmnitzsche.github.io/
│
├── 📱 App (Next.js App Router)
│   ├── layout.tsx          → Root layout, fonts, meta
│   ├── page.tsx            → Home page (all sections)
│   ├── globals.css         → Global styles (migrated)
│   └── projects/
│       └── [slug]/
│           └── page.tsx    → Dynamic project pages
│
├── 🧩 Components
│   ├── Navbar.tsx          → Sticky navigation
│   ├── Hero.tsx            → Hero + typing animation
│   ├── About.tsx           → About section
│   ├── Portfolio.tsx       → GitHub repos grid
│   ├── Resume.tsx          → Resume/experience
│   ├── Contact.tsx         → Contact form
│   └── AOSInit.tsx         → Animation init
│
├── 🔌 API Integration
│   ├── github.ts           → GitHub API utilities
│   ├── linkedin.ts         → LinkedIn integration
│   └── utils.ts            → Helper functions
│
├── 🎨 Public Assets
│   └── assets/
│       └── img/
│           ├── profile.jpg → Your photo
│           └── hero-bg.jpg → Hero background
│
├── ⚙️ Configuration
│   ├── package.json        → Dependencies
│   ├── next.config.js      → Next.js config
│   ├── tsconfig.json       → TypeScript config
│   ├── .env.local          → Environment variables
│   └── .gitignore          → Git ignore
│
├── 🚀 Deployment
│   └── .github/
│       └── workflows/
│           └── deploy.yml  → GitHub Actions
│
├── 📚 Documentation
│   ├── README.md           → Original README
│   ├── README-NEXTJS.md    → Full documentation
│   ├── GETTING-STARTED.md  → Quick start
│   ├── SETUP-COMPLETE.md   → This guide
│   └── ARCHITECTURE.md     → This file
│
└── 🔧 Scripts
    └── setup.sh            → Automated setup
```

## API Integration Flow

### GitHub API

```
Build Time:
  ┌─────────────────────┐
  │ lib/github.ts       │
  └─────────────────────┘
            │
            ▼
  ┌─────────────────────┐
  │ getGitHubRepos()    │
  │ getGitHubUser()     │
  │ getGitHubRepo()     │
  └─────────────────────┘
            │
            ▼
  https://api.github.com/users/lmnitzsche/repos
            │
            ▼
  ┌─────────────────────┐
  │ Returns JSON        │
  │ - All repos         │
  │ - Stars, forks      │
  │ - Languages         │
  │ - Topics            │
  └─────────────────────┘
            │
            ▼
  ┌─────────────────────┐
  │ components/         │
  │ Portfolio.tsx       │
  │ Renders grid        │
  └─────────────────────┘
            │
            ▼
  ┌─────────────────────┐
  │ app/projects/       │
  │ [slug]/page.tsx     │
  │ Detail pages        │
  └─────────────────────┘
```

### LinkedIn Integration

```
Currently:
  ┌─────────────────────┐
  │ lib/linkedin.ts     │
  │ Static profile data │
  └─────────────────────┘
            │
            ▼
  ┌─────────────────────┐
  │ LINKEDIN_PROFILE    │
  │ - Name              │
  │ - Headline          │
  │ - Profile URL       │
  └─────────────────────┘
            │
            ▼
  ┌─────────────────────┐
  │ components/About    │
  │ Display profile     │
  └─────────────────────┘

Optional (Future):
  ┌─────────────────────┐
  │ LinkedIn OAuth 2.0  │
  │ Full API access     │
  └─────────────────────┘
```

## Deployment Pipeline

```
Local Development:
  npm run dev → http://localhost:3000

Production Build:
  npm run build → Generates /out directory

GitHub Actions Workflow:
  
  1. Trigger: Push to main branch
     │
     ▼
  2. Setup Node.js 20
     │
     ▼
  3. npm ci (install dependencies)
     │
     ▼
  4. npm run build
     │  ├─ Next.js builds app
     │  ├─ Fetches GitHub API data
     │  └─ Generates static HTML
     │
     ▼
  5. Upload /out as artifact
     │
     ▼
  6. Deploy to GitHub Pages
     │
     ▼
  7. ✅ Live at https://lmnitzsche.github.io
```

## Performance Benefits

### Traditional SPA (Client-Side Rendering)
```
User visits → Download JS → Execute → Fetch API → Render
                ⏱️ 3-5 seconds
```

### Your Setup (Static Site Generation)
```
User visits → Serve pre-rendered HTML
                ⏱️ < 1 second
```

### SEO Comparison

**Traditional SPA:**
```
Google Bot sees:
<div id="root"></div>  ❌ No content!
```

**Your Setup:**
```
Google Bot sees:
<h1>Logan Nitzsche</h1>
<section>Full content...</section>  ✅ Perfect!
```

## Technology Stack

```
┌─────────────────────────────────────────┐
│           Frontend Framework             │
│  Next.js 14 (React 18 + TypeScript)     │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          Styling & Design                │
│  Bootstrap 5 + Custom CSS                │
│  Bootstrap Icons                         │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│           Animations                     │
│  AOS (Animate On Scroll)                │
│  Typed.js (Hero animation)              │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          API Integration                 │
│  GitHub REST API v3                     │
│  LinkedIn Profile (Static)              │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          Build & Deploy                  │
│  GitHub Actions                          │
│  GitHub Pages (Static Hosting)          │
└─────────────────────────────────────────┘
```

## Data Caching Strategy

```
Build Time Cache:
  ┌─────────────────────────────────────┐
  │  GitHub API Response                │
  │  - Cached for build duration        │
  │  - New build = fresh data           │
  └─────────────────────────────────────┘

Next.js Fetch Cache:
  ┌─────────────────────────────────────┐
  │  next: { revalidate: 3600 }        │
  │  - Cache for 1 hour during build   │
  │  - Prevents rate limiting           │
  └─────────────────────────────────────┘

Production:
  ┌─────────────────────────────────────┐
  │  Static HTML files                  │
  │  - No caching needed                │
  │  - Always up to date after build    │
  └─────────────────────────────────────┘
```

## Update Workflow

```
You push code to GitHub
        │
        ▼
GitHub Actions triggered
        │
        ▼
Rebuilds entire site
        │
        ▼
Fetches latest repos from GitHub
        │
        ▼
Generates new static pages
        │
        ▼
Deploys to GitHub Pages
        │
        ▼
Site updates automatically! ✅
```

## Security

```
✅ No API keys exposed
   - GITHUB_TOKEN only in GitHub Actions
   - Not sent to client

✅ Static files only
   - No server-side vulnerabilities
   - No database to hack

✅ HTTPS by default
   - GitHub Pages provides SSL

✅ No user data stored
   - Contact form needs backend integration
```

---

This architecture gives you:
- ⚡ Lightning fast performance
- 🔍 Perfect SEO
- 💰 Zero hosting cost
- 🔄 Auto-updates from GitHub
- 🛡️ Secure by design
- 📱 Mobile responsive
- ♿ Accessible
- 🎨 Modern & professional
