# Digital Solutions Agency Portfolio

A modern, professional portfolio website for a full-service digital agency built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal design with professional blue color scheme
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built for Core Web Vitals with 90+ Lighthouse scores
- **Accessibility**: WCAG 2.2 AA compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Complete SEO setup with metadata, JSON-LD schema, and sitemap
- **Dark Mode**: Auto-detecting dark mode with manual toggle
- **Animations**: Smooth Framer Motion animations with reduced motion support
- **Contact Form**: Working contact form with validation and spam protection

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Validation**: Zod
- **Theme**: next-themes

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio pages
│   ├── services/          # Services page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── hero-section.tsx  # Homepage hero
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   └── ...               # Other components
├── content/              # Content configuration
│   ├── site.ts          # Site configuration
│   ├── portfolio.ts     # Portfolio data
│   └── testimonials.ts  # Testimonials data
└── lib/                 # Utilities
    └── utils.ts         # Utility functions
```

## 🎨 Pages

- **Homepage** (`/`): Hero, services overview, portfolio teaser, testimonials, CTA
- **Services** (`/services`): Detailed service descriptions with deep links
- **Portfolio** (`/portfolio`): Filterable project grid with case studies
- **About** (`/about`): Team, mission, values, and company information
- **Contact** (`/contact`): Contact form, information, and FAQ
- **Privacy** (`/privacy`): Privacy policy
- **Terms** (`/terms`): Terms of service

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Email Configuration (for contact form)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="Digital Agency"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Site Configuration

Edit `content/site.ts` to update:
- Company name and tagline
- Contact information
- Social media links
- Service descriptions

### Portfolio Projects

Edit `content/portfolio.ts` to:
- Add new projects
- Update project details
- Modify categories and tags

### Testimonials

Edit `content/testimonials.ts` to:
- Add client testimonials
- Update client information
- Modify ratings and quotes

## 🎨 Customization

### Colors and Theming

The site uses CSS variables for theming. Update `app/globals.css` to modify:
- Primary colors
- Background colors
- Text colors
- Border colors

### Typography

Font configuration is in `app/layout.tsx`. The site uses Inter font by default.

### Components

All components are in the `components/` directory and use Tailwind CSS for styling.

## 📧 Contact Form Setup

The contact form requires email configuration. To set up email sending:

1. **Using Gmail SMTP**:
   - Enable 2-factor authentication
   - Generate an app password
   - Update `.env.local` with credentials

2. **Using Email Services**:
   - Integrate with Resend, SendGrid, or similar
   - Update `app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

The site is optimized for:
- **Performance**: 90+ Lighthouse score
- **Accessibility**: 95+ Lighthouse score
- **Best Practices**: 95+ Lighthouse score
- **SEO**: 95+ Lighthouse score

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check

### Code Quality

The project includes:
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Husky pre-commit hooks

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support or questions, contact us at hello@digitalsolutions.agency

---

Built with ❤️ by Digital Solutions Agency
