# CAHMGT - Home Health Care Agency

A modern, responsive website for a home health care agency built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
cah-4/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles with Tailwind
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Hero.tsx            # Hero section
│       ├── Services.tsx        # Services overview
│       ├── About.tsx           # About section
│       ├── Testimonials.tsx    # Customer testimonials
│       ├── Process.tsx         # Care process steps
│       ├── Excellence.tsx      # Excellence section
│       ├── CTA.tsx             # Call to action
│       └── Footer.tsx          # Footer with links
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design for healthcare industry
- **Interactive Components**: Carousel testimonials, mobile navigation
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized images and efficient component structure

## 📱 Pages Structure

The website includes sections for:
- Home care services overview
- Individual service pages (Skilled Nursing, Physical Therapy, etc.)
- About us and company information
- Patient testimonials and reviews
- Contact information and consultation booking
- Careers and job opportunities
- Blog and educational resources
- Legal pages (Privacy Policy, Terms of Service)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy from Git

### Static Export
```bash
npm run build
npm run export
```

## 🔧 Customization

### Colors and Theme
Edit `src/app/globals.css` to modify CSS variables:
```css
:root {
  --scheme-background: #ffffff;
  --scheme-text: #1a1a1a;
  --scheme-border: #e5e5e5;
}
```

### Tailwind Configuration
Modify `tailwind.config.js` to add custom colors, fonts, and utilities.

### Content Updates
Edit component files in `src/components/` to update text, images, and links.

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
