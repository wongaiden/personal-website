# Aiden Wong - Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS. Features a clean Apple-inspired design with dark mode support and smooth animations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/aiden-wong-portfolio.git
cd aiden-wong-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

## 🎨 Customization

### Update Your Information

1. **Personal Details** - Edit `src/App.js`:
   - Update your name, title, and bio in the About section
   - Change email/social media links in the Contact section

2. **Add Your Photo**:
   - Place your photo in `public/` folder (e.g., `public/profile.jpg`)
   - In `src/App.js`, replace the photo placeholder div with:
   ```jsx
   <img src="/profile.jpg" alt="Aiden Wong" className="w-full h-full object-cover" />
   ```

3. **Update Experience**:
   - Edit the experience array in `src/App.js` with your actual companies and achievements
   - Add company logos to `public/logos/` folder
   - Replace logo placeholders with:
   ```jsx
   <img src="/logos/company-logo.png" alt={exp.company} className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-lg mb-3 sm:mb-4" />
   ```

4. **Update Projects**:
   - Modify the `projects` array in `src/App.js` with your actual projects

5. **Update Skills**:
   - Edit the `skills` array and tech stack list in `src/App.js`

### Change Domain

In `package.json`, update the `homepage` field:
```json
"homepage": "https://yourdomain.com"
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment Options

### Option 1: GitHub Pages with Custom Domain

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` homepage with your custom domain:
```json
"homepage": "https://yourdomain.com"
```

3. Deploy:
```bash
npm run deploy
```

4. In your GitHub repository settings:
   - Go to Settings > Pages
   - Set source to `gh-pages` branch
   - Add your custom domain in the "Custom domain" field

5. Configure your DNS:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

6. Create a `CNAME` file in the `public/` folder with your domain:
```
yourdomain.com
```

### Option 2: Netlify (Easiest)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Add your custom domain in Netlify settings

### Option 3: Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy (it auto-detects React)
5. Add your custom domain in project settings

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode toggle
- 🎨 Apple-inspired design
- ⚡ Smooth animations and transitions
- 📊 Interactive skill bars
- 💼 Expandable experience cards
- 🎯 SEO-friendly
- ⚡ Fast performance

## 🛠️ Tech Stack

- React 18
- Tailwind CSS
- Lucide React (icons)
- Create React App

## 📄 License

Feel free to use this template for your own portfolio!

## 🤝 Support

If you have any questions or run into issues, feel free to open an issue on GitHub.

---

Built with ❤️ by Aiden Wong
