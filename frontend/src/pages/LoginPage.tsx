import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Mail, Lock, Eye, EyeOff, ArrowRight,
  Cpu, BarChart2, Target, Check, AlertCircle
} from 'lucide-react';
import { LuminaLogo } from '../components/ui/LuminaLogo';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants';
import { loginUser } from "../services/authservice";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive login/register mode directly from route path
  const isLogin = location.pathname !== ROUTES.REGISTER;

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation & feedback states
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAuthMode = () => {
    setError(null);
    // Push the state to route history so back button works nicely
    navigate(isLogin ? ROUTES.REGISTER : ROUTES.LOGIN);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validations
    if (!email) {
      setError('Email address is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!isLogin && !name) {
      setError('Please enter your full name.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await loginUser(
        email,
        password
      );

      localStorage.setItem(
        "lumina-token",
        data.access_token
      );

      navigate(ROUTES.DASHBOARD);
    } catch {
      setError('Authentication failed. Please verify your credentials and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#09090B] text-zinc-150 selection:bg-purple-500/30 selection:text-white select-none relative">
      {/* Subtle Noise Texture for Premium Feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* ==================================================
          LEFT SIDE (45% width, brand presence)
          ================================================== */}
      <div className="hidden lg:flex w-[45%] bg-[#08080A] border-r border-zinc-900 flex-col p-16 justify-between relative overflow-hidden select-none z-10">

        {/* Soft background ambient purple lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none z-0" />

        {/* 1. Header Branding Block */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 cursor-pointer z-20 hover:opacity-90 transition-opacity self-start"
        >
          <LuminaLogo variant="gradient" size={28} />
          <span className="font-display font-semibold text-base text-white tracking-widest uppercase">
            Lumina
          </span>
        </div>

        {/* 2. Headline Copy */}
        <div className="flex flex-col gap-5 max-w-[440px] my-auto z-20">
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15] m-0">
            Learn Smarter.<br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Achieve More.
            </span>
          </h1>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[15px] font-semibold text-white/90 tracking-wide">
              Your AI-powered learning operating system.
            </span>
            <p className="text-[13px] text-zinc-400/90 leading-relaxed m-0 font-medium max-w-[90%]">
              Your intelligent companion for connected notes, dynamic quizzes, visual roadmaps, and personalized growth.
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="flex flex-col gap-3 mt-6">
            {/* Highlight 1 */}
            <div className="flex items-center gap-5 group cursor-default p-4 rounded-2xl border border-transparent hover:border-white/[0.04] hover:bg-white/[0.01] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] group-hover:bg-white/[0.05] border border-white/[0.05] group-hover:border-white/[0.08] flex items-center justify-center text-purple-400 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500">
                <Cpu className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200 font-bold text-[14px] tracking-tight group-hover:text-white transition-colors">Neural Learning Pathways</span>
                <span className="text-zinc-400/90 text-[12px] font-medium leading-relaxed">AI adapts to your unique knowledge graph.</span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-center gap-5 group cursor-default p-4 rounded-2xl border border-transparent hover:border-white/[0.04] hover:bg-white/[0.01] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] group-hover:bg-white/[0.05] border border-white/[0.05] group-hover:border-white/[0.08] flex items-center justify-center text-indigo-400 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500">
                <BarChart2 className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200 font-bold text-[14px] tracking-tight group-hover:text-white transition-colors">Quantified Progress</span>
                <span className="text-zinc-400/90 text-[12px] font-medium leading-relaxed">Visualize your mastery across disciplines.</span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-center gap-5 group cursor-default p-4 rounded-2xl border border-transparent hover:border-white/[0.04] hover:bg-white/[0.01] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] group-hover:bg-white/[0.05] border border-white/[0.05] group-hover:border-white/[0.08] flex items-center justify-center text-blue-400 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500">
                <Target className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200 font-bold text-[14px] tracking-tight group-hover:text-white transition-colors">Strategic Roadmaps</span>
                <span className="text-zinc-400/90 text-[12px] font-medium leading-relaxed">Step-by-step guidance to achieve your goals.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Elegant Learning Network / Knowledge Graph */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.15]">
          <svg width="100%" height="100%" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="url(#network-gradient)" strokeWidth="1" opacity="0.4">
              <path d="M -100 200 C 150 150 250 400 500 350 C 700 300 850 450 900 500" fill="none" />
              <path d="M 0 600 C 200 650 350 450 600 550 C 750 600 850 800 900 900" fill="none" />
              <path d="M 200 -50 C 150 200 450 400 350 700 C 300 900 400 1050 450 1100" fill="none" />

              {/* Node connections */}
              <line x1="250" y1="310" x2="350" y2="480" />
              <line x1="350" y1="480" x2="500" y2="350" />
              <line x1="500" y1="350" x2="600" y2="550" />
              <line x1="350" y1="480" x2="450" y2="650" />
              <line x1="450" y1="650" x2="600" y2="550" />
            </g>
            <g fill="#ffffff" opacity="0.7">
              {/* Primary Nodes */}
              <circle cx="250" cy="310" r="2.5" />
              <circle cx="350" cy="480" r="3.5" fill="#a855f7" />
              <circle cx="500" cy="350" r="3" fill="#3b82f6" />
              <circle cx="600" cy="550" r="3.5" fill="#818cf8" />
              <circle cx="450" cy="650" r="2.5" />

              {/* Secondary Constellation Nodes */}
              <circle cx="150" cy="220" r="1.5" opacity="0.5" />
              <circle cx="750" cy="400" r="1.5" opacity="0.5" />
              <circle cx="200" cy="620" r="1.5" opacity="0.5" />
              <circle cx="700" cy="750" r="1.5" opacity="0.5" />
              <circle cx="380" cy="250" r="1" opacity="0.3" />
              <circle cx="550" cy="480" r="1" opacity="0.3" />
              <circle cx="300" cy="550" r="1" opacity="0.3" />
            </g>

            <defs>
              <linearGradient id="network-gradient" x1="0" y1="0" x2="800" y2="1000" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>

      {/* ==================================================
          RIGHT SIDE (55% width, centered authentication card)
          ================================================== */}
      <div className="w-full lg:w-[55%] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-[#09090B] z-10">

        {/* Soft ambient lighting behind the login container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

        {/* Auth form card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-[440px] w-full bg-zinc-950/50 p-8 sm:px-12 sm:py-10 rounded-[24px] border border-white/[0.04] shadow-[0_16px_48px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10 backdrop-blur-xl"
        >
          {/* Card Branding header */}
          <div className="flex flex-col items-center mb-10">
            <div
              onClick={() => navigate('/')}
              className="flex items-center gap-2 mb-8 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <LuminaLogo variant="gradient" size={24} />
              <span className="font-display font-bold text-[14px] text-white tracking-[0.2em] uppercase mt-0.5">
                Lumina
              </span>
            </div>

            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-purple-400/90 mb-2.5">
              {isLogin ? 'Welcome Back' : 'Join Lumina'}
            </span>
            <h2 className="text-[26px] font-display font-extrabold text-white tracking-tight leading-tight m-0 text-center">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h2>
            <p className="text-[13px] text-zinc-400 mt-3 font-medium m-0 leading-relaxed text-center">
              {isLogin
                ? 'One step closer to mastery.'
                : 'Your learning journey continues here.'
              }
            </p>
          </div>

          {/* Validation Errors banner */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-6"
              >
                <div className="bg-red-500/10 border border-red-500/25 rounded-xl p-3.5 flex items-start gap-3 text-red-400 text-xs font-semibold leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Form */}
          <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4">

            {/* Full Name input (Sign Up mode only) */}
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-2 mb-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider pl-1">Full Name</label>
                    <div className="border border-white/[0.05] focus-within:border-purple-500/30 bg-white/[0.01] hover:bg-white/[0.02] focus-within:bg-white/[0.03] rounded-xl flex items-center gap-3 px-4 py-3.5 transition-all duration-300 group">
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-600 text-[13px] w-full font-medium"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider pl-1">Email Address</label>
              <div className="border border-white/[0.05] focus-within:border-purple-500/30 bg-white/[0.01] hover:bg-white/[0.02] focus-within:bg-white/[0.03] rounded-xl flex items-center gap-3 px-4 py-3.5 transition-all duration-300 group">
                <Mail className="w-4 h-4 text-zinc-500 group-focus-within:text-purple-400 transition-colors shrink-0" strokeWidth={1.5} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-600 text-[13px] w-full font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider pl-1">Password</label>
              <div className="border border-white/[0.05] focus-within:border-purple-500/30 bg-white/[0.01] hover:bg-white/[0.02] focus-within:bg-white/[0.03] rounded-xl flex items-center gap-3 px-4 py-3.5 transition-all duration-300 group">
                <Lock className="w-4 h-4 text-zinc-500 group-focus-within:text-purple-400 transition-colors shrink-0" strokeWidth={1.5} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-600 text-[13px] w-full font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-500 hover:text-zinc-350 cursor-pointer p-0.5 shrink-0 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" strokeWidth={1.5} /> : <Eye className="w-4 h-4" strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            {/* Options Checkbox & Recover Link (Sign In mode only) */}
            {isLogin && (
              <div className="flex items-center justify-between mt-2 mb-2 px-1">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className="flex items-center gap-2.5 cursor-pointer text-[13px] text-zinc-400 font-medium select-none group"
                >
                  <div className={`w-4 h-4 rounded-[4px] border transition-colors flex items-center justify-center shrink-0
                    ${rememberMe
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'border-zinc-700 bg-zinc-900/50 group-hover:border-zinc-500'
                    }`}
                  >
                    {rememberMe && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                  </div>
                  <span className="group-hover:text-zinc-300 transition-colors">Remember me</span>
                </div>
                <span className="text-[11px] text-purple-400 hover:text-purple-300 font-bold transition-colors cursor-pointer select-none">
                  Forgot password?
                </span>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              className="w-full text-[13px] font-bold py-3.5 mt-2 shadow-lg shadow-purple-500/10 group"
              rightIcon={!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Social login divider */}
          <div className="flex items-center gap-4 my-7 text-[10px] uppercase font-bold text-zinc-500 tracking-widest">
            <div className="h-px bg-white/[0.05] flex-1" />
            <span>or continue with</span>
            <div className="h-px bg-white/[0.05] flex-1" />
          </div>

          {/* Google SSO Button */}
          <button
            onClick={() => {
              setIsSubmitting(true);
              setTimeout(() => {
                localStorage.setItem("lumina-token", response.data.access_token);
                navigate(ROUTES.DASHBOARD);
              }, 1200);
            }}
            className="w-full bg-zinc-900/40 hover:bg-zinc-850/80 border border-white/[0.04] hover:border-white/[0.08] text-zinc-300 hover:text-white font-semibold text-[13px] py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          >
            {/* Vector Google Logo */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Trust Signal */}
          <div className="flex justify-center mt-5 mb-1">
            <span className="text-[11px] text-zinc-500 font-medium tracking-wide">
              Trusted by thousands of learners.
            </span>
          </div>

          {/* Form switch footer */}
          <div className="text-center mt-8 text-[13px] text-zinc-400 font-medium leading-relaxed">
            <span>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <span
              onClick={toggleAuthMode}
              className="text-purple-400 hover:text-purple-300 font-bold transition-colors cursor-pointer ml-1.5"
            >
              {isLogin ? 'Create Account' : 'Sign In'}
            </span>
          </div>

        </motion.div>

        {/* Footer info text */}
        <span className="text-[11px] text-zinc-600 font-medium text-center select-none mt-12 relative z-10">
          © {new Date().getFullYear()} Lumina. All rights reserved.
        </span>

      </div>

    </div>
  );
};
