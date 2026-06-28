import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, MessageSquare, HelpCircle, FileText, Compass, 
  Code, BarChart2, Star, Play, ArrowRight, Zap, 
  Award, Clock, Check, Cpu, Menu, X, ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassPanel } from '../components/ui/GlassPanel';
import { Accordion } from '../components/ui/Accordion';
import { DashboardPreview } from '../components/landing/DashboardPreview';
import { HeroMockup } from '../components/landing/HeroMockup';
import { LuminaLogo } from '../components/ui/LuminaLogo';
import { ROUTES } from '../constants';

export const LandingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Features list
  const features = [
    {
      title: 'AI Chat',
      desc: 'Get instant answers, concept analogies, and contextual explanations to anything you\'re studying.',
      icon: MessageSquare,
      color: 'text-purple-400',
    },
    {
      title: 'Quiz Generator',
      desc: 'Generate custom multiple-choice, short-answer, and fill-in-the-blank quizzes instantly.',
      icon: HelpCircle,
      color: 'text-blue-400',
    },
    {
      title: 'Notes Generator',
      desc: 'Transform raw study materials and documents into structured, summarized smart notes.',
      icon: FileText,
      color: 'text-emerald-400',
    },
    {
      title: 'Roadmaps',
      desc: 'Get personalized career path guidelines and subject roadmaps tailored to your pace.',
      icon: Compass,
      color: 'text-orange-400',
    },
    {
      title: 'Code Explainer',
      desc: 'Demystify complex syntax, algorithms, and logical structures with step-by-step traces.',
      icon: Code,
      color: 'text-pink-400',
    },
    {
      title: 'Progress Analytics',
      desc: 'Keep tab of daily study targets, active streak intervals, and overall learning milestones.',
      icon: BarChart2,
      color: 'text-indigo-400',
    },
  ];

  // Why Lumina list
  const whyLumina = [
    { title: 'Personalized Learning', desc: 'Curriculum adapts organically based on study habits and metrics.', icon: Cpu },
    { title: 'Adaptive AI Guidance', desc: 'Contextual feedback pathways that scale dynamically to clear challenges.', icon: Sparkles },
    { title: 'Everything in One Place', desc: 'Consolidate notes, quizzes, roadmaps, and code inside a single workspace.', icon: Zap },
    { title: 'Study Analytics', desc: 'Beautiful data visualization tracking weekly study stats and daily goals.', icon: BarChart2 },
    { title: 'Save Hours Every Week', desc: 'Automate manual summary notes and immediately index source concepts.', icon: Clock },
    { title: 'Designed for Students', desc: 'Spacious, minimal study interface built to protect deep focus cycles.', icon: Award },
  ];

  // Testimonials list
  const testimonials = [
    {
      name: 'Aarav Sharma',
      role: 'Computer Science Student',
      comment: 'Lumina has completely changed how I prepare for exams. The AI notes and custom quizzes save me hours of manual note-taking every single week.',
      avatar: 'AS',
      stars: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Data Science Enthusiast',
      comment: 'The personalized roadmaps kept me structured and consistent. The visual progress indicators actually keep me motivated.',
      avatar: 'SR',
      stars: 5,
    },
    {
      name: 'Rohan Verma',
      role: 'Software Developer',
      comment: 'An incredibly clean learning companion. Minimal, fast, and highly effective for explaining complex code repositories.',
      avatar: 'RV',
      stars: 5,
    },
  ];

  // FAQs list
  const faqs = [
    {
      question: 'What is Lumina?',
      answer: 'Lumina is an AI-powered learning companion designed to streamline how you study. It consolidates notes, roadmaps, quizzes, and code explanation modules into a single unified workspace.',
    },
    {
      question: 'Is Lumina free to use?',
      answer: 'Yes! Our Free Plan includes basic AI Chat, limited quiz generations, and standard notes. You can upgrade to Student Pro to unlock unlimited capabilities.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. You can modify, cancel, or upgrade your subscription plan directly from your settings console at any time with no contracts.',
    },
    {
      question: 'What makes Lumina different from standard AI tools?',
      answer: 'Lumina is built specifically for education. Unlike generic chat interfaces, it tracks your learning streak, saves structured notes, creates progressive roadmaps, and measures your progress index.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-zinc-300 relative overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-200">
      
      {/* Background Lighting Spots (Hero visual depth) */}
      <div className="absolute top-[8%] right-[10%] w-[650px] h-[650px] bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[5%] left-[-5%] w-[450px] h-[450px] bg-gradient-to-tr from-purple-800/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Floating Glass Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-5 left-4 right-4 z-50 max-w-6xl mx-auto rounded-full glass-panel-premium bg-zinc-950/70 p-3 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <LuminaLogo variant="gradient" size={24} className="shrink-0" />
            <span className="font-display font-bold text-base text-white tracking-wide">Lumina</span>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-zinc-400">
            <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors cursor-pointer">Features</button>
            <button onClick={() => scrollToSection('dashboard-preview')} className="hover:text-white transition-colors cursor-pointer">Dashboard</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors cursor-pointer">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link to={ROUTES.LOGIN}>
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white text-xs font-semibold">Log In</Button>
            </Link>
            <Link to={ROUTES.REGISTER}>
              <Button variant="primary" size="sm" className="px-5 text-xs font-bold shadow-lg shadow-purple-500/10">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-zinc-400 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 border-t border-white/5 pt-3 px-4 flex flex-col gap-4 text-sm text-zinc-400 font-semibold"
            >
              <button onClick={() => scrollToSection('features')} className="text-left py-1 hover:text-white">Features</button>
              <button onClick={() => scrollToSection('dashboard-preview')} className="text-left py-1 hover:text-white">Dashboard</button>
              <button onClick={() => scrollToSection('pricing')} className="text-left py-1 hover:text-white">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left py-1 hover:text-white">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-1 hover:text-white">FAQ</button>
              <div className="border-t border-white/5 pt-3 pb-1 flex flex-col gap-2">
                <Link to={ROUTES.LOGIN} className="w-full">
                  <Button variant="outline" size="sm" className="w-full">Log In</Button>
                </Link>
                <Link to={ROUTES.REGISTER} className="w-full">
                  <Button variant="primary" size="sm" className="w-full">Get Started Free</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section (Large Spacing) */}
      <section className="pt-44 pb-36 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        {/* Left Headline Column (40% width) */}
        <div className="w-full lg:w-[40%] flex flex-col text-center lg:text-left gap-7 max-w-lg shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[11px] font-bold self-center lg:self-start select-none tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" strokeWidth={1.5} />
            <span>AI-Powered Learning Companion</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] m-0"
          >
            Turn Your Learning<br />
            Into <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Intelligent Progress.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed m-0 max-w-lg mx-auto lg:mx-0"
          >
            Learn faster with AI-generated notes, quizzes, personalized roadmaps, code explanations and adaptive study guidance—all inside one intelligent workspace.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <Link to={ROUTES.DASHBOARD} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-3 text-sm shadow-lg shadow-purple-500/10 font-bold" rightIcon={<ArrowRight className="w-4 h-4" strokeWidth={1.5} />}>
                Get Started Free
              </Button>
            </Link>
            <button onClick={() => scrollToSection('dashboard-preview')} className="w-full sm:w-auto cursor-pointer">
              <Button variant="glass" size="lg" className="w-full sm:w-auto px-7 py-3 text-sm border-white/5 hover:border-white/10 font-bold" leftIcon={<Play className="w-4 h-4 fill-current" />}>
                Watch Demo
              </Button>
            </button>
          </motion.div>

          {/* Social proof trust metric */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center lg:justify-start text-left border-t border-white/5 pt-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-7 h-7 rounded-full bg-zinc-900 border-2 border-bg-dark flex items-center justify-center text-[9px] font-bold text-zinc-500 select-none font-mono"
                >
                  JD
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5 text-orange-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-current" strokeWidth={1.2} />)}
              </div>
              <span className="text-[11px] text-zinc-500 mt-1 font-medium tracking-wide">
                Trusted by 5,000+ students building careers in AI & CS.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Preview Column (60% width - Desktop-optimised 16:9 ratio centerpiece) */}
        <div className="w-full lg:w-[60%] relative perspective-[1000px] z-10 flex justify-center">
          <motion.div
            initial={{ rotateX: 6, rotateY: -8, rotateZ: 2 }}
            whileHover={{ rotateX: 0, rotateY: 0, rotateZ: 0, y: -4 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="w-full origin-center"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </section>

      {/* Trusted Metrics Row (Medium Spacing & layered glass shadow depth) */}
      <section className="py-16 border-t border-b border-white/5 bg-zinc-950/15 px-6 shadow-2xl relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-1.5 shrink-0 max-w-xs">
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest font-display">Lumina Metrics</span>
            <h3 className="text-xl font-bold text-white tracking-tight m-0">Trusted by 5,000+ active learners worldwide</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1 max-w-3xl">
            {[
              { val: '120k+', label: 'AI Conversations' },
              { val: '40k+', label: 'Quizzes Generated' },
              { val: '18k+', label: 'Study Roadmaps' },
              { val: '95%', label: 'Student Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="glass-panel-premium p-5 text-center rounded-xl flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold text-white block tracking-tight">{stat.val}</span>
                <span className="text-[9px] text-zinc-500 mt-2 block font-bold uppercase tracking-widest leading-none">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section (Large Spacing) */}
      <section id="features" className="py-36 px-6 max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-2.5 max-w-xl mx-auto">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">Features</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-snug m-0">
            Everything You Need To Learn Smarter.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="h-full"
            >
              <GlassPanel 
                spotlight 
                className="h-full flex flex-col gap-5 border-white/5 bg-zinc-950/20 glass-panel-premium-hover hover:border-purple-500/10 hover:bg-white/5 p-8 rounded-2xl"
              >
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl w-fit text-zinc-400">
                  <feat.icon className={`w-5 h-5 ${feat.color}`} strokeWidth={1.2} />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-bold text-white tracking-tight m-0">{feat.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed m-0 font-medium">{feat.desc}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Timeline Flow (Medium Spacing & backdrop panels) */}
      <section className="py-24 border-t border-b border-white/5 bg-zinc-950/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <div className="text-center flex flex-col gap-2.5 max-w-xl mx-auto">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight m-0">
              Simple Steps, Powerful Results.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed m-0 font-medium">
              Lumina translates complex workflows into clean, personalized milestones.
            </p>
          </div>

          {/* Timeline Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 relative">
            
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center gap-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950/80 border border-white/5 flex items-center justify-center shadow-2xl relative">
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 font-mono text-[9px] font-bold">01</span>
                <MessageSquare className="w-6 h-6 text-purple-400 animate-pulse" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col gap-1.5 max-w-xs">
                <h4 className="text-base font-bold text-white tracking-tight m-0">Ask</h4>
                <p className="text-xs text-zinc-400 leading-relaxed m-0 font-medium">Ask study questions, load files, or import curriculum links into the dashboard workspace.</p>
              </div>
            </div>

            {/* Dotted Bridge 1 */}
            <div className="hidden md:block h-px border-t border-dashed border-zinc-800 flex-1 mx-2" />

            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center gap-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950/80 border border-white/5 flex items-center justify-center shadow-2xl relative">
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 font-mono text-[9px] font-bold">02</span>
                <Sparkles className="w-6 h-6 text-indigo-400" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col gap-1.5 max-w-xs">
                <h4 className="text-base font-bold text-white tracking-tight m-0">Generate</h4>
                <p className="text-xs text-zinc-400 leading-relaxed m-0 font-medium">Lumina immediately compiles context, generating study roadmaps, custom quizzes, and notes.</p>
              </div>
            </div>

            {/* Dotted Bridge 2 */}
            <div className="hidden md:block h-px border-t border-dashed border-zinc-800 flex-1 mx-2" />

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center gap-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950/80 border border-white/5 flex items-center justify-center shadow-2xl relative">
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 font-mono text-[9px] font-bold">03</span>
                <Award className="w-6 h-6 text-emerald-400" strokeWidth={1.2} />
              </div>
              <div className="flex flex-col gap-1.5 max-w-xs">
                <h4 className="text-base font-bold text-white tracking-tight m-0">Master</h4>
                <p className="text-xs text-zinc-400 leading-relaxed m-0 font-medium">Ace concept metrics, review interactive flashcard cards, and track active streaks.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dashboard Preview Section (Large Spacing) */}
      <section id="dashboard-preview" className="py-36 px-6 max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-2.5 max-w-xl mx-auto">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">The Workspace</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight m-0">
            One Workspace. Infinite Possibilities.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 m-0 font-medium">
            Lumina consolidates your tools into a single desktop application. Experience the clean desktop environment built with glass panels and glowing accents.
          </p>
        </div>

        {/* Large static desktop showcase of the dashboard preview */}
        <div className="w-full relative rounded-xl border border-white/5 overflow-hidden p-6 md:p-10 bg-zinc-950/20">
          {/* Subtle accent glow behind */}
          <div className="absolute top-[20%] left-1/3 w-[600px] h-[300px] bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 blur-3xl -z-10" />
          <DashboardPreview />
        </div>
      </section>

      {/* Why Lumina Grid Section (Medium Spacing & backdrop panel) */}
      <section className="py-24 border-t border-b border-white/5 bg-zinc-950/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-2.5 max-w-xl mx-auto">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight m-0">
              Why Learn With Lumina
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyLumina.map((item, idx) => (
              <GlassPanel key={idx} interactive className="flex flex-col gap-4 border-white/5 bg-zinc-950/20 glass-panel-premium-hover p-6 rounded-2xl">
                <div className="p-2 bg-purple-500/5 border border-purple-500/10 rounded-lg text-purple-400 w-fit">
                  <item.icon className="w-4 h-4" strokeWidth={1.2} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-sm font-bold text-white tracking-tight m-0">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed m-0 font-medium">{item.desc}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials (Large Spacing) */}
      <section id="testimonials" className="py-36 px-6 max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-2.5 max-w-xl mx-auto">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight m-0">
            Loved By Learners Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="glass-panel-premium p-7 rounded-2xl flex flex-col justify-between gap-8 border-white/5">
              <div className="flex flex-col gap-4">
                {/* Rating stars */}
                <div className="flex gap-0.5 text-orange-400">
                  {Array.from({ length: test.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={1.2} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed m-0 italic font-medium">
                  "{test.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300 font-mono">
                  {test.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-200">{test.name}</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing plans (Medium Spacing & backdrop panel) */}
      <section id="pricing" className="py-24 border-t border-b border-white/5 bg-zinc-950/10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-2.5 max-w-xl mx-auto">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">Pricing Plans</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight m-0">
              A Plan For Every Goal
            </h2>

            {/* Toggle slider */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className={`text-xs ${billingPeriod === 'monthly' ? 'text-white font-medium' : 'text-zinc-500 font-semibold'}`}>Monthly</span>
              <button 
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="w-9 h-5 rounded-full bg-zinc-850 p-0.5 flex items-center transition-colors cursor-pointer border border-white/5"
              >
                <div className={`w-4 h-4 rounded-full bg-purple-500 transition-transform duration-200
                  ${billingPeriod === 'yearly' ? 'translate-x-4' : 'translate-x-0'}`} 
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-xs ${billingPeriod === 'yearly' ? 'text-white font-medium' : 'text-zinc-500'}`}>Yearly</span>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/25 text-purple-400 text-[9px] font-bold font-mono tracking-wider">
                  Save 20%
                </span>
              </div>
            </div>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Free plan */}
            <div className="glass-panel-premium p-8 rounded-2xl flex flex-col justify-between gap-8 border-white/5 relative bg-zinc-950/30">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base font-bold text-white tracking-tight m-0">Free</h4>
                  <p className="text-xs text-zinc-500 m-0 font-medium">For getting started.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">₹0</span>
                  <span className="text-xs text-zinc-500 font-semibold">/ month</span>
                </div>
                <div className="h-px bg-white/5" />
                <ul className="flex flex-col gap-3.5 text-xs text-zinc-400 pl-0 m-0 list-none font-medium">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>AI Chat (Limited)</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>5 Quizzes / month</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>Standard Notes summary</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>Community Support</span></li>
                </ul>
              </div>
              <Link to={ROUTES.DASHBOARD}>
                <Button variant="outline" size="sm" className="w-full text-xs font-semibold py-2">Get Started</Button>
              </Link>
            </div>

            {/* Student Pro plan (Highlighted) */}
            <div className="glass-panel-premium p-8 rounded-2xl flex flex-col justify-between gap-8 border-purple-500/20 relative bg-zinc-950/65 shadow-2xl" style={{ boxShadow: '0 0 40px -5px rgba(139, 92, 246, 0.15)' }}>
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/35 text-purple-300 text-[9px] uppercase tracking-wider font-bold">
                Most Popular
              </span>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base font-bold text-white tracking-tight m-0">Student Pro</h4>
                  <p className="text-xs text-zinc-400 m-0 font-medium">For serious learners.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {billingPeriod === 'monthly' ? '₹299' : '₹239'}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold">/ month</span>
                </div>
                <div className="h-px bg-white/5" />
                <ul className="flex flex-col gap-3.5 text-xs text-zinc-300 pl-0 m-0 list-none font-medium">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span className="text-zinc-150">Unlimited AI Conversations</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span className="text-zinc-150">Unlimited Quizzes</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span className="text-zinc-150">Unlimited Summarized Notes</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span className="text-zinc-150">Personalized Roadmaps</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span className="text-zinc-150">Priority Server Response</span></li>
                </ul>
              </div>
              <Link to={ROUTES.DASHBOARD}>
                <Button variant="primary" size="sm" className="w-full text-xs font-bold py-2 shadow-lg shadow-purple-500/10">Start 7-Day Free Trial</Button>
              </Link>
            </div>

            {/* Lifetime plan */}
            <div className="glass-panel-premium p-8 rounded-2xl flex flex-col justify-between gap-8 border-white/5 relative bg-zinc-950/30">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base font-bold text-white tracking-tight m-0">Lifetime</h4>
                  <p className="text-xs text-zinc-500 m-0 font-medium">One-time payment.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">₹2999</span>
                  <span className="text-xs text-zinc-500 font-semibold">one-time</span>
                </div>
                <div className="h-px bg-white/5" />
                <ul className="flex flex-col gap-3.5 text-xs text-zinc-400 pl-0 m-0 list-none font-medium">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>Everything in Student Pro</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>Lifetime access</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>Future AI Module updates</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400" strokeWidth={1.5} /> <span>Dedicated Priority Support</span></li>
                </ul>
              </div>
              <Link to={ROUTES.DASHBOARD}>
                <Button variant="outline" size="sm" className="w-full text-xs font-semibold py-2">Get Lifetime Access</Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ & CTA Split Section (Large Spacing) */}
      <section id="faq" className="py-36 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Accordion FAQ (Left) */}
        <div className="flex-1 w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight m-0">Frequently Asked Questions</h2>
          </div>
          <Accordion items={faqs} />
        </div>

        {/* CTA Sidecard (Right) */}
        <div className="w-full lg:w-96 shrink-0 relative self-stretch">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent blur-2xl pointer-events-none -z-10" />
          <GlassPanel glowColor="purple" className="flex flex-col items-center text-center justify-center h-full p-8 border-purple-500/15 glass-panel-premium">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest font-display">Get Started</span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mt-2.5 mb-2.5 m-0 leading-tight">
              Ready to Learn Smarter?
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-8 m-0 max-w-xs font-medium">
              Join the latest learners using AI today to study faster, automate roadmaps, and achieve more.
            </p>
            <Link to={ROUTES.DASHBOARD} className="w-full">
              <Button variant="primary" size="md" className="w-full text-xs font-bold py-2.5 shadow-lg shadow-purple-500/10" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />}>
                Start Free Today
              </Button>
            </Link>
            <span className="text-[10px] text-zinc-500 mt-4 select-none font-semibold">No credit card required.</span>
          </GlassPanel>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <LuminaLogo variant="gradient" size={24} className="shrink-0" />
            <span className="font-display font-bold text-sm text-white tracking-wide">Lumina</span>
          </div>

          <div className="flex gap-6 text-xs text-zinc-500 font-semibold">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-zinc-350 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-zinc-350 transition-colors">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-zinc-350 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-zinc-350 transition-colors">FAQ</button>
          </div>

          <span className="text-xs text-zinc-600 font-medium">
            © 2026 Lumina. All rights reserved.
          </span>
        </div>
      </footer>

    </div>
  );
};
export default LandingPage;
