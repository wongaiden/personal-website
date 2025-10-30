# 🚀 Deployment Guide - Aiden Wong Portfolio

## Step-by-Step Instructions for Publishing Your Website

### Prerequisites
✅ GitHub account
✅ Node.js installed on your computer
✅ Your custom domain (optional but recommended)

---

## 📋 STEP 1: Initial Setup

1. **Download and extract** the `aiden-wong-portfolio` folder

2. **Open Terminal/Command Prompt** and navigate to the folder:
   ```bash
   cd path/to/aiden-wong-portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Test locally** (optional but recommended):
   ```bash
   npm start
   ```
   Your site will open at http://localhost:3000

---

## 🎨 STEP 2: Customize Your Content

### A. Update Personal Information

Open `src/App.js` and update:
- Your name (appears in 3 places - search for "Aiden Wong")
- Your email address (search for "aiden.wong@email.com")
- Your LinkedIn URL (search for "linkedin.com/in/yourprofile")
- Your GitHub URL (search for "github.com/yourprofile")
- About section text
- Experience array with your actual work history
- Projects array with your actual projects
- Skills array with your actual skills

### B. Add Your Photo

1. Place your photo in the `public/` folder (name it `profile.jpg` or similar)
2. In `src/App.js`, find this comment: `{/* Placeholder for user's photo */}`
3. Replace the entire placeholder div with:
   ```jsx
   <img src="/profile.jpg" alt="Aiden Wong" className="w-full h-full object-cover" />
   ```

### C. Add Company Logos (Optional)

1. Create folder: `public/logos/`
2. Add company logos (e.g., `public/logos/tech-startup.png`)
3. In `src/App.js`, find the logo placeholder comment and replace with:
   ```jsx
   <img src="/logos/tech-startup.png" alt={exp.company} className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-lg mb-3 sm:mb-4" />
   ```

---

## 🌐 STEP 3: Choose Your Deployment Method

### Option A: GitHub Pages (Free, Works with Custom Domain)

#### 3A.1: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click "+" → "New repository"
3. Name it anything (e.g., `portfolio`)
4. Keep it Public
5. Don't initialize with README
6. Click "Create repository"

#### 3A.2: Push Your Code

In your terminal:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username!

#### 3A.3: Deploy to GitHub Pages

```bash
npm run deploy
```

Your site is now live at: `https://YOUR-USERNAME.github.io/portfolio/`

#### 3A.4: Add Custom Domain (Optional)

1. In `package.json`, change:
   ```json
   "homepage": "https://yourdomain.com"
   ```

2. In `public/CNAME`, change the content to:
   ```
   yourdomain.com
   ```

3. Commit and deploy again:
   ```bash
   git add .
   git commit -m "Add custom domain"
   npm run deploy
   ```

4. **Configure your DNS** (in your domain registrar like GoDaddy, Namecheap, etc.):
   
   Add these A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   
   OR add a CNAME record:
   ```
   CNAME → YOUR-USERNAME.github.io
   ```

5. In GitHub repository → Settings → Pages → Custom domain → Enter your domain → Save

**⏱️ Note: DNS changes can take 24-48 hours to propagate**

---

### Option B: Netlify (Easiest, Automatic Deployments)

1. Push your code to GitHub (follow steps 3A.1 and 3A.2 above)

2. Go to https://netlify.com and sign up (free)

3. Click "Add new site" → "Import an existing project"

4. Choose GitHub and authorize Netlify

5. Select your portfolio repository

6. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `build`

7. Click "Deploy site"

8. Your site is live! Netlify gives you a URL like `random-name-123.netlify.app`

9. **To add custom domain:**
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain
   - Follow Netlify's DNS instructions
   - Or just add a CNAME record pointing to your Netlify subdomain

**✨ Bonus: Every git push automatically redeploys your site!**

---

### Option C: Vercel (Similar to Netlify)

1. Push your code to GitHub (follow steps 3A.1 and 3A.2 above)

2. Go to https://vercel.com and sign up (free)

3. Click "Add New" → "Project"

4. Import your GitHub repository

5. Click "Deploy" (it auto-configures everything)

6. Your site is live at `your-project.vercel.app`

7. **To add custom domain:**
   - Go to Project Settings → Domains
   - Add your domain
   - Follow Vercel's DNS instructions

---

## 🔄 STEP 4: Making Updates

After your site is deployed, to make changes:

1. Edit your files locally
2. Test with `npm start`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Deploy:
   - **GitHub Pages**: Run `npm run deploy`
   - **Netlify/Vercel**: Automatic! Just push to GitHub

---

## 🆘 Troubleshooting

### "npm: command not found"
→ Install Node.js from https://nodejs.org

### Site not updating after deploy
→ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### CSS not loading properly
→ Make sure `homepage` in package.json matches your actual domain

### Custom domain not working
→ Wait 24-48 hours for DNS propagation
→ Verify DNS records are correct in your domain registrar

### Build fails
→ Delete `node_modules` and `package-lock.json`
→ Run `npm install` again
→ Try `npm run build` to see specific errors

---

## 📞 Need Help?

1. Check the README.md file for more details
2. Search your error message on Stack Overflow
3. Check GitHub Issues for your deployment platform
4. Review the deployment platform's documentation:
   - GitHub Pages: https://pages.github.com
   - Netlify: https://docs.netlify.com
   - Vercel: https://vercel.com/docs

---

## ✅ Checklist Before Going Live

- [ ] Updated all personal information (name, email, links)
- [ ] Added your photo
- [ ] Updated experience section with your companies
- [ ] Updated projects with your actual projects
- [ ] Updated skills section
- [ ] Tested locally with `npm start`
- [ ] Verified mobile responsiveness
- [ ] Tested both light and dark modes
- [ ] Updated social media links
- [ ] Committed all changes to Git
- [ ] Deployed successfully
- [ ] Custom domain configured (if using one)
- [ ] Tested live site on multiple devices

---

Good luck with your portfolio! 🎉
