import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { COURSES, MOCK_CURRICULUM, REVIEWS } from '../constants';

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id) || COURSES[0];
  const [activeTab, setActiveTab] = useState<'desc' | 'req' | 'inst'>('desc');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoD_Z0jNBWYnVI-UzfQ3_Z1zh1VxkPg-uXQltxnc_my1Cx1uUhVBvDD1QOWrnz8Igmt4hhDvMT-1adQqsolhhmj9qjfs2ixfzBNXXgtAFThOMKx7YHU-in4WT4he5JPv-DC7vp5Q_tx0bYd4oPsUvGEeKNtcRFDS53hWDPkgKfmvdchadb4HWVBWaAXSD2rXCadpyFprj8Y8l1sZuobsID1QkdPcOfDPzkTiN-kh3YmDJkOlQL2NjVp0m9Ef6DkSHU9B0Uh47YMrLz" className="w-full h-full object-cover opacity-20" alt="Code Background" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl leading-tight">{course.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">An in-depth course for learning {course.category}, data science, and machine learning. No prior experience required.</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-accent text-lg">{course.rating}</span>
                    <div className="flex text-accent">
                         {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined !text-xl">star</span>
                        ))}
                    </div>
                    <span className="text-gray-400">({course.reviewCount.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">group</span>
                    <span>{course.enrolledStudents?.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">language</span>
                    <span>English</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">update</span>
                    <span>Last updated 10/2024</span>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
                <span className="text-gray-400">Created by</span>
                <a href="#" className="font-bold text-white underline hover:text-primary transition-colors">{course.instructor}</a>
            </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content */}
            <div className="flex-1">
                {/* What you'll learn */}
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-12 bg-white dark:bg-card-dark">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What you'll learn</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Build 10 real-world applications.",
                            "Automate tasks with scripts.",
                            "Understand data structures.",
                            "Master object-oriented concepts.",
                            "Use frameworks efficiently.",
                            "Debug and test code professionally."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Curriculum */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Curriculum</h2>
                    <div className="space-y-4">
                        {MOCK_CURRICULUM.map((section, idx) => (
                            <details key={idx} className="group border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-card-dark overflow-hidden" open={idx === 0}>
                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors list-none select-none">
                                    <div className="flex items-center gap-4">
                                         <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                         <span className="font-bold text-gray-900 dark:text-white text-lg">{section.title}</span>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">{section.lectures} lectures • {section.duration}</span>
                                </summary>
                                <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#11141a]">
                                    {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800/50 last:border-0">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-gray-400">{item.type === 'video' ? 'play_circle' : 'article'}</span>
                                                <span className="text-gray-700 dark:text-gray-300">{item.title}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{item.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-12">
                     <div className="border-b border-gray-200 dark:border-gray-800 flex gap-8 mb-6">
                        <button 
                            onClick={() => setActiveTab('desc')}
                            className={`pb-4 text-lg font-medium transition-colors border-b-2 ${activeTab === 'desc' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'}`}
                        >
                            Description
                        </button>
                         <button 
                            onClick={() => setActiveTab('req')}
                            className={`pb-4 text-lg font-medium transition-colors border-b-2 ${activeTab === 'req' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'}`}
                        >
                            Requirements
                        </button>
                         <button 
                            onClick={() => setActiveTab('inst')}
                            className={`pb-4 text-lg font-medium transition-colors border-b-2 ${activeTab === 'inst' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'}`}
                        >
                            Instructor
                        </button>
                     </div>
                     
                     <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                        {activeTab === 'desc' && (
                            <div>
                                <p className="mb-4">Dive deep into the world of {course.category}, the most popular field in tech today. This comprehensive course is designed for absolute beginners with no prior programming experience, as well as existing professionals who want to level up their skills.</p>
                                <p>We'll start from the absolute basics, covering syntax, data types, and control flow. From there, we'll explore advanced topics like object-oriented programming, decorators, and generators. You'll solidify your learning through hands-on projects, building real-world applications that you can add to your portfolio.</p>
                            </div>
                        )}
                        {activeTab === 'req' && (
                             <ul className="list-disc pl-5 space-y-2">
                                <li>A computer with internet access (Windows, macOS, or Linux).</li>
                                <li>No prior programming experience is required. We start from scratch!</li>
                                <li>A willingness to learn and a can-do attitude.</li>
                            </ul>
                        )}
                        {activeTab === 'inst' && (
                             <div className="flex items-start gap-6">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkz34jV8fX-W1kYcBvwSKHAj1LmZHYkTg8TbQ2etFRpiznQxuX5u6fXGOMdITzEAhnTbTQUTuyKub4HHyEuW4Wo3OYuSlnb8ryvKrMfi82b3lS0yuTiLYtkFGXXnRCsyGlqhmdeyV4a78vcdYXInsCJmSd1ct6Ynjoj5YY-QxZsyRNA6nPunu1qyh097OLOH_WH-8jzFl37rUipB1uex8Y3pVpaafEMqFlmQkq10CTaJ-2IynkpBhp5MRMPJdBSZdJERX146_hRRPO" className="w-24 h-24 rounded-full object-cover" alt="Instructor" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.instructor}</h3>
                                    <p className="text-primary font-medium mb-2">Senior Engineer & Instructor</p>
                                    <p>John is a software engineer with over 15 years of experience building scalable systems for tech giants. He's passionate about teaching and has helped over 200,000 students learn to code.</p>
                                </div>
                             </div>
                        )}
                     </div>
                </div>

                 {/* Reviews */}
                 <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Student Feedback</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {REVIEWS.map(review => (
                             <div key={review.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-card-dark">
                                 <div className="flex items-center gap-4 mb-4">
                                     <img src={review.userAvatar} alt={review.user} className="w-12 h-12 rounded-full object-cover" />
                                     <div>
                                         <p className="font-bold text-gray-900 dark:text-white">{review.user}</p>
                                         <div className="flex text-accent text-sm">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="material-symbols-outlined !text-lg">star</span>
                                            ))}
                                         </div>
                                     </div>
                                 </div>
                                 <p className="text-gray-600 dark:text-gray-300">"{review.comment}"</p>
                             </div>
                        ))}
                    </div>
                 </div>

            </div>

            {/* Right Sidebar (Sticky Enrollment) */}
            <div className="w-full lg:w-[360px] shrink-0">
                <div className="sticky top-24">
                    <div className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-2xl p-1">
                        <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1e7Cniw2reo3QqaH_jAcOTx23nuycNnwp9sHN_ghgYHJHZZeHeJtSE-m2mYv_tW45Zr2kn2H7Z24xPg6bGdeZbvNB3jqZ-37fgsAr3QBpQrLzaBag7JIdPTCTUmPg4Hrkqx0B2J_sJ23uUAoiuEQkjoWdUTByIQsulNgzcDIE5K5yMe1tKaNToCgKxPLQ-Yf0aaB0gX28sHUU0gSEMcozGHzBCxSPcNJDfw7XY6YocdWqWyw_Q_6ED8VFSMi5vUVW-VX73TfuszKE" className="w-full h-full object-cover" alt="Preview" />
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                 <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-black text-4xl ml-1">play_arrow</span>
                                 </div>
                             </div>
                             <div className="absolute bottom-4 left-0 right-0 text-center font-bold text-white drop-shadow-md">Preview this course</div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-3xl font-black text-gray-900 dark:text-white">${course.price}</span>
                                {course.originalPrice && <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>}
                                {course.originalPrice && <span className="text-sm font-bold text-red-500">{(100 - (course.price/course.originalPrice * 100)).toFixed(0)}% Off</span>}
                            </div>

                            <button className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg text-lg mb-3 shadow-lg shadow-primary/25 transition-all hover:translate-y-[-2px]">
                                Enroll Now
                            </button>
                            <button className="w-full py-3.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg text-lg transition-colors">
                                Add to Cart
                            </button>
                            
                            <p className="text-center text-xs text-gray-500 mt-4">30-Day Money-Back Guarantee</p>
                            
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
                                <h4 className="font-bold text-gray-900 dark:text-white">This course includes:</h4>
                                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-400">videocam</span> 30 hours on-demand video</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-400">description</span> 15 articles & resources</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-400">download</span> Downloadable resources</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-400">all_inclusive</span> Full lifetime access</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-400">smartphone</span> Access on mobile and TV</li>
                                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-gray-400">workspace_premium</span> Certificate of completion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;