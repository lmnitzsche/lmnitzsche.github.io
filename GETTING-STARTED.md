# Next.js Portfolio - Quick Start Guide

## 🎉 Your Next.js portfolio is ready!

All TypeScript errors you see are expected until you run `npm install` to install the dependencies.

## What's Been Created

### ✅ Core Structure
- Next.js 14 with App Router
- TypeScript configuration
- Static export setup for GitHub Pages
- GitHub Actions deployment workflow

### ✅ API Integration
- **GitHub API**: Automatically fetches your repositories
- **LinkedIn Profile**: Ready for your profile info
- Dynamic project detail pages

### ✅ Components
- Hero section with Typed.js animation
- About section
- Portfolio grid (loads from GitHub)
- Resume section
- Contact form
- All with AOS animations

### ✅ Styling
- Migrated your dark theme
- Bootstrap 5 integration
- Responsive design
- Custom accent colors (cyan)

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

Or run the setup script:
```bash
chmod +x setup.sh
./setup.sh
```

### Step 2: Customize Your Content

1. **LinkedIn Profile** (`lib/linkedin.ts`):
   ```typescript
   export const LINKEDIN_PROFILE = {
     profileUrl: 'https://www.linkedin.com/in/your-profile',
     firstName: 'Your',
     lastName: 'Name',
     headline: 'Your Title',
   };
   ```

2. **About Section** (`components/About.tsx`):
   - Update your bio
   - Add your skills

3. **Resume** (`components/Resume.tsx`):
   - Add education
   - Add work experience
   - List skills

4. **Contact** (`components/Contact.tsx`):
   - Update email
   - Update social links

### Step 3: Add Images

Copy your images to the public folder:
```bash
cp your-profile-photo.jpg public/assets/img/profile.jpg
cp your-hero-background.jpg public/assets/img/hero-bg.jpg
```

Or use the existing images:
```bash
cp assets/img/* public/assets/img/
```

### Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Step 5: Deploy to GitHub Pages

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: **GitHub Actions**

2. **Push to main**:
   ```bash
   git add .
   git commit -m "Add Next.js portfolio"
   git push origin main
   ```

3. **Wait for deployment** (2-3 minutes)

4. **Visit**: `https://lmnitzsche.github.io`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts & scripts
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles (migrated)
│   └── projects/[slug]/
│       └── page.tsx            # Dynamic project pages
│
├── components/
│   ├── Hero.tsx                # Hero with typed animation
│   ├── About.tsx               # About section
│   ├── Portfolio.tsx           # GitHub repos grid
│   ├── Resume.tsx              # Resume/experience
│   ├── Contact.tsx             # Contact form
│   └── AOSInit.tsx             # AOS animation init
│
├── lib/
│   ├── github.ts               # GitHub API utilities
│   └── linkedin.ts             # LinkedIn integration
│
├── public/
│   └── assets/                 # Static assets
│
└── .github/workflows/
    └── deploy.yml              # Auto-deployment
```

## 🔧 Configuration

### Environment Variables

Optional `.env.local`:
```env
NEXT_PUBLIC_GITHUB_USERNAME=lmnitzsche
GITHUB_TOKEN=ghp_your_token_here  # For higher API limits
```

### GitHub Token (Optional)

For unlimited API requests:
1. Go to GitHub Settings → Developer settings → Tokens
2. Generate new token (classic)
3. Select `public_repo` scope
4. Add to `.env.local`

## 🎨 Customization

### Colors

Edit `app/globals.css`:
```css
:root {
  --accent-color: rgb(0, 200, 255);  /* Change this! */
  --background-color: #000000;
  --heading-color: #ffffff;
}
```

### Portfolio Filtering

Edit `components/Portfolio.tsx` to:
- Show more/fewer projects
- Filter by language
- Pin specific repos

### Project Details

Each project automatically gets a detail page at `/projects/[repo-name]`

Customize the template in `app/projects/[slug]/page.tsx`

## 📊 Features

### Automatic GitHub Integration
- Fetches all your public repos
- Displays top starred projects
- Shows languages, stars, forks
- Creates clickable detail pages

### SEO Optimized
- Server-side generation
- Meta tags configured
- OpenGraph support
- Fast loading times

### Animations
- AOS scroll animations
- Typed.js hero text
- Smooth transitions

## 🐛 Troubleshooting

### TypeScript Errors
Run `npm install` first - all dependencies needed!

### Images Not Showing
Make sure images are in `public/assets/img/`

### GitHub API Rate Limit
Add `GITHUB_TOKEN` to `.env.local`

### Deployment Failed
Check GitHub Actions tab for error logs

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [GitHub API](https://docs.github.com/en/rest)
- [Deployment Guide](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Update your content
3. ✅ Add your images
4. ✅ Test locally
5. ✅ Deploy!

---

Need help? Check the README-NEXTJS.md for more detailed info!
