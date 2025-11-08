# Logan Nitzsche's Portfolio

Modern portfolio website built with Next.js, featuring GitHub API and LinkedIn integration.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Static Site Generation** for optimal performance
- **GitHub API Integration** - Automatically fetches and displays your repositories
- **LinkedIn Integration** - Displays your professional profile
- **Dynamic Project Pages** - Click on any project for detailed information
- **Responsive Design** - Works on all devices
- **SEO Optimized** - Server-side rendering for better search engine visibility
- **GitHub Actions** - Automated deployment to GitHub Pages

## 📦 Tech Stack

- Next.js 14
- TypeScript
- React Bootstrap
- AOS (Animate On Scroll)
- Typed.js
- GitHub API
- LinkedIn API

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Update `.env.local` with your information:

```env
NEXT_PUBLIC_GITHUB_USERNAME=lmnitzsche
```

Optional (for higher GitHub API rate limits):
```env
GITHUB_TOKEN=your_github_personal_access_token
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 4. Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

## 🚢 Deployment to GitHub Pages

The project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Under "Source", select "GitHub Actions"

2. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Initial Next.js setup"
   git push origin main
   ```

3. **GitHub Actions will automatically**:
   - Install dependencies
   - Build your Next.js site
   - Deploy to GitHub Pages

Your site will be live at `https://lmnitzsche.github.io`

## 📝 Customization

### Update Your Information

1. **LinkedIn Profile** - Edit `lib/linkedin.ts`:
   ```typescript
   export const LINKEDIN_PROFILE = {
     profileUrl: 'https://www.linkedin.com/in/your-profile',
     firstName: 'Your',
     lastName: 'Name',
     headline: 'Your Title',
   };
   ```

2. **Resume Content** - Edit `components/Resume.tsx`

3. **About Section** - Edit `components/About.tsx`

4. **Contact Info** - Edit `components/Contact.tsx`

### Add Profile Image

Add your profile image to `/public/assets/img/profile.jpg`

### Customize Styles

- Global styles: `app/globals.css`
- Or migrate your existing styles from `assets/css/main.css`

## 🎨 Migrating Your Existing Styles

You can copy your existing CSS from `assets/css/main.css` to the Next.js project:

1. Copy the contents to `app/globals.css`
2. Or create component-specific CSS modules
3. Images should go in the `public/` directory

## 📱 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── [slug]/
│           └── page.tsx    # Dynamic project pages
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx       # Fetches GitHub repos
│   ├── Resume.tsx
│   └── Contact.tsx
├── lib/
│   ├── github.ts           # GitHub API utilities
│   └── linkedin.ts         # LinkedIn integration
├── public/
│   └── assets/            # Static assets (images, etc.)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

## 🔑 API Keys & Tokens

### GitHub Token (Optional)
For higher API rate limits, create a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select `public_repo` scope
4. Add to `.env.local` as `GITHUB_TOKEN`

### LinkedIn API (Optional)
For full LinkedIn API access:
1. Register app at [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Get Client ID and Secret
3. Add to `.env.local`

## 📄 License

MIT

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!
