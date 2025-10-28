import Upwork from '../../assets/images/logo/upwork_logo.png';

import {
  Github,  
  Mail,
} from 'lucide-react';

export const getIconByTitle = (title = "") => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes('github')) return Github;
  if (lowerTitle.includes('upwork')) return Upwork;
  // if (lowerTitle.includes('phone')) return Phone;
  if (lowerTitle.includes('email') || lowerTitle.includes('mail')) return Mail;
};
