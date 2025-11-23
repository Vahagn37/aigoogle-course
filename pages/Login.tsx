import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark">
        {/* Left Side - Hero Image */}
        <div className="hidden lg:flex w-1/2 relative bg-gray-900 text-white p-12 flex-col justify-end items-start overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9Jp7eHXJ4Tq8gn4uLFgr6tZf4m-3pnWmjoSxL_Fmx6EJtSPO05uHbDteoEzXC3797eXA6GWsm5bMQ9PoP4rnALL42Dqoxl66pwAXpr-lsaS1KgVuJ1T_S4yZUaRS7iNBz7INXwgY-bYtyRTULgnH3hM0VhbiE7afnXZUjJ7A-KeRySLnHsFC_1N0xSqNWmPkvyE3le25iDgzAgSp4eNbrH7EYoSgIuTEB9fCghEbYPXjNCcMq4hsehY3Cz40Zw95G6E_EYdNaNrtJ')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <div className="relative z-20 max-w-lg">
                <Link to="/" className="flex items-center gap-2 mb-8 text-white/90 hover:text-white">
                     <span className="material-symbols-outlined">arrow_back</span> Back to Home
                </Link>
                <h1 className="text-5xl font-black leading-tight mb-4">Unlock Your Potential</h1>
                <p className="text-lg text-gray-300">Access thousands of expert-led courses and build new skills today.</p>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                <div className="text-center lg:text-left mb-8">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Welcome Back!</h2>
                    <p className="text-gray-500 dark:text-gray-400">Log in or create an account to continue.</p>
                </div>

                {/* Toggle */}
                <div className="bg-gray-200 dark:bg-card-dark p-1 rounded-lg flex mb-8">
                    <button className="flex-1 py-2 text-sm font-medium rounded-md bg-white dark:bg-background-dark text-gray-900 dark:text-white shadow-sm">Log In</button>
                    <button className="flex-1 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Create Account</button>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-primary focus:border-primary pr-10"
                                placeholder="Enter your password"
                            />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <span className="material-symbols-outlined text-lg">visibility</span>
                            </button>
                        </div>
                        <div className="flex justify-end mt-2">
                            <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot Password?</a>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/30">
                        Log In
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300 dark:border-gray-700"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-background-light dark:bg-background-dark text-gray-500">OR</span></div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-card-dark text-gray-700 dark:text-gray-200 font-bold">
                    <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    </div>
  );
};

export default Login;