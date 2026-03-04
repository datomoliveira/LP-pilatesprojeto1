/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { CircleDot, Menu, X, ArrowRight, Instagram, Share2, Mail, Play, MapPin, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent backdrop-blur-sm">
        <div className="flex items-center gap-3 relative z-50">
          <div className="size-6 text-slate-100">
            <CircleDot className="w-6 h-6" />
          </div>
          <h2 className="text-slate-100 text-xl font-bold leading-tight tracking-widest uppercase font-display">
            Cult Pilates
          </h2>
        </div>
        <div className="flex items-center gap-8 relative z-50">
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors" href="#">Aulas</a>
            <a className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors" href="#">Estúdios</a>
            <a className="text-slate-100 text-xs font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors" href="#">O Método</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-full border border-slate-100/20 hover:bg-slate-100/10 transition-all md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-100" /> : <Menu className="w-5 h-5 text-slate-100" />}
            </button>
            <button className="hidden md:flex items-center justify-center p-2 rounded-full border border-slate-100/20 hover:bg-slate-100/10 transition-all">
              <Menu className="w-5 h-5 text-slate-100" />
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
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors" href="#">Aulas</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors" href="#">Estúdios</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-slate-100 text-2xl font-semibold tracking-widest uppercase hover:text-slate-400 transition-colors" href="#">O Método</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-12 lg:pt-0 lg:pb-0">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-center bg-cover" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB65b-PfNEnO18_KdNKaVr1BKYM-aq79vsYMQjbiKWGRdPxs7zBRHy8fB1CRfyleEZW6hXPhBfqVAIz2lwKP8Gzhwgfhtsgac277L67c3eHfwKsm1OBmzw25HAPBMuluXQgUogdNisZzAUg-E05cwRt4WPrD8_qV7nDcAO8dCZy-I0mbNsy9ggfU52rdlxn-R78PMPML9bgMppG9jpNOn9JoOsmZVelw9UlUjPuqJfr7OkWp8UyBVHMYxCOvs0Z-VGLeRbOeO_C9b1X')" }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10 lg:mt-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <div className="mb-4">
            <span className="text-slate-400 text-xs font-bold tracking-[0.5em] uppercase">Refinamento em Movimento</span>
          </div>
          <h1 className="text-slate-100 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-8 opacity-90 font-display">
            CULT<br/>PILATES
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 italic">
            "Força não é apenas poder, é precisão. Experimente a arte minimalista do Cadillac."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
            <button className="bg-slate-100 text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-200 transition-all shadow-xl w-full sm:w-auto">
              Junte-se ao Movimento
            </button>
            <button className="group flex items-center justify-center gap-3 text-slate-100 px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all w-full sm:w-auto">
              <span>Agende um Estúdio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Booking Card */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-2">Comece Sua Transformação</h2>
                <p className="text-slate-300 text-sm">A partir de R$900 por sessão</p>
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
                <div className="relative">
                  <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-100 appearance-none focus:outline-none focus:border-white/30 transition-colors text-sm">
                    <option value="" disabled selected className="text-slate-500 bg-[#121212]">Escolha sua localização *</option>
                    <option value="sp" className="bg-[#121212]">São Paulo</option>
                    <option value="rj" className="bg-[#121212]">Rio de Janeiro</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <textarea 
                  placeholder="Mensagem (Opcional)" 
                  rows={3}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
                ></textarea>
                
                <button type="button" className="w-full bg-slate-100 text-black font-bold text-sm rounded-xl py-3 mt-2 hover:bg-slate-200 transition-colors uppercase tracking-wider">
                  Solicitar Contato
                </button>
              </form>
            </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 lg:hidden">
        <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">Role para explorar</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </div>
    </main>
  );
}

