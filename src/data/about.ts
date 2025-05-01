
export const interests = [
    { name: "Football", icon: "⚽" },
    { name: "Volleyball", icon: "🏐" },
    { name: "Gaming", icon: "🎮" },
    { name: "Trecking", icon: "🥾" },
    { name: "Cinephile", icon: "🎥" },
    { name: "Reading", icon: "📚" },
    { name: "Astronomy", icon: "🔭" },
    { name: "Sketching", icon: "🎨" },
  ];
  
  export const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };