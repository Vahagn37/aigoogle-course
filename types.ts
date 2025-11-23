export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  isFree?: boolean;
  progress?: number; // Only for enrolled courses
  enrolledStudents?: number;
  description?: string;
  curriculum?: Section[];
}

export interface Section {
  title: string;
  lectures: number;
  duration: string;
  items: CurriculumItem[];
}

export interface CurriculumItem {
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz';
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Review {
  id: string;
  user: string;
  userAvatar: string;
  rating: number;
  comment: string;
}