#!/bin/bash

# Next.js Portfolio Setup Script

echo "🚀 Setting up your Next.js Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create public assets directories if they don't exist
echo "📁 Creating asset directories..."
mkdir -p public/assets/img
mkdir -p public/assets/css
mkdir -p public/assets/js

# Copy existing images if they exist
if [ -d "assets/img" ]; then
  echo "📋 Copying existing images..."
  cp -r assets/img/* public/assets/img/ 2>/dev/null || true
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Update your information:"
echo "   - Edit lib/linkedin.ts with your LinkedIn profile"
echo "   - Edit components/Resume.tsx with your experience"
echo "   - Edit components/About.tsx with your bio"
echo "   - Edit components/Contact.tsx with your contact info"
echo ""
echo "2. Add your images:"
echo "   - Add profile photo to public/assets/img/profile.jpg"
echo "   - Add hero background to public/assets/img/hero-bg.jpg"
echo ""
echo "3. Test locally:"
echo "   npm run dev"
echo "   Open http://localhost:3000"
echo ""
echo "4. Deploy to GitHub Pages:"
echo "   - Enable GitHub Pages in your repo settings"
echo "   - Select 'GitHub Actions' as the source"
echo "   - Push to main branch: git push origin main"
echo ""
echo "📚 See README-NEXTJS.md for full documentation"
echo ""
