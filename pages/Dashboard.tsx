import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES, CURRENT_USER } from '../constants';

const Dashboard: React.FC = () => {
  // Filter courses that have progress (simulating enrollment)
  const myCourses = COURSES.filter(c => c.progress !== undefined);

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
        
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#191e2b]">
            <div className="p-6">
                <Link to="/" className="flex items-center gap-3 text-primary">
                    <div className="size-8">
                         <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">LearnSphere</span>
                </Link>

                <nav className="flex flex-col gap-2 mt-8">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>book</span>
                        <span className="text-sm font-medium">My Courses</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">assignment</span>
                        <span className="text-sm font-medium">Assignments</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">school</span>
                        <span className="text-sm font-medium">Grades</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span className="text-sm font-medium">Calendar</span>
                    </a>
                </nav>
            </div>
            
            <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg mb-2">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text-sm font-medium">Settings</span>
                </a>
                <div className="flex items-center gap-3 p-2 mt-2">
                    <img src={CURRENT_USER.avatar} alt="Avatar" className="w-10 h-10 rounded-full bg-gray-300" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{CURRENT_USER.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Student</span>
                    </div>
                </div>
            </div>
        </aside>

        {/* Main Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
            {/* Top Bar */}
            <header className="flex items-center justify-between px-8 py-4 bg-white dark:bg-[#191e2b] border-b border-gray-200 dark:border-gray-800">
                <div className="flex-1 max-w-lg">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">search</span>
                        <input 
                            type="text" 
                            placeholder="Search for courses..." 
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 ml-4">
                    <button className="p-2 rounded-lg bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <img src={CURRENT_USER.avatar} alt="User" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700" />
                </div>
            </header>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Welcome back, Maria!</h1>
                    <p className="text-gray-500 dark:text-gray-400">Let's continue your learning journey.</p>
                </div>

                <div className="flex flex-col xl:flex-row gap-8">
                    {/* Courses Grid */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                            {myCourses.map(course => (
                                <div key={course.id} className="bg-white dark:bg-[#191e2b] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-4 flex flex-col gap-4">
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1">{course.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor}</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-gray-500 dark:text-gray-400">Progress</span>
                                                <span className="text-primary font-bold">{course.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                <div 
                                                    className="bg-primary h-1.5 rounded-full transition-all duration-1000" 
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <Link to={`/courses/${course.id}`} className="w-full py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold text-center transition-colors">
                                            {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar: Deadlines */}
                    <div className="w-full xl:w-80 shrink-0">
                        <div className="bg-white dark:bg-[#191e2b] border border-gray-200 dark:border-gray-800 rounded-xl p-6 sticky top-0">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-lg">edit_document</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">UX Case Study</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Due: Oct 28, 2024</p>
                                        <p className="text-xs font-medium text-red-500 mt-0.5">Due in 3 days</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-lg">quiz</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">CSS Animation Quiz</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Due: Nov 02, 2024</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-lg">code</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">React Project</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Due: Nov 15, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default Dashboard;