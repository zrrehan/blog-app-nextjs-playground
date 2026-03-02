export type PostType =  {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: string,
  tags: string[];
  views: number;
  authorId: string;
  createdAt: string; 
  updatedAt: string; 
  _count: {
    comments: number;
  };
};