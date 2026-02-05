export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface SectionProps {
  id?: string;
  className?: string;
}
