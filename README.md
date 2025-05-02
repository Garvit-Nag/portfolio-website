![portfolio-website](https://socialify.git.ci/Garvit-Nag/portfolio-website/image?font=Source+Code+Pro&language=1&name=1&owner=1&pattern=Brick+Wall&theme=Dark)

# Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Three.js.

## 🌐 Live Website

- Main: [www.garvitnag.in](https://www.garvitnag.in)
- Alternative: [portfolio-website-blush-seven.vercel.app](https://portfolio-website-blush-seven.vercel.app)

## 🚀 Overview

This portfolio website showcases professional experience, projects, and skills using modern web technologies. It features interactive 3D elements, smooth animations, and a responsive design that works across all devices.

## ✨ Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Contact Form**: Integrated with EmailJS for easy communication
- **Modern UI Components**: Leveraging Tailwind CSS for styling

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Text Animation**: [Typewriter Effect](https://github.com/tameemsafi/typewriterjs)

## 📋 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn or pnpm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Garvit-Nag/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   These variables are required for the contact form to work properly. You'll need to create an account on [EmailJS](https://www.emailjs.com/) to get these values.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Project Structure

```
portfolio-website/
├── app/                 # Next.js app directory
├── components/          # React components
├── public/              # Static files
├── styles/              # CSS/Tailwind styles
└── package.json         # Project dependencies
```

**Note**: Don't forget to add the required EmailJS environment variables to your deployment platform.

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 👤 Author

- **Garvit Nag** - [GitHub](https://github.com/Garvit-Nag)

## 📄 License

This project is available for use under the MIT License.

---

Created with ❤️ using Next.js 
