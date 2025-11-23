import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="group flex flex-col rounded-xl overflow-hidden bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {course.level && (
            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white">
                {course.level}
            </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{course.category}</span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{course.instructor}</p>
        
        <div className="flex items-center gap-2 mb-4 text-sm">
          <span className="font-bold text-accent">{course.rating}</span>
          <div className="flex text-accent">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined !text-lg">
                    {star <= Math.round(course.rating) ? 'star' : 'star_border'}
                </span>
            ))}
          </div>
          <span className="text-gray-500 dark:text-gray-400">({course.reviewCount.toLocaleString()})</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {course.price === 0 ? <span className="text-green-500">Free</span> : `$${course.price}`}
          </p>
          {course.originalPrice && (
            <p className="text-sm text-gray-400 line-through">${course.originalPrice}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;