import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CURRENT_USER } from '../constants';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const navigate = useNavigate();

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-gray-200/20 ${transparent ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm' : 'bg-background-light dark:bg-background-dark'} transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
        <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 group">
                <div className="size-8 text-primary group-hover:scale-110 transition-transform">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">CourseHub</h2>
            </Link>
            <div className="hidden md:flex items-center gap-8">
                <Link to="/courses" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Categories</Link>
                <Link to="/courses" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">All Courses</Link>
                <Link to="/dashboard" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">My Dashboard</Link>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <Link to="/login" className="hidden sm:flex h-10 items-center justify-center rounded-lg px-4 text-sm font-bold leading-normal text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                Login
            </Link>
            <Link to="/login" className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-lg shadow-primary/30">
                Sign Up
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;