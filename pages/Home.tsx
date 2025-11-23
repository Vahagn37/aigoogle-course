import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { COURSES, REVIEWS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredCourses = COURSES.slice(3, 7); // Taking a subset for the carousel

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar transparent />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-background-light dark:bg-background-dark z-[-2]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/20 dark:to-accent/10 z-[-1]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400">
            Unlock Your Potential.<br />Start Learning Today.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl leading-relaxed">
            Explore thousands of online courses led by industry experts. Master new skills in design, coding, business, and more.
          </p>
          
          <div className="mx-auto mt-10 flex w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark shadow-2xl overflow-hidden p-1">
            <div className="flex flex-1 items-center px-4">
              <span className="material-symbols-outlined text-gray-400">search</span>
              <input 
                className="w-full flex-1 border-0 bg-transparent py-4 pl-3 pr-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:text-white" 
                placeholder="What do you want to learn?" 
                type="text" 
              />
            </div>
            <Link to="/courses" className="flex items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-[1.02]">
              Find Course
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-gray-500 dark:text-gray-400 grayscale opacity-70">
             {/* Mock Logos */}
             <span className="font-bold text-xl">Google</span>
             <span className="font-bold text-xl">Netflix</span>
             <span className="font-bold text-xl">Airbnb</span>
             <span className="font-bold text-xl">Amazon</span>
             <span className="font-bold text-xl">Meta</span>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white dark:bg-[#151921]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Courses Our Students Love</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Highly rated by thousands of students worldwide.</p>
            </div>
            <Link to="/courses" className="hidden sm:flex text-primary font-bold hover:underline items-center gap-1">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x">
             {featuredCourses.map(course => (
                 <div key={course.id} className="min-w-[300px] w-[300px] md:min-w-[340px] snap-center">
                     <CourseCard course={course} />
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">Explore by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
                { icon: 'code', label: 'Dev' },
                { icon: 'business_center', label: 'Business' },
                { icon: 'palette', label: 'Design' },
                { icon: 'trending_up', label: 'Marketing' },
                { icon: 'query_stats', label: 'Data' },
                { icon: 'camera_alt', label: 'Photo' },
                { icon: 'music_note', label: 'Music' },
                { icon: 'fitness_center', label: 'Health' },
            ].map((cat) => (
                <Link to="/courses" key={cat.label} className="group flex flex-col items-center gap-4 rounded-xl bg-white dark:bg-card-dark p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-primary/5 dark:hover:bg-primary/10 border border-transparent hover:border-primary/20">
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{cat.label}</p>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-[#151921]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-16">What Our Learners Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {REVIEWS.concat({id: 'r3', user: "Maria Garcia", userAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_YQ-NzXYFgqGU2TUkRfhTepg6gcgU4riF8JXss9CXwAtkFL7O-6TEKynBMkzATYTXHWnOEXQBjv0Dz1_8Yi7k4o04rpOxIfakOTfYw99_X7Wex-AcKczZkOgqWMA8K7mghy-GfI2qjrfWk-vcifRzWyxFYsCjeMZLxNjPhbCogPHxL1XrUYGKZJhqa8asXRU5yT78RNB4xNBqH5w084N6bpmRMT7rCaTM1v8tIdYk1UIrRBUaWzqI49JnqZyTgiw66wzA5VSjoo2u", rating: 5, comment: "As a complete beginner, I was intimidated. But the clear explanations and supportive instructors made learning to code an enjoyable experience."}).map((review) => (
                 <div key={review.id} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-card-dark p-8 relative">
                     <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
                     <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10">"{review.comment}"</p>
                     <div className="flex items-center gap-4">
                         <img src={review.userAvatar} alt={review.user} className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
                         <div>
                             <p className="font-bold text-gray-900 dark:text-white">{review.user}</p>
                             <div className="flex text-accent text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined !text-sm !font-fill">star</span>
                                ))}
                             </div>
                         </div>
                     </div>
                 </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;