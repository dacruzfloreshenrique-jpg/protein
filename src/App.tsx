import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Leaf, ShoppingBag, Calendar, ChefHat, 
  ChevronDown, ArrowRight, Check, X,
  Star, Clock, Target, BookOpen
} from 'lucide-react';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Section wrapper with animation
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// CTA Button Component
function CTAButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={GUMROAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg ${className}`}
    >
      {children}
    </a>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sage-light blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-gold-light blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div variants={fadeInUp} className="text-center lg:text-left">
          {/* Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-muted text-green-deep text-sm font-medium mb-6"
          >
            <Leaf className="w-4 h-4" />
            21-DAY HIGH-PROTEIN MEAL PLAN
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-green-deep leading-tight mb-6"
          >
            Eat Better. Feel More Satisfied. Make Healthy Eating Simpler.
          </motion.h1>

          {/* Supporting text */}
          <motion.p 
            variants={fadeInUp}
            className="text-warm-gray text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            A practical high-protein meal-planning system with easy recipes, grocery lists, meal-prep tools, snack ideas and a 21-day challenge — all in one place.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="mb-4">
            <CTAButton>
              GET THE 21-DAY MEAL PLAN
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </motion.div>

          {/* Secondary text */}
          <motion.p 
            variants={fadeInUp}
            className="text-warm-gray-light text-sm"
          >
            Instant digital access • Easy to follow • Designed for real life
          </motion.p>
        </motion.div>

        {/* Right visual */}
        <motion.div 
          variants={fadeInUp}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://image.qwenlm.ai/generated-images/d7d066d4-2e76-4ee0-aa6b-034f52407567/_result.png"
              alt="21-Day High-Protein Meal Plan - Digital Guide with recipes, grocery lists, and meal prep tools"
              className="w-full h-auto rounded-3xl"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg animate-float hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-muted flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-green-deep" />
              </div>
              <span className="text-sm font-medium text-green-deep">30+ Recipes</span>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg animate-float delay-300 hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold-light/50 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-gold" />
              </div>
              <span className="text-sm font-medium text-green-deep">21 Days</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ TRUST STRIP ============
function TrustStrip() {
  const benefits = [
    { icon: '🥗', label: 'Simple Meals' },
    { icon: '🍳', label: 'High-Protein Recipes' },
    { icon: '🛒', label: 'Easy Grocery Planning' },
    { icon: '📅', label: '21-Day Structure' },
  ];

  return (
    <section className="py-12 px-4 bg-white/60 border-y border-sage-muted/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex flex-col items-center text-center gap-2"
          >
            <span className="text-3xl">{b.icon}</span>
            <span className="font-medium text-green-deep text-sm md:text-base">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ============ PROBLEM SECTION ============
function ProblemSection() {
  const frustrations = [
    "I never know what to cook.",
    "I get hungry between meals.",
    "Meal planning feels overwhelming.",
    "I start strong and lose consistency.",
    "I don't have time for complicated recipes.",
  ];

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep mb-8"
        >
          Healthy eating shouldn't require hours of planning.
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="space-y-4 mb-10"
        >
          {frustrations.map((f, i) => (
            <p key={i} className="text-warm-gray text-lg italic">
              "{f}"
            </p>
          ))}
        </motion.div>

        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl font-medium text-green-deep font-display"
        >
          That's exactly why this meal plan was created.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

// ============ PRODUCT INTRO ============
function ProductIntro() {
  return (
    <AnimatedSection className="py-20 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeInUp} className="order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://image.qwenlm.ai/generated-images/41559abe-d410-4eef-807e-9eb0f7855d8d/_result.png"
              alt="Meal prep with high-protein meals organized in containers"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-green-deep mb-6">
            Your complete high-protein meal-planning toolkit.
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed mb-4">
            The High-Protein Weight Loss Meal Plan is designed to remove the guesswork from everyday meals.
          </p>
          <p className="text-warm-gray text-lg leading-relaxed mb-8">
            Instead of wondering what to eat every day, readers get a structured system they can use to plan, shop, prepare and stay consistent.
          </p>
          <CTAButton>
            GET INSTANT ACCESS
            <ArrowRight className="w-5 h-5" />
          </CTAButton>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ WHAT'S INSIDE ============
function WhatsInside() {
  const features = [
    { icon: <Calendar className="w-6 h-6" />, title: '7-Day High-Protein Meal Plan', desc: 'Breakfast, lunch, snacks and dinner organized for you.' },
    { icon: <ChefHat className="w-6 h-6" />, title: '30 Easy Recipes', desc: 'Simple meals using realistic ingredients.' },
    { icon: <ShoppingBag className="w-6 h-6" />, title: 'Master Grocery List', desc: 'Know what to buy before going to the supermarket.' },
    { icon: <Clock className="w-6 h-6" />, title: '60-Minute Meal Prep System', desc: 'A practical preparation routine for busy weeks.' },
    { icon: <Star className="w-6 h-6" />, title: '20 High-Protein Snack Ideas', desc: 'Sweet and savory options.' },
    { icon: <Leaf className="w-6 h-6" />, title: '15 Emergency Meals', desc: 'Quick ideas for days when you don\'t have time to cook.' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Eating Out Guide', desc: 'Practical strategies for making higher-protein choices outside the home.' },
    { icon: <Target className="w-6 h-6" />, title: '21-Day Challenge', desc: 'One simple action each day to build consistency.' },
    { icon: <Check className="w-6 h-6" />, title: 'Printable Trackers', desc: 'Habit, meal, water and preparation trackers.' },
  ];

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep text-center mb-12"
        >
          What's Inside
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="card-hover bg-white rounded-2xl p-6 border border-sage-muted/30 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-muted flex items-center justify-center text-green-deep mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-green-deep text-lg mb-2">{f.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ PRODUCT PREVIEW ============
function ProductPreview() {
  const previews = [
    { title: '7-Day Meal Plan', img: 'https://image.qwenlm.ai/generated-images/3c02e6a3-6cb3-42b4-9129-55099b49b2d0/_result.png' },
    { title: 'Recipe Cards', img: 'https://image.qwenlm.ai/generated-images/d8a1f9eb-9db9-40f9-a110-739373c6bb1e/_result.png' },
    { title: 'Grocery List', img: 'https://image.qwenlm.ai/generated-images/41559abe-d410-4eef-807e-9eb0f7855d8d/_result.png' },
    { title: '21-Day Challenge', img: 'https://image.qwenlm.ai/generated-images/d7d066d4-2e76-4ee0-aa6b-034f52407567/_result.png' },
  ];

  return (
    <AnimatedSection className="py-20 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep text-center mb-4"
        >
          Everything you need. One simple system.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-warm-gray text-center mb-12 text-lg">
          Preview what's inside the guide
        </motion.p>

        {/* Desktop grid */}
        <motion.div variants={staggerContainer} className="hidden md:grid md:grid-cols-2 gap-6">
          {previews.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="bg-white p-4">
                <p className="font-medium text-green-deep">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto scroll-snap-x pb-4 -mx-4 px-4">
          {previews.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="bg-white p-4">
                <p className="font-medium text-green-deep text-sm">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ============ BONUS SECTION ============
function BonusSection() {
  const bonuses = [
    { num: '01', title: '50 High-Protein Food Swaps', desc: 'Simple substitutions to boost protein in any meal.' },
    { num: '02', title: '20 High-Protein Emergency Meals', desc: 'Quick go-to meals for busy days.' },
    { num: '03', title: '7-Day Meal Prep Blueprint', desc: 'A step-by-step prep guide for the week ahead.' },
  ];

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep text-center mb-4"
        >
          AND YES... THERE'S MORE.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-warm-gray text-center mb-12 text-lg">
          Three bonus resources included with your purchase
        </motion.p>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="card-hover relative bg-gradient-to-br from-green-deep to-green-dark rounded-2xl p-8 text-white overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-5xl font-bold opacity-10 font-display">{b.num}</div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gold-light text-xs font-medium mb-4">
                  BONUS #{b.num}
                </span>
                <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-white/70 text-sm">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const steps = [
    { num: '01', title: 'PLAN', desc: 'Choose your meals and create your grocery list.', icon: <Calendar className="w-8 h-8" /> },
    { num: '02', title: 'PREP', desc: 'Prepare your protein sources and meals ahead of time.', icon: <ChefHat className="w-8 h-8" /> },
    { num: '03', title: 'STAY CONSISTENT', desc: 'Use the 21-day challenge and trackers to keep yourself on track.', icon: <Target className="w-8 h-8" /> },
  ];

  return (
    <AnimatedSection className="py-20 px-4 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep text-center mb-12"
        >
          How It Works
        </motion.h2>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-sage-muted flex items-center justify-center text-green-deep mx-auto mb-4">
                {s.icon}
              </div>
              <span className="text-gold font-bold text-sm">{s.num} —</span>
              <h3 className="font-display text-xl font-bold text-green-deep mb-2">{s.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ WHO IT'S FOR ============
function WhoItsFor() {
  const yesItems = [
    'Want simple meal ideas',
    'Want to include more protein in their meals',
    "Don't have much time to cook",
    'Want better meal organization',
    'Get tired of complicated diets',
    'Want practical tools they can actually use',
    'Prefer progress over perfection',
  ];

  const noItems = [
    'Miracle diets',
    'Extreme calorie restriction',
    'Guaranteed weight-loss promises',
    'Complicated bodybuilding meal plans',
    'Overnight transformations',
  ];

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* For */}
        <motion.div variants={fadeInUp}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-green-deep mb-6">
            Made for real life.
          </h2>
          <p className="text-warm-gray mb-6">This guide is especially useful for people who:</p>
          <div className="space-y-3">
            {yesItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sage-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-deep" />
                </div>
                <span className="text-warm-gray text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Not for */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-display text-xl font-bold text-warm-gray mb-6">
            This isn't designed for people looking for:
          </h3>
          <div className="space-y-3">
            {noItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <span className="text-warm-gray-light text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-xl bg-sage-muted/30 border border-sage-muted/50">
            <p className="text-sm text-warm-gray italic">
              We believe in transparency. This guide provides practical tools and structure — not magic solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ SOCIAL PROOF ============
function SocialProof() {
  return (
    <AnimatedSection className="py-20 px-4 bg-white/40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep mb-8"
        >
          REAL PEOPLE. REAL JOURNEYS.
        </motion.h2>

        <motion.div 
          variants={fadeInUp}
          className="bg-white rounded-2xl p-12 border border-sage-muted/30 shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-sage-muted flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-sage" />
          </div>
          <p className="text-warm-gray text-lg italic font-display">
            "Your experience could be featured here."
          </p>
          <p className="text-warm-gray-light text-sm mt-4">
            Share your journey after trying the meal plan
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ FAQ ============
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Is this a physical book?', a: 'No. It is a digital product that can be accessed online/downloaded through Gumroad.' },
    { q: 'How quickly do I get access?', a: 'Immediately after purchase through Gumroad.' },
    { q: 'Do I need special ingredients?', a: 'No. The plan focuses on practical ingredients commonly available in US supermarkets.' },
    { q: 'Is this a strict diet?', a: 'No. It is a meal-planning and healthy-eating guide designed to provide structure and flexibility.' },
    { q: 'Do I have to follow every meal?', a: 'No. The plan is designed to be flexible and adaptable to individual preferences.' },
    { q: 'Is this medical advice?', a: 'No. It provides general educational information and is not individualized medical or nutritional advice.' },
    { q: 'What if I don\'t eat meat?', a: 'Include vegetarian-friendly alternatives where appropriate.' },
  ];

  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-green-deep text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div variants={staggerContainer} className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-sage-muted/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-green-deep pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-sage flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <p className="px-5 pb-5 text-warm-gray text-sm leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <AnimatedSection className="py-24 px-4 bg-gradient-to-br from-green-deep to-green-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-sage blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gold blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2 
          variants={fadeInUp}
          className="font-display text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Make your next 21 days simpler.
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
        >
          Less guessing. Less meal-planning stress. More structure. More practical choices.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-green-deep font-bold text-lg hover:bg-cream transition-all duration-300 hover:scale-105 shadow-xl"
          >
            GET THE HIGH-PROTEIN MEAL PLAN
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
        <motion.p 
          variants={fadeInUp}
          className="text-white/60 text-sm mt-4"
        >
          Instant digital access
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-sage-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-xl font-semibold text-green-deep mb-1">Ava Brooks</p>
        <p className="text-warm-gray-light text-sm mb-6">Virtual Wellness Creator</p>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="#" className="text-warm-gray text-sm hover:text-green-deep transition-colors">Privacy Policy</a>
          <a href="#" className="text-warm-gray text-sm hover:text-green-deep transition-colors">Terms</a>
          <a href="#" className="text-warm-gray text-sm hover:text-green-deep transition-colors">Contact</a>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-warm-gray-light text-xs leading-relaxed">
            This product provides general educational information and is not medical or individualized nutritional advice. Individual nutritional needs vary.
          </p>
        </div>

        <p className="text-warm-gray-light text-xs mt-6">
          © {new Date().getFullYear()} Ava Brooks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ============ STICKY MOBILE CTA ============
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-cta md:hidden ${visible ? 'visible' : ''}`}>
      <a
        href={GUMROAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-base"
      >
        GET THE MEAL PLAN
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <ProductIntro />
      <WhatsInside />
      <ProductPreview />
      <BonusSection />
      <HowItWorks />
      <WhoItsFor />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
