// src/data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Credify",
      description: "Media attribution and tampering detection system to combat misinformation",
      image: "/projects/credify.jpg",
      technologies: ["React", "Node.js", "TensorFlow", "Web3"],
      githubLink: "https://github.com/yourusername/credify",
      liveLink: "https://credify.fun",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my skills and projects",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.dev",
    },
    {
      id: 3,
      title: "AI Chat App",
      description: "Real-time messaging app with AI conversation enhancement",
      image: "/projects/test.jpeg",
      technologies: ["React", "Firebase", "OpenAI API", "CSS"],
      githubLink: "https://github.com/yourusername/ai-chat",
      liveLink: "https://ai-chat-demo.vercel.app",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Fully-featured online store with user authentication and payment processing",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "MongoDB", "Stripe", "Redux"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://ecommerce-sample.vercel.app",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Interactive weather visualization with forecast predictions",
      image: "/projects/weather.jpg",
      technologies: ["React", "D3.js", "Weather API", "Tailwind"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-viz.netlify.app",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management system with real-time updates",
      image: "/projects/tasks.jpg",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://taskflow-app.herokuapp.com",
    },
    {
      id: 7,
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts and progress",
      image: "/projects/fitness.jpg",
      technologies: ["React Native", "GraphQL", "MongoDB", "Chart.js"],
      githubLink: "https://github.com/yourusername/fitness-tracker",
      liveLink: "https://fit-track-demo.vercel.app",
    },
    {
      id: 8,
      title: "Blog Platform",
      description: "Content management system with markdown support",
      image: "/projects/blog.jpg",
      technologies: ["Gatsby", "Contentful", "GraphQL", "Netlify"],
      githubLink: "https://github.com/yourusername/blog-platform",
      liveLink: "https://tech-blog-example.netlify.app",
    }
  ];