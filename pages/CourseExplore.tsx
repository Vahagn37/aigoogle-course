import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';

const CourseExplore: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All Levels');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Web Development', 'Marketing']); // Mock initial state

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 lg:block hidden">
                <div className="sticky top-24 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
                        <button className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20">Clear All</button>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Subject</h3>
                        <div className="space-y-3">
                            {['Web Development', 'Data Science', 'Marketing', 'Design', 'Business'].map(subject => (
                                <label key={subject} className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-transparent"
                                        checked={selectedSubjects.includes(subject)}
                                        onChange={() => {}} // Mock
                                    />
                                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">{subject}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Difficulty Level</h3>
                        <div className="space-y-3">
                            {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                                <label key={level} className="flex items-center gap-3 cursor-pointer group">
                                    <input 
                                        type="radio" 
                                        name="difficulty"
                                        className="w-5 h-5 border-gray-300 text-primary focus:ring-primary bg-transparent"
                                        checked={selectedDifficulty === level}
                                        onChange={() => setSelectedDifficulty(level)}
                                    />
                                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Instructor</h3>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-lg">search</span>
                            <input 
                                type="text" 
                                placeholder="Search instructors..." 
                                className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Filter Toggle (Visible only on small screens) */}
            <div className="lg:hidden mb-4">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-lg font-bold text-gray-900 dark:text-white">
                    <span className="material-symbols-outlined">filter_list</span> Filters
                </button>
            </div>

            {/* Course Grid */}
            <section className="flex-1">
                <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Explore All Courses</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Showing 1-6 of 248 results</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Sort by:</span>
                        <select className="form-select text-sm rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white focus:ring-primary focus:border-primary pr-8 py-1.5">
                            <option>Most Popular</option>
                            <option>Newest</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {COURSES.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center -space-x-px rounded-md shadow-sm bg-white dark:bg-card-dark isolate">
                        <button className="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">1</button>
                        <button className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">2</button>
                        <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">3</button>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700">...</span>
                        <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">21</button>
                        <button className="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                             <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseExplore;