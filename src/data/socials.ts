export interface SocialLink {
    name: string;
    icon: string; // Icon identifier instead of JSX
    url: string;
    color: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/garvit-nag',
      color: 'group-hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/Garvit-Nag',
      color: 'group-hover:text-green-300',
    },
    {
      name: 'Email',
      icon: 'mail',
      url: 'mailto:garvit1505@gmail.com',
      color: 'group-hover:text-red-400',
    },

    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/garwiitt',
      color: 'group-hover:text-purple-400',
    },
  ];
  
  // This function returns specific social links based on provided names
  export function getSelectedSocialLinks(names: string[]): SocialLink[] {
    return socialLinks.filter(link => names.includes(link.name));
  }
  
  // Get the four social links for the contact section
  export function getContactSocialLinks(): SocialLink[] {
    return getSelectedSocialLinks(['LinkedIn', 'GitHub', 'Email', 'Instagram']);
  }