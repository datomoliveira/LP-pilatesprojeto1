/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useLayoutEffect, useMemo, Suspense, lazy } from 'react';
import { CircleDot, Menu, ChevronDown, X, ArrowRight, Instagram, Share2, Mail, Play, MapPin, Phone, Clock, ChevronLeft, ChevronRight, Quote, ArrowUp, Activity, TrendingUp, Heart, Zap, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import siteConfig from './config/site.json';

const Particles = lazy(() => import('./components/ParticlesWrapper'));


gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-1 md:py-1.5 md:px-12 bg-transparent backdrop-blur-md">
        <div className="flex items-center gap-3 relative z-50">
          <div className="size-8 md:size-10 text-slate-100 rounded-full overflow-hidden border border-white/20 bg-black flex-shrink-0 flex items-center justify-center">
            <Activity className="w-5 h-5 text-slate-100" />
          </div>
          <h2 className="text-slate-100 text-lg md:text-xl font-bold leading-tight tracking-widest uppercase font-display">
            {siteConfig.brand.name}
          </h2>
        </div>
        <div className="flex items-center gap-8 relative z-50">
          <nav className="hidden md:flex items-center gap-10">
            <div className="relative group">
              <a href="#metodo" className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer flex items-center gap-1" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'metodo' } })); }}>
                MODALIDADES <ChevronDown className="w-4 h-4" />
              </a>
              <div className="absolute top-full left-0 mt-4 w-60 bg-[#1a1a1a] backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-3 shadow-2xl z-50">
                {siteConfig.classes.cards.map((card, idx) => (
                  <a key={idx} href="#metodo" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'metodo' } })); }} className="px-5 py-2.5 text-slate-300 text-xs font-semibold hover:text-white hover:bg-white/10 transition-colors cursor-pointer tracking-wide">{card.title}</a>
                ))}
              </div>
            </div>
            <a href="#online" className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-pilates-modal')); }}>PILATES ONLINE</a>
            <a href="#estudio" className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'estudio' } })); }}>ESTÚDIO</a>
            <a href="#instrutores" className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'instrutores' } })); }}>PROFISSIONAIS</a>
            <a href="#depoimentos" className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'depoimentos' } })); }}>DEPOIMENTOS</a>
            <a href="#contato" className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'contato' } })); }}>CONTATO</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-full border border-slate-100/20 hover:bg-slate-100/10 transition-all md:hidden"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-100" /> : <Menu className="w-5 h-5 text-slate-100" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#121212] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#metodo" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'metodo' } })); }} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer">MODALIDADES</a>
            <a href="#online" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-pilates-modal')); }} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer">PILATES ONLINE</a>
            <a href="#estudio" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'estudio' } })); }} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer">ESTÚDIO</a>
            <a href="#instrutores" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'instrutores' } })); }} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer">INSTRUTORES</a>
            <a href="#depoimentos" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'depoimentos' } })); }} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer">DEPOIMENTOS</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: { targetId: 'contato' } })); }} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors cursor-pointer">CONTATO</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const loadImages = async () => {
      // If we have a custom static hero image, don't load the sequence
      if (siteConfig.hero.backgroundImage && !siteConfig.hero.backgroundImage.includes('sequence')) {
        return;
      }

      const loadedImages: HTMLImageElement[] = [];
      const count = isMobile ? 66 : 82;
      const pathPrefix = isMobile ? '/images/hero_mobile/202603221804_' : '/images/hero/Woman_performin_';

      // Load first image immediately for LCP
      const firstImg = new Image();
      firstImg.src = `${pathPrefix}000.webp`;
      await new Promise((resolve) => {
        firstImg.onload = resolve;
      });
      if (isCancelled) return;
      loadedImages.push(firstImg);
      setImages([...loadedImages]);

      // Use RequestIdleCallback or timeout to load the rest without blocking
      const loadRest = async () => {
        for (let i = 1; i < count; i++) {
          if (isCancelled) break;
          const img = new Image();
          const frameNum = String(i).padStart(3, '0');
          img.src = `${pathPrefix}${frameNum}.webp`;
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          loadedImages.push(img);
          if (i % 10 === 0 || i === count - 1) {
            setImages([...loadedImages]);
          }
        }
      };

      // Delay loading remaining frames to prioritize initial render
      setTimeout(loadRest, 1000);
    };

    loadImages();
    return () => { isCancelled = true; };
  }, [isMobile]);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (index: number) => {
      if (!images[index]) return;
      const img = images[index];
      
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      canvas.width = winW;
      canvas.height = winH;

      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      const imgRatio = imgW / imgH;
      const canvasRatio = winW / winH;

      let dW, dH, dX, dY;
      if (canvasRatio > imgRatio) {
        dW = winW;
        dH = winW / imgRatio;
        dX = 0;
        dY = (winH - dH) / 2;
      } else {
        dW = winH * imgRatio;
        dH = winH;
        dX = (winW - dW) / 2;
        dY = 0;
      }

      ctx.clearRect(0, 0, winW, winH);
      ctx.drawImage(img, dX, dY, dW, dH);
    };

    render(0);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5, // Suavização extra no Canvas
      onUpdate: (self) => {
        const index = Math.min(images.length - 1, Math.floor(self.progress * images.length));
        render(index);
      }
    });

    const handleResize = () => {
      if (trigger) {
        const index = Math.min(images.length - 1, Math.floor(trigger.progress * images.length));
        render(index);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power3.out" } });

      // Configuração inicial (escondendo)
      if (canvasRef.current) gsap.set(canvasRef.current, { scale: 1.1 });
      gsap.set(titleRef.current, { y: 100, opacity: 0, clipPath: 'inset(0 0 100% 0)' });
      gsap.set([badgeRef.current, subtitleRef.current, buttonsRef.current], { y: 20, opacity: 0 });
      gsap.set(cardRef.current, { y: 50, opacity: 0, rotationX: 10 });

      // @ts-ignore
      tl.to(canvasRef.current, { scale: 1, duration: 2, ease: "power2.out" })
        .to(titleRef.current, {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.2
        }, "-=1.5")
        .to(badgeRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=1.0")
        .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
        .to(buttonsRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .to(cardRef.current, { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-12 lg:pt-0 lg:pb-0" style={{ perspective: "1000px" }}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {siteConfig.hero.backgroundImage && !siteConfig.hero.backgroundImage.includes('sequence') ? (
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url("${isMobile ? (siteConfig.hero.mobileBackgroundImage || siteConfig.instructors.list[0].image) : siteConfig.hero.backgroundImage}")` 
            }}
          ></div>
        ) : (
          <>
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
            {images.length === 0 && (
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${isMobile ? (siteConfig.hero.mobileBackgroundImage || '/images/hero_mobile/202603221804_000.webp') : siteConfig.hero.backgroundImage})` 
                }}
              ></div>
            )}
          </>
        )}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-start gap-12 lg:gap-20 xl:gap-24 mt-16 lg:mt-32">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <div ref={badgeRef} className="mb-4">
            <span className="text-slate-400 text-xs font-bold tracking-[0.5em] uppercase">{siteConfig.brand.badge}</span>
          </div>
          <h1 ref={titleRef} className="text-slate-100 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-8 opacity-90 font-display">
            {siteConfig.hero.titleLine1}<br />{siteConfig.hero.titleLine2}
          </h1>
          <p ref={subtitleRef} className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 italic">
            {siteConfig.hero.subtitle}
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-200 transition-all shadow-xl w-full sm:w-auto text-center">
              {siteConfig.hero.ctaButton1}
            </a>
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 text-slate-100 px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all w-full sm:w-auto">
              <span>{siteConfig.hero.ctaButton2}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Booking Card */}
        <div ref={cardRef} className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden lg:mt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-100 mb-2">{siteConfig.hero.formTitle}</h2>
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome Completo"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
              <input
                type="tel"
                placeholder="Digite seu Telefone"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
              <textarea
                placeholder="Mensagem (Opcional)"
                rows={3}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
              ></textarea>

              <button type="button" className="w-full bg-slate-100 text-black font-bold text-sm rounded-xl py-3 mt-2 hover:bg-slate-200 transition-colors uppercase tracking-wider">
                {siteConfig.hero.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ScientificBenefits />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 lg:hidden">
        <p className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">Role para explorar</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </div>
    </section >
  );
}

function ScientificBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [...siteConfig.floatingStats.left, ...siteConfig.floatingStats.right];
  const iconMap: Record<string, any> = { ArrowUp, TrendingUp, Heart, Activity, Zap };

  return (
    <div ref={sectionRef} className="relative z-10 w-full max-w-7xl px-6 md:px-12 mt-12 pb-12 md:pb-0 lg:pb-16 xl:pb-20 2xl:pb-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const Icon = iconMap[stat.icon] || CircleDot;
          return (
            <div key={idx} ref={el => { cardsRef.current[idx] = el; }} className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/10 transition-colors shadow-2xl">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100/10 flex items-center justify-center mb-1 md:mb-2">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-slate-100" />
              </div>
              <h3 className="text-slate-100 font-bold text-xs md:text-sm tracking-wide leading-tight">{stat.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Title and paragraph reveal
      gsap.fromTo(title1Ref.current,
        { y: 50, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        {
          y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: title1Ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(pRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // --- Interactive 3D Tilt for Features ---
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { transformPerspective: 1000, transformStyle: "preserve-3d" });
        const xTo = gsap.quickTo(card, "rotationY", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(card, "rotationX", { duration: 0.8, ease: "power3" });

        card.addEventListener('mousemove', (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          xTo(x * 30); // 15 degrees max each side
          yTo(-y * 30);
        });
        card.addEventListener('mouseleave', () => {
          xTo(0);
          yTo(0);
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-24 relative z-10 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 ref={title1Ref} className="text-slate-100 text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display leading-[1.1]">
              {siteConfig.features.title}
            </h2>
            <p ref={pRef} className="text-slate-400 text-lg leading-relaxed">
              {siteConfig.features.description}
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.cards.map((card, idx) => (
            <div key={idx} ref={el => { cardsRef.current[idx] = el; }} className="group flex flex-col gap-6 p-1 border-b border-white/5 pb-12">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <div
                  className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${card.image}')` }}
                ></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 text-xl font-bold tracking-tight">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'termos' | 'politica'>('termos');

  const modalContent = {
    termos: {
      title: siteConfig.footer.termsTitle,
      text: siteConfig.footer.termsText
    },
    politica: {
      title: siteConfig.footer.privacyTitle,
      text: siteConfig.footer.privacyText
    }
  };

  return (
    <>
      <footer className="border-t border-white/5 pt-12 pb-48 md:pb-64 px-6 md:px-24 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full overflow-hidden border border-white/20 bg-black flex-shrink-0 flex items-center justify-center">
                <Activity className="w-6 h-6 text-slate-100" />
              </div>
              <h2 className="text-slate-100 text-sm font-bold tracking-widest uppercase">{siteConfig.brand.shortName}</h2>
            </div>
            <div className="flex gap-8">
              {siteConfig.contact.instagramUrl && (
                <a className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer" href={siteConfig.contact.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.contact.youtubeUrl && (
                <a className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer" href={siteConfig.contact.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <Youtube className="w-5 h-5" />
                </a>
              )}
              <button
                className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                aria-label="Compartilhar"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: siteConfig.brand.name,
                      url: window.location.href,
                    }).catch(console.error);
                  }
                }}
              >
                <Share2 className="w-5 h-5" />
              </button>
              <a className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer" href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest text-center md:text-left">
              {siteConfig.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a onClick={(e) => { e.preventDefault(); setModalType('termos'); setIsModalOpen(true); }} href="#termos" className="text-slate-400 hover:text-slate-100 text-xs font-medium uppercase tracking-widest transition-colors hover:underline">{siteConfig.footer.termsTitle}</a>
              <a onClick={(e) => { e.preventDefault(); setModalType('politica'); setIsModalOpen(true); }} href="#politica" className="text-slate-400 hover:text-slate-100 text-xs font-medium uppercase tracking-widest transition-colors hover:underline">{siteConfig.footer.privacyTitle}</a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-white/10 p-8 md:p-12 rounded-3xl max-w-3xl w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-100 transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="size-16 rounded-full overflow-hidden border border-white/20 bg-black flex-shrink-0 mb-6">
                <img src={siteConfig.brand.logoUrl} alt="Logo" width="64" height="64" className="w-full h-full object-cover scale-110" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-100 mb-6">{modalContent[modalType].title}</h2>
              <div
                className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm md:text-base font-light"
                dangerouslySetInnerHTML={{ __html: modalContent[modalType].text }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



function Classes() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current,
        { scale: 0.9, y: 50, opacity: 0 },
        {
          scale: 1, y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // --- Interactive Magnetic Pull for Classes ---
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const xTo = gsap.quickTo(card, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(card, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        card.addEventListener('mousemove', (e: any) => {
          const rect = card.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          xTo((e.clientX - centerX) * 0.15); // Pull 15% towards cursor
          yTo((e.clientY - centerY) * 0.15);
        });
        card.addEventListener('mouseleave', () => {
          xTo(0);
          yTo(0);
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const classes = siteConfig.classes.cards;

  return (
    <section id="metodo" ref={sectionRef} className="py-12 px-6 md:px-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {siteConfig.classes.badge && (
            <span className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase block mb-4">{siteConfig.classes.badge}</span>
          )}
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-secondary font-bold text-slate-100 mb-4 inline-block tracking-wider uppercase">{siteConfig.classes.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <div ref={el => { cardsRef.current[i] = el; }} key={i} className="group relative rounded-3xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px]">
              <img src={cls.image} alt={cls.title} loading="lazy" width="400" height="533" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-2 font-display">{cls.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{cls.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourSpace() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const images = siteConfig.tourSpace.images;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="estudio" className="py-24 px-6 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-32 relative z-20">
        <h2 className="text-4xl md:text-5xl font-secondary font-bold text-slate-100 mb-4 tracking-wider uppercase">{siteConfig.tourSpace.title}</h2>
        {siteConfig.tourSpace.subtitle && (
          <p className="text-slate-400 text-lg uppercase tracking-widest">{siteConfig.tourSpace.subtitle}</p>
        )}
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center min-h-[600px] md:min-h-[650px]">
        {/* Desktop Buttons */}
        <button onClick={prev} className="hidden md:flex absolute left-4 z-40 bg-white/5 hover:bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-md transition-all" aria-label="Imagem anterior">
          <ChevronLeft className="w-6 h-6 text-slate-100" />
        </button>

        <div className="relative w-full h-[650px] flex justify-center items-center overflow-visible" style={{ perspective: "1000px" }}>
          <AnimatePresence>
            {images.map((item, i) => {
              let offset = i - activeIndex;
              if (offset < -2) offset += images.length;
              if (offset > 2) offset -= images.length;

              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);
              const isHidden = absOffset > 2;

              if (isHidden) return null;

              // Circular orbit coords index
              const angle = offset * 40 * (Math.PI / 180); // 40 degrees step
              const radiusX = window.innerWidth < 768 ? 100 : 280;
              const xPos = Math.sin(angle) * radiusX;
              const zPos = Math.cos(angle) * 150; 

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: xPos,
                    z: zPos,
                    scale: isCenter ? 1 : 0.82,
                    rotateY: offset * -15, // rotate inward
                    opacity: isCenter ? 1 : (absOffset === 1 ? 0.5 : 0.1),
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ zIndex: isCenter ? 30 : (absOffset === 1 ? 20 : 10) }}
                  onClick={() => setActiveIndex(i)}
                   className="absolute w-[260px] md:w-[350px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white/5 border border-white/10 will-change-transform"
                >
                  <img src={item.image} alt={item.title} loading="lazy" width="350" height="622" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  <div className={`absolute bottom-6 md:bottom-8 left-6 md:left-8 pointer-events-none transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white text-xl md:text-3xl font-bold font-display drop-shadow-lg leading-tight">
                      {item.title}<br /><span className="text-sm font-normal font-sans text-slate-300">{item.description}</span>
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Desktop Buttons */}
        <button onClick={next} className="hidden md:flex absolute right-4 z-40 bg-white/5 hover:bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-md transition-all" aria-label="Próxima imagem">
          <ChevronRight className="w-6 h-6 text-slate-100" />
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex items-center justify-center gap-8 mt-12 md:hidden">
        <button onClick={prev} className="p-4 rounded-full bg-white/5 border border-white/20 active:bg-white/10 transition-colors" aria-label="Imagem anterior">
          <ChevronLeft className="w-6 h-6 text-slate-100" />
        </button>
        <button onClick={next} className="p-4 rounded-full bg-white/5 border border-white/20 active:bg-white/10 transition-colors" aria-label="Próxima imagem">
          <ChevronRight className="w-6 h-6 text-slate-100" />
        </button>
      </div>
    </section>
  );
}

function VisitStudio() {
  return (
    <section id="contato" className="py-12 px-6 md:px-24 relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-4">{siteConfig.visitStudio.title}</h2>
          <p className="text-slate-400 text-lg">{siteConfig.visitStudio.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-white/5 border border-white/10">
            <iframe
              src={siteConfig.visitStudio.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do estúdio"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 rounded-full bg-slate-100 text-black font-semibold text-sm">{siteConfig.visitStudio.locationBadge}</button>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-slate-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{siteConfig.visitStudio.studioName}</h3>
                  <p className="text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: siteConfig.visitStudio.addressDetails }}></p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-100 font-medium">{siteConfig.contact.whatsappFormatted} (WhatsApp)</p>
                  {siteConfig.contact.phone2 && (
                    <p className="text-slate-100 font-medium mt-1">{siteConfig.contact.phone2} (Fixo)</p>
                  )}
                </div>
              </div>

              {siteConfig.contact.email && (
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-slate-400 shrink-0" />
                  <div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-100 font-medium hover:underline word-break break-all">{siteConfig.contact.email}</a>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 items-center">
                  <Clock className="w-6 h-6 text-slate-400 shrink-0" />
                  <h3 className="text-xl font-bold text-slate-100">{siteConfig.visitStudio.hoursTitle}</h3>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 w-full max-w-sm">
                  {siteConfig.visitStudio.hoursDetails.split('<br />').map((row: string, idx: number) => {
                     const parts = row.split(':');
                     const day = parts[0];
                     const hour = parts.slice(1).join(':').trim();
                     if (!day) return null;
                     return (
                       <div key={idx} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-b-0 text-sm">
                         <span className="text-slate-400 font-medium">{day}</span>
                         <span className="text-slate-100 font-bold">{hour}</span>
                       </div>
                     );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Instructors() {
  return (
    <section id="instrutores" className="py-12 px-6 md:px-24 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-secondary font-bold text-slate-100 mb-4 tracking-wider uppercase">{siteConfig.instructors.title}</h2>
        <p className="text-slate-400 text-lg">{siteConfig.instructors.subtitle}</p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-24 xl:gap-32 text-center">
        {siteConfig.instructors.list.map((inst, idx) => (
          <div key={idx} className="group max-w-sm w-full">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-xl relative bg-[#1a1a1a] flex items-center justify-center">
              <img src={inst.image} width="400" height="500" className="w-full h-full object-cover transition-all duration-700 object-center group-hover:scale-105" alt={inst.name} />
            </div>
            <h3 className="text-2xl font-bold font-display mt-8 mb-2 text-slate-100 transition-colors group-hover:text-slate-300">{inst.name}</h3>
            <p className="text-slate-400 uppercase text-xs font-bold tracking-[0.2em] mb-4">{inst.role}</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">{inst.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  const testimonials = siteConfig.testimonials.list;

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-12 px-6 md:px-24 relative overflow-hidden z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase block mb-4">{siteConfig.testimonials.badge}</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-4">{siteConfig.testimonials.title}</h2>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto flex items-center justify-center min-h-[500px] md:min-h-[550px]">
        {/* Desktop Buttons */}
        <button onClick={prev} className="hidden md:flex absolute left-4 z-40 bg-white/5 hover:bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-md transition-all" aria-label="Depoimento anterior">
          <ChevronLeft className="w-6 h-6 text-slate-100" />
        </button>

        <div className="relative w-full h-[450px] flex justify-center items-center overflow-visible" style={{ perspective: "1200px" }}>
          <AnimatePresence>
            {testimonials.map((t, i) => {
              let offset = i - activeIndex;
              if (offset < -2) offset += testimonials.length;
              if (offset > 2) offset -= testimonials.length;

              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);
              const isHidden = absOffset > 2;

              if (isHidden) return null;

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: offset * (window.innerWidth < 768 ? 60 : 280),
                    rotateY: offset * -25,
                    scale: isCenter ? 1.1 : (absOffset === 1 ? 0.85 : 0.7),
                    z: isCenter ? 200 : (absOffset === 1 ? 0 : -200),
                    opacity: isCenter ? 1 : (absOffset === 1 ? 0.6 : 0.2),
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  style={{ zIndex: isCenter ? 30 : (absOffset === 1 ? 20 : 10), transformStyle: "preserve-3d" }}
                  onClick={() => setActiveIndex(i)}
                  className="absolute w-[280px] md:w-[380px] aspect-[4/5] md:aspect-square rounded-[2rem] bg-zinc-900/90 backdrop-blur-xl p-8 md:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer will-change-transform"
                >
                  <div className="relative">
                    <div className="text-amber-500 font-serif text-6xl mb-4 leading-none select-none opacity-50">“</div>
                    <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium italic">
                      {t.text}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/5 mt-auto flex flex-col gap-1">
                    <h3 className="text-white font-bold text-sm tracking-widest uppercase">— {t.author}</h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Carousel Dots */}
        <div className="absolute bottom-4 md:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-1 md:w-8 md:h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-amber-500 w-8 md:w-12' : 'bg-white/20'}`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* Desktop Buttons */}
        <button onClick={next} className="hidden md:flex absolute right-4 z-40 bg-white/5 hover:bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-md transition-all" aria-label="Próximo depoimento">
          <ChevronRight className="w-6 h-6 text-slate-100" />
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex items-center justify-center gap-8 mt-12 md:hidden">
        <button onClick={prev} className="p-4 rounded-full bg-white/5 border border-white/20 active:bg-white/10 transition-colors" aria-label="Depoimento anterior">
          <ChevronLeft className="w-6 h-6 text-slate-100" />
        </button>
        <button onClick={next} className="p-4 rounded-full bg-white/5 border border-white/20 active:bg-white/10 transition-colors" aria-label="Próximo depoimento">
          <ChevronRight className="w-6 h-6 text-slate-100" />
        </button>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-12 px-6 z-10 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center justify-center p-2 bg-white/5 border border-white/10 rounded-full mb-2">
          <div className="size-24 rounded-full overflow-hidden border border-white/20 bg-black flex-shrink-0 flex items-center justify-center">
            <Activity className="w-12 h-12 text-slate-100" />
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-100 tracking-tighter">
          {siteConfig.cta.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          {siteConfig.cta.subtitle}
        </p>
        <div className="pt-6">
          <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-100 text-black px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-200 transition-all shadow-xl">
            {siteConfig.cta.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}



// --- Elastic Mouse (Pilates Band Effect) ---
function ElasticMouse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    let anchor: { x: number, y: number } | null = null;
    let isDrawing = false;
    let springValue = 0; // value for the release jiggle

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Ignora o efeito de elástico se o alvo for um botão, link, input ou elemento do formulário
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('form')
      ) {
        return;
      }

      if (anchor) {
        // Segundo clique: solta o elástico
        isDrawing = false;
        // Animate the band snapping back
        gsap.to(window, {
          duration: 1.5,
          springValue: 1,
          ease: "elastic.out(1, 0.3)",
          onUpdate: () => {
            springValue = (gsap.getProperty(window, "springValue") as number) || 0;
          },
          onComplete: () => {
            anchor = null;
          }
        });
      } else {
        // Primeiro clique: fixa a âncora
        anchor = { x: e.clientX, y: e.clientY };
        isDrawing = true;
        springValue = 0;
        gsap.killTweensOf(window, "springValue");
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Always draw a small dot following cursor for general feeling
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = anchor ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.8)';
      ctx.fill();

      // Elastic band drawing
      if (anchor) {
        ctx.beginPath();

        let endX = mouse.x;
        let endY = mouse.y;

        if (!isDrawing) {
          // Snap back logic
          endX = mouse.x + (anchor.x - mouse.x) * springValue;
          endY = mouse.y + (anchor.y - mouse.y) * springValue;
        }

        ctx.moveTo(anchor.x, anchor.y);

        // Simple straight line or slightly curved
        // To make it look like a pilates band, let's draw a thick line
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw anchor point
        ctx.beginPath();
        ctx.arc(anchor.x, anchor.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();

        // Draw pulling point
        ctx.beginPath();
        ctx.arc(endX, endY, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 pointer-events-none z-[100]"
    />
  );
}

// --- Floating Science Stats (Scientific Data) ---
function FloatingScienceStats() {
  const statsLeft = [
    { text: siteConfig.floatingStats.left[0].text, icon: ArrowUp, delay: 0, duration: 55 },
    { text: siteConfig.floatingStats.left[1].text, icon: TrendingUp, delay: 15, duration: 60 },
    { text: siteConfig.floatingStats.left[2].text, icon: Heart, delay: 30, duration: 50 },
  ];

  const statsRight = [
    { text: siteConfig.floatingStats.right[0].text, icon: Activity, delay: 5, duration: 58 },
    { text: siteConfig.floatingStats.right[1].text, icon: Zap, delay: 25, duration: 65 },
    { text: siteConfig.floatingStats.right[2].text, icon: ArrowUp, delay: 35, duration: 52 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Container Left Edge */}
      <div className="absolute top-0 bottom-0 left-2 md:left-8 w-1/4">
        {statsLeft.map((stat, i) => (
          <motion.div
            key={`left-${i}`}
            animate={{
              y: ["110vh", "-20vh"],
              opacity: [0, 0, 0.6, 0.6, 0]
            }}
            transition={{
              y: { duration: stat.duration, repeat: Infinity, ease: "linear", delay: stat.delay },
              opacity: { duration: stat.duration, repeat: Infinity, ease: "easeInOut", delay: stat.delay }
            }}
            className="absolute left-0 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-xl"
            style={{ x: (i % 2 === 0) ? 0 : '10vw' }} // Staggering horizontally slightly
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <stat.icon className="w-3 h-3 text-slate-100" />
            </div>
            <span className="text-white text-[10px] md:text-xs font-bold font-sans uppercase tracking-wider">{stat.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Container Right Edge */}
      <div className="absolute top-0 bottom-0 right-2 md:right-8 w-1/4 flex justify-end">
        {statsRight.map((stat, i) => (
          <motion.div
            key={`right-${i}`}
            animate={{
              y: ["110vh", "-20vh"],
              opacity: [0, 0, 0.6, 0.6, 0]
            }}
            transition={{
              y: { duration: stat.duration, repeat: Infinity, ease: "linear", delay: stat.delay },
              opacity: { duration: stat.duration, repeat: Infinity, ease: "easeInOut", delay: stat.delay }
            }}
            className="absolute right-0 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-xl"
            style={{ x: (i % 2 === 0) ? 0 : '-10vw' }} // Staggering horizontally slightly
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <stat.icon className="w-3 h-3 text-slate-100" />
            </div>
            <span className="text-white text-[10px] md:text-xs font-bold font-sans uppercase tracking-wider">{stat.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- Light Transition Animation (Infinite Loop Border Crossing) ---
function LightTransition() {
  const smokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: CustomEvent) => {
      const { scroll, limit } = e.detail;
      if (limit > 0 && smokeRef.current) {
        let p = 0;
        const threshold = window.innerHeight * 0.05; // 5% height - for a "surprise" glow

        if (scroll > limit - threshold) {
          // Approaching the bottom only
          p = Math.pow(1 - ((limit - scroll) / threshold), 4); // Even sharper curve
        }

        gsap.set(smokeRef.current, { opacity: p });
      }
    };

    window.addEventListener('lenis-scroll', handleScroll as EventListener);
    return () => {
      window.removeEventListener('lenis-scroll', handleScroll as EventListener);
    }
  }, []);

  return (
    <div
      ref={smokeRef}
      className="hidden md:flex fixed inset-0 pointer-events-none z-[300] justify-center items-center overflow-hidden"
      style={{ mixBlendMode: 'screen', opacity: 0 }}
    >
      <div className="absolute w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_60%)] blur-[80px]" />
      <div className="absolute w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_50%)] blur-[40px] translate-y-20 translate-x-20" />
      <div className="absolute w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[60px] -translate-y-20 -translate-x-20" />
    </div>
  );
}

function PilatesOnlineModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-pilates-modal', handleOpen);
    return () => window.removeEventListener('open-pilates-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6" onClick={() => setIsOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold font-display text-white mb-6">Pilates Online</h2>
            <div className="space-y-6 mb-8 text-slate-300">
              <div>
                <h3 className="text-white font-bold mb-2">Como funciona o Pilates Online?</h3>
                <p className="text-sm">Oferecemos aulas ao vivo e personalizadas, onde nossos instrutores acompanham e corrigem seus movimentos em tempo real. Tudo isso no conforto da sua casa, bastando uma conexão com a internet e espaço para um tapete de exercícios.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Funciona mesmo?</h3>
                <p className="text-sm">Sim! O Pilates Mat (solo) é a base de todo o método. Com nossa atenção intensiva e profissional ao vivo, você recruta uma estabilidade profunda, adquirindo os mesmos benefícios de fortalecimento e flexibilidade do estúdio.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Quais materiais eu preciso?</h3>
                <p className="text-sm">Apenas roupas confortáveis, um tapete de exercícios (mat) ou espaço acolchoado, e um dispositivo como celular, tablet ou notebook com câmera. É importante que ele fique posicionado de forma que você e a instrutora possam se ver em tempo real para os ajustes e correções. Nós também iremos orientar sobre qualquer demanda específica ao longo da sua evolução.</p>
              </div>
            </div>
            <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Pilates%20Online!`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-slate-100 text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
              Agendar Aula Online <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- App Root ---
export default function App() {
  // Update SEO Title and Description
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${siteConfig.brand.name} | ${siteConfig.features.title}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.features.description);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // slightly smoother scroll tracking
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: true, // Native smooth infinite scrolling (Efeito Igloo real)
    });

    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: { scroll: e.scroll, limit: e.limit } }));
    });

    const handleNavScroll = (e: CustomEvent) => {
      lenis.scrollTo(`#${e.detail.targetId}`, { offset: -80 });
    };

    window.addEventListener('nav-scroll', handleNavScroll as EventListener);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.removeEventListener('nav-scroll', handleNavScroll as EventListener);
    };
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen text-slate-100 font-sans selection:bg-slate-100 selection:text-black relative overflow-hidden">
      <div className="noise-overlay" />
      <PilatesOnlineModal />
      <LightTransition />
      <ElasticMouse />
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
      <FloatingScienceStats />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Classes />
        <TourSpace />
        <Instructors />
        <Testimonials />
        <CTA />
        <VisitStudio />
      </main>
      <Footer />
    </div>
  );
}
