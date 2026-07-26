export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  readingTime: string;
  coverImage?: string;
  featured?: boolean;
  content: string;
  body?: any;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}