function Features() {
  return (
    <section className="bg-[#121212] py-24 px-6 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-slate-100 text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">A Arquitetura do Poder</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nossos espaços são projetados para remover distrações. Na Cult Pilates, focamos na interseção entre engenharia física e clareza mental usando os equipamentos mais avançados do mundo.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-slate-500 font-display text-8xl font-black opacity-10 select-none">01</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col gap-6 p-1 border-b border-white/5 pb-12">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <div 
                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg2auW3Zcgj_Ges8_a-tTci75DanLw3LMyWyLrkh51HVlbDrgTCtqMjwxffHe31QZop4U7Jsax1tovNW1Bu47Rw1Rx5_E-t7OAKRwuRTAVDN20UF8fNJU5476_GIsGSru8F9kc-zkaPWpWVYjtVjNy8NarB2f2Ubapc5OJ18o0jsi8g6rLjeoY7t8HKYKPJwgxCE4U88qfoWQRukCPVt2ml-aNPm725tBWnch1DJIMAvz3Dgp_O2dIbs7tO8pcjoqat8Tag_pJFS_B')" }}
              ></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-100 text-xl font-bold tracking-tight">O Reformer</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Projetado para resistência. Criado para transformação. Nossos reformers são ajustados sob medida para cada corpo.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col gap-6 p-1 border-b border-white/5 pb-12">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <div 
                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6gW-HfUPGSmim9qodfCpkg4xI0HIN3tJvE_U_vdplcxDrJjXEBlTHNxRT9lZySDBz-ritzEM-hp09VYS3UX40yhnbyjRa6n16iBU9p9Y1jSXH1P6sFiNmtV3KeHKlf1-pFBf-x4st1BGB9mKCFyIFt-28hsvWA0dTiwgnZZRnWjsf3A0RhVpNy0_sCv-TrPG_EmxO5bNq2L2_Z4PuItLdqnIk3Dg8CjYiaQz8JOo1TSLHANWOgA1cRI4h0F4rFPLZ8MSkfrJ3ipm6')" }}
              ></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-100 text-xl font-bold tracking-tight">A Cadeira</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Compacta. Poderosa. Implacável. Domine a arte do equilíbrio e da força vertical.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col gap-6 p-1 border-b border-white/5 pb-12">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <div 
                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_FWvLzDS_3DC1PVedpInCLvv3u4TDQpKsiTOOTFHEMev_6nDwyfq_h2MQ5_JWYMZOuo43Ud2HlAwu7rJesxN6gplDwEX0fRTDohYUBtRxUvWNCnmAoYhoVPrPl_aHy_J2F1g1kSc12WLGlHeWrrtxl6zOnY9AMAh_3GUNPs9rSLRiZypQ97kCdmwfIgE92ekZeqcUm1aklfYiNykkvL2cTjpWLKBVfxlCaAW4HAkdxq8QDkLqf689nIj4p2zsyt6Gu_BotUhOdoF_')" }}
              ></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-100 text-xl font-bold tracking-tight">O Cadillac</h3>
              <p className="text-slate-400 text-sm leading-relaxed">O ápice do método Pilates. Movimentos que desafiam a gravidade e reconstroem a coluna.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/5 py-12 px-6 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <CircleDot className="w-5 h-5 text-slate-100" />
            <h2 className="text-slate-100 text-sm font-bold tracking-widest uppercase">Cult Pilates</h2>
          </div>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#"><Instagram className="w-5 h-5" /></a>
            <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#"><Share2 className="w-5 h-5" /></a>
            <a className="text-slate-500 hover:text-slate-100 transition-colors" href="#"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest text-center md:text-left">
            © 2024 CULT PILATES BY CULT. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-100 text-xs font-medium uppercase tracking-widest transition-colors">Termos de Uso</a>
            <a href="#" className="text-slate-500 hover:text-slate-100 text-xs font-medium uppercase tracking-widest transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Particles() {
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

    const particles: { x: number, y: number, radius: number, vx: number, vy: number }[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.03;
          p.y -= dy * 0.03;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
}

function Classes() {
  const classes = [
    {
      title: "Reformer Pilates",
      desc: "Treine com suporte e resistência usando reformers.",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Mat Pilates",
      desc: "Construa força e estabilidade com exercícios de peso corporal.",
      img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Wunda Chair Pilates",
      desc: "Desafie sua força e controle usando a cadeira Wunda.",
      img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px]">
              <div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${cls.img})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-2 font-display">{cls.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{cls.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourSpace() {
  return (
    <section className="py-24 px-6 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-4">Conheça nosso Espaço</h2>
        <p className="text-slate-400 text-lg">Experimente nosso estúdio em 3D imersivo.</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto">
        <div className="w-full md:w-1/3 aspect-[4/5] rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800')" }}></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
              <Play className="w-6 h-6 ml-1" />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 aspect-[3/4] md:scale-110 z-10 rounded-3xl overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=800')" }}></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl font-bold text-white mb-1">Sessão de Fluxo Matinal</h3>
            <p className="text-white/80 text-sm">Comece seu dia com movimentos suaves</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 aspect-[4/5] rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800')" }}></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
              <Play className="w-6 h-6 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitStudio() {
  return (
    <section className="py-24 px-6 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-4">Visite Nosso Estúdio</h2>
          <p className="text-slate-400 text-lg">Afastado do barulho. Projetado para harmonia.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-white/5 border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197505068153!2d-46.65882668447573!3d-23.56134956747246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689700000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 rounded-full bg-slate-100 text-black font-semibold text-sm">São Paulo</button>
              <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors font-semibold text-sm">Rio de Janeiro</button>
              <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors font-semibold text-sm">Curitiba</button>
            </div>
            
            <div className="flex flex-col gap-8 mt-4">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-slate-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Estúdio São Paulo</h3>
                  <p className="text-slate-400 leading-relaxed">Av. Paulista, 1000, Conjunto 42<br/>Bela Vista, São Paulo - SP<br/>01310-100</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-100 font-medium">+55 11 99999-9999</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-slate-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Horário do Estúdio</h3>
                  <p className="text-slate-400">Seg - Sex: 06:00 - 21:00<br/>Sáb - Dom: 07:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-slate-100 font-sans selection:bg-slate-100 selection:text-black relative overflow-hidden">
      <Particles />
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <TourSpace />
      <VisitStudio />
      <Footer />
    </div>
  );
}
