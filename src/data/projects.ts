// src/data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    liveLink: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Credify",
      description: "AI-driven content verification and anti-forgery platform",
      image: "/projects/credify.png",

      githubLink: "https://github.com/abhisheksharm-3/credify",
      liveLink: "https://credify.fun",
    },
    {
      id: 2,
      title: "MediSage",
      description: "Medical symptom analysis platform with in-depth health insights",
      image: "/projects/medisage.png",
      githubLink: "https://github.com/Garvit-Nag/MediSage",
      liveLink: "https://medi-sage.vercel.app",
    },
    {
      id: 3,
      title: "Revibe",
      description: "A music recommender using clustering to suggest similar songs",
      image: "/projects/revibe.png",
      githubLink: "https://github.com/Garvit-Nag/Revibe-Remastered",
      liveLink: "https://revibe-audio.vercel.app",
    },
    {
      id: 4,
      title: "Cosmic Share",
      description: "A file sharing platform with secure, auto-expiring links",
      image: "/projects/cosmic.png",
      githubLink: "https://github.com/Garvit-Nag/CosmicShare",
      liveLink: "https://cosmic-share.vercel.app",
    },
    {
      id: 5,
      title: "InkLore",
      description: "AI story generator that turns prompts into fun and unique stories",
      image: "/projects/inklore.png",
      githubLink: "https://github.com/Garvit-Nag/InkLore",
      liveLink: "https://ink-lore.vercel.app",
    },
    {
      id: 6,
      title: "SumItUp",
      description: "A tool for summarizing text and documents with customizable summary lengths",
      image: "/projects/sumitup.png",
      githubLink: "https://github.com/Garvit-Nag/SumItUp",
      liveLink: "https://huggingface.co/spaces/garvitcpp/Sum-it-up",
    },
    {
      id: 7,
      title: "PMSSS Portal",
      description: "Platform simplifying PMSSS applications and uploads",
      image: "/projects/pmsss.png",
      githubLink: "https://github.com/binge-coder/pmsss-website",
      liveLink: "https://pramanik.vercel.app",
    },
    {
      id: 8,
      title: "Recipe Rover",
      description: "A platform to discover recipes based on your ingredients",
      image: "/projects/recipe.png",
      githubLink: "https://github.com/Garvit-Nag/RecipeRover-Production",
      liveLink: "https://recipe-rover-fun.vercel.app",
    },
  ];
