import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Globe2,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['Главная', '#home'],
  ['Услуги', '#services'],
  ['Портфолио', '#portfolio'],
  ['Процесс', '#process'],
  ['Контакты', '#contacts'],
];

const services = [
  {
    icon: Globe2,
    title: 'Лендинги и корпоративные сайты',
    text: 'Продающие сайты, презентации бизнеса, брендовые страницы и корпоративные решения.',
  },
  {
    icon: Bot,
    title: 'Telegram-боты',
    text: 'Боты для продаж, заявок, уведомлений, оплат, поддержки и автоматизации процессов.',
  },
  {
    icon: MessageCircle,
    title: 'Telegram Mini Apps',
    text: 'Интерактивные мини-приложения внутри Telegram: магазины, кабинеты, игры, сервисы и платформы.',
  },
  {
    icon: LayoutDashboard,
    title: 'CRM и админ-панели',
    text: 'Удобные панели управления, CRM-системы, кабинеты сотрудников и инструменты аналитики.',
  },
  {
    icon: Rocket,
    title: 'MVP для стартапов',
    text: 'Быстрый запуск первой версии продукта для проверки идеи, привлечения клиентов и инвестиций.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-интеграции и автоматизация',
    text: 'Подключение AI, чат-ботов, генерации текста, автоматизации рутины и умных бизнес-процессов.',
  },
];

const benefits = [
  ['Премиальный визуал', 'Сильная подача бренда, которая сразу считывается как уровень и доверие.', Sparkles],
  ['Быстрая разработка', 'Движемся короткими итерациями, без лишней бюрократии и потери фокуса.', Zap],
  ['Под ключ от идеи до запуска', 'Структура, дизайн, разработка, интеграции, тестирование и релиз.', ShieldCheck],
  ['Решения под задачу бизнеса', 'Не копируем шаблоны, а собираем продукт вокруг цели, аудитории и продаж.', CheckCircle2],
];

const process = [
  'Заявка и обсуждение идеи',
  'Прототип и структура',
  'Дизайн в премиальном стиле',
  'Разработка и интеграции',
  'Запуск и поддержка',
];

const projects = [
  ['Crypto Landing', 'Финтех-лендинг с графиками, заявками и премиальной подачей продукта.', 'Web / Crypto'],
  ['Telegram Shop Bot', 'Бот-магазин с каталогом, оплатами, уведомлениями и админ-панелью.', 'Telegram'],
  ['CRM Dashboard', 'Система управления клиентами, заявками, ролями и бизнес-метриками.', 'CRM'],
  ['AI Assistant Platform', 'Платформа AI-помощника для обработки запросов и автоматизации рутины.', 'AI'],
  ['Mini App Store', 'Telegram Mini App с витриной, корзиной, профилем и аналитикой.', 'Mini Apps'],
  ['Startup MVP', 'Быстрый запуск первой версии продукта для проверки спроса и гипотез.', 'MVP'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.72, delay, ease: [0.21, 0.8, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-black/45 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-md border border-white/10 bg-white/[0.04] shadow-[0_0_28px_rgba(255,255,255,0.08)]">
            <img src="/extaz-logo.png" alt="Extaz Studio" className="h-full w-full object-cover opacity-90" />
          </span>
          <span className="leading-none">
            <span className="metal-text block text-lg font-semibold tracking-[0.08em]">Extaz</span>
            <span className="block text-[10px] uppercase tracking-[0.42em] text-white/45">studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/62 lg:flex">
          {navItems.map(([label, href]) => (
            <a className="nav-link" href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contacts" className="premium-button hidden lg:inline-flex">
          Обсудить проект <ArrowRight size={17} />
        </a>

        <button className="icon-button inline-flex lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Открыть меню">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mb-5 rounded-md border border-white/10 bg-[#0a0a0a]/95 p-4 shadow-2xl lg:hidden"
        >
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <a className="rounded-md px-3 py-3 text-sm text-white/75 hover:bg-white/[0.06]" href={href} key={label} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#contacts" className="premium-button mt-2 inline-flex justify-center" onClick={() => setOpen(false)}>
              Обсудить проект <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
    >
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <motion.div className="hero-logo-wrap" animate={{ y: [0, -12, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
        <img src="/images/extaz-logo.png" alt="Extaz Studio logo" className="hero-logo-img" />
      </motion.div>
    </motion.div>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </Reveal>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="site-bg" />
      <Header />

      <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
        <Reveal>
          <p className="kicker">Premium IT Development Studio</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Разработка цифровых решений под ключ
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">
            Создаём сайты, Telegram-ботов, Mini Apps, CRM-системы и AI-интеграции для бизнеса, стартапов и личных брендов.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacts" className="premium-button inline-flex justify-center">
              Обсудить проект <ArrowRight size={18} />
            </a>
            <a href="#services" className="ghost-button inline-flex justify-center">
              Смотреть услуги
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {['Sites', 'Bots', 'AI'].map((item, index) => (
              <div className="metric" key={item}>
                <strong>0{index + 1}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <HeroVisual />
      </section>

      <section id="services" className="section">
        <SectionTitle
          kicker="Услуги"
          title="Собираем технологичные продукты, которые выглядят дорого и работают на бизнес"
          text="От первой идеи до запуска: интерфейсы, логика, интеграции, автоматизация и визуальная упаковка уровня premium."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal delay={index * 0.06} key={service.title}>
              <article className="glass-card group h-full p-6">
                <service.icon className="mb-7 h-9 w-9 text-white/78 transition duration-300 group-hover:text-white" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/55">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle kicker="Почему Extaz Studio" title="Строгий визуал, точная логика и продуктовый подход" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(([title, text, Icon], index) => (
            <Reveal delay={index * 0.08} key={title}>
              <article className="benefit-card">
                <Icon className="h-8 w-8 text-white/80" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="section">
        <SectionTitle kicker="Процесс" title="Понятный путь от идеи до работающего продукта" />
        <div className="process-line">
          {process.map((step, index) => (
            <Reveal delay={index * 0.08} key={step}>
              <div className="process-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section">
        <SectionTitle kicker="Портфолио" title="Форматы проектов, в которых особенно сильна студия" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(([title, text, tag], index) => (
            <Reveal delay={index * 0.06} key={title}>
              <article className="project-card group">
                <div className="project-screen">
                  <span className="project-tag">{tag}</span>
                  <div className="mini-dashboard">
                    <i />
                    <i />
                    <i />
                    <b />
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="cta">
            <div>
              <p className="kicker">Старт проекта</p>
              <h2>Готов запустить свой цифровой продукт?</h2>
              <p>Напиши нам — обсудим идею, предложим решение и соберём проект под твои задачи.</p>
            </div>
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="premium-button inline-flex">
              Связаться в Telegram <Send size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/[0.08] px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/55 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="metal-text text-2xl font-semibold">Extaz Studio</h3>
            <p className="mt-3 max-w-md leading-7">Премиальная разработка сайтов, Telegram-продуктов, CRM, MVP и AI-интеграций для бизнеса.</p>
          </div>
          <div>
            <h4 className="footer-title">Услуги</h4>
            <a href="#services">Сайты</a>
            <a href="#services">Telegram-боты</a>
            <a href="#services">AI-интеграции</a>
          </div>
          <div>
            <h4 className="footer-title">Контакты</h4>
            <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
            <p className="mt-5 text-white/35">© 2026 Extaz Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const rootElement = document.getElementById('root');
window.__extazRoot ||= createRoot(rootElement);
window.__extazRoot.render(<App />);
